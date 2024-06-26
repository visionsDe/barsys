import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../../../Context/ScrollProvider";
import * as Motion from "motion";

const MarqueeBrands = () => {
  const FirstContainer = useRef();
  const SecondContainer = useRef();

  const ScrollEvent = useContext(ScrollContext);

  const Init = (element) => {
    let dataset = element.dataset;
    const animationTimeFrame =
      (element.firstElementChild.clientWidth / 100) * dataset.speed;
    console.log("animationTimeFrame", animationTimeFrame);
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
    Init(FirstContainer.current);
    Init(SecondContainer.current);
  }, []);

  useEffect(() => {
    if (!ScrollEvent) return;
    AddScrollAnimation(FirstContainer.current);
    AddScrollAnimation(SecondContainer.current);
  }, [ScrollEvent]);

  return (
    <div
      id="shopify-section-template--15951546220625__scrolling-text-2"
      class="shopify-section scrolling-text-section"
    >
      <div class="section section--padding section--plain overflow-hidden">
        <div class="relative z-1">
          <div class="scrolling-wrapper with-right relative z-1">
            <marquee-element
              ref={FirstContainer}
              class="scrolling-text scrolling-text--right flex items-center"
              data-speed="2.5"
              data-direction="right"
              data-parallax="1.5"
            >
              <div class="marquee flex items-center flex-auto whitespace-nowrap">
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFPGWe3u1kpL1QjQZH2rzy/https%3A%2F%2Fwww.buzzfeed.com%2Fjessicahall2%2Fproducts-make-house-smarter%3Forigin%3Dweb-hf"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-1.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9Bp6QyX1WVjZwU_nUZz/https%3A%2F%2Fwww.cbsnews.com%2Fessentials%2Fx-christmas-gifts-that-mom-is-guaranteed-to-love%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-2.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9FUVN-3veyxwAL2gJzT/https%3A%2F%2Fcoolmaterial.com%2Ffood-drink%2Fbarsys-360-smart-cocktail-maker%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-3.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO8o9Pcm4UxrQdAyu5VqN/https%3A%2F%2Ffhm.nl%2Fbarsys-360%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-4.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9FV1eM34cz_WQFzboRM/https%3A%2F%2Fwww.fb101.com%2Feditors-top-pick-trending-tech-and-appliances%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-5.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9JjY77zkDL11whdzxCW/https%3A%2F%2Fwww.foodbeast.com%2Fnews%2Fbarsys-360%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-6.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9FU1BKXrz2ucgUqJdJg/https%3A%2F%2Fwww.gadgetany.com%2Fnews%2Fbarsys-360-the-smart-cocktail-maker-can-make-your-weekend-party-more-lively%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-7.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO84BgRRat_5pdQs812Dz/https%3A%2F%2Fwww.gearpatrol.com%2Fhome%2Fa42626707%2Fnew-home-releases-2023%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-8.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO888PEubam1pQQmrfwuz/https%3A%2F%2Fhiconsumption.com%2Ffood-drink%2Fbarsys-360-smart-cocktail-maker%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-9.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9NcHLRhV_FKZgPAF5Nw/https%3A%2F%2Fwww.insidehook.com%2Ffood%2Fbest-food-drink-gifts"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-10.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9B-_hGzBx2oNQE1PCxj/https%3A%2F%2Fmensgear.net%2Fbarsys-360%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-11.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9BHh_vrOKfNyg2YWOPx/https%3A%2F%2Frobbreport.com%2Flifestyle%2Fproduct-recommendations%2Fgallery%2Fbest-boss-gifts-1234858015%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-12.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO88lJULpD0HpPQfItQq5/https%3A%2F%2Fdesigntaxi.com%2Fnews%2F424588%2FMeet-The-Smart-Cocktail-Mixer-That-Can-Turn-Anyone-Into-A-Mixologist%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-14.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9J4eBT5Rr2PqAimd3cl/https%3A%2F%2Fgadgetuser.com%2Fai-gadgets%2Fbarsys-360-your-personal-mixologist%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-19.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9NV1UuwOllYKAD0gydn/https%3A%2F%2Fwww.thespruce.com%2Fbest-hostess-gifts-5225860"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-21.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9JfXy6Qpgxk9A8_XZOI/https%3A%2F%2Fwww.trendhunter.com%2Ftrends%2Fcocktail-maker"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-22.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9B1tbNw0CaGbgdoxB9H/https%3A%2F%2Fthespoon.tech%2Fbarsys-makes-case-for-adding-style-to-bartender-robot-category-with-the-barsys-360%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-24.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
              </div>
            </marquee-element>
          </div>
          <div class="scrolling-wrapper with-right relative">
            <marquee-element
              ref={SecondContainer}
              class="scrolling-text scrolling-text--left flex items-center"
              data-speed="2.5"
              data-direction="left"
              data-parallax="1.5"
            >
              <div class="marquee flex items-center flex-auto whitespace-nowrap">
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFPGWe3u1kpL1QjQZH2rzy/https%3A%2F%2Fwww.buzzfeed.com%2Fjessicahall2%2Fproducts-make-house-smarter%3Forigin%3Dweb-hf"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-1.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9Bp6QyX1WVjZwU_nUZz/https%3A%2F%2Fwww.cbsnews.com%2Fessentials%2Fx-christmas-gifts-that-mom-is-guaranteed-to-love%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-2.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9FUVN-3veyxwAL2gJzT/https%3A%2F%2Fcoolmaterial.com%2Ffood-drink%2Fbarsys-360-smart-cocktail-maker%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-3.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO8o9Pcm4UxrQdAyu5VqN/https%3A%2F%2Ffhm.nl%2Fbarsys-360%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-4.png")}
                      alt=""
                      loading="lazy"
                      width="159.0"
                      height="60"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9FV1eM34cz_WQFzboRM/https%3A%2F%2Fwww.fb101.com%2Feditors-top-pick-trending-tech-and-appliances%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-5.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9JjY77zkDL11whdzxCW/https%3A%2F%2Fwww.foodbeast.com%2Fnews%2Fbarsys-360%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-6.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9FU1BKXrz2ucgUqJdJg/https%3A%2F%2Fwww.gadgetany.com%2Fnews%2Fbarsys-360-the-smart-cocktail-maker-can-make-your-weekend-party-more-lively%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-7.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO84BgRRat_5pdQs812Dz/https%3A%2F%2Fwww.gearpatrol.com%2Fhome%2Fa42626707%2Fnew-home-releases-2023%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-8.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO888PEubam1pQQmrfwuz/https%3A%2F%2Fhiconsumption.com%2Ffood-drink%2Fbarsys-360-smart-cocktail-maker%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-9.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9NcHLRhV_FKZgPAF5Nw/https%3A%2F%2Fwww.insidehook.com%2Ffood%2Fbest-food-drink-gifts"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-10.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9B-_hGzBx2oNQE1PCxj/https%3A%2F%2Fmensgear.net%2Fbarsys-360%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-11.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9BHh_vrOKfNyg2YWOPx/https%3A%2F%2Frobbreport.com%2Flifestyle%2Fproduct-recommendations%2Fgallery%2Fbest-boss-gifts-1234858015%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-12.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO88lJULpD0HpPQfItQq5/https%3A%2F%2Fdesigntaxi.com%2Fnews%2F424588%2FMeet-The-Smart-Cocktail-Mixer-That-Can-Turn-Anyone-Into-A-Mixologist%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-14.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9J4eBT5Rr2PqAimd3cl/https%3A%2F%2Fgadgetuser.com%2Fai-gadgets%2Fbarsys-360-your-personal-mixologist%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-19.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9NV1UuwOllYKAD0gydn/https%3A%2F%2Fwww.thespruce.com%2Fbest-hostess-gifts-5225860"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-21.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9JfXy6Qpgxk9A8_XZOI/https%3A%2F%2Fwww.trendhunter.com%2Ftrends%2Fcocktail-maker"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-22.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
                <div
                  class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                  // style="--image-height: 60px;"
                >
                  <a
                    class="scrolling-text__item__link"
                    href="https://streaklinks.com/B7LFO9B1tbNw0CaGbgdoxB9H/https%3A%2F%2Fthespoon.tech%2Fbarsys-makes-case-for-adding-style-to-bartender-robot-category-with-the-barsys-360%2F"
                  >
                    <Image
                      src={require("../../assets/images/partners/home-scroll-icon-24.png")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </a>
                </div>
              </div>
            </marquee-element>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBrands;
