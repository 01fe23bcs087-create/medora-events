import { useEffect, useState } from "react";
import "./App.css";
import "./theme.css";
import Ticket from "./Ticket";
import shubhamLogo from "./shubham.jpeg";
import dproductionsLogo from "./dproductions.jpeg";
import medoraLogo from "./medora.jpeg";
import mpLogo from "./MP.jpeg";
import { Analytics } from '@vercel/analytics/react';

const MAPS_LINK = "https://share.google/HECnqFolBTaq0xffU";

const VENUE_NAME = "Shri Adrusht Laxmi Temple";
const VENUE_ADDRESS = "Gayang Bowdi, Shastri Nagar, Vijayapura";

const CONTACT_PHONE = "+91 7483543848";
const CONTACT_EMAIL = "medoravijayapura@gmail.com";
const WHATSAPP_NUMBER = "+91 7483543848";
// One night only. Ids match /api/create-order.
const tickets = [
  { id: "kids-1day", name: "Kids", subtitle: "Below 5 years", price: 0 },
  { id: "stag-1day", name: "Adult", subtitle: "Entry", price: 199 },
  { id: "Couple-1day", name: "Adult", subtitle: "Entry", price: 399 },
  { id: "Group of 5", name: "Group of 5", subtitle: "Entry", price: 999 },
  { id: "Group of 10", name: "Group of 10", subtitle: "Entry", price: 1799 },



];

