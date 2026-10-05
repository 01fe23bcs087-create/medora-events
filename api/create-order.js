import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Prices are in rupees. Must match the tickets list in src/App.jsx.
const tickets = {
  "kids-1day": {
    name: "Kids (below 5 years)",
    price: 0, // free, no payment needed
  },
  "stag-1day": {
    name: "Adult",
    price: 250,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { ticketType, quantity, day } = req.body;

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

    const ticket = tickets[ticketType];
    const totalAmount = ticket.price * qty;

    // Free tickets never go through Razorpay
    if (totalAmount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Free tickets do not need payment",
      });
    }

    const order = await razorpay.orders.create({
      amount: totalAmount * 100,
      currency: "INR",
      receipt: `medora_${Date.now()}`,
      notes: {
        ticket_type: ticket.name,
        quantity: String(qty),
        day: String(day || "").slice(0, 30),
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