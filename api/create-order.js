import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Prices are decided here on the server, never in the browser.
// Kids below 5 are free and never go through payment.
const tickets = {
  "kids-1day": { name: "Kids (below 5 years)", price: 0 },
  "stag-1day": { name: "Stag", price: 199 },
  "couple-1day": { name: "Couple", price: 399 },
  "group5-1day": { name: "Group of 5", price: 999 },
  "group10-1day": { name: "Group of 10", price: 1799 },
};


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { ticketType, quantity, day, name, phone } = req.body;

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
    const customerPhone = String(phone || "").replace(/\D/g, "").slice(-10);

    if (customerName.length < 2 || customerPhone.length !== 10) {
      return res.status(400).json({
        success: false,
        message: "Please enter your name and a valid 10-digit phone number",
      });
    }

    const ticket = tickets[ticketType];
    const totalAmount = ticket.price * qty;

    const order = await razorpay.orders.create({
      amount: totalAmount * 100,
      currency: "INR",
      receipt: `medora_${Date.now()}`,
      notes: {
        ticket_type: ticket.name,
        quantity: String(qty),
        day: String(day || "").slice(0, 30),
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