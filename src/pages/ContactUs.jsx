import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();

      // clean, readable email content
      formDataToSend.append(
        "Message",
        `Name: ${formData.firstName.trim()} ${formData.lastName.trim()}
Email: ${formData.email.trim()}
Mobile: ${formData.mobile.trim()}

Message:
${formData.message.trim()}`,
      );

      // helps Formspree know where to reply
      formDataToSend.append("_replyto", formData.email.trim());

      const res = await fetch("https://formspree.io/f/xreldlzy", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Formspree error");
      }

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We will contact you shortly.",
        confirmButtonColor: "#3085d6",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contactUs" className="section">
      <div className="container">
        <div className="section-title-box">
          <div className="section-icon"></div>
          <div className="section-title">Home / Contact Us</div>
          <div className="liner-box"></div>
        </div>

        <form onSubmit={handleSubmit} className="contactUsForm mb-0">
          <div className="row justify-content-center contactPagebox">
            <div className="col-lg-6 contactPageMapbox">
              <div class="mb-2">
                <div class="contactDetailsBox">
                  <p class="d-flex gap-3 align-items-center">
                    <span><i class="ri-phone-line"></i></span>
                    <a href="tel:+918770954145" target="_blank" rel="noopener noreferrer">
                      +91 8770954145
                    </a>
                  </p>

                  <p class="d-flex gap-3 align-items-center">
                    <span><i class="ri-mail-line"></i></span>
                    <a href="mailto:www.shindeconsultantsindore@gmail.com" target="_blank" rel="noopener noreferrer">
                      shindeconsultantsindore@gmail.com
                    </a>
                  </p>

                  <p class="d-flex gap-3 align-items-center">
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    <a
                      href="https://maps.app.goo.gl/SPR7qwviXy4zcWr2A"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      47, Annapurna Rd, Vaishali Nagar, Indore, Madhya Pradesh 452009
                    </a>
                  </p>
                </div>

              </div>
              <div className="mapIfram">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.2428653295983!2d75.83103717602968!3d22.682001228950497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7bd07844d7%3A0xa75e62b3e348f4a4!2sSHINDE%20CONSULTANTS%20%7C%20Architects%20%7C%20Engineers%20%7C%20Interior%20Designers!5e0!3m2!1sen!2sin!4v1770483545659!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shinde Consultants Location"
                />
              </div>
            </div>

            <div className="col-lg-6 row justify-content-center">
              {/* First Name */}
              <div className="mb-3 col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First Name<span className="requiredStar"> *</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  name="firstName"
                  placeholder="Enter Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="mb-3 col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name<span className="requiredStar"> *</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3 col-sm-6">
                <label htmlFor="email" className="form-label">
                  Email Address<span className="requiredStar"> *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mobile */}
              <div className="mb-3 col-sm-6">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number<span className="requiredStar"> *</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="form-control"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="mb-3 col-12">
                <label htmlFor="message" className="form-label">
                  Message<span className="requiredStar"> *</span>
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project idea."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mb-0 col-12">
                <button
                  type="submit"
                  className="primary-button w-100 mt-2"
                  disabled={loading}
                >
                  {loading ? "Submiting..." : "Get A Quote"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
