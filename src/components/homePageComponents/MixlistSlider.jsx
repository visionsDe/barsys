"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
const MixlistSlider = () => {
  const SlideContainer = useRef();
  const SlideItem = useRef();
  const LastSlideItem = useRef();
  const [showRightBtn, setRightBtnActive] = useState(true);
  const [showLeftBtn, setLeftBtnActive] = useState(false);

  const UpdateBtnStatus = () => {
    if (SlideContainer.current.scrollLeft == 0) UpdateBtnState(false, true);
    else if (
      SlideContainer.current.scrollLeft + SlideContainer.current.clientWidth >=
      LastSlideItem.current.offsetLeft + LastSlideItem.current.clientWidth
    )
      UpdateBtnState(true);
    else UpdateBtnState(true, true);
  };

  const UpdateBtnState = (left = false, right = false) => {
    setLeftBtnActive(left);
    setRightBtnActive(right);
  };

  const SlideLeftToRight = () => {
    SlideContainer.current.scrollTo({
      left:
        Number(getComputedStyle(SlideItem.current).width.replace("px", "")) * 4,
      behavior: "smooth",
    });
  };
  const SlideRightToLeft = () => {
    SlideContainer.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div class="section section--padding">
      <div class="page-width relative">
        <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
          <div class="grid gap-4">
            <h2 class="heading font-bold title-md">
              <split-words
                class="split-words flex flex-wrap"
                data-animate="fade-up-large"
              >
                Mixlist
              </split-words>
            </h2>
          </div>
          <div class="indicators hidden lg:flex gap-2d5">
            <button
              onClick={SlideRightToLeft}
              class="button button--secondary"
              type="button"
              is="previous-button"
              aria-controls="Slider-template--15951546220625__collection-list"
              aria-label="Previous"
              disabled={!showLeftBtn}
            >
              <span class="btn-fill" data-fill></span>
              <span class="btn-text">
                <svg
                  class="icon icon-chevron-left icon-md transform"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 6L8 12L14 18"
                  ></path>
                </svg>
              </span>
            </button>
            <button
              onClick={SlideLeftToRight}
              class="button button--secondary"
              type="button"
              is="next-button"
              aria-controls="Slider-template--15951546220625__collection-list"
              aria-label="Next"
              disabled={!showRightBtn}
            >
              <span class="btn-fill" data-fill></span>
              <span class="btn-text">
                <svg
                  class="icon icon-chevron-right icon-md transform"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6L16 12L10 18"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <p class="lg:hidden"></p>
        </div>
        <slider-element
          id="Slider-template--15951546220625__collection-list"
          class="grid slider slider--desktop slider--tablet"
          selector=".card-grid>.card"
          ref={SlideContainer}
          onScroll={UpdateBtnStatus}
        >
          <motion-list class="card-grid card-grid--4 mobile:card-grid--1 grid">
            <div
              ref={SlideItem}
              class="card media-card media-card--card media-card--overlap overflow-hidden"
              id="shopify-block-custom_box_D9iHh7"
            >
              <a
                href="mixlist.html"
                class="media-card__link grid w-full h-full relative"
              >
                <div class="media media--square relative overflow-hidden">
                  <Image
                    src={require("../../assets/images/mixlist-all-recipes.jpg")}
                    alt=""
                    loading="lazy"
                    is="lazy-image"
                  />
                </div>
                <div class="media-card__content flex justify-between items-center gap-4 w-full">
                  <div class="media-card__text shrink-1">
                    <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                      All Mixlist
                      <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                        10
                      </small>
                    </span>
                    <p class="leading-none text-xs xl:text-sm">
                      Check out all our Mixlists
                    </p>
                  </div>
                  <svg
                    class="icon icon-arrow-right icon-xs transform shrink-0"
                    viewBox="0 0 21 20"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div
              class="card media-card media-card--card overflow-hidden"
              id="shopify-block-collection_k8Ldjd"
            >
              <a
                href="collection-recipes.html"
                class="media-card__link flex flex-col w-full h-full relative"
              >
                <div class="media media--square relative overflow-hidden">
                  <Image
                    src={require("../../assets/images/Mixlist_Cover_Earth_Day.jpg")}
                    alt="Earth Day"
                    loading="lazy"
                    is="lazy-image"
                  />
                </div>
                <div class="media-card__content flex justify-between items-center gap-4 w-full">
                  <div class="media-card__text shrink-1 relative">
                    <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                      Earth Day
                    </span>
                    <p class="leading-none text-xs xl:text-sm">
                      Sip sustainably with our eco-friendly cocktail selections
                    </p>
                    <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                      10
                    </small>
                  </div>
                  <svg
                    class="icon icon-arrow-right icon-xs transform shrink-0"
                    viewBox="0 0 21 20"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div
              class="card media-card media-card--card overflow-hidden"
              id="shopify-block-collection_LRiL9B"
            >
              <a
                href="mixlist-details.html"
                class="media-card__link flex flex-col w-full h-full relative"
              >
                <div class="media media--square relative overflow-hidden">
                  <Image
                    src={require("../../assets/images/Mixlist_Cover_Pitch_Perfect_Mixology.jpg")}
                    alt="Pitch Perfect Mixology"
                    loading="lazy"
                    is="lazy-image"
                  />
                </div>
                <div class="media-card__content flex justify-between items-center gap-4 w-full">
                  <div class="media-card__text shrink-1 relative">
                    <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                      Pitch Perfect Mixology
                    </span>
                    <p class="leading-none text-xs xl:text-sm">
                      Hit a home run with our all-star cocktail recipes
                    </p>
                    <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                      10
                    </small>
                  </div>
                  <svg
                    class="icon icon-arrow-right icon-xs transform shrink-0"
                    viewBox="0 0 21 20"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div
              class="card media-card media-card--card overflow-hidden"
              id="shopify-block-collection_PXDUyW"
            >
              <a
                href="mixlist-details.html"
                class="media-card__link flex flex-col w-full h-full relative"
              >
                <div class="media media--square relative overflow-hidden">
                  <Image
                    src={require("../../assets/images/Mixlist_Cover_Ice_Cube.jpg")}
                    alt="Ice Cube Series"
                    loading="lazy"
                    is="lazy-image"
                  />
                </div>
                <div class="media-card__content flex justify-between items-center gap-4 w-full">
                  <div class="media-card__text shrink-1 relative">
                    <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                      Ice Cube Series
                    </span>
                    <p class="leading-none text-xs xl:text-sm">
                      Chill out with our Ice Cube Series
                    </p>
                    <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                      9
                    </small>
                  </div>
                  <svg
                    class="icon icon-arrow-right icon-xs transform shrink-0"
                    viewBox="0 0 21 20"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div
              class="card media-card media-card--card overflow-hidden"
              id="shopify-block-collection_bJX3yj"
            >
              <a
                href="mixlist-details.html"
                class="media-card__link flex flex-col w-full h-full relative"
              >
                <div class="media media--square relative overflow-hidden">
                  <Image
                    src={require("../../assets/images/Mixlist_Cover_Mimosa_Series.jpg")}
                    alt="Mimosa Series"
                    loading="lazy"
                    is="lazy-image"
                  />
                </div>
                <div class="media-card__content flex justify-between items-center gap-4 w-full">
                  <div class="media-card__text shrink-1 relative">
                    <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                      Mimosa Series
                    </span>
                    <p class="leading-none text-xs xl:text-sm">
                      Brunch beautifully with our Mimosa Series
                    </p>
                    <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                      10
                    </small>
                  </div>
                  <svg
                    class="icon icon-arrow-right icon-xs transform shrink-0"
                    viewBox="0 0 21 20"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div
              class="card media-card media-card--card overflow-hidden"
              id="shopify-block-collection_dmfgmG"
            >
              <a
                href="mixlist-details.html"
                class="media-card__link flex flex-col w-full h-full relative"
              >
                <div class="media media--square relative overflow-hidden">
                  <Image
                    src={require("../../assets/images/Mixlist_Cover_Mothers_Day.jpg")}
                    alt="Mother’s Day"
                    loading="lazy"
                    is="lazy-image"
                  />
                </div>
                <div class="media-card__content flex justify-between items-center gap-4 w-full">
                  <div class="media-card__text shrink-1 relative">
                    <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                      Mother’s Day
                    </span>
                    <p class="leading-none text-xs xl:text-sm">
                      Cheers to Mom with our Mother’s Day Mixlist
                    </p>
                    <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                      7
                    </small>
                  </div>
                  <svg
                    class="icon icon-arrow-right icon-xs transform shrink-0"
                    viewBox="0 0 21 20"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div
              ref={LastSlideItem}
              class="card media-card media-card--card overflow-hidden"
              id="shopify-block-collection_LPgnmB"
            >
              <a
                href="mixlist-details.html"
                class="media-card__link flex flex-col w-full h-full relative"
              >
                <div class="media media--square relative overflow-hidden">
                  <Image
                    src={require("../../assets/images/Mixlist_Cover_Memorial.jpg")}
                    alt="Memorial Day"
                    loading="lazy"
                    is="lazy-image"
                  />
                </div>
                <div class="media-card__content flex justify-between items-center gap-4 w-full">
                  <div class="media-card__text shrink-1 relative">
                    <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                      Memorial Day
                    </span>
                    <p class="leading-none text-xs xl:text-sm">
                      Salute to service with our Memorial Day Mixlist
                    </p>
                    <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                      10
                    </small>
                  </div>
                  <svg
                    class="icon icon-arrow-right icon-xs transform shrink-0"
                    viewBox="0 0 21 20"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </motion-list>
        </slider-element>
        <p class="hidden lg:block"></p>
      </div>
    </div>
  );
};

export default MixlistSlider;
