import { useEffect, useState } from "react";
import "./App.css";

const MAPS_LINK = "https://maps.app.goo.gl/3JBjukHjNz1eUVvB6";

const tickets = [
  {
    id: "kids-1day",
    name: "Kids",
    subtitle: "5 years below • 1 Day",
    price: 99,
  },
  {
    id: "kids-2day",
    name: "Kids",
    subtitle: "5 years below • 2 Days",
    price: 149,
  },
  {
    id: "stag-1day",
    name: "Stag",
    subtitle: "1 Day",
    price: 499,
  },
  {
    id: "stag-2day",
    name: "Stag",
    subtitle: "2 Days",
    price: 899,
  },
  {
    id: "couple-1day",
    name: "Couple",
    subtitle: "1 Day",
    price: 799,
  },
  {
    id: "couple-2day",
    name: "Couple",
    subtitle: "2 Days",
    price: 1499,
  },
  {
    id: "group5-1day",
    name: "Group of 5",
    subtitle: "1 Day",
    price: 2450,
  },
  {
    id: "group5-2day",
    name: "Group of 5",
    subtitle: "2 Days",
    price: 4699,
  },
];

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

/* ---------------- HEADER ---------------- */

function Header({ booking = false }) {
  return (
    <header className="site-header">
      <a href="/" className="brand">
        <span className="brand-main">RAAS</span>
        <span className="brand-sub">GARBA X DANDIYA 2.0</span>
      </a>

      <nav className="desktop-nav">
        <a href="/#about">ABOUT</a>
        <a href="/#experience">EXPERIENCE</a>
        <a href="/#venue">VENUE</a>
        <a href="/#brands">BRANDS</a>
      </nav>

      {!booking ? (
        <a href="/book" className="header-ticket">
          BOOK A TICKET <span>↗</span>
        </a>
      ) : (
        <a href="/" className="header-ticket">
          HOME <span>↗</span>
        </a>
      )}

      <button className="menu-button" aria-label="Menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

/* ---------------- IMAGE ---------------- */

function Photo({ src, alt, className = "" }) {
  return (
    <div className={`photo ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

/* ---------------- DATE CARDS ---------------- */

function EventDates() {
  return (
    <section className="event-dates">
      <div className="date-card">
        <div className="date-number">16</div>
        <div>
          <strong>OCTOBER</strong>
          <span>DANDIYA NIGHT</span>
        </div>
      </div>

      <div className="date-card">
        <div className="date-number">17</div>
        <div>
          <strong>OCTOBER</strong>
          <span>BOLLYWOOD DJ NIGHT</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED BRANDS ---------------- */

function FeaturedBrands() {
  const brands = [
    { name: "WOW — Wardrobe Of Women", image: "/brands/wow.jpg" },
    { name: "Sam Mehendi Art", image: "/brands/sam.jpg" },
    { name: "MEDORA", image: "/brands/medora.jpg" },
    { name: "RAAS", image: "/brands/raas.jpg" },
    { name: "NANDI GARDEN", image: "/brands/nandi.jpg" },
  ];

  const repeated = [...brands, ...brands];

  return (
    <section className="brands-section" id="brands">
      <div className="section-label">FEATURED BRANDS</div>

      <div className="brand-marquee">
        <div className="brand-track">
          {repeated.map((brand, index) => (
            <div className="brand-pill" key={`${brand.name}-${index}`}>
              <div className="brand-logo">
                <img
                  src={brand.image}
                  alt={brand.name}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOME PAGE ---------------- */

function HomePage() {
  return (
    <div className="site">
      <Header />

      {/* HERO */}

      <main>
        <section className="hero">
          <Photo src="/hero.jpg" alt="Garba event" className="hero-photo" />

          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-small">SHRI NANDI GARDEN AND CLUBHOUSE</div>

            <h1>
              Vijayapura's
              <br />
              Biggest
              <br />
              <em>Garba Event</em>
            </h1>

            <p className="hero-description">
              Two unforgettable nights of Garba, Dandiya, music,
              celebration and memories.
            </p>

            <a href="/book" className="gold-button">
              BOOK A TICKET <span>↗</span>
            </a>
          </div>

          <div className="hero-bottom">
            <span>VIJAYAPURA, KARNATAKA</span>
            <span>OCTOBER 2026</span>
          </div>
        </section>

        {/* DATES */}

        <section className="dates-wrap">
          <EventDates />
        </section>

        {/* INTRO */}

        <section className="intro-section" id="about">
          <div className="presented-pill">
            SHRI NANDI GARDEN AND CLUBHOUSE PRESENTS
          </div>

          <div className="intro-heading">
            <span>RAAS</span>
            <strong>GARBA X DANDIYA 2.0</strong>
          </div>

          <div className="intro-grid">
            <div>
              <p className="eyebrow">IN COLLABORATION WITH</p>

              <h2>
                Where
                <br />
                <em>tradition</em>
                <br />
                meets celebration.
              </h2>
            </div>

            <div className="intro-copy">
              <p>
                Get ready for an unforgettable celebration of Garba,
                Dandiya and Bollywood music in the heart of Vijayapura.
              </p>

              <p>
                Experience vibrant colours, energetic music, delicious
                food and two spectacular nights designed for friends,
                families and dance lovers.
              </p>

              <a href="/book" className="text-link">
                GET YOUR TICKETS <span>↗</span>
              </a>
            </div>
          </div>

          <Photo
            src="/experience.jpg"
            alt="Garba celebration"
            className="wide-photo"
          />
        </section>

        {/* ORGANISERS */}

        <section className="organiser-section">
          <div className="organiser-box">
            <div>
              <span>ORGANISED BY</span>
              <strong>Akshata Nayak, Chinmayi & Ketan Dhumale</strong>
            </div>

            <div>
              <span>MANAGED BY</span>
              <strong>D Productions</strong>
            </div>
          </div>
        </section>

        {/* BRANDS */}

        <FeaturedBrands />

        {/* TICKER */}

        <div className="ticker">
          <div>
            GARBA • DANDIYA • MUSIC • CULTURE • CELEBRATION •
            GARBA • DANDIYA • MUSIC • CULTURE • CELEBRATION •
          </div>
        </div>

        {/* VENUE */}

        <section className="split-section" id="venue">
          <Photo src="/venue.jpg" alt="Nandi Garden venue" />

          <div className="split-content">
            <p className="eyebrow">THE VENUE</p>

            <h2>
              Shri Nandi
              <br />
              Garden &
              <br />
              <em>Clubhouse</em>
            </h2>

            <p>
              A premium celebration space designed to bring the energy
              of Garba and Dandiya to life.
            </p>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              VIEW LOCATION <span>↗</span>
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section className="experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">THE EXPERIENCE</p>
            <h2>
              More than
              <br />
              <em>just a night.</em>
            </h2>
          </div>

          <div className="experience-grid">
            <article>
              <Photo src="/garba.jpg" alt="Garba dancers" />
              <span>01</span>
              <h3>GARBA & DANDIYA</h3>
              <p>
                Celebrate the festival with music, movement and
                traditional energy.
              </p>
            </article>

            <article>
              <Photo src="/music.jpg" alt="DJ and music" />
              <span>02</span>
              <h3>MUSIC & DJ</h3>
              <p>
                Dance through the night with high-energy music and
                Bollywood beats.
              </p>
            </article>

            <article>
              <Photo src="/crowd.jpg" alt="Event crowd" />
              <span>03</span>
              <h3>THE CROWD</h3>
              <p>
                Bring your friends, family and your best Garba moves.
              </p>
            </article>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="final-cta">
          <Photo src="/final.jpg" alt="Dandiya night" />
          <div className="final-overlay" />

          <div className="final-content">
            <p>READY TO DANCE?</p>
            <h2>
              See you
              <br />
              on the
              <br />
              <em>dance floor.</em>
            </h2>

            <a href="/book" className="gold-button">
              BOOK A TICKET <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>RAAS</strong>
          <span>GARBA X DANDIYA 2.0</span>
        </div>

        <p>© 2026 RAAS GARBA X DANDIYA 2.0</p>

        <p>Powered by MEDORA</p>
      </footer>
    </div>
  );
}

/* ---------------- BOOKING PAGE ---------------- */

function BookingPage() {
  const [selectedTicket, setSelectedTicket] = useState(tickets[2]);
  const [quantity, setQuantity] = useState(1);
  const [selectedDay, setSelectedDay] = useState("16 OCTOBER");
  const [loading, setLoading] = useState(false);

  const total = selectedTicket.price * quantity;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeQuantity = (amount) => {
    setQuantity((current) => {
      const next = current + amount;

      if (next < 1) return 1;
      if (next > 10) return 10;

      return next;
    });
  };

  async function handlePayment() {
    try {
      setLoading(true);

      const loaded = await loadRazorpayScript();

      if (!loaded) {
        alert("Unable to load Razorpay. Please check your internet connection.");
        setLoading(false);
        return;
      }

      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ticketType: selectedTicket.id,
          quantity,
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok || !orderData.success) {
        throw new Error(
          orderData.message || "Unable to create payment order."
        );
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "RAAS GARBA X DANDIYA 2.0",
        description: `${selectedTicket.name} — ${selectedDay}`,
        order_id: orderData.orderId,

        handler: async function (response) {
          const verifyResponse = await fetch("/api/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyResponse.json();

          if (verifyResponse.ok && verifyData.success) {
            alert(
              `Payment successful!\nPayment ID: ${verifyData.paymentId}`
            );
          } else {
            alert("Payment completed but verification failed.");
          }
        },

        theme: {
          color: "#c7a45b",
        },

        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function () {
        alert("Payment failed. Please try again.");
        setLoading(false);
      });

      razorpay.open();
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="booking-page">
      <Header booking />

      <main>
        <section className="booking-hero">
          <div>
            <p className="eyebrow">RAAS GARBA X DANDIYA 2.0</p>

            <h1>
              Book your
              <br />
              <em>experience.</em>
            </h1>

            <p>
              Choose your ticket and get ready for Vijayapura's biggest
              Garba celebration.
            </p>
          </div>

          <Photo src="/booking.jpg" alt="Dandiya celebration" />
        </section>

        <section className="booking-layout">
          {/* LEFT */}

          <div className="booking-main">
            <div className="booking-section-head">
              <p className="eyebrow">01 — SELECT DATE</p>
              <h2>Choose your night</h2>
            </div>

            <div className="day-selector">
              <button
                className={selectedDay === "16 OCTOBER" ? "active" : ""}
                onClick={() => setSelectedDay("16 OCTOBER")}
              >
                <span>16</span>
                <small>OCTOBER</small>
                <strong>DANDIYA NIGHT</strong>
              </button>

              <button
                className={selectedDay === "17 OCTOBER" ? "active" : ""}
                onClick={() => setSelectedDay("17 OCTOBER")}
              >
                <span>17</span>
                <small>OCTOBER</small>
                <strong>BOLLYWOOD DJ NIGHT</strong>
              </button>
            </div>

            <div className="booking-section-head second">
              <p className="eyebrow">02 — SELECT TICKET</p>
              <h2>Choose your ticket</h2>
            </div>

            <div className="ticket-grid">
              {tickets.map((ticket) => (
                <button
                  key={ticket.id}
                  className={`ticket-card ${
                    selectedTicket.id === ticket.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTicket(ticket)}
                >
                  <span className="ticket-check">
                    {selectedTicket.id === ticket.id ? "✓" : ""}
                  </span>

                  <div>
                    <strong>{ticket.name}</strong>
                    <small>{ticket.subtitle}</small>
                  </div>

                  <b>₹{ticket.price.toLocaleString("en-IN")}</b>
                </button>
              ))}
            </div>

            <div className="booking-section-head second">
              <p className="eyebrow">03 — QUANTITY</p>
              <h2>How many tickets?</h2>
            </div>

            <div className="quantity-box">
              <button onClick={() => changeQuantity(-1)}>−</button>

              <div>
                <strong>{quantity}</strong>
                <span>TICKET{quantity > 1 ? "S" : ""}</span>
              </div>

              <button onClick={() => changeQuantity(1)}>+</button>
            </div>
          </div>

          {/* RIGHT */}

          <aside className="booking-summary">
            <div className="summary-top">
              <p className="eyebrow">YOUR BOOKING</p>

              <h3>{selectedTicket.name}</h3>

              <p>{selectedTicket.subtitle}</p>
            </div>

            <div className="summary-row">
              <span>DATE</span>
              <strong>{selectedDay}</strong>
            </div>

            <div className="summary-row">
              <span>PRICE</span>
              <strong>₹{selectedTicket.price.toLocaleString("en-IN")}</strong>
            </div>

            <div className="summary-row">
              <span>QUANTITY</span>
              <strong>{quantity}</strong>
            </div>

            <div className="summary-total">
              <span>TOTAL</span>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>

            <button
              className="payment-button"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "PROCESSING..." : "PROCEED TO PAY"}
              <span>↗</span>
            </button>

            <p className="secure-text">
              SECURE PAYMENT POWERED BY RAZORPAY
            </p>
          </aside>
        </section>

        {/* VENUE */}

        <section className="booking-venue">
          <div>
            <p className="eyebrow">EVENT VENUE</p>

            <h2>
              Shri Nandi
              <br />
              Garden &
              <br />
              <em>Clubhouse</em>
            </h2>

            <p>
              Vijayapura, Karnataka
              <br />
              India
            </p>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              GET DIRECTIONS <span>↗</span>
            </a>
          </div>

          <div className="qr-card">
            <img src="/venue-qr.png" alt="Venue QR code" />
            <span>SCAN FOR LOCATION</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>RAAS</strong>
          <span>GARBA X DANDIYA 2.0</span>
        </div>

        <p>© 2026 RAAS GARBA X DANDIYA 2.0</p>

        <p>Powered by MEDORA</p>
      </footer>
    </div>
  );
}

/* ---------------- APP ---------------- */

export default function App() {
  const isBookingPage = window.location.pathname.startsWith("/book");

  return isBookingPage ? <BookingPage /> : <HomePage />;
}