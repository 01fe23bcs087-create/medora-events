import { useEffect, useState } from "react";

const mapsLink =
  "https://maps.app.goo.gl/3JBjukHjNz1eUVvB6";

const tickets = [
  {
    id: "kids-1day",
    name: "Kids (5 years below)",
    price: 99,
  },
  {
    id: "kids-2day",
    name: "Kids (5 years below) — 2 Days",
    price: 149,
  },
  {
    id: "stag-1day",
    name: "Stag",
    price: 499,
  },
  {
    id: "stag-2day",
    name: "Stag — 2 Days",
    price: 899,
  },
  {
    id: "couple-1day",
    name: "Couple",
    price: 799,
  },
  {
    id: "couple-2day",
    name: "Couple — 2 Days",
    price: 1499,
  },
  {
    id: "group5-1day",
    name: "Group of 5",
    price: 2450,
  },
  {
    id: "group5-2day",
    name: "Group of 5 — 2 Days",
    price: 4699,
  },
];

/* --------------------------------
   RAZORPAY SCRIPT
-------------------------------- */

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
}

/* --------------------------------
   HEADER
-------------------------------- */

function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-logo">
        RAAS GARBA X DANDIYA 2.0
      </a>

      <nav className="header-nav">
        <a href="/book" className="header-book-button">
          BOOK A TICKET ↗
        </a>

        <div className="profile-circle">SK</div>
      </nav>
    </header>
  );
}

/* --------------------------------
   TICKER
-------------------------------- */

