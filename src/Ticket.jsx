import { QRCodeSVG } from "qrcode.react";

export default function Ticket({ ticket, venue, address, onClose }) {
  const amount = Number(ticket.amount || 0).toLocaleString("en-IN");

  return (
    <div className="tk-overlay">
      <style>{`
        .tk-overlay { position: fixed; inset: 0; z-index: 100; overflow-y: auto; padding: 24px 16px 60px; background: rgba(10, 5, 0, .92); display: flex; justify-content: center; align-items: flex-start; }
        .tk-wrap { width: min(560px, 100%); }
        .tk-ticket { overflow: hidden; border-radius: 24px; background: #fff8e8; color: #2a1100; box-shadow: 0 20px 60px rgba(0, 0, 0, .5); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .tk-head { padding: 22px 28px; background: linear-gradient(90deg, #ffb81c, #ff7a12); }
        .tk-head small { display: block; font-size: 12px; font-weight: 700; letter-spacing: 3px; }
        .tk-head strong { display: block; margin-top: 4px; font-size: 28px; letter-spacing: 1px; }
        .tk-body { display: flex; gap: 24px; padding: 26px 28px; align-items: flex-start; }
        .tk-info { flex: 1; min-width: 0; display: grid; gap: 14px; }
        .tk-info span { display: block; font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #9a5b00; }
        .tk-info b { display: block; margin-top: 2px; font-size: 17px; line-height: 1.35; word-break: break-word; }
        .tk-qr { flex: none; text-align: center; }
        .tk-qr small { display: block; margin-top: 6px; max-width: 160px; font-size: 10px; word-break: break-all; color: #6b4a1f; }
        .tk-foot { margin: 0; padding: 14px 28px 20px; border-top: 2px dashed #e0b866; font-size: 13px; color: #6b4a1f; text-align: center; }
        .tk-actions { display: flex; gap: 12px; margin-top: 20px; }
        .tk-actions button { flex: 1; padding: 16px; border: 0; border-radius: 14px; font-size: 16px; font-weight: 700; cursor: pointer; background: linear-gradient(90deg, #ffb81c, #ff7a12); color: #2a1100; }
        .tk-actions button.ghost { background: transparent; border: 1px solid rgba(255, 184, 28, .5); color: #ffd98a; }
        .tk-mail { margin: 16px 0 0; text-align: center; color: #ffd98a; font-size: 14px; }
        @media (max-width: 520px) { .tk-body { flex-direction: column-reverse; align-items: center; } .tk-info { width: 100%; } }
        @media print {
          body * { visibility: hidden; }
          .tk-ticket, .tk-ticket * { visibility: visible; }
          .tk-overlay { position: static; background: none; padding: 0; overflow: visible; }
          .tk-ticket { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none; border-radius: 0; }
        }
      `}</style>

      <div className="tk-wrap">
        <div className="tk-ticket">
          <div className="tk-head">
            <small>DANDIYA NIGHT 2.0</small>
            <strong>ENTRY TICKET</strong>
          </div>

          <div className="tk-body">
            <div className="tk-info">
              <div><span>NAME</span><b>{ticket.name || "—"}</b></div>
              <div><span>TICKET</span><b>{ticket.ticketName} × {ticket.quantity}</b></div>
              <div><span>DATE</span><b>16 October 2026</b></div>
              <div><span>DOORS OPEN</span><b>5 PM · Till 10 PM</b></div>
              <div><span>VENUE</span><b>{venue}, {address}</b></div>
              <div><span>AMOUNT PAID</span><b>₹{amount}</b></div>
            </div>

            <div className="tk-qr">
              <QRCodeSVG value={ticket.paymentId} size={150} bgColor="#ffffff" fgColor="#1a0d00" marginSize={2} />
              <small>{ticket.paymentId}</small>
            </div>
          </div>

          <p className="tk-foot">Show this QR code or your Payment ID at the gate. Keep this ticket safe.</p>
        </div>

        <div className="tk-actions">
          <button onClick={() => window.print()}>Download / Print ticket</button>
          <button className="ghost" onClick={onClose}>Close</button>
        </div>

        <p className="tk-mail">
          {ticket.emailed
            ? `A copy was also emailed to ${ticket.email}.`
            : "Please download or screenshot this ticket and keep it safe."}
        </p>
      </div>
    </div>
  );
}
