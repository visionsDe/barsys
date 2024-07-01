import Image from "next/image";
import React, { useRef, useState } from "react";
import RollingStone from "../../assets/images/testimonial-RollingStone.png";
import RobbReport from "../../assets/images/testimonial-Robb_Report.png";
import FoodBeverages from "../../assets/images/testimonial-Food_Beverage.png";
import HiConsumption from "../../assets/images/testimonial-HiConsumption.png";
import * as Motion from "motion";

const BarsysArticles = () => {
  const Testimonies = [
    {
      src: RobbReport,
      text: "This high-tech machine crafts personalized cocktails in a simply load in the correct spirits and mixers and let the 360 do its thing. Your boss’s next happy hour just got a whole lot better.",
    },
    {
      src: RollingStone,
      text: "If you don’t want to gift an expensive mixology class,then Barsys’ Smart Coaster System is an ingenious alternative.",
    },
    {
      src: FoodBeverages,
      text: "It is a game-changer for cocktail enthusiasts who want to elevate their home bartending expertise.",
    },
    {
      src: HiConsumption,
      text: "Get yourself the Barsys 360, which literally acts as your own personal bartender at home!",
    },
  ];
  const SlideContainer = useRef();
  const [ActiveIndex, setActiveIndex] = useState(0);

  const handleSlide = (i) => {
    Motion.animate(
      SlideContainer.current,
      {
        transform: `translateX(-${i * 20}%)`,
      },
      {
        duration: 0.7,
      }
    );
    setActiveIndex(i);
  };
  return (
    <div
      id="shopify-section-template--15951546220625__testimonials-banner"
      class="shopify-section"
    >
      <div class="section section--padding section--rounded relative">
        <div class="relative">
          <div class="banner media--750px mobile:media--500px relative">
            <media-element
              class="banner__media block w-full h-full overflow-hidden"
              data-parallax="0.3"
              data-parallax-dir="vertical"
            >
              <div class="media media--height block w-full h-full relative overflow-hidden">
                <picture class="media media--height block w-full h-full relative overflow-hidden">
                  <Image
                    src={require("../../assets/images/testimonial-banner.jpg")}
                    alt=""
                    loading="lazy"
                    is="lazy-image"
                    class="banner__image"
                  />
                </picture>
              </div>
            </media-element>
            <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
            <div class="banner__content overflow-hidden absolute z-1 top-0 left-0 w-full h-full">
              <div class="page-width page-width--narrow w-full h-full flex md:items-center md:justify-center items-center justify-center">
                <div class="banner__box w-full">
                  <testimonials-element
                    class="testimonials block rte relative z-1"
                    initial-index="3"
                    watch-css
                  >
                    <div
                      style={{
                        width: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        ref={SlideContainer}
                        style={{ width: "500%" }}
                        class="testimonial flex"
                      >
                        {Testimonies.map((testimony) => (
                          <div
                            style={{ width: "20%" }}
                            class="testimonial with-quote flex flex-col"
                          >
                            <blockquote>
                              <p>{testimony.text}</p>
                              <a
                                class="testimonial-image-link"
                                href="https://streaklinks.com/B7LFO9BHh_vrOKfNyg2YWOPx/https%3A%2F%2Frobbreport.com%2Flifestyle%2Fproduct-recommendations%2Fgallery%2Fbest-boss-gifts-1234858015%2F"
                              >
                                <figure class="inline-block media media--adapt media--transparent relative overflow-hidden">
                                  <Image
                                    src={testimony.src}
                                    alt=""
                                    loading="lazy"
                                    is="lazy-image"
                                  />
                                </figure>
                              </a>
                            </blockquote>
                          </div>
                        ))}
                      </div>
                    </div>
                  </testimonials-element>
                  <div class="flickity-page-dots">
                    {Testimonies.map((_, i) => (
                      <button
                        onClick={() => handleSlide(i)}
                        type="button"
                        class={`flickity-page-dot ${
                          ActiveIndex == i ? "is-selected" : ""
                        }`}
                        aria-label="View slide 1"
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarsysArticles;