function Ticker({ children, reverse = false }) {
  return (
    <div
      className={`ticker ${
        reverse ? "ticker-reverse" : ""
      }`}
    >
      <div className="ticker-track">
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}

/* --------------------------------
   HOME PAGE
-------------------------------- */

function HomePage() {
  const brands = [
    "MEDORA",
    "RAAS",
    "GARBA",
    "DANDIYA",
    "VIJAYAPURA",
    "NANDI GARDEN",
  ];

  return (
    <div className="site-page">
      <Header />

      {/* HERO */}

      <main>
        <section className="hero-section">
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="hero-content">
            <p className="eyebrow">VIJAYAPURA • 2026</p>

            <h1>
              Vijayapura’s
              <br />
              <span>Biggest Garba</span>
              <br />
              Event
            </h1>

            <p className="hero-description">
              Two unforgettable nights of Garba, Dandiya,
              music, lights and celebration.
            </p>

            <div className="hero-date-row">
              <div className="date-pill">
                <small>DATE</small>
                <strong>16 OCTOBER</strong>
              </div>

              <div className="date-pill">
                <small>DATE</small>
                <strong>17 OCTOBER</strong>
              </div>
            </div>

            <div className="hero-info">
              <div>
                <span>ORGANISED BY</span>
                <strong>RAAS DANDIYA</strong>
              </div>

              <div>
                <span>VENUE</span>
                <strong>NANDI GARDAN</strong>
              </div>
            </div>

            <a href="/book" className="gold-button">
              BOOK YOUR TICKET ↗
            </a>
          </div>
        </section>

        {/* BRAND TICKER */}

        <Ticker reverse>
          MEDORA • RAAS DANDIYA • GARBA • VIJAYAPURA •
        </Ticker>

        {/* FEATURED BRANDS */}

        <section className="brands-section">
          <div className="section-heading">
            <p className="eyebrow">PARTNERS & COLLABORATORS</p>

            <h2>
              Featured
              <br />
              <span>Brands</span>
            </h2>
          </div>

          <div className="brands-moving-wrapper">
            <div className="brands-moving-track">
              {[...brands, ...brands].map(
                (brand, index) => (
                  <div
                    className="brand-placeholder"
                    key={`${brand}-${index}`}
                  >
                    {brand}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* VENUE */}

        <section className="venue-section">
          <div className="venue-copy">
            <p className="eyebrow">THE VENUE</p>

            <h2>
              Celebrate
              <br />
              <span>Under The Lights.</span>
            </h2>

            <p>
              Get ready for an energetic night of Garba
              and Dandiya at one of Vijayapura’s
              celebration spaces.
            </p>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              OPEN IN GOOGLE MAPS ↗
            </a>
          </div>

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="venue-placeholder"
          >
            <div className="venue-placeholder-inner">
              <span>NANDI GARDEN</span>
              <strong>VIJAYAPURA</strong>
            </div>
          </a>
        </section>

        <Ticker>
          DANCE • MUSIC • GARBA • DANDIYA • CELEBRATION •
        </Ticker>

        {/* EXPERIENCE */}

        <section className="experience-section">
          <div className="section-heading centered">
            <p className="eyebrow">THE EXPERIENCE</p>

            <h2>
              Made for the
              <br />
              <span>people who love it.</span>
            </h2>
          </div>

          <div className="experience-grid">
            <div className="experience-card experience-card-large">
              <div className="experience-number">01</div>
              <div>
                <p>GARBA</p>
                <h3>Dance all night.</h3>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-number">02</div>
              <div>
                <p>DANDIYA</p>
                <h3>Feel the rhythm.</h3>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-number">03</div>
              <div>
                <p>MUSIC</p>
                <h3>Live the moment.</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CELEBRITY */}

        <section className="celebrity-section">
          <div className="celebrity-placeholder">
            <div className="celebrity-silhouette">
              ★
            </div>
          </div>

          <div className="celebrity-copy">
            <p className="eyebrow">SPECIAL EXPERIENCE</p>

            <h2>
              A night
              <br />
              <span>to remember.</span>
            </h2>

            <p>
              Music, lights, dance and an atmosphere
              designed to keep Vijayapura celebrating.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="final-cta">
          <p className="eyebrow">READY?</p>

          <h2>
            Let's
            <br />
            <span>Dance.</span>
          </h2>

          <a href="/book" className="gold-button">
            BOOK YOUR TICKET ↗
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>RAAS GARBA X DANDIYA 2.0</strong>
          <span>VIJAYAPURA</span>
        </div>

        <div>
          © 2026 RAAS DANDIYA
        </div>
      </footer>
    </div>
  );
}

/* --------------------------------
   BOOKING PAGE
-------------------------------- */

function BookingPage() {
  const [selectedDate, setSelectedDate] =
    useState("2026-10-16");

  const [selectedTicket, setSelectedTicket] =
    useState(0);

  const [quantity, setQuantity] =
    useState(1);

  const [loading, setLoading] =
    useState(false);

  const [paymentStatus, setPaymentStatus] =
    useState(null);

  const selectedTicketData =
    tickets[selectedTicket];

  const total =
    selectedTicketData.price * quantity;

  useEffect(() => {
    loadRazorpayScript();
  }, []);

  /* --------------------------------
     PAYMENT
  -------------------------------- */

  async function handlePayment() {
    if (loading) return;

    setPaymentStatus(null);
    setLoading(true);

    try {
      /* Load Razorpay */

      const razorpayLoaded =
        await loadRazorpayScript();

      if (!razorpayLoaded) {
        throw new Error(
          "Razorpay Checkout could not be loaded."
        );
      }

      /* Create order */

      const orderResponse =
        await fetch("/api/create-order", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ticketType:
              selectedTicketData.id,

            quantity,
          }),
        });

      const orderData =
        await orderResponse.json();

      if (
        !orderResponse.ok ||
        !orderData.success
      ) {
        throw new Error(
          orderData.message ||
            "Unable to create payment order."
        );
      }

      /* Razorpay Checkout */

      const options = {
        key: orderData.keyId,

        amount: orderData.amount,

        currency:
          orderData.currency || "INR",

        name:
          "RAAS GARBA X DANDIYA 2.0",

        description:
          selectedTicketData.name,

        order_id:
          orderData.orderId,

        theme: {
          color: "#e5b942",
        },

        handler: async function (
          response
        ) {
          try {
            /* Verify payment */

            const verifyResponse =
              await fetch(
                "/api/verify-payment",
                {
                  method: "POST",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body: JSON.stringify({
                    razorpay_order_id:
                      response.razorpay_order_id,

                    razorpay_payment_id:
                      response.razorpay_payment_id,

                    razorpay_signature:
                      response.razorpay_signature,
                  }),
                }
              );

            const verifyData =
              await verifyResponse.json();

            if (
              !verifyResponse.ok ||
              !verifyData.success
            ) {
              throw new Error(
                verifyData.message ||
                  "Payment verification failed."
              );
            }

            setPaymentStatus({
              type: "success",
              message:
                "Payment verified successfully!",
              paymentId:
                verifyData.paymentId,
              orderId:
                verifyData.orderId,
            });
          } catch (error) {
            console.error(
              "Verification error:",
              error
            );

            setPaymentStatus({
              type: "error",
              message:
                error.message ||
                "Payment verification failed.",
            });
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            setLoading(false);

            setPaymentStatus({
              type: "cancelled",
              message:
                "Payment window was closed.",
            });
          },
        },
      };

      const paymentObject =
        new window.Razorpay(options);

      paymentObject.on(
        "payment.failed",
        function (response) {
          console.error(
            "Razorpay payment failed:",
            response.error
          );

          setPaymentStatus({
            type: "error",
            message:
              response.error?.description ||
              "Payment failed.",
          });

          setLoading(false);
        }
      );

      paymentObject.open();
    } catch (error) {
      console.error(
        "Payment error:",
        error
      );

      setPaymentStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong.",
      });

      setLoading(false);
    }
  }

  return (
    <div className="site-page booking-page">
      <Header />

      <main>
        {/* BOOKING HERO */}

        <section className="booking-hero">
          <div>
            <p className="eyebrow">
              RAAS GARBA X DANDIYA 2.0
            </p>

            <h1>
              Book Your
              <br />
              <span>Ticket.</span>
            </h1>

            <p>
              Choose your date, ticket and quantity.
            </p>
          </div>
        </section>

        {/* BOOKING CONTENT */}

        <section className="booking-section">
          <div className="booking-container">

            {/* DATE */}

            <div className="booking-block">
              <div className="booking-label">
                DATE
              </div>

              <div className="date-selector">
                <button
                  type="button"
                  className={
                    selectedDate ===
                    "2026-10-16"
                      ? "date-select selected"
                      : "date-select"
                  }
                  onClick={() =>
                    setSelectedDate(
                      "2026-10-16"
                    )
                  }
                >
                  <span>
                    16 OCT
                  </span>

                  <small>
                    FRIDAY
                  </small>
                </button>

                <button
                  type="button"
                  className={
                    selectedDate ===
                    "2026-10-17"
                      ? "date-select selected"
                      : "date-select"
                  }
                  onClick={() =>
                    setSelectedDate(
                      "2026-10-17"
                    )
                  }
                >
                  <span>
                    17 OCT
                  </span>

                  <small>
                    SATURDAY
                  </small>
                </button>
              </div>
            </div>

            {/* TICKETS */}

            <div className="booking-block">
              <div className="booking-label">
                TICKET
              </div>

              <div className="ticket-list">
                {tickets.map(
                  (ticket, index) => (
                    <button
                      type="button"
                      key={ticket.id}
                      className={`ticket-option ${
                        selectedTicket ===
                        index
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedTicket(
                          index
                        )
                      }
                    >
                      <span className="ticket-name">
                        {ticket.name}
                      </span>

                      <span className="ticket-price">
                        ₹
                        {ticket.price.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>

            {/* QUANTITY */}

            <div className="booking-bottom-row">
              <div className="quantity-area">
                <div className="booking-label">
                  QUANTITY
                </div>

                <select
                  className="quantity-select"
                  value={quantity}
                  onChange={(event) =>
                    setQuantity(
                      Number(
                        event.target.value
                      )
                    )
                  }
                >
                  {[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                  ].map((number) => (
                    <option
                      value={number}
                      key={number}
                    >
                      {number}
                    </option>
                  ))}
                </select>
              </div>

              <div className="total-area">
                <span>TOTAL</span>

                <strong>
                  ₹
                  {total.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>
            </div>

            {/* PAYMENT BUTTON */}

            <button
              type="button"
              className="payment-button"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading
                ? "PROCESSING..."
                : "LOG IN & PAY ↗"}
            </button>

            {/* PAYMENT STATUS */}

            {paymentStatus && (
              <div
                className={`payment-status ${paymentStatus.type}`}
              >
                <strong>
                  {paymentStatus.message}
                </strong>

                {paymentStatus.paymentId && (
                  <div>
                    Payment ID:{" "}
                    {paymentStatus.paymentId}
                  </div>
                )}

                {paymentStatus.orderId && (
                  <div>
                    Order ID:{" "}
                    {paymentStatus.orderId}
                  </div>
                )}
              </div>
            )}

            {/* VENUE */}

            <div className="booking-venue">
              <div className="booking-venue-info">
                <p className="eyebrow">
                  VENUE
                </p>

                <h2>
                  Nandi Garden
                </h2>

                <p>
                  Vijayapura,
                  Karnataka
                </p>

                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  OPEN GOOGLE MAPS ↗
                </a>
              </div>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="booking-venue-card"
              >
                <img
                  src="/venue-qr.png"
                  alt="Venue QR code"
                />

                <span>
                  SCAN TO VIEW VENUE
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>
            RAAS GARBA X DANDIYA 2.0
          </strong>

          <span>
            VIJAYAPURA
          </span>
        </div>

        <div>
          © 2026 RAAS DANDIYA
        </div>
      </footer>
    </div>
  );
}

/* --------------------------------
   APP ROUTING
-------------------------------- */

function App() {
  const path =
    window.location.pathname;

  if (path === "/book") {
    return <BookingPage />;
  }

  return <HomePage />;
}

export default App;