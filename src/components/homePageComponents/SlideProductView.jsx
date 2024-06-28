import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../../../Context/ScrollProvider";
import styled from "styled-components";
import { AnimateWhenInView } from "../utils/Animate";

const SlideProductView = () => {
  const [btnPressed, setPressed] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [animationApplied, setApplied] = useState(false);
  const [animatieText, setAnimatieText] = useState(false);

  const SlideContainer = useRef();
  const SliderBtn = useRef();
  const HeadText = useRef();

  const isElementVisible = (element, minBound = 300) => {
    let Bound = element.getBoundingClientRect();
    let boundTop = Bound.top;
    if (!(boundTop < minBound && boundTop > 0)) return false;

    return true;
  };

  const ScrollEvent = useContext(ScrollContext);
  useEffect(() => {
    setSliderPercent(10);
    animateSlider();
    AnimateWhenInView(SlideContainer.current, () => animateSlider(true));
  }, []);

  const animateSlider = (bool) => {
    if (bool && !animatieText) setAnimatieText(true);
    if (!bool || animationApplied) return;
    setTimeout(() => {
      setAnimate(true);
      setSliderPercent(50);
      setApplied(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1e3);
    }, 1e3);
  };

  const handleMouseClick = (value) => {
    setPressed(value);
  };

  const handleSliderMove = (e) => {
    if (!btnPressed) return;
    let containerWidth = SlideContainer.current.clientWidth;
    let mouseX = e.pageX - SlideContainer.current.getBoundingClientRect().left;
    let btnWidth = SliderBtn.current.clientWidth / 2;
    if (mouseX < btnWidth || mouseX > containerWidth - btnWidth) return;
    let percentage = (mouseX * 100) / containerWidth;
    setSliderPercent(percentage);
  };

  const setSliderPercent = (value) => {
    SlideContainer.current.style.setProperty("--percent", `${value}%`);
  };

  return (
    <div
      id="shopify-section-template--15951546220625__image-comparison"
      class="shopify-section"
    >
      <div class="section section--padding">
        <div class="page-width relative">
          <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-center md:items-center md:justify-between relative z-1">
            <div class="grid gap-4">
              <p class="heading font-medium subtext-lg leading-nonetracking-none">
                Designed for your Living Room
              </p>
              <h2 class="heading font-bold title-md">
                <GradientText ref={HeadText} animate={animatieText}>
                  Barsys 360 Color Choices
                </GradientText>
              </h2>
            </div>
          </div>
          <image-comparison
            ref={SlideContainer}
            class={`js image-comparison media--750px mobile:media--300px block relative overflow-hidden ${
              animate ? "animating" : ""
            }`}
            data-layout="horizontal"
          >
            <div class="comparison__before w-full h-full">
              <picture class="media media--height w-full h-full block relative">
                <source media="(max-width: 767px)" />
                <Image
                  src={require("../../assets/images/Interactive_Image_360_white.jpg")}
                  alt=""
                  loading="lazy"
                  is="lazy-image"
                />
              </picture>
              <div
                class="comparison__box comparison__box--end grid items-start absolute top-0 left-0 w-full h-full"
                // style="--color-foreground: 255 255 255;"
              >
                <div
                  style={{ display: btnPressed ? "none" : "block" }}
                  class="grid gap-1 md:gap-2"
                >
                  <p
                    class="text-xs md:text-base lg:text-lg text-medium leading-none"
                    style={{ color: "white" }}
                  >
                    Barsys 360
                  </p>
                  <p
                    style={{ color: "white" }}
                    class="heading text-base md:text-2xl lg:text-3xl font-bold leading-none tracking-tight"
                  >
                    Polar White
                  </p>
                </div>
              </div>
            </div>
            <div class="comparison__after absolute top-0 left-0 w-full h-full z-1">
              <picture class="media media--height w-full h-full block relative">
                <source media="(max-width: 767px)" />
                <Image
                  src={require("../../assets/images/Interactive_Image_360_black.jpg")}
                  alt=""
                  loading="lazy"
                  is="lazy-image"
                />
              </picture>
              <div
                class="comparison__box comparison__box--end grid items-start absolute top-0 left-0 w-full h-full text-right"
                // style="--color-foreground: 255 255 255;"
              >
                <div
                  class="grid gap-1 md:gap-2"
                  style={{ display: btnPressed ? "none" : "block" }}
                >
                  <p
                    style={{ color: "white" }}
                    class="text-xs md:text-base lg:text-lg text-medium leading-none"
                  >
                    Barsys 360
                  </p>
                  <p
                    style={{ color: "white" }}
                    class="heading text-base md:text-2xl lg:text-3xl font-bold leading-none tracking-tight"
                  >
                    Midnight Black
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="comparison__button absolute z-1"
              aria-label="Drag"
              tabIndex="-1"
              onMouseDown={() => handleMouseClick(true)}
              onMouseUp={() => handleMouseClick(false)}
              onMouseLeave={() => handleMouseClick(false)}
              onMouseMove={(e) => handleSliderMove(e)}
              ref={SliderBtn}
            >
              <span class="absolute flex items-center justify-center pointer-events-none">
                <svg
                  class="icon icon-drag icon-md"
                  viewBox="0 0 12 17"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M1 1L0.999999 16"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M6 1L6 16"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M11 1L11 16"
                  ></path>
                </svg>
              </span>
            </button>
          </image-comparison>
        </div>
      </div>
    </div>
  );
};

const GradientText = styled.em`
  background: linear-gradient(
    90deg,
    rgba(249, 197, 141, 1),
    rgba(43, 43, 43, 1) 100%
  );
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: left 100%;
  background-size: ${(prop) => (prop.animate ? "100% 100%" : "0 100%")};
  transition: background-size 0.7s cubic-bezier(0.7, 0, 0.3, 1);
  line-height: normal;
`;
export default SlideProductView;
