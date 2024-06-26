import React, { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../../../Context/ScrollProvider";
import * as Motion from "motion";

const MarqueeMixology = () => {
  const Container = useRef();

  const ScrollEvent = useContext(ScrollContext);

  const Init = (element) => {
    let dataset = element.dataset;
    const animationTimeFrame =
      (element.firstElementChild.clientWidth / 100) * dataset.speed;
    element.style.setProperty("--duration", `${animationTimeFrame}s`);
    for (let i = 0; i < 3; i++) {
      element.firstElementChild.classList.add("animate");
      let clone = element.firstElementChild.cloneNode(true);
      element.appendChild(clone);
      clone
        .querySelectorAll(".media")
        .forEach((media) => media.classList.remove("loading"));
    }
  };

  const AddScrollAnimation = (element) => {
    Motion.scroll(
      Motion.animate(
        element,
        { transform: [`translateX(${60}%)`, `translateX(0)`] },
        { easing: "linear" }
      ),
      { target: element, offset: ["start end", "end start"] }
    );
  };

  useEffect(() => {
    Init(Container.current);
  }, []);

  useEffect(() => {
    if (!ScrollEvent) return;
    AddScrollAnimation(Container.current);
  }, [ScrollEvent]);

  return (
    <div
      id="shopify-section-template--15951546220625__scrolling-text-1"
      class="shopify-section scrolling-text-section"
    >
      <div class="section section--padding overflow-hidden">
        <div class="relative z-1">
          <marquee-element
            class="scrolling-text scrolling-text--left flex items-center"
            data-speed="2"
            data-direction="left"
            data-parallax="1.5"
            ref={Container}
          >
            <div class="marquee flex items-center flex-auto whitespace-nowrap">
              <div
                class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                style={{ "--font-size": "168px" }}
              >
                <strong>Innovation</strong>
              </div>
              <div
                class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                style={{ "--font-size": "160px" }}
              >
                <strong>Mixology</strong>
              </div>
              <div
                class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                style={{ "--font-size": "160px" }}
              >
                <strong>Elegance</strong>
              </div>
            </div>
          </marquee-element>
        </div>
      </div>
    </div>
  );
};

export default MarqueeMixology;
