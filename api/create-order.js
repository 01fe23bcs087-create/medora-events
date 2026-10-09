import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


const tickets = {
  "kids-1day": { name: "Kids", price: 0 },
  "stag-1day": { name: "Adult", price: 199 },
  "Couple-1day": { name: "Couple", price: 399 },
  "Group of 5": { name: "Group of 5", price: 999 },
  "Group of 10": { name: "Group of 10", price: 1799 },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { ticketType, quantity, day, name, phone } = req.body || {};

    if (!ticketType || !tickets[ticketType]) {
      return res.status(400).json({
        success: false,
        message: "Invalid ticket type",
      });
    }

    const qty = Number(quantity);

    if (!Number.isInteger(qty) || qty < 1 || qty > 10) {
      return res.status(400).json({
        success: false,
        message: "Invalid quantity",
      });
    }

    const customerName = String(name || "").trim().slice(0, 60);
    const rawPhone = String(phone || "").replace(/\D/g, "");

    const customerPhone =
      rawPhone.length === 12 && rawPhone.startsWith("91")
        ? rawPhone.slice(2)
        : rawPhone;

    if (customerName.length < 2 || !/^[6-9]\d{9}$/.test(customerPhone)) {
      return res.status(400).json({
        success: false,
        message: "Enter your name and a valid Indian mobile number",
      });
    }

    const ticket = tickets[ticketType];

    // Free tickets need a separate booking flow.
    if (ticket.price === 0) {
      return res.status(400).json({
        success: false,
        message: "Free tickets must use the free booking flow",
      });
    }

    const totalAmount = ticket.price * qty;

    if (!day || !String(day).trim()) {
      return res.status(400).json({
        success: false,
        message: "Please select an event day",
      });
    }

    const order = await razorpay.orders.create({
      amount: totalAmount * 100,
      currency: "INR",
      receipt: `medora_${Date.now()}`,
      notes: {
        ticket_type: ticket.name,
        quantity: String(qty),
        day: String(day).slice(0, 30),
        customer_name: customerName,
        customer_phone: customerPhone,
      },
    });

    return res.status(200).json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create payment order",
    });
  }
}