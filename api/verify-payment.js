import crypto from "crypto";
import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, message: "Missing payment details" });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const a = Buffer.from(generatedSignature);
    const b = Buffer.from(String(razorpay_signature));

    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }

    // Payment is genuine. Save the booking (a failure here must not break the payment).
    try {
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });
      const [order, payment] = await Promise.all([
        razorpay.orders.fetch(razorpay_order_id),
        razorpay.payments.fetch(razorpay_payment_id),
      ]);

      await fetch(process.env.SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.SHEET_SECRET,
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
          ticket: order.notes?.ticket_type || "",
          day: order.notes?.day || "",
          quantity: order.notes?.quantity || "",
          amount: order.amount / 100,
          phone: payment.contact || "",
          email: payment.email || "",
        }),
      });
    } catch (sheetError) {
      console.error("Saving booking to sheet failed:", sheetError);
    }

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return res.status(500).json({ success: false, message: "Unable to verify payment" });
  }
}