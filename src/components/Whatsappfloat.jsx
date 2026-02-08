import { useState } from "react";

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "12345678910"; // without +

  const sendToWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Icon */}
      <div className="whatsapp-float" onClick={() => setOpen(!open)}>
        <i className="ri-whatsapp-line"></i>
      </div>

      {/* Chat Box */}
      {open && (
        <div className="whatsapp-box">
          <p className="mb-2">Type your message</p>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn btn-success w-100" onClick={sendToWhatsApp}>
            Send
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
