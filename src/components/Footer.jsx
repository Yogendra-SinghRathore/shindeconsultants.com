import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();



  const footerLinks = [
    {
      heading: "Quick Links",
      links: [
        { label: "Home", type: "section", id: "hero" },
        { label: "About", type: "section", id: "about" },
        { label: "Services", type: "section", id: "service" },
        { label: "Projects", type: "section", id: "project" },
        { label: "Contact", type: "route", path: "/contact" },
      ],
    },
    {
      heading: "Support page",
      links: [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms and Conditions", path: "/terms" },
        { label: "FAQs", path: "#" },
        // { label: "Licence", path: "#" },
        // { label: "404", path: "#" },
      ],
    },
    {
      heading: "Address",
      links: [
        { label: "info@aurelo.com", path: "mailto:info@aurelo.com" },
        { label: "+91 8770954145", path: "tel:+918770954145" },
        { label: "47, Annapurna Rd, Vaishali Nagar, Indore, Madhya Pradesh 452009", path: "#" },
      ],
    },
  ];

  const handleFooterSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section id="offers" className="section">
      <div className="container">
        <div className="row g-4 g-sm-5">
          <div className="col-sm-6 col-md-3">
            <div className="footerFirstBox footerLinksBox">
              <h3>Aurelo</h3>
              <p>
                Aurelo Interiors — crafting timeless, personalized spaces across
                the USA
              </p>

              <div className="socialLinkBox">
                <a
                  href="https://www.instagram.com/shinde_consultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                >
                  <i className="ri-instagram-line"></i>
                </a>

                <a
                  href="https://www.youtube.com/@CHANNEL_NAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                >
                  <i className="ri-youtube-line"></i>
                </a>

                <a
                  href="https://www.facebook.com/p/Shinde-Consultants-61550636465611/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                >
                  <i class="ri-facebook-circle-line"></i>
                </a>
              </div>
            </div>
          </div>

          {footerLinks.map((group, index) => (
            <div className="col-sm-6 col-md-3" key={index}>
              <div className="footerLinksBox">
                <h4>{group.heading}</h4>

                {group.links.map((item, idx) => {
                  if (item.type === "section") {
                    return (
                      <a
                        key={idx}
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleFooterSection(item.id);
                        }}
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <a key={idx} href={item.path}>
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
