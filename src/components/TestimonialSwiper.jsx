import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import testimonialImg1 from "../assets/images/testimonialimg1.jpg";
import testimonialImg2 from "../assets/images/testimonialimg2.jpg";
import testimonialImg3 from "../assets/images/testimonialimg3.jpg";

const TestimonialSlider = () => {
  const testimonialData = [
    {
      id: 1,
      para: "Aurelo turned our apartment into a space we never want to leave. From the first consultation, they truly listened to our ideas and understood our lifestyle. Every corner feels intentional — from the way the light moves through the rooms to the carefully chosen textures and colors. The end result is not just beautiful, but deeply personal, making it feel completely ours in every sense. It’s more than interior design; it’s a space that tells our story.",
      name: "Sarah Meri",
      text: "Residential Client",
      img: testimonialImg1,
    },
    {
      id: 2,
      para: "From the very beginning, Aurelo made us feel like our vision truly mattered. They listened intently, asked the right questions, and translated our ideas into something beyond what we imagined. Every choice — from textures to lighting — feels intentional and personal. Our home now carries an atmosphere of warmth, balance, and beauty. It’s not just a stylish space, it’s an extension of who we are. Walking in each day feels like coming home to our truest selves.",
      name: "Ananya Verma",
      text: "Residential Client",
      img: testimonialImg2,
    },
    {
      id: 3,
      para: "Aurelo’s approach is unlike anything we’ve experienced before. They understood our lifestyle, respected our taste, and elevated every idea we had. The space feels alive — sunlight dances through the rooms, colors speak softly, and every detail tells part of our story. It’s functional, inviting, and deeply personal. This isn’t just interior design; it’s emotional architecture. Every morning we wake up grateful for the comfort, beauty, and sense of belonging Aurelo has crafted within our walls.",
      name: "Emma Clarke",
      text: "Residential Client",
      img: testimonialImg3,
    },
  ];

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
                start: isMobile ? "top 70%" : "top 80%",
                once: true,
              },
            }
          );
        });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div className="testimonialWrapper">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".testimonial-next",
          prevEl: ".testimonial-prev",
        }}
        className="testimonialSwiper"
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="row testimonialCardRow g-4 flex-column-reverse flex-md-row">
              <div className="col-md-6">
                <div className="testimonialCard">
                  <p className="testimonialPara">“{item.para}”</p>
                  <div className="testimonialCoustomerDetail">
                    <h4 className="testimonialName">{item.name}</h4>
                    <p className="testimonialText mb-0">{item.text}</p>
                  </div>

                  <div className="testimonialNav">
                    <button className="testimonialBtn testimonial-prev">
                      ←
                    </button>
                    <button className="testimonialBtn testimonial-next">
                      →
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="testimonialCardImg">
                  <div className="reveal-image">
                    <img
                      className="img-fluid"
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
