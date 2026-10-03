import { useState } from "react";
import "./App.css";

const mapsLink =
  "https://maps.app.goo.gl/3JBjukHjNz1eUVvB6";

const tickets = [
  {
    name: "Kids (5 years below)",
    price: 99,
  },
  {
    name: "Kids (5 years below) — 2 Days",
    price: 149,
  },
  {
    name: "Stag",
    price: 499,
  },
  {
    name: "Stag — 2 Days",
    price: 899,
  },
  {
    name: "Couple",
    price: 799,
  },
  {
    name: "Couple — 2 Days",
    price: 1499,
  },
  {
    name: "Group of 5",
    price: 2450,
  },
  {
    name: "Group of 5 — 2 Days",
    price: 4699,
  },
];

/* =====================================================
   HEADER
===================================================== */

function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-logo">
        RAAS GARBA X <span>DANDIYA 2.0</span>
      </a>

      <div className="header-right">
        <a href="/book" className="header-book">
          BOOK A TICKET ↗
        </a>

        <div className="profile-circle">♟</div>
      </div>
    </header>
  );
}

/* =====================================================
   TICKER
===================================================== */

function Ticker({ reverse = false }) {
  return (
    <div className={`ticker ${reverse ? "ticker-reverse" : ""}`}>
      <div className="ticker-track">
        <span>17 OCT · BOLLYWOOD DJ NIGHT</span>
        <b>✦</b>

        <span>DRESS UP</span>
        <b>✦</b>

        <span>SHOW UP</span>
        <b>✦</b>

        <span>DANCE ALL NIGHT</span>
        <b>✦</b>

        <span>MAKE SOME NOISE</span>
        <b>✦</b>

        <span>RAAS GARBA X DANDIYA 2.0</span>
        <b>✦</b>

        <span>VIJAYAPURA LET'S DANDIYA</span>
        <b>✦</b>

        <span>16 OCT · DANDIYA NIGHT</span>
        <b>✦</b>

        <span>17 OCT · BOLLYWOOD DJ NIGHT</span>
        <b>✦</b>

        <span>DRESS UP</span>
        <b>✦</b>

        <span>SHOW UP</span>
        <b>✦</b>

        <span>DANCE ALL NIGHT</span>
        <b>✦</b>
      </div>
    </div>
  );
}

/* =====================================================
   HERO
===================================================== */

function Hero() {
  return (
    <section className="hero">

      <div className="hero-top-dates">

        <div className="hero-date-card">
          <small>16 OCTOBER</small>
          <strong>DANDIYA NIGHT</strong>
        </div>

        <div className="hero-date-card">
          <small>17 OCTOBER</small>
          <strong>BOLLYWOOD DJ NIGHT</strong>
        </div>

      </div>

      <div className="location-pill">
        <i></i>
        16–17 OCT · VIJAYAPURA
      </div>

      <div className="hero-placeholder">

        <div className="hero-glow"></div>

        <div className="hero-content">

          <div className="presented-pill">
            ✦ &nbsp; SHRI NANDI GARDEN AND CLUBHOUSE PRESENTS
          </div>

          <h1>
            Vijayapura's
            <br />
            Biggest <em>Garba</em> Event
          </h1>

          <p className="hero-collab">
            IN COLLABORATION WITH
          </p>

          <h3>
            RAAS GARBA X DANDIYA 2.0
          </h3>

          <div className="organiser-box">

            <div>
              <small>ORGANISED BY</small>

              <strong>
                Akshata Nayak, Chinmayi & Ketan Dhumale
              </strong>
            </div>

            <div className="organiser-divider"></div>

            <div>
              <small>MANAGED BY</small>

              <strong>D Productions</strong>
            </div>

          </div>

          <a href="/book" className="gold-button hero-button">
            BOOK A TICKET ↗
          </a>

        </div>

      </div>

    </section>
  );
}

/* =====================================================
   FEATURED BRANDS STRIP
   MOVES LEFT → RIGHT
===================================================== */

