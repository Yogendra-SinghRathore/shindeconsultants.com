import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

ScrollTrigger.config({
  ignoreMobileResize: true,
});

gsap.registerPlugin(ScrollTrigger);

import { NavLink } from "react-router-dom";
import heroImage1 from "../assets/images/heroImage1.jpg";
import heroImage2 from "../assets/images/heroImage2.jpg";
import counterSideImage from "../assets/images/counterSideImage.jpg";
import serviceImg1 from "../assets/images/Residentialimg.jpg";
import serviceImg2 from "../assets/images/Commercialimg.jpg";
import serviceImg3 from "../assets/images/Visualizationimg.jpg";
import serviceImg4 from "../assets/images/Furnitureimg.jpg";
import projectImg1 from "../assets/images/Westwoodimg.webp";
import projectImg2 from "../assets/images/Veranoimg.webp";
import projectImg3 from "../assets/images/Hudsonimg.webp";
import projectImg4 from "../assets/images/Bellevueimg.webp";
import processIcon1 from "../assets/images/support.png";
import processIcon2 from "../assets/images/bulb.png";
import processIcon3 from "../assets/images/dimond.png";
import processIcon4 from "../assets/images/shuffle.png";

import TestimonialSlider from "../components/TestimonialSwiper";

const Home = () => {
  const serviceCard = [
    {
      route: "construction",
      img: serviceImg1,
      number: "01",
      heading: "Building Construction",
      desc: "We provide complete construction services from initial groundwork to final finishing, ensuring strong structural quality, reliable materials, and timely project execution while maintaining safety standards, cost efficiency, and long-term durability for residential and commercial spaces.",
    },
    {
      route: "elevation",
      img: serviceImg2,
      number: "02",
      heading: "Elevation Design",
      desc: "Our elevation design focuses on creating visually striking and modern building exteriors that enhance overall property value, reflect architectural character, and balance aesthetics with practical elements like ventilation, lighting, and long-lasting exterior finishes.",
    },
    {
      route: "floor",
      img: serviceImg3,
      number: "03",
      heading: "Floor Planning",
      desc: "We design smart and functional floor plans that optimize space utilization, improve movement flow, and ensure every room is positioned for maximum comfort, natural light, ventilation, and efficient use of available area for better living and working experiences.",
    },
    {
      route: "interior",
      img: serviceImg4,
      number: "04",
      heading: "Interior Solutions",
      desc: "Our interior solutions combine aesthetics with practicality, creating well-designed spaces that reflect your lifestyle and brand while focusing on comfort, material selection, lighting balance, and cohesive design that delivers a refined and timeless interior experience.",
    },
  ];



  const projectSlides = [
    {
      id: 1,
      img: projectImg1,
      heading: "Westwood",
      count: "01/04",
      text: "Anderson Family – Los Angeles, CA",
      alt: "Project 1",
    },
    {
      id: 2,
      img: projectImg2,
      heading: "Verano Beach",
      count: "02/04",
      text: "Michael Roberts – New York, NY",
      alt: "Project 2",
    },
    {
      id: 3,
      img: projectImg3,
      heading: "Hudson Loft",
      count: "03/04",
      text: "Michael Roberts – New York, NY",
      alt: "Project 3",
    },
    {
      id: 4,
      img: projectImg4,
      heading: "Bellevue",
      count: "04/04",
      text: "Bellevue Tech Partners – Seattle, WA",
      alt: "Project 4",
    },
  ];

  const processData = [
    {
      id: 1,
      img: processIcon1,
      heading: "Consultation & Discovery",
      text: "We start by understanding your needs, style preferences, and lifestyle through an in-depth.",
    },
    {
      id: 2,
      img: processIcon2,
      heading: "Concept & Planning",
      text: "Our team creates mood boards, layouts, and design concepts tailored to your vision.",
    },
    {
      id: 3,
      img: processIcon3,
      heading: "Design Development",
      text: "From material selection to detailed 3D visualizations, we refine every aspect for perfection.",
    },
    {
      id: 4,
      img: processIcon4,
      heading: "Execution & Styling",
      text: "We manage the entire implementation, ensuring every detail comes to life beautifully.",
    },
  ];


  const splitToCharsByWord = (element) => {
    const text = element.innerText;
    const words = text.split(" ");

    element.innerHTML = "";

    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "word";

      word.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.className = "char";
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
      });

      element.appendChild(wordSpan);
    });
  };




  useEffect(() => {
    const mm = gsap.matchMedia();
    const images = gsap.utils.toArray(".reveal-image");

    mm.add(
      {
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        images.forEach((image) => {
          const img = image.querySelector("img");

          gsap.fromTo(
            img,
            {
              clipPath: "inset(0 0 100% 0)",
              scale: isMobile ? 1.3 : 1.8,
            },
            {
              clipPath: "inset(0 0 0% 0)",
              scale: 1,
              duration: isMobile ? 1.2 : 2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: image,
                start: isMobile ? "top 65%" : "top 85%",
                once: true,
              },
            }
          );
        });
      }
    );

    return () => mm.revert(); // 🔥 CRITICAL
  }, []);



  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-brush");

    elements.forEach((el) => {
      if (el.dataset.split === "true") return;
      el.dataset.split = "true";

      splitToCharsByWord(el);

      const chars = el.querySelectorAll(".char");

      gsap.matchMedia().add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          gsap.to(chars, {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.045,
            scrollTrigger: {
              trigger: el,
              start: isMobile ? "top 65%" : "top 85%",
              once: true,
              invalidateOnRefresh: true,
            },
          });
        }
      );
    });
  }, []);

  useEffect(() => {
    const counters = gsap.utils.toArray(".counterInnerBox h2");

    counters.forEach((counter, index) => {
      const endValue = Number(counter.dataset.count);
      const suffix = counter.dataset.suffix || "";

      // start close to end for premium feel
      const startValue = Math.floor(endValue * 0.90);

      gsap.fromTo(
        counter,
        { innerText: startValue },
        {
          innerText: endValue,
          duration: 3.6, // slightly longer = elegance
          ease: "expo.out", // luxury easing
          snap: { innerText: 1 },
          delay: index * 0.12, // subtle stagger
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            once: true,
          },
          onUpdate() {
            const value = Math.floor(counter.innerText);
            counter.innerText = value.toLocaleString() + suffix;
          },
        }
      );
    });
  }, []);



  useEffect(() => {
    const mm = gsap.matchMedia();
    const items = gsap.utils.toArray(".process-gsap");

    mm.add(
      {
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        items.forEach((item) => {
          gsap.from(item, {
            opacity: 0, //  MUST be 0
            x: isMobile ? 0 : 80,   // Desktop: move sideways
            y: isMobile ? 40 : 0,   // Mobile: move upward
            duration: 0.95,
            ease: "power3.out",
            delay: Number(item.dataset.delay) || 0,
            scrollTrigger: {
              trigger: item,
              start: isMobile ? "top 55%" : "top 60%",
              once: true,
            },
          });
        });
      }
    );

    return () => mm.revert(); //  VERY IMPORTANT
  }, []);


  useEffect(() => {
    const mm = gsap.matchMedia();
    const elements = gsap.utils.toArray(".gsap-fade-up");

    mm.add(
      {
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        elements.forEach((el) => {
          const children = Array.from(el.children); //  static array

          gsap.from(children, {
            opacity: 0,
            y: isMobile ? 30 : 50,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: el,
              start: isMobile ? "top 70%" : "top 80%",
              once: true,
            },
          });
        });
      }
    );

    return () => mm.revert();
  }, []);




  return (
    <>
      <section id="hero" className="section hero-section">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-9">
              <div className="heroLeftBox ">
                <div
                  className=" section-title-box"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <div className="section-icon"></div>
                  <div className="section-title">
                    We Build Your Sustainable Lifestyle
                  </div>
                </div>
                <h1 className="hero-title reveal-brush">
                  INTERIOR FOR HOME
                </h1>

                <div className="reveal-image">
                  <img
                    className="img-fluid"
                    src={heroImage1}
                    alt="hero Image 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div className="heroRightBox">
                <div className="reveal-image">
                  <img
                    className="img-fluid"
                    src={heroImage2}
                    alt="hero Image 2"
                  />
                </div>

                <p className="mb-0" data-aos="fade-up" data-aos-delay="400">
                  Crafting interiors that showcase your individuality, elevate
                  your lifestyle, and infuse timeless beauty into every space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">About us</div>
            <div className="liner-box"></div>
          </div>
          <div className="about-box about-inner-box">
            <h2 className="aboutDesc gsap-fade-up">
              In 2010, a passionate team of designers founded Aurelo with a
              simple mission to transform bold visions into timeless
              interiors. We’re known for more than just designing spaces — we
              craft experiences that inspire, comfort, and endure.
            </h2>
            <div className=" d-flex gap-3 align-items-center">
              <NavLink to="/contact" className="primary-button aboutBtn">
                Book Appoinment
              </NavLink>
              <NavLink to="/about" className="aboutKnowMore">
                Know More...
              </NavLink>
            </div>

            <div className="row g-4 mt-1">
              <div className="col-lg-4 mt-2 mt-sm-5">
                <div className="counterBox">
                  <div className="counterInnerBox">
                    <h2 data-count="60" data-suffix="M+">0</h2>
                    <span>Savings Money</span>
                  </div>

                  <div className="InnercounterBox">
                    <div className="counterInnerBox">
                      <h2 data-count="10" data-suffix="k+">0</h2>
                      <span>Global Clients</span>
                    </div>

                    <div className="counterInnerBox">
                      <h2 data-count="98" data-suffix="%">0</h2>
                      <span>Clients satisfaction</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-7">
                <div className="counterSideImg">
                  <div className="reveal-image">
                    <img
                      className="img-fluid"
                      src={counterSideImage}
                      alt="counter Side Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">Our service</div>
            <div className="liner-box"></div>
          </div>

          <div className="serviceHeader">
            <div className="serviceHeadingBox ">
              <h1 className="reveal-brush">Discover our interior design solutions.</h1>
            </div>
            <div className=" serviceBtnBox">
              <NavLink to="/contact" className="primary-button">
                Book Appoinment
              </NavLink>
            </div>
          </div>

          {serviceCard.map((service) => (
            <div className="row g-4 serviceBox">
              <div className="col-lg-4">

                <NavLink to={service.route}  className="serviceImage">
                  <div className="reveal-image">
                    <img
                      className="img-fluid"
                      src={service.img}
                      alt="hero Image 1"
                    />
                  </div>
                </NavLink>

              </div>
              <div className="col-lg-7 mt-3">
                <NavLink to={service.route}>
                  <div className="serviceCardContentBox gsap-fade-up" to={service.route}>
                    <span className="serviceNumber">{service.number}</span>

                    <h2 className="serviceHeading">{service.heading}</h2>

                    <p className="serviceDetails">{service.desc}</p>

                    <div className="serviceBtnBox">
                      <NavLink to="/contact" className="secondry-button serviceBtn">
                        Book Appoinment
                      </NavLink>
                    </div>
                  </div>
                </NavLink>

              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="project" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">recent projects</div>
            <div className="liner-box"></div>
          </div>

          <div className="serviceHeader">
            <div className="serviceHeadingBox">
              <h1 className="reveal-brush">A showcase of timeless interiors.</h1>
            </div>
            <div className=" serviceBtnBox">
              <NavLink to="/contact" className="primary-button">
                Book Appoinment
              </NavLink>
            </div>
          </div>

          <div className="projectSlidesBox">
            {projectSlides.map((slide, index) => (
              <div
                className="projectSlide"
                key={slide.id}
                style={{ zIndex: index + 1 }}
              >
                <div className="projectSlideContentBox">
                  <img className=" img-fluid" src={slide.img} alt={slide.alt} />
                  <div className="slideContent">
                    <h2 className=" slideHeading">{slide.heading}</h2>
                    <div className="slideDetails">
                      <span className="slideCount">{slide.count}</span>
                      <span className="slideText">{slide.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">Our Working Process</div>
            <div className="liner-box"></div>
          </div>

          <div className="serviceHeader">
            <div className="serviceHeadingBox processHeadingBox">
              <h1 className="reveal-brush">Where your vision and our expertise come together.</h1>
            </div>
            <div className=" serviceBtnBox">
              <NavLink to="/contact" className="primary-button">
                Book Appoinment
              </NavLink>
            </div>
          </div>

          <div className="row g-0 processBoxWrapper">
            {processData.map((process, index) => (
              <div
                className="col-sm-6 col-md-4 col-lg-3 process-gsap"
                data-delay={index * 0.2}
                key={process.id}
              >
                <div className="processBox">
                  <img
                    className="img-fluid"
                    src={process.img}
                    alt="processImg"
                  />
                  <div className="processBoxContent">
                    <h4 className="processBoxHeading">{process.heading}</h4>
                    <p className="processBoxDesc">{process.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="container">
          <div className=" section-title-box">
            <div className="section-icon"></div>
            <div className="section-title">Testimonials</div>
            <div className="liner-box"></div>
          </div>

          <div className="serviceHeader">
            <div className="serviceHeadingBox">
              <h1 className="reveal-brush">What our customers say.</h1>
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <section id="offers" className="section">
        <div className="container-fluid gx-0">
          <div className="offerBox">
            <div className="container offerBoxText">
              <h1 className="reveal-brush">Ready to redefine your space? let’s talk</h1>
              <div className=" serviceBtnBox">
                <NavLink to="/contact" className="secondry-button offerBoxBtn">
                  Book Appoinment
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
