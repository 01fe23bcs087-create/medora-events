import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const tickets = {
  "kids-1day": {
    name: "Kids (5 years below)",
    price: 99,
  },
  "kids-2day": {
    name: "Kids (5 years below) — 2 Days",
    price: 149,
  },
  "stag-1day": {
    name: "Stag",
    price: 499,
  },
  "stag-2day": {
    name: "Stag — 2 Days",
    price: 899,
  },
  "couple-1day": {
    name: "Couple",
    price: 799,
  },
  "couple-2day": {
    name: "Couple — 2 Days",
    price: 1499,
  },
  "group5-1day": {
    name: "Group of 5",
    price: 2450,
  },
  "group5-2day": {
    name: "Group of 5 — 2 Days",
    price: 4699,
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
};