function FeaturedBrandsStrip() {

  const brands = [
    "Eco Design Infra Solutions",
    "D Production",
    "Shri Nandi Garden & Clubhouse",
    "clickitUp",
    "WOW – Wardrobe Of Women",
    "Sam Mehendi Art",
    "SBG Teddy Events",
  ];

  return (
    <section className="brands-strip">

      <div className="brands-strip-label">
        FEATURED BRANDS
      </div>

      <div className="brands-strip-window">

        <div className="brands-strip-track">

          {[...brands, ...brands].map((brand, index) => (

            <div
              className="brand-pill"
              key={`${brand}-${index}`}
            >

              <div
                className={`brand-pill-logo logo-${index % brands.length}`}
              >
                {index % brands.length === 1
                  ? "D"
                  : index % brands.length === 3
                  ? "clickitUp."
                  : index % brands.length === 4
                  ? "WOW"
                  : index % brands.length === 5
                  ? "SAM"
                  : index % brands.length === 6
                  ? "SBG"
                  : "✦"}
              </div>

              <strong>{brand}</strong>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

/* =====================================================
   LARGE FEATURED BRANDS
===================================================== */

function FeaturedBrands() {

  const brands = [
    "Eco Design Infra Solutions",
    "D Production",
    "Shri Nandi Garden & Clubhouse",
    "clickitUp",
    "WOW – Wardrobe Of Women",
    "Sam Mehendi Art",
    "SBG Teddy Events",
  ];

  return (
    <section className="brands-section">

      <div className="section-heading-row">

        <div>

          <p className="gold-label">
            THE BRANDS · THE CULTURE · THE NIGHT
          </p>

          <h2>
            Made for the
            <br />
            <em>brands people love.</em>
          </h2>

        </div>

        <p className="heading-description">
          The local names and creators helping bring
          <strong> RAAS GARBA X DANDIYA 2.0 </strong>
          to life in Vijayapura.
        </p>

      </div>

      <div className="brand-grid">

        {brands.map((brand, index) => (

          <div className="brand-card" key={brand}>

            <div className={`brand-placeholder brand-${index}`}>
              <span>
                {index === 1
                  ? "D"
                  : index === 3
                  ? "clickitUp."
                  : index === 4
                  ? "WOW"
                  : index === 5
                  ? "SAM"
                  : index === 6
                  ? "SBG"
                  : "✦"}
              </span>
            </div>

            <h3>{brand}</h3>

            <p>FEATURED BRAND</p>

          </div>

        ))}

      </div>

    </section>
  );
}

/* =====================================================
   VENUE
===================================================== */

function VenueSection() {
  return (
    <section className="venue-section">

      <div className="venue-copy">

        <p className="gold-label">
          THE PLACE TO BE
        </p>

        <div className="venue-mini">
          02 NIGHTS <span>✦</span> 01 ICONIC VENUE
        </div>

        <h2>
          See you in
          <br />
          <em>Vijayapura.</em>
        </h2>

        <p className="venue-description">
          RAAS GARBA X DANDIYA 2.0 is bringing two nights
          of music and celebration to{" "}
          <strong>Vijayapura.</strong>
        </p>

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="venue-card-home"
        >

          <div className="venue-icon">
            ⌖
          </div>

          <div>

            <small>VENUE</small>

            <strong>
              Shri Nandi Garden and Clubhouse
            </strong>

            <p>
              Vijayapura · Scan or Tap the QR for directions
            </p>

          </div>

          <div className="qr-placeholder">
            <span>QR</span>
          </div>

        </a>

        <div className="venue-stats">

          <div>
            <strong>16 OCT</strong>
            <small>DANDIYA NIGHT</small>
          </div>

          <div>
            <strong>17 OCT</strong>
            <small>BOLLYWOOD DJ NIGHT</small>
          </div>

          <div>
            <strong>5 PM+</strong>
            <small>DOORS OPEN</small>
          </div>

        </div>

      </div>

      <div className="venue-visual">

        <div className="visual-placeholder">

          <div className="visual-lines"></div>

          <div className="visual-text">

            <small>PREMIUM VENUE</small>

            <strong>VIJAYAPURA</strong>

            <span>
              THE VENUE · THE NIGHT · THE ENERGY
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =====================================================
   EXPERIENCE
===================================================== */

function ExperienceSection() {
  return (
    <section className="experience-section">

      <div className="experience-heading">

        <div>

          <h2>
            Come for the Dandiya.
            <br />
            <em>Stay for the madness.</em>
          </h2>

        </div>

        <p>
          RAAS GARBA X DANDIYA 2.0 is built to feel less
          like an event you attend and more like a night
          you remember.
        </p>

      </div>

      <div className="experience-grid">

        <div className="experience-large experience-placeholder-one">

          <div className="now-playing">
            ● NOW PLAYING
          </div>

          <div className="experience-bottom">

            <span>01</span>

            <div>
              <h3>Garba Energy</h3>
              <p>Music · Movement · Madness</p>
            </div>

          </div>

        </div>

        <div className="experience-wide experience-placeholder-two">

          <div className="experience-bottom">

            <span>02</span>

            <div>
              <h3>Dress Up, Show Up</h3>
              <p>Colour · Mirror work · Twirls</p>
            </div>

          </div>

        </div>

        <div className="experience-small experience-placeholder-three">

          <div className="experience-bottom">

            <span>03</span>

            <div>
              <h3>Dance All Night</h3>
              <p>DJ · Beats · Energy</p>
            </div>

          </div>

        </div>

        <div className="experience-small experience-placeholder-four">

          <div className="free-pill">
            ✦ FREE
          </div>

          <div className="experience-bottom">

            <span>04</span>

            <div>
              <h3>Traditional Vibes</h3>
              <p>Dandiya · Culture · Celebration</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =====================================================
   CELEBRITY
===================================================== */

function CelebritySection() {
  return (
    <section className="celebrity-section">

      <div className="celebrity-copy">

        <p className="gold-label">
          SOMETHING BIG IS COMING
        </p>

        <div className="celebrity-sub">
          SPECIAL GUEST <span>✦</span> BIG SURPRISE
        </div>

        <h2>
          Celebrity
          <br />
          <em>Moments.</em>
        </h2>

        <p>
          A special surprise is waiting for Vijayapura.
          Stay tuned for the big reveal.
        </p>

      </div>

      <div className="celebrity-placeholder">

        <div className="special-pill">
          SPECIAL GUEST
        </div>

        <div className="blur-person">
          <div className="head"></div>
          <div className="body"></div>
        </div>

        <div className="question-mark">
          ?
        </div>

      </div>

    </section>
  );
}

/* =====================================================
   FINAL CTA
===================================================== */

function FinalCTA() {
  return (
    <section className="final-section">

      <p className="gold-label">
        VIJAYAPURA, ARE YOU READY?
      </p>

      <h2>
        Your night.
        <br />
        <em>Your celebration.</em>
      </h2>

      <p>
        16 & 17 October 2026 · Shri Nandi Garden and Clubhouse
      </p>

      <a href="/book" className="gold-button">
        BOOK YOUR TICKET ↗
      </a>

    </section>
  );
}

/* =====================================================
   HOME PAGE
===================================================== */

function HomePage() {
  return (
    <div className="home-page">

      <Header />

      <main>

        <Hero />

        <Ticker />

        <FeaturedBrandsStrip />

        <FeaturedBrands />

        <Ticker reverse />

        <VenueSection />

        <Ticker />

        <ExperienceSection />

        <CelebritySection />

        <FinalCTA />

      </main>

      <footer className="site-footer">

        <span>
          RAAS GARBA X DANDIYA 2.0
        </span>

        <span>
          16 & 17 OCTOBER 2026
        </span>

        <span>
          VIJAYAPURA, KARNATAKA
        </span>

      </footer>

    </div>
  );
}

/* =====================================================
   BOOKING PAGE
===================================================== */

function BookingPage() {

  const [selectedDate, setSelectedDate] = useState("16");

  const [selectedTicket, setSelectedTicket] =
    useState(0);

  const [quantity, setQuantity] =
    useState(1);

  const total =
    tickets[selectedTicket].price * quantity;

  return (
    <div className="booking-page">

      <Header />

      <main className="booking-main">

        {/* ================================
            BOOKING HERO
        ================================= */}

        <section className="booking-hero">

          <div className="booking-pill">
            <span></span>
            Bookings open
          </div>

          <p className="gold-label">
            RAAS GARBA X DANDIYA 2.0 · BY AK
          </p>

          <h1>
            Vijayapura, Let's Dandiya!
          </h1>

          <h2>
            Where the city comes to celebrate
          </h2>

          <p>
            Music · Dandiya · DJ · Energy · Together
          </p>

          <div className="booking-nights">

            <div className="booking-night active">
              <small>16 OCTOBER</small>
              <strong>DANDIYA NIGHT</strong>
            </div>

            <div className="booking-night">
              <small>17 OCTOBER</small>
              <strong>BOLLYWOOD DJ NIGHT</strong>
            </div>

          </div>

          <div className="scroll-booking">
            SCROLL TO CHOOSE YOUR TICKETS ↓
          </div>

        </section>

        {/* ================================
            TICKET SECTION
        ================================= */}

        <section className="ticket-section">

          <p className="gold-label">
            YOUR NIGHT STARTS HERE
          </p>

          <h2>
            Pick your night.
          </h2>

          <p>
            Two nights. Different energy. Same Raas spirit.
          </p>

          <div className="ticket-card">

            {/* DATE */}

            <label>DATE</label>

            <div className="date-selector">

              <button
                type="button"
                className={
                  selectedDate === "16"
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setSelectedDate("16")
                }
              >
                Fri, 16 Oct
              </button>

              <button
                type="button"
                className={
                  selectedDate === "17"
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setSelectedDate("17")
                }
              >
                Sat, 17 Oct
              </button>

            </div>

            {/* TICKET */}

            <label>TICKET</label>

            <div className="ticket-options">

              {tickets.map((ticket, index) => (

                <button
                  type="button"
                  key={index}
                  className={`ticket-option ${
                    selectedTicket === index
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedTicket(index)
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

              ))}

            </div>

            {/* QUANTITY */}

            <label>QUANTITY</label>

            <select
              className="quantity-select"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Number(e.target.value)
                )
              }
            >

              {[1,2,3,4,5,6,7,8,9,10].map(
                (number) => (

                  <option
                    key={number}
                    value={number}
                  >
                    {number}
                  </option>

                )
              )}

            </select>

            {/* TOTAL */}

            <div className="total-row">

              <span>TOTAL</span>

              <strong>
                ₹{total.toLocaleString("en-IN")}
              </strong>

            </div>

            {/* PAYMENT */}

            <button
              className="pay-button"
              type="button"
              onClick={() =>
                alert(
                  "Razorpay payment integration will be connected here."
                )
              }
            >
              LOG IN & PAY
            </button>

            <p className="payment-note">
              Payments are securely processed by Razorpay.
            </p>

          </div>

        </section>

        {/* ================================
            VENUE
        ================================= */}

        <section className="booking-venue">

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="booking-venue-card"
          >

            <div>

              <small>EVENT TIMING</small>

              <strong>
                5:00 PM – 10:00 PM
              </strong>

              <small>VENUE</small>

              <strong>
                Shri Nandi Garden and Clubhouse
              </strong>

              <p>
                Vijayapura · Scan or Tap QR for directions
              </p>

            </div>

            <img
              src="/venue-qr.png"
              alt="Venue QR code"
            />

          </a>

          <p className="venue-hint">
            Tap anywhere on the venue box to open Google Maps
          </p>

        </section>

      </main>

      <footer className="site-footer">
        RAAS GARBA X DANDIYA 2.0 · 16 & 17 OCTOBER 2026
      </footer>

    </div>
  );
}

/* =====================================================
   PAGE ROUTING
===================================================== */

function App() {

  if (window.location.pathname === "/book") {
    return <BookingPage />;
  }

  return <HomePage />;
}

export default App;