const brands = [
  {
    name: "Jawa Yezdi Motorcycles - Shubham Auto Point",
    image: shubhamLogo,
    instagram: "https://www.instagram.com/shubhamautopoint/",
  },
  {
    name: "D Productions",
    image: dproductionsLogo,
    instagram: "https://www.instagram.com/d_production_0007/",
  },
  {
    name: "MEDORA - House of Digital Media",
    image: medoraLogo,
    role: "Digital Media & Website Partner · Bijapur",
    instagram: "https://www.instagram.com/medora.vijayapura/",
  },
    {
    name: "MONESH PHOTOGRAPHY",
    image: mpLogo,
    role: "CHANGE ROLE, e.g. Associate Sponsor",
    instagram: "https://www.instagram.com/mounesh__photography",
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
const headerPartners = [
  {
    role: "Title Sponsor",
    name: "Jawa Yezdi Motorcycles - Shubham Auto Point",
    image: brands[0].image,
    instagram: brands[0].instagram,
  },
  {
    role: "Digital Media Partner & Website by",
    name: "MEDORA - House of Digital Media",
    image: brands[2].image,
    instagram: brands[2].instagram,
  },
  {
    role: "Organised by",
    name: "D Productions",
    image: brands[1].image,
    instagram: brands[1].instagram,
  },
    {
    role: "PHOTOGRAPHY PATNER",
    name: "mounesh__photography",
    image: brands[3].image,
    instagram: brands[3].instagram,
  },
];

function PartnerRotator() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setI((n) => (n + 1) % headerPartners.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const p = headerPartners[i];
  return (
    <a key={i} className="header-partner" href={p.instagram} target="_blank" rel="noreferrer">
      <img src={p.image} alt={p.name} />
      <div className="hp-text">
        <small>{p.role}</small>
        <strong>{p.name}</strong>
      </div>
    </a>
  );
}function Header({ booking = false }) {
  return (
    <header className="site-header">
      <div className="header-left">
        <a href="/" className="brand">
          <span className="brand-main">DANDIYA NIGHT 2.0</span>
        </a>
        <PartnerRotator />
      </div>
      <div className="header-actions">
        {!booking && (
          <a href="/book" className="header-ticket">
            BOOK A TICKET
          </a>
        )}
        <button className="menu-button" aria-label="Account">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4.5" /><path d="M3.5 21c.8-4.6 4.2-7 8.5-7s7.7 2.4 8.5 7z" /></svg>
        </button>
      </div>
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

/* ---------------- FEATURED BRANDS (pill marquee) ---------------- */

function FeaturedBrands() {
  return (
    <section className="brands-section" id="brands">
      <div className="brands-title">FEATURED BRANDS</div>
      <div className="brands-marquee">
        <div className="brands-track">
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <a
              className="brand-pill"
              key={`${brand.name}-${index}`}
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <div className="brand-logo">
                <img src={brand.image} alt={brand.name} />
              </div>
              <span>{brand.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS SHOWCASE ---------------- */

function PartnersShowcase() {
  return (
    <section className="final-partners-showcase">
      <style>{`
        .final-partners-showcase { position: relative; overflow: hidden; padding: 110px 5vw 0; background: radial-gradient(circle at 18% 42%, rgba(92,24,52,.42), transparent 38%), radial-gradient(circle at 88% 38%, rgba(69,27,98,.28), transparent 34%), #080708; color:#f5efe7; }
        .final-partners-head { max-width:1100px; margin:0 auto 54px; }
        .final-partners-kicker { margin:0 0 28px; color:#e1c06f; font:700 13px/1.2 Arial,Helvetica,sans-serif; letter-spacing:3px; text-transform:uppercase; }
        .final-partners-head h2 { margin:0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(58px,7vw,100px); font-weight:400; line-height:.9; letter-spacing:-4px; }
        .final-partners-head h2 em { color:#e1b95d; font-style:normal; }
        .final-partners-description { max-width:560px; margin:30px 0 0; color:#a8a0a0; font:500 18px/1.7 Arial,Helvetica,sans-serif; }
        .final-partners-grid { max-width:1100px; margin:0 auto; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; align-items:start; }
        .final-partner-card { min-height:320px; padding:14px 14px 24px; border:1px solid rgba(255,255,255,.14); border-radius:28px; background:linear-gradient(145deg,rgba(255,255,255,.05),rgba(35,12,27,.72)); box-shadow:inset 0 0 0 1px rgba(255,255,255,.025),0 25px 70px rgba(0,0,0,.2); text-align:center; }
        .final-partner-card:nth-child(7) { grid-column:2; }
        .final-partner-image { width:100%; height:174px; border-radius:22px; overflow:hidden; background:#0b090b; }
        .final-partner-image img { width:100%; height:100%; display:block; object-fit:contain; }
        .final-partner-name { margin:24px 8px 10px; color:#f6f0e8; font:700 22px/1.15 Arial,Helvetica,sans-serif; }
        .final-partner-label { color:#e2c477; font:700 12px/1.2 Arial,Helvetica,sans-serif; letter-spacing:3px; text-transform:uppercase; }
        .final-partners-thanks { display:flex; align-items:center; justify-content:center; gap:24px; padding:76px 0 92px; color:#827b80; font:700 14px/1.2 Arial,Helvetica,sans-serif; letter-spacing:4px; text-transform:uppercase; }
        .final-partners-thanks span { color:#e2c477; font-size:18px; }
        @media (max-width:800px) { .final-partners-showcase{padding:80px 24px 0}.final-partners-head h2{font-size:clamp(48px,12vw,72px);letter-spacing:-2px}.final-partners-grid{grid-template-columns:1fr}.final-partner-card:nth-child(7){grid-column:auto}.final-partners-thanks{padding:58px 0 70px;gap:14px;font-size:11px;letter-spacing:2.5px}.final-partners-footer{margin:0 -24px;font-size:11px} }
      `}</style>
      <div className="final-partners-head">
        <p className="final-partners-kicker">THE BRANDS · THE CULTURE · THE NIGHT</p>
        <h2>Made for the<br /><em>brands people love.</em></h2>
        <p className="final-partners-description">
          The local names and creators helping bring <strong>DANDIYA NIGHT 2.0</strong> to life in Vijayapura.
        </p>
      </div>
      <div className="final-partners-grid">
        {brands.map((brand) => (
          <a
            className="final-partner-card"
            key={brand.name}
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            style={{ display: "block", textDecoration: "none", cursor: "pointer" }}
          >
            <div className="final-partner-image"><img src={brand.image} alt={brand.name} /></div>
            <div className="final-partner-name">{brand.name}</div>
            <div className="final-partner-label">{brand.role || "Featured Brand"}</div>
          </a>
        ))}
      </div>
      <div className="final-partners-thanks"><span>✦</span>THANK YOU TO OUR PARTNERS<span>✦</span></div>
      <div className="final-partners-footer">DANDIYA NIGHT 2.0 · 16 OCTOBER 2026</div>
    </section>
  );
}

/* ---------------- NEW THEME SECTIONS ---------------- */

function Highlights() {
  const items = [
    ["📅", "16 October", "Dandiya Night 2.0"],
    ["📍", VENUE_NAME, "Vijayapura"],
    ["🎶", "Live Music & DJ", "Dandiya all night"],
    ["🕔", "Doors open 5 PM", "Till 10 PM"],
  ];
  return (
    <section className="th-section">
      <div className="th-grid">
        {items.map(([icon, title, sub]) => (
          <div className="th-info" key={title}>
            <div className="th-icon">{icon}</div>
            <div><strong>{title}</strong><span>{sub}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const rows = [
    ["PHONE", CONTACT_PHONE, `tel:${CONTACT_PHONE.replace(/\s/g, "")}`],
    ["EMAIL", CONTACT_EMAIL, `mailto:${CONTACT_EMAIL}`],
    ["VENUE", `${VENUE_NAME}, ${VENUE_ADDRESS}`, MAPS_LINK],
  ];
  return (
    <section className="th-section th-contact">
      <p className="th-kicker">✦ CONTACT ✦</p>
      <h2>We're Here to Help</h2>
      <p className="th-lead">Reach out for passes, venue details, group bookings, or any event support.</p>
      <div className="th-card">
        <h3>Get in Touch</h3>
        <p>Our team replies quickly. Reach us directly for the fastest answer.</p>
        {rows.map(([label, value, href]) => (
          <a className="th-row" href={href} key={label} target={label === "VENUE" ? "_blank" : undefined} rel="noreferrer">
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a className="th-wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">💬</a>
  );
}

/* ---------------- HOME PAGE ---------------- */

function HomePage() {
  return (
    <div className="site">
      <Header />

      <main>
        {/* HERO */}
        <section className="hero">
          <Photo src="/hero.png" alt="Garba event" className="hero-photo" />
          <div className="hero-overlay" />

          <div className="hero-top-dates" style={{ display: "flex", justifyContent: "center" }}>
            <div className="hero-date-card">
              <small>16 OCTOBER</small>
              <strong>DANDIYA NIGHT</strong>
            </div>
          </div>

          <div className="hero-location-pill"><i /> 16 OCT · VIJAYAPURA</div>

          <div className="hero-content">
            <div className="presented-pill">
              ✦ JAWA YEZDI MOTORCYCLES - SHUBHAM AUTO POINT PRESENTS
            </div>
            <h1>Vijayapura's Biggest Dandiya Night</h1>
            <div className="hero-collab">IN COLLABORATION WITH</div>
            <h3>DANDIYA NIGHT 2.0</h3>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
              <div className="organiser-box">
                <div>
                  <small>ORGANISED &amp; MANAGED BY</small>
                  <strong>D Productions</strong>
                </div>
              </div>

                        <a href="/book" className="gold-button hero-button">
                BOOK A TICKET <span>↗</span>
              </a>
            </div>
          </div>

          <Highlights />
        </section>

        {/* TICKER + FEATURED BRANDS */}

        {/* EVENT INFO CARDS */}
  
        

        {/* TICKER + FEATURED BRANDS */}
        <section className="part3-section">
          <div className="ticker">
            <div className="ticker-track">
              {[0, 1, 2, 3].map((n) => (
                <span key={n}>
                  LIVE MUSIC ✦ FOOD ✦ JAWA YEZDI MOTORCYCLES - SHUBHAM AUTO POINT PRESENTS DANDIYA NIGHT 2.0 ✦ DOORS OPEN 5 PM ✦
                </span>
              ))}
            </div>
          </div>

          <section className="part3-brands">
            <div className="part3-brands-label">FEATURED BRANDS</div>
            <div className="part3-brands-content">
              <FeaturedBrands />
            </div>
          </section>
        </section>

        {/* VENUE */}
        <section className="home-venue-section">
          <div className="home-venue-copy">
            <p className="home-venue-kicker">THE NIGHT AWAITS</p>
<div className="home-venue-sub">01 NIGHT</div>
<h2>
  Step into the
  <br />
  <em>Dandiya Night.</em>
</h2>
<p className="home-venue-description">
  An evening of vibrant beats, endless energy, and unforgettable celebrations in Vijayapura.
</p>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="home-venue-card"
              aria-label={`Open ${VENUE_NAME} in Google Maps`}
            >
              <div className="home-venue-icon">✥</div>
              <div className="home-venue-info">
                <span>VENUE</span>
                <strong>{VENUE_NAME}</strong>
                <small>{VENUE_ADDRESS} · Scan or Tap the QR for directions</small>
              </div>
              <div className="home-venue-qr">
                <img src="/venue-qr.png" alt="Venue QR code" />
              </div>
            </a>

            <div className="home-venue-stats">
              <div><strong>16 OCT</strong><span>DANDIYA NIGHT</span></div>
              <div><strong>5 PM+</strong><span>DOORS OPEN</span></div>
            </div>
          </div>

          <div className="home-venue-visual">
            <div className="home-venue-visual-inner">
              <div className="home-venue-name">{VENUE_NAME}</div>
              <div className="home-venue-placeholder"><span>✦</span></div>
              <div className="home-venue-bottom">
                <strong>VIJAYAPURA</strong>
                <span>THE VENUE · THE NIGHT · THE ENERGY</span>
              </div>
            </div>
          </div>
        </section>

{/* BRANDS GRID + THANK YOU + FOOTER LINE */}
<PartnersShowcase />

{/* CONTACT */}
<Contact />


     
     {/* FOOTER */}
<footer className="site-footer">DANDIYA NIGHT 2.0 · 16 OCTOBER 2026</footer>
</main>

      <WhatsAppButton />
    </div>
  );
}

/* ---------------- BOOKING PAGE ---------------- */

const tickets = [
  { id: "kids-1day", name: "Kids", subtitle: "Below 5 years", price: 0 },
  { id: "stag-1day", name: "Stag", subtitle: "Entry for one", price: 199 },
  { id: "couple-1day", name: "Couple", subtitle: "Entry for two", price: 399 },
  { id: "group5-1day", name: "Group of 5", subtitle: "Entry for five", price: 999 },
  { id: "group10-1day", name: "Group of 10", subtitle: "Entry for ten", price: 1799 },
];

function BookingPage() {
  const [selectedTicket, setSelectedTicket] = useState(tickets[1]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
    const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [ticket, setTicket] = useState(null);

  const dayLabel = "16 OCTOBER";
  const total = selectedTicket.price * quantity;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handlePayment() {
        const phoneDigits = customerPhone.replace(/\D/g, "").slice(-10);
    if (customerName.trim().length < 2) {
      alert("Please enter your name.");
      return;
    }
    if (phoneDigits.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    // Free tickets (kids below 5) need no payment
    if (total === 0) {
      alert(`Free entry confirmed for ${quantity} kid(s) below 5 years. See you on ${dayLabel}!`);
      return;
    }

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketType: selectedTicket.id,
          quantity,
          day: dayLabel,
                    name: customerName.trim(),
          phone: phoneDigits,
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok || !orderData.success) {
        throw new Error(orderData.message || "Unable to create payment order.");
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "DANDIYA NIGHT 2.0",
        description: `${selectedTicket.name} — ${dayLabel}`,
        order_id: orderData.orderId,
                prefill: { name: customerName.trim(), contact: phoneDigits },

        handler: async function (response) {
          try {
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const verifyData = await verifyResponse.json();

            if (verifyResponse.ok && verifyData.success) {
              setTicket(
                verifyData.ticket || {
                  paymentId: verifyData.paymentId,
                  name: customerName.trim(),
                  ticketName: selectedTicket.name,
                  quantity,
                  amount: total,
                  emailed: false,
                }
              );            } else {
              alert("Payment completed but verification failed.");
            }
          } catch (error) {
            console.error(error);
            alert("Payment completed but verification failed.");
          } finally {
            setLoading(false);
          }
        },

        theme: { color: "#f5a623" },

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
            {ticket && (
        <Ticket
          ticket={ticket}
          venue={VENUE_NAME}
          address={VENUE_ADDRESS}
          onClose={() => setTicket(null)}
        />
      )}
      <Header booking />

      <main>
        <section className="bk-hero">
          <span className="bk-live"><i /> Bookings open</span>
          <p className="bk-kicker">DANDIYA NIGHT 2.0 · BY D PRODUCTIONS</p>
          <h1>Vijayapura's Biggest Dandiya Night</h1>
          <p className="bk-tagline">Where the city comes to celebrate</p>
          <p className="bk-sub">Live Music · Dandiya · DJ</p>

          <div className="bk-nights">
            <div className="bk-night">
              <small>16 OCTOBER</small>
              <strong>DANDIYA NIGHT</strong>
            </div>
          </div>

          <a href="#tickets" className="bk-scroll">SCROLL TO CHOOSE YOUR TICKETS ↓</a>
        </section>

        <section className="bk-section" id="tickets">
          <p className="bk-kicker">YOUR NIGHT STARTS HERE</p>
          <h2>Book your night.</h2>
          <p className="bk-sub">One night. Pure Raas spirit.</p>

          <div className="bk-card">
                        <p className="bk-label">YOUR DETAILS</p>
            <input
              className="bk-select"
              placeholder="Full name"
              autoComplete="name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              className="bk-select"
              style={{ marginTop: 10 }}
              placeholder="Phone number (10 digits)"
              inputMode="numeric"
              autoComplete="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
            <p className="bk-label">TICKET</p>
            <div className="bk-tickets">
              {tickets.map((ticket) => (
                <button
                  key={ticket.id}
                  className={selectedTicket.id === ticket.id ? "selected" : ""}
                  onClick={() => setSelectedTicket(ticket)}
                >
                  <span>{ticketLabel(ticket)}</span>
                  <b>{ticket.price === 0 ? "FREE" : `₹${ticket.price.toLocaleString("en-IN")}`}</b>
                </button>
              ))}
            </div>

            <p className="bk-label">QUANTITY</p>
            <select
              className="bk-select"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            <div className="bk-total">
              <span>Total</span>
              <strong>{total === 0 ? "FREE" : `₹${total.toLocaleString("en-IN")}`}</strong>
            </div>

            <button className="bk-pay" onClick={handlePayment} disabled={loading}>
              {loading ? "Processing..." : total === 0 ? "Confirm free entry" : "Pay now"}
            </button>
            <p className="bk-secure">Payments are securely processed by Razorpay.</p>
          </div>

          <div className="bk-card">
            <div className="bk-info-row">
              <span>EVENT TIMING</span>
              <strong>5:00 PM – 10:00 PM</strong>
            </div>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="bk-venue">
              <div>
                <span>VENUE</span>
                <strong>{VENUE_NAME}</strong>
                <small>{VENUE_ADDRESS} · Scan or Tap the QR for directions</small>
              </div>
              <img src="/venue-qr.png" alt="Venue QR code" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bk-footer">
        <p>DANDIYA NIGHT 2.0 · 16 OCTOBER 2026</p>
        <small>Powered by MEDORA</small>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

/* ---------------- APP ---------------- */

   export default function App() {
     const isBookingPage = window.location.pathname.startsWith("/book");
     return (
       <>
         {isBookingPage ? <BookingPage /> : <HomePage />}
         <Analytics />
       </>
     );
   }