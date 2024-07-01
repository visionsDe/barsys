import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import * as Motion from "motion";

const BathtubGin = () => {
  const SlideContainer = useRef();
  const VideoTag = useRef();

  const [ActiveIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // VideoTag.current.play();
  }, []);

  const handleSlide = (i) => {
    Motion.animate(
      SlideContainer.current,
      {
        transform: `translateX(-${i * 50}%)`,
      },
      {
        duration: 0.5,
      }
    );
    setActiveIndex(i);
  };
  return (
    <div
      id="shopify-section-template--15951546220625__shop-the-look"
      class="shopify-section"
    >
      <div
        class="section section--padding section--rounded relative"
        data-section-id="template--15951546220625__shop-the-look"
      >
        <div class="page-width relative">
          <shop-the-look class="shop-the-look grid gap-6">
            <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-center md:items-center md:justify-between relative z-1">
              <div class="grid gap-4">
                <p class="heading font-medium subtext-md leading-none tracking-none">
                  Explore the recipes
                </p>
                <h2 class="heading font-bold title-sm">Bring the Bar Home.</h2>
              </div>
            </div>
            <lookbook-element class="banner block media--adapt mobile:media--adapt relative overflow-hidden">
              <div class="banner__media w-full h-full overflow-hidden">
                <div class="media media--height block w-full h-full relative overflow-hidden">
                  <video
                    ref={VideoTag}
                    controls
                    playsInline
                    muted="muted"
                    autoPlay
                    loop
                    src={"bathtub-gin-video-desktop.mp4"}
                  />
                </div>
              </div>
            </lookbook-element>

            <carousel-element class="block">
              <div
                style={{
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <div
                  ref={SlideContainer}
                  style={{ width: "200%", gap: 10 }}
                  class="flex"
                >
                  <div class="card product-card product-card--card grid leading-none relative overflow-hidden">
                    <div class="product-card__media relative h-auto">
                      <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                      <a
                        class="block relative media media--square overflow-hidden"
                        href="recipe-details.html"
                        tabIndex="-1"
                      >
                        <Image
                          src={require("../../assets/images/Product-The-Passion-of-the-Negroni.jpg")}
                          alt="The Passion of the Negroni"
                          loading="lazy"
                          is="lazy-image"
                        />
                      </a>
                    </div>
                    <div class="product-card__content flex flex-col justify-start text-left">
                      <div class="product-card__top w-full"></div>
                      <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                        <p class="grow">
                          <a
                            class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                            href="recipe-details.html"
                          >
                            The Passion of the Negroni
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card product-card product-card--card grid leading-none relative overflow-hidden">
                    <div class="product-card__media relative h-auto">
                      <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                      <a
                        class="block relative media media--square overflow-hidden"
                        href="recipe-details.html"
                        tabIndex="-1"
                      >
                        <Image
                          src={require("../../assets/images/Product-Espresso-Martini.jpg")}
                          alt="Espresso Martini"
                          loading="lazy"
                          is="lazy-image"
                        />
                      </a>
                    </div>
                    <div class="product-card__content flex flex-col justify-start text-left">
                      <div class="product-card__top w-full"></div>
                      <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                        <p class="grow">
                          <a
                            class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                            href="recipe-details.html"
                          >
                            Espresso Martini
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flickity-page-dots">
                {[0, 1].map((_, i) => (
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
            </carousel-element>
          </shop-the-look>
        </div>
      </div>
    </div>
  );
};

export default BathtubGin;
