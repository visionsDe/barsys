import { AnimateWhenInView } from "@/components/utils/Animate";
import React, { useEffect, useRef, useState } from "react";

const BarsysPara1 = () => {
  const SVG = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    AnimateWhenInView(SVG.current, () => setAnimate(true));
  }, []);
  return (
    <div
      id="shopify-section-template--15951546220625__rich-text"
      class="shopify-section"
    >
      <div class="section section--padding">
        <div class="page-width relative">
          <div class="collage with-richtext grid items-start">
            <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
              <div class="grid gap-4">
                <h2 class="heading font-bold title-md">
                  Barsys: Crafting Cocktails{" "}
                  <em
                    ref={SVG}
                    class={`highlighted-text inline-block not-italic relative ${
                      animate ? "animate" : ""
                    }`}
                    is="highlighted-text"
                    data-style="scribble"
                  >
                    Made Easy
                    <svg
                      class="icon icon-basic-underline"
                      viewBox="-400 -55 730 60"
                      stroke="currentColor"
                      fill="none"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="30"
                        pathLength="1"
                        d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15"
                      />
                    </svg>
                  </em>
                </h2>
              </div>
            </div>
            <div class="rich-text md:text-left text-left relative z-1">
              <div class="rte leading-normal body subtext-md">
                <p>
                  Explore the innovative world of Barsys, where mixology meets
                  technology to redefine the art of cocktail-making. Shop for
                  your favorite cocktail ingredients, save your go-to recipes,
                  and digitize your entire drinking experience with Barsys. Our
                  ecosystem seamlessly connects cocktail curators, bars, brands,
                  and mixologists with cocktail enthusiasts at home, using our
                  consumer robotics and SAAS-based applications. Discover how
                  Barsys revolutionizes the way you enjoy cocktails, offering a
                  world of possibilities right at your fingertips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarsysPara1;
