import React from "react";
import "./pagecontent.css";
import Image from "next/image";
import Link from "next/link";
import MixlistSlider from "@/components/homePageComponents/MixlistSlider";
import Barsys360ProductView from "@/components/homePageComponents/Barsys360ProductView";
import SlideProductView from "@/components/homePageComponents/SlideProductView";
import MarqueeMixology from "@/components/homePageComponents/MarqueeMixology";
import MarqueeBrands from "@/components/homePageComponents/MarqueeBrands";
const PageContent = () => {
  const videoData = [
    {
      mobilePoster: require("../../../assets/images/banner-barsys-360-video-mobile-poster.jpg"),
      mobileVideo: "../../../assets/videos/banner-barsys-360-video-mobile.mp4",
      desktopPoster: require("../../../assets/images/banner-barsys-360-video-desktop-poster.jpg"),
      desktopVideo:
        "../../../assets/videos/banner-barsys-360-video-desktop.mp4",
    },
    {
      mobilePoster: require("../../../assets/images/banner-coaster-2-0-video-mobile-poster.jpg"),
      mobileVideo: "../../../assets/videos/banner-coaster-2-0-video-mobile.mp4",
      desktopPoster: require("../../../assets/images/banner-coaster-2-0-video-desktop-poster.jpg"),
      desktopVideo:
        "../../../assets/videos/banner-coaster-2-0-video-desktop.mp4",
    },
    {
      mobilePoster: require("../../../assets/images/banner-barsys-2-0-video-mobile-poster.jpg"),
      mobileVideo: "../../../assets/videos/banner-barsys-2-0-video-mobile.mp4",
      desktopPoster: require("../../../assets/images/banner-barsys-2-0-video-desktop-poster.jpg"),
      desktopVideo:
        "../../../assets/videos/banner-barsys-2-0-video-desktop.mp4",
    },
  ];

  return (
    <div class="page-container" id="PageContainer">
      <main class="main-content relative" id="MainContent" role="main">
        <div
          id="shopify-section-template--15951546220625__slideshow"
          class="shopify-section"
        >
          <div class="section section--padding">
            <div class="relative">
              <div class="relative">
                <button
                  type="button"
                  class="slideshow-control flex items-center justify-center rounded-full sr-only"
                  is="control-button"
                  aria-controls="Slider-template--15951546220625__slideshow"
                  aria-live="polite"
                >
                  <span class="slideshow-control__pause">
                    <svg
                      class="icon icon-pause icon-md"
                      viewBox="0 0 36 36"
                      stroke="currentColor"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="6"
                        d="M9 4V32"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeWidth="6"
                        d="M27 4V32"
                      ></path>
                    </svg>
                    <span class="sr-only">Pause slideshow</span>
                  </span>
                  <span class="slideshow-control__play">
                    <svg
                      class="icon icon-play icon-md"
                      viewBox="0 0 36 36"
                      stroke="none"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M34 17.5006C34 18.3302 33.5707 19.0963 32.8683 19.5206L9.535 33.6629C9.164 33.8869 8.74867 34 8.33333 34C7.93667 34 7.54 33.8986 7.183 33.6936C6.45267 33.274 6 32.4915 6 31.6429V3.35817C6 2.50962 6.45267 1.72708 7.183 1.30752C7.91333 0.885606 8.814 0.899749 9.535 1.33816L32.8683 15.4805C33.5707 15.9048 34 16.6709 34 17.5006"></path>
                    </svg>
                    <span class="sr-only">Play slideshow</span>
                  </span>
                </button>
                <slideshow-element
                  class="slideshow block"
                  id="Slider-template--15951546220625__slideshow"
                  autoPlay
                  autoPlay-speed="7"
                >
                  {videoData?.map((data, id) => {
                    return (
                      <div
                        class="banner media--750px mobile:media--500px w-full overflow-hidden"
                        data-type="video"
                        key={id}
                      >
                        <media-element class="banner__media block w-full h-full overflow-hidden">
                          <animate-element
                            data-animate="zoom-out"
                            class="media media--height block w-full h-full relative overflow-hidden"
                            paused
                          >
                            <video-media class="media deferred-media mobile:deferred-media block banner__image">
                              <Image
                                src={require("../../../assets/images/banner-barsys-360-video-mobile-poster.jpg")}
                                alt="Load video: "
                                loading="eager"
                                fetchpriority="high"
                                sizes="100vw"
                                is="lazy-image"
                              />

                              <template>
                                <video
                                  playsInline="true"
                                  muted="muted"
                                  autoPlay="autoPlay"
                                  loop="loop"
                                  preload="none"
                                  poster={data?.mobilePoster}
                                >
                                  <source
                                    src={data?.mobileVideo}
                                    type="video/mp4"
                                  />
                                  <Image src={data?.mobilePoster} alt=" " />
                                </video>
                              </template>
                            </video-media>
                            <video-media class="media deferred-media block banner__image">
                              <Image
                                src={data?.desktopPoster}
                                alt="Load video: "
                                loading="eager"
                                fetchpriority="high"
                                is="lazy-image"
                              />
                              <template>
                                <video
                                  playsInline="true"
                                  muted="muted"
                                  autoPlay="autoPlay"
                                  loop="loop"
                                  preload="none"
                                  poster={data?.desktopPoster}
                                >
                                  <source
                                    src={data?.desktopVideo}
                                    type="video/mp4"
                                  />
                                  <Image
                                    src={data?.desktopPoster}
                                    alt="Load video: "
                                    loading="eager"
                                    fetchpriority="high"
                                    is="lazy-image"
                                  />
                                </video>
                              </template>
                            </video-media>
                          </animate-element>
                        </media-element>
                        <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                      </div>
                    );
                  })}
                </slideshow-element>
                <div class="page-width absolute bottom-0 left-0 w-full pointer-events-none">
                  <div class="slideshow-content">
                    <slideshow-words
                      class="slideshow-words grid items-center"
                      aria-controls="Slider-template--15951546220625__slideshow"
                    >
                      <div
                        class="slideshow-word flex flex-col md:flex-row md:items-end justify-between gap-6"
                        data-index="0"
                        aria-current="true"
                      >
                        <div class="banner__box banner__box--small">
                          <h2 class="heading font-bold leading-none title-md">
                            <split-words
                              class="split-words flex flex-wrap"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                            >
                              Barsys 360
                            </split-words>
                          </h2>
                          <p>
                            Effortlessly revolutionize your home cocktails with
                            Barsys 360
                          </p>
                        </div>
                        <a
                          class="button button--primary button--blur button--fixed pointer-events-auto"
                          href="product-details.html"
                          is="hover-link"
                        >
                          <span class="btn-fill" data-fill></span>
                          <span class="btn-text">Shop Now</span>
                        </a>
                      </div>
                      <div
                        class="slideshow-word flex flex-col md:flex-row md:items-end justify-between gap-6"
                        data-index="1"
                        aria-current="false"
                      >
                        <div class="banner__box banner__box--small">
                          <h2 class="heading font-bold leading-none title-md">
                            <split-words
                              class="split-words flex flex-wrap"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                            >
                              Coaster 2.0
                            </split-words>
                          </h2>
                          <p>
                            Seamlessly enhance your cocktails with Barsys
                            Coaster 2.0
                          </p>
                        </div>
                        <a
                          class="button button--primary button--blur button--fixed pointer-events-auto"
                          href="product-details.html"
                          is="hover-link"
                        >
                          <span class="btn-fill" data-fill></span>
                          <span class="btn-text">Shop Now</span>
                        </a>
                      </div>
                      <div
                        class="slideshow-word flex flex-col md:flex-row md:items-end justify-between gap-6"
                        data-index="2"
                        aria-current="false"
                      >
                        <div class="banner__box banner__box--small">
                          <h2 class="heading font-bold leading-none title-md">
                            <split-words
                              class="split-words flex flex-wrap"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                            >
                              Barsys 2.0+
                            </split-words>
                          </h2>
                          <p>
                            Elevate your home bar experience with Barsys 2.0+
                          </p>
                        </div>
                        <a
                          class="button button--primary button--blur button--fixed pointer-events-auto"
                          href="product-details.html"
                          is="hover-link"
                        >
                          <span class="btn-fill" data-fill></span>
                          <span class="btn-text">Shop Now</span>
                        </a>
                      </div>
                    </slideshow-words>
                    <div class="slideshow-dots flex items-end justify-between">
                      <button
                        type="button"
                        is="previous-button"
                        class="hidden md:block pointer-events-auto"
                        aria-controls="Slider-template--15951546220625__slideshow"
                        aria-label="Previous"
                      >
                        <svg
                          class="icon icon-arrow-left-long icon-md transform"
                          viewBox="0 0 37 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 5L3 11.9999M3 11.9999L10 18.9999M3 11.9999H33.5"
                          ></path>
                        </svg>
                      </button>
                      <slider-dots
                        class="flickity-page-dots w-auto pointer-events-auto"
                        aria-controls="Slider-template--15951546220625__slideshow"
                      >
                        <button
                          type="button"
                          class="flickity-page-dot"
                          data-index="0"
                          aria-current="true"
                        >
                          <span class="sr-only">Page 1</span>
                        </button>
                        <button
                          type="button"
                          class="flickity-page-dot"
                          data-index="1"
                          aria-current="false"
                        >
                          <span class="sr-only">Page 2</span>
                        </button>
                        <button
                          type="button"
                          class="flickity-page-dot"
                          data-index="2"
                          aria-current="false"
                        >
                          <span class="sr-only">Page 3</span>
                        </button>
                      </slider-dots>
                      <button
                        type="button"
                        is="next-button"
                        class="hidden md:block pointer-events-auto"
                        aria-controls="Slider-template--15951546220625__slideshow"
                        aria-label="Next"
                      >
                        <svg
                          class="icon icon-arrow-right-long icon-md transform"
                          viewBox="0 0 37 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M26.5 5L33.5 11.9999M33.5 11.9999L26.5 18.9999M33.5 11.9999H3"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        class="highlighted-text inline-block not-italic relative"
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
                      Explore the innovative world of Barsys, where mixology
                      meets technology to redefine the art of cocktail-making.
                      Shop for your favorite cocktail ingredients, save your
                      go-to recipes, and digitize your entire drinking
                      experience with Barsys. Our ecosystem seamlessly connects
                      cocktail curators, bars, brands, and mixologists with
                      cocktail enthusiasts at home, using our consumer robotics
                      and SAAS-based applications. Discover how Barsys
                      revolutionizes the way you enjoy cocktails, offering a
                      world of possibilities right at your fingertips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--15951546220625__collection-list"
          class="shopify-section"
        >
          {/* <style>
                #shopify-section-template--15951546220625__collection-list {
                    --section-padding-top: 100px;
                    --section-padding-bottom: 100px;
                }
            </style> */}
          <MixlistSlider />
        </div>
        <div
          id="shopify-section-template--15951546220625__rich_text_CeG4L8"
          class="shopify-section"
        >
          {/* <style>
                #shopify-section-template--15951546220625__rich_text_CeG4L8 {
                    --section-padding-top: 36px;
                    --section-padding-bottom: 100px;
                }
            </style> */}

          <div class="section section--padding">
            <div class="page-width relative">
              <div class="collage with-richtext grid items-start">
                <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
                  <div class="grid gap-4">
                    <h2 class="heading font-bold title-md">
                      Redefining the Art of{" "}
                      <em
                        class="highlighted-text inline-block not-italic relative"
                        is="highlighted-text"
                        data-style="scribble"
                      >
                        Mixology
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
                  <p>
                    <a
                      class="button button--secondary icon-with-text"
                      href="our-story.html"
                      is="hover-link"
                    >
                      <span class="btn-fill" data-fill></span>
                      <span class="btn-text">
                        Our Story
                        <svg
                          class="icon icon-arrow-right icon-sm transform"
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
                      </span>
                    </a>
                  </p>
                </div>
                <div class="rich-text md:text-left text-left relative z-1">
                  <div class="rte leading-normal body subtext-md">
                    <p>
                      Embark on a journey with Barsys, where innovation meets
                      mixology to redefine the cocktail experience. From our
                      inception to pioneering AI technology, we've crafted a
                      seamless blend of art and science. Discover how Barsys
                      elevates the craft of cocktail-making, offering a world of
                      possibilities with our products, cocktail recipes and
                      ingredients that help you craft delicious cocktails at
                      home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--15951546220625__video-with-text-overlay"
          class="shopify-section"
        >
          {/* <style>
                #shopify-section-template--15951546220625__video-with-text-overlay {
                    --section-padding-top: 0px;
                    --section-padding-bottom: 0px;
                    --color-foreground: 255 255 255;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                    --color-highlight: 224 165 128;
                    --color-button-background: 255 255 255;
                    --color-button-border: 255 255 255;
                    --color-button-text: 23 23 23;
                    --color-overlay: 0 0 0;
                    --overlay-opacity: 0.5;
                    --ratio-percent: 30.46875%;
                }
            </style> */}

          <div class="section section--padding section--rounded relative">
            <div class="relative">
              <div class="video-hero banner media--adapt mobile:media--400px relative">
                <video-media
                  class="media deferred-media block banner__media media media--height w-full h-full relative"
                  autoPlay
                >
                  <Image
                    src={require("../../../assets/images/banner-future-poster-desktop.jpg")}
                    alt="Load video: "
                    loading="lazy"
                    fetchpriority="auto"
                    sizes="100vw"
                    is="lazy-image"
                  />

                  <template>
                    <video
                      playsInline="true"
                      muted="muted"
                      autoPlay="autoPlay"
                      loop="loop"
                      preload="none"
                      poster="assets/images/banner-future-poster-desktop.jpg"
                    >
                      <source
                        src="assets/images/banner-future-video-desktop.mp4"
                        type="video/mp4"
                      />
                      <Image
                        src={require("../../../assets/images/banner-future-poster-desktop.jpg")}
                      />
                    </video>
                  </template>
                  <button
                    type="button"
                    id="DeferredPoster-26061769539665"
                    class="deferred-poster absolute top-0 left-0 w-full h-full"
                    aria-label="Play video"
                  >
                    <span class="play-button absolute flex items-center justify-center rounded-full pointer-events-auto z-10">
                      <svg
                        class="icon icon-play icon-md"
                        viewBox="0 0 36 36"
                        stroke="none"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M34 17.5006C34 18.3302 33.5707 19.0963 32.8683 19.5206L9.535 33.6629C9.164 33.8869 8.74867 34 8.33333 34C7.93667 34 7.54 33.8986 7.183 33.6936C6.45267 33.274 6 32.4915 6 31.6429V3.35817C6 2.50962 6.45267 1.72708 7.183 1.30752C7.91333 0.885606 8.814 0.899749 9.535 1.33816L32.8683 15.4805C33.5707 15.9048 34 16.6709 34 17.5006"></path>
                      </svg>
                      <svg
                        class="icon icon-pause icon-md"
                        viewBox="0 0 36 36"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="6"
                          d="M9 4V32"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeWidth="6"
                          d="M27 4V32"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </video-media>
                <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                <div class="banner__content overflow-hidden absolute z-1 top-0 left-0 w-full h-full">
                  <div class="page-width w-full h-full flex md:items-center md:justify-center items-center justify-center">
                    <div class="banner__box banner__box--medium md:text-center text-center">
                      <h2 class="banner__title heading font-bold leading-none title-md">
                        <split-words
                          class="split-words flex flex-wrap"
                          data-animate="fade-up-large"
                          data-animate-delay="250"
                        >
                          Say Hello to the Future
                        </split-words>
                      </h2>
                      <div class="rte leading-normal body subtext-xl text-opacity">
                        <p>
                          Elevate your home mixology experience with the Barsys
                          360.
                        </p>
                      </div>
                      <a
                        class="button button--primary button--fixed button--md icon-with-text"
                        href="product-details.html"
                        is="hover-link"
                      >
                        <span class="btn-fill" data-fill></span>
                        <span class="btn-text">
                          Shop now
                          <svg
                            class="icon icon-arrow-right icon-sm transform"
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
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Barsys360ProductView />
        <SlideProductView />
        <MarqueeMixology />
        <div
          id="shopify-section-template--15951546220625__countdown-timer"
          class="shopify-section"
        >
          {/* <style>
                #shopify-section-template--15951546220625__countdown-timer {
                    --section-padding-top: 0px;
                    --section-padding-bottom: 0px;
                    --color-foreground: 255 255 255;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                    --color-highlight: 252 211 77;
                    --color-button-background: 255 255 255;
                    --color-button-border: 255 255 255;
                    --color-button-text: 23 23 23;
                    --color-overlay: 0 0 0;
                    --overlay-opacity: 0.5;
                    --ratio-percent: 30.081521739130434%;
                }
            </style> */}
          <div class="section section--padding section--rounded relative">
            <div class="relative">
              <div class="banner media--adapt mobile:media--500px relative">
                <media-element
                  class="banner__media block w-full h-full overflow-hidden"
                  data-parallax="0.3"
                  data-parallax-dir="vertical"
                >
                  <div class="media media--height block w-full h-full relative overflow-hidden">
                    <picture class="media media--height block w-full h-full relative overflow-hidden">
                      <Image
                        src={require("../../../assets/images/counter-banner.jpg")}
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
                  <div class="page-width w-full h-full flex md:items-center md:justify-center items-center justify-center">
                    <div class="banner__box banner__box--medium md:text-center text-center">
                      <div
                        class="rte leading-normal body subtext-custom"
                        // style="--subtext-size:32px;"
                      >
                        <p>
                          Craft Signature Cocktails - The next batch of Barsys
                          360 Ships 26 May 2024
                        </p>
                      </div>
                      <empty-element
                        class="block spacing-section"
                        // style="--spacing-height-desktop: 24px; --spacing-height-mobile: 16px;"
                      ></empty-element>
                      <animate-element data-animate="zoom-out" class="block">
                        <countdown-timer
                          class="countdown__timer heading title-lg tracking-heading flex text-center justify-center"
                          data-year="2024"
                          data-month="05"
                          data-day="26"
                          data-hour="23"
                          data-minute="59"
                        >
                          <div class="countdown__item">
                            <p>--</p>
                            <span>Days</span>
                          </div>
                          <div class="countdown__item">
                            <p>--</p>
                            <span>Hours</span>
                          </div>
                          <div class="countdown__item">
                            <p>--</p>
                            <span>Mins</span>
                          </div>
                          <div class="countdown__item">
                            <p>--</p>
                            <span>Secs</span>
                          </div>
                        </countdown-timer>
                      </animate-element>
                      <a
                        class="button button--secondary button--fixed button--md icon-with-text"
                        href="product-details.html"
                        is="hover-link"
                      >
                        <span class="btn-fill" data-fill></span>
                        <span class="btn-text">
                          Join the Waitlist
                          <svg
                            class="icon icon-arrow-right icon-sm transform"
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
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--15951546220625__shop-the-look"
          class="shopify-section"
        >
          {/* <style>
                #shopify-section-template--15951546220625__shop-the-look {
                    --section-padding-top: 100px;
                    --section-padding-bottom: 100px;
                    --color-overlay: 23 23 23;
                    --overlay-opacity: 0.4;
                }

                #shopify-block-product-2 {
                    --hotspot-color: 255 255 255;
                    --hotspot-x: 24%;
                    --hotspot-y: 55%;
                }

                #shopify-block-product-1 {
                    --hotspot-color: 255 255 255;
                    --hotspot-x: 8%;
                    --hotspot-y: 27%;
                }
            </style> */}

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
                    <h2 class="heading font-bold title-sm">
                      Bring the Bar Home.
                    </h2>
                  </div>
                </div>
                <lookbook-element class="banner block media--adapt mobile:media--adapt relative overflow-hidden">
                  <div class="banner__media w-full h-full overflow-hidden">
                    <div class="media media--height block w-full h-full relative overflow-hidden">
                      <video-media
                        class="media deferred-media block media media--height block w-full h-full relative overflow-hidden"
                        autoPlay
                      >
                        <Image
                          src={require("../../../assets/images/bathtub-gin-video-banner-desktop.jpg")}
                          alt="Load video: "
                          loading="lazy"
                          fetchpriority="auto"
                          is="lazy-image"
                        />
                        <template>
                          <video
                            playsInline="true"
                            muted="muted"
                            autoPlay
                            loop="loop"
                            preload="none"
                            poster="assets/images/bathtub-gin-video-banner-desktop.jpg"
                          >
                            <source
                              src="assets/images/bathtub-gin-video-desktop.mp4"
                              type="video/mp4"
                            />
                            <Image
                              src={require("../../../assets/images/bathtub-gin-video-banner-desktop.jpg")}
                            />
                          </video>
                        </template>
                      </video-media>
                    </div>
                  </div>
                </lookbook-element>

                <carousel-element class="block">
                  <div class="card product-card product-card--card grid leading-none relative overflow-hidden">
                    <div class="product-card__media relative h-auto">
                      <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                      <a
                        class="block relative media media--square overflow-hidden"
                        href="recipe-details.html"
                        tabIndex="-1"
                      >
                        <Image
                          src={require("../../../assets/images/Product-The-Passion-of-the-Negroni.jpg")}
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
                          src={require("../../../assets/images/Product-Espresso-Martini.jpg")}
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
                </carousel-element>
              </shop-the-look>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--15951546220625__testimonials-banner"
          class="shopify-section"
        >
          {/* <style>
                #shopify-section-template--15951546220625__testimonials-banner {
                    --section-padding-top: 0px;
                    --section-padding-bottom: 0px;
                    --color-foreground: 255 255 255;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                    --color-overlay: 23 23 23;
                    --overlay-opacity: 0.41;
                }
            </style> */}
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
                        src={require("../../../assets/images/testimonial-banner.jpg")}
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
                        <div class="testimonial with-quote flex flex-col">
                          <blockquote>
                            <p>
                              This high-tech machine crafts personalized
                              cocktails in a simply load in the correct spirits
                              and mixers and let the 360 do its thing. Your
                              boss’s next happy hour just got a whole lot
                              better.
                            </p>
                            <a
                              class="testimonial-image-link"
                              href="https://streaklinks.com/B7LFO9BHh_vrOKfNyg2YWOPx/https%3A%2F%2Frobbreport.com%2Flifestyle%2Fproduct-recommendations%2Fgallery%2Fbest-boss-gifts-1234858015%2F"
                            >
                              <figure class="inline-block media media--adapt media--transparent relative overflow-hidden">
                                <Image
                                  src={require("../../../assets/images/testimonial-Robb_Report.png")}
                                  alt=""
                                  loading="lazy"
                                  is="lazy-image"
                                />
                              </figure>
                            </a>
                          </blockquote>
                        </div>
                        <div class="testimonial with-quote flex flex-col">
                          <blockquote>
                            <p>
                              If you don’t want to gift an expensive mixology
                              class, then Barsys’ Smart Coaster System is an
                              ingenious alternative.
                            </p>
                            <figure class="inline-block media media--adapt media--transparent relative overflow-hidden">
                              <Image
                                src={require("../../../assets/images/testimonial-RollingStone.png")}
                                alt=""
                                loading="lazy"
                                is="lazy-image"
                              />
                            </figure>
                          </blockquote>
                        </div>
                        <div class="testimonial with-quote flex flex-col">
                          <blockquote>
                            <p>
                              It is a game-changer for cocktail enthusiasts who
                              want to elevate their home bartending expertise.
                            </p>
                            <a
                              class="testimonial-image-link"
                              href="https://streaklinks.com/B7LFO9FV1eM34cz_WQFzboRM/https%3A%2F%2Fwww.fb101.com%2Feditors-top-pick-trending-tech-and-appliances%2F"
                            >
                              <figure class="inline-block media media--adapt media--transparent relative overflow-hidden">
                                <Image
                                  src={require("../../../assets/images/testimonial-Food_Beverage.png")}
                                  alt=""
                                  loading="lazy"
                                  is="lazy-image"
                                />
                              </figure>
                            </a>
                          </blockquote>
                        </div>
                        <div class="testimonial with-quote flex flex-col">
                          <blockquote>
                            <p>
                              Get yourself the Barsys 360, which literally acts
                              as your own personal bartender at home!
                            </p>
                            <a
                              class="testimonial-image-link"
                              href="https://streaklinks.com/B7LFO9BQ0GxuzdmDkgFYk2aN/https%3A%2F%2Fhiconsumption.com%2Fvices%2Fbest-gifts-for-the-mixologist-2023%2F"
                            >
                              <figure class="inline-block media media--adapt media--transparent relative overflow-hidden">
                                <Image
                                  src={require("../../../assets/images/testimonial-HiConsumption.png")}
                                  alt=""
                                  loading="lazy"
                                  is="lazy-image"
                                />
                              </figure>
                            </a>
                          </blockquote>
                        </div>
                      </testimonials-element>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--15951546220625__featured-collections"
          class="shopify-section featured-collections"
        >
          {/* <style>
                #shopify-section-template--15951546220625__featured-collections {
                    --section-padding-top: 100px;
                    --section-padding-bottom: 100px;
                }
            </style> */}

          <div class="section section--padding section--rounded relative">
            <div class="page-width relative">
              <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
                <div class="grid gap-4">
                  <h2 class="heading font-bold title-md">
                    <split-words
                      class="split-words flex flex-wrap"
                      data-animate="fade-up-large"
                    >
                      Leaderboard
                    </split-words>
                  </h2>
                </div>
              </div>
              <tabs-element
                class="tab-list flex gap-6 justify-between"
                role="tablist"
              >
                <div class="scroll-area grid">
                  <div class="flex gap-4">
                    <button
                      class="tab__item button button--primary whitespace-nowrap"
                      disabled
                      type="button"
                      is="hover-button"
                      role="tab"
                      aria-controls="TabPanel-collection-1"
                      data-index="0"
                    >
                      <span class="btn-fill" data-fill></span>
                      <span class="btn-text">Top Cocktails</span>
                    </button>
                    <button
                      class="tab__item button button--secondary whitespace-nowrap"
                      type="button"
                      is="hover-button"
                      role="tab"
                      aria-controls="TabPanel-collection-2"
                      data-index="1"
                    >
                      <span class="btn-fill" data-fill></span>
                      <span class="btn-text">New Cocktails</span>
                    </button>
                    <button
                      class="tab__item button button--secondary whitespace-nowrap"
                      type="button"
                      is="hover-button"
                      role="tab"
                      aria-controls="TabPanel-collection-3"
                      data-index="2"
                    >
                      <span class="btn-fill" data-fill></span>
                      <span class="btn-text">Cocktails of the Week</span>
                    </button>
                  </div>
                </div>
                <div class="indicators hidden lg:flex gap-2d5" data-index="0">
                  <button
                    class="button button--secondary"
                    type="button"
                    is="previous-button"
                    aria-controls="Slider-collection-1"
                    aria-label="Previous"
                    disabled
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
                    class="button button--secondary"
                    type="button"
                    is="next-button"
                    aria-controls="Slider-collection-1"
                    aria-label="Next"
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
                <div
                  class="indicators hidden lg:flex gap-2d5"
                  hidden
                  data-index="1"
                >
                  <button
                    class="button button--secondary"
                    type="button"
                    is="previous-button"
                    aria-controls="Slider-collection-2"
                    aria-label="Previous"
                    disabled
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
                    class="button button--secondary"
                    type="button"
                    is="next-button"
                    aria-controls="Slider-collection-2"
                    aria-label="Next"
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
                <div
                  class="indicators hidden lg:flex gap-2d5"
                  hidden
                  data-index="2"
                >
                  <button
                    class="button button--secondary"
                    type="button"
                    is="previous-button"
                    aria-controls="Slider-collection-3"
                    aria-label="Previous"
                    disabled
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
                    class="button button--secondary"
                    type="button"
                    is="next-button"
                    aria-controls="Slider-collection-3"
                    aria-label="Next"
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
              </tabs-element>
              <div id="TabPanel-collection-1" role="tabpanel">
                <slider-element
                  id="Slider-collection-1"
                  class="grid slider slider--desktop slider--tablet"
                  selector=".card-grid>.card"
                >
                  <motion-list class="product-grid card-grid card-grid--4 mobile:card-grid--1 grid">
                    <div class="card product-card product-card--card grid leading-none relative overflow-hidden">
                      <div class="product-card__media relative h-auto">
                        <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                        <a
                          class="block relative media media--square overflow-hidden"
                          href="recipe-details.html"
                          tabIndex="-1"
                        >
                          <Image
                            src={require("../../../assets/images/product-Watermelon_Wave_Smash.jpg")}
                            alt="Watermelon Wave Smash"
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
                              Watermelon Wave Smash
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
                            src={require("../../../assets/images/product-End-Zone-Punch.jpg")}
                            alt="End Zone Punch"
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
                              End Zone Punch
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
                            src={require("../../../assets/images/product-Coastal_Breeze_Cooler.jpg")}
                            alt="Coastal Breeze Cooler"
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
                              Coastal Breeze Cooler
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
                            src={require("../../../assets/images/product-Pineapple_Coconut_Paloma.jpg")}
                            alt="Pineapple Coconut Paloma"
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
                              Pineapple Coconut Paloma
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion-list>
                </slider-element>
              </div>
              <div id="TabPanel-collection-2" role="tabpanel" hidden>
                <slider-element
                  id="Slider-collection-2"
                  class="grid slider slider--desktop slider--tablet"
                  selector=".card-grid>.card"
                >
                  <motion-list class="product-grid card-grid card-grid--4 mobile:card-grid--1 grid">
                    <div class="card product-card product-card--card grid leading-none relative overflow-hidden">
                      <div class="product-card__media relative h-auto">
                        <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                        <a
                          class="block relative media media--square overflow-hidden"
                          href="recipe-details.html"
                          tabIndex="-1"
                        >
                          <Image
                            src={require("../../../assets/images/product-Mango_Tango_Margarita.jpg")}
                            alt="Mango Tango Margarita"
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
                              Mango Tango Margarita
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
                            src={require("../../../assets/images/product-Firework_Fizz.jpg")}
                            alt="Firework Fizz"
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
                              Firework Fizz
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
                            src={require("../../../assets/images/product-Cardamom_And_Rosemary_Gin_Fizz.jpg")}
                            alt="Cardamom And Rosemary Gin Fizz"
                            loading="lazy"
                            is="lazy-image"
                          />
                        </a>
                      </div>
                      <div class="product-card__content flex flex-col justify-start text-left">
                        <div class="product-card__top w-full">
                          <a
                            class="caption reversed-link uppercase leading-none tracking-widest"
                            href="recipe-details.html"
                            title="Spirit Type Gin"
                          >
                            Gin
                          </a>
                        </div>
                        <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                          <p class="grow">
                            <a
                              class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                              href="recipe-details.html"
                            >
                              Cardamom And Rosemary Gin Fizz
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
                            src={require("../../../assets/images/product-Passionfruit_Fizz.jpg")}
                            alt="Passionfruit Fizz"
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
                              Passionfruit Fizz
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion-list>
                </slider-element>
              </div>
              <div id="TabPanel-collection-3" role="tabpanel" hidden>
                <slider-element
                  id="Slider-collection-3"
                  class="grid slider slider--desktop slider--tablet"
                  selector=".card-grid>.card"
                >
                  <motion-list class="product-grid card-grid card-grid--4 mobile:card-grid--1 grid">
                    <div class="card product-card product-card--card grid leading-none relative overflow-hidden">
                      <div class="product-card__media relative h-auto">
                        <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                        <a
                          class="block relative media media--square overflow-hidden"
                          href="recipe-details.html"
                          tabIndex="-1"
                        >
                          <Image
                            src={require("../../../assets/images/product-Tropical_Pineapple_Fusion.jpg")}
                            alt="Tropical Pineapple Fusion"
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
                              Tropical Pineapple Fusion
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
                            src={require("../../../assets/images/product-Lemon_Zest.jpg")}
                            alt="Lemon Zest"
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
                              Lemon Zest
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
                            src={require("../../../assets/images/product-Rose_infused_Rose.jpg")}
                            alt="Rose-infused Rosé"
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
                              Rose-infused Rosé
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
                            src={require("../../../assets/images/product-Botanical_Bliss_Fizz.jpg")}
                            alt="Botanical Bliss Fizz"
                            width="1440"
                            height="1440"
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
                              Botanical Bliss Fizz
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion-list>
                </slider-element>
              </div>
            </div>
          </div>
        </div>
        <MarqueeBrands />
        <div
          id="shopify-section-template--15951546220625__blog-posts-collage"
          class="shopify-section"
        >
          <link
            rel="stylesheet"
            href="../../assets/blog.css"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              href="../../assets/blog.css"
              rel="stylesheet"
              type="text/css"
              media="all"
            />
          </noscript>
          <div class="section section--padding">
            <div class="page-width relative">
              <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
                <div class="grid gap-4">
                  <h2 class="heading font-bold title-md">
                    <split-words
                      class="split-words flex flex-wrap"
                      data-animate="fade-up-large"
                    >
                      Latest Stories
                    </split-words>
                  </h2>
                </div>
                <p>
                  <a
                    class="button button--secondary icon-with-text"
                    href="blog-list.html"
                    is="hover-link"
                  >
                    <span class="btn-fill" data-fill></span>
                    <span class="btn-text">
                      <svg
                        class="icon icon-newspaper icon-md"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12V2L15.2874 3.20562C14.6759 3.47739 14.3701 3.61328 14.0607 3.64727C13.7214 3.68455 13.3782 3.63437 13.0638 3.50149C12.777 3.38032 12.523 3.16258 12.0149 2.7271V2.7271C11.3403 2.14881 11.0029 1.85966 10.6296 1.73584C10.2208 1.60026 9.77918 1.60026 9.3704 1.73584C8.99706 1.85966 8.65972 2.14881 7.98505 2.7271V2.7271C7.47699 3.16258 7.22295 3.38032 6.93623 3.50149C6.6218 3.63437 6.2786 3.68455 5.93929 3.64727C5.62988 3.61328 5.32414 3.47739 4.71265 3.20562L2 2V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03968 22 6.15979 22 8.4 22H20M18 12H18.8C19.9201 12 20.4802 12 20.908 12.218C21.2843 12.4097 21.5903 12.7157 21.782 13.092C22 13.5198 22 14.0799 22 15.2V20C22 21.1046 21.1046 22 20 22V22C18.8954 22 18 21.1046 18 20V12ZM7 17H13M7 9H11M7 13H13"
                        ></path>
                      </svg>
                      View all
                    </span>
                  </a>
                </p>
              </div>
              <slider-element class="grid slider" selector=".card-grid>.card">
                <div class="blog-grid blog-collage with-only3 card-grid mobile:card-grid--1 grid">
                  <div class="card article-card relative flex flex-col gap-5 md:gap-8 leading-none">
                    <div class="article-card__media relative overflow-hidden">
                      <a
                        href="#"
                        class="article-card__link block relative media media--landscape"
                        aria-label="Elevate Your Cocktail Game with the New Barsys App – Launching Soon!"
                        tabIndex="-1"
                      >
                        <Image
                          src={require("../../../assets/images/Blog_cover_Barsys_App_Launch.jpg")}
                          alt="Elevate Your Cocktail Game with the New Barsys App – Launching Soon!"
                          loading="lazy"
                          is="lazy-image"
                          class="article-card__image"
                        />
                      </a>
                    </div>
                    <div class="article-card__content flex flex-col gap-5 md:gap-8">
                      <div class="grid gap-4 md:gap-5">
                        <ul class="article-card__top flex flex-wrap gap-4">
                          <li class="inline-flex gap-2 text-xs relative">
                            <svg
                              class="icon icon-calendar icon-xs stroke-1"
                              viewBox="0 0 16 16"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.33325 0.666668V3.40544M10.6666 0.666668V3.40544M14.4999 6.33333H1.49994M6.93325 14.6667H9.06659C11.0268 14.6667 12.0069 14.6667 12.7556 14.2852C13.4141 13.9496 13.9496 13.4142 14.2851 12.7556C14.6666 12.0069 14.6666 11.0269 14.6666 9.06667V7.93334C14.6666 5.97315 14.6666 4.99306 14.2851 4.24437C13.9496 3.5858 13.4141 3.05037 12.7556 2.71481C12.0069 2.33333 11.0268 2.33333 9.06659 2.33333H6.93325C4.97307 2.33333 3.99298 2.33333 3.24429 2.71481C2.58572 3.05037 2.05029 3.5858 1.71473 4.24437C1.33325 4.99306 1.33325 5.97315 1.33325 7.93333V9.06667C1.33325 11.0269 1.33325 12.0069 1.71473 12.7556C2.05029 13.4142 2.58572 13.9496 3.24429 14.2852C3.99298 14.6667 4.97307 14.6667 6.93325 14.6667Z"
                              ></path>
                            </svg>
                            <time dateTime="2024-05-01T09:55:02Z">
                              May 01, 2024
                            </time>
                          </li>
                          <li class="inline-flex gap-2 text-xs relative">
                            <svg
                              class="icon icon-comment icon-xs stroke-1"
                              viewBox="0 0 16 16"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.33325 6.66665H10.6666M5.33325 9.33331H7.99992M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C7.24034 14.6666 6.58895 14.5585 5.9841 14.3421C5.41245 14.1376 5.12661 14.0354 5.01693 14.0096C4.00499 13.7716 3.58519 14.4651 2.71302 14.6105C2.28464 14.6818 1.90348 14.3311 1.93903 13.8983C1.97011 13.5198 2.23184 13.1619 2.33628 12.7985C2.5534 12.0429 2.25878 11.4701 1.94752 10.7982C1.55335 9.94729 1.33325 8.99931 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z"
                              ></path>
                            </svg>
                            <a class="reversed-link" href="#">
                              0 comments
                            </a>
                          </li>
                        </ul>
                        <p>
                          <a
                            class="article-card__title reversed-link text-lg-2xl font-bold leading-tight tracking-tight"
                            href="#"
                          >
                            Elevate Your Cocktail Game with the New Barsys App –
                            Launching Soon!
                          </a>
                        </p>
                        <div class="article-card__bottom rte leading-normal">
                          Introduction Welcome to the future of cocktails with
                          Barsys, your premier partner in digitizing the
                          drinking experience through cutting-edge consumer
                          robotics and its technologies. Barsys is more than
                          just an app; it's a platform that bridges the gap
                          between the...
                        </div>
                      </div>

                      <p>
                        <a
                          class="link text-sm font-medium leading-tight"
                          href="#"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="card article-card relative flex flex-col gap-5 md:gap-8 leading-none">
                    <div class="article-card__media relative overflow-hidden">
                      <a
                        href="#"
                        class="article-card__link block relative media media--landscape"
                        aria-label="Spooky Sips: Unleash the Halloween Spirit with These Ghoulishly Good Cocktails!"
                        tabIndex="-1"
                      >
                        <Image
                          src={require("../../../assets/images/Blog_Cover_Spooky_Sips.png")}
                          alt="Spooky Sips: Unleash the Halloween Spirit with These Ghoulishly Good Cocktails!"
                          loading="lazy"
                          is="lazy-image"
                          class="article-card__image"
                        />
                      </a>
                    </div>
                    <div class="article-card__content flex flex-col gap-5 md:gap-8">
                      <div class="grid gap-4 md:gap-5">
                        <ul class="article-card__top flex flex-wrap gap-4">
                          <li class="inline-flex gap-2 text-xs relative">
                            <svg
                              class="icon icon-calendar icon-xs stroke-1"
                              viewBox="0 0 16 16"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.33325 0.666668V3.40544M10.6666 0.666668V3.40544M14.4999 6.33333H1.49994M6.93325 14.6667H9.06659C11.0268 14.6667 12.0069 14.6667 12.7556 14.2852C13.4141 13.9496 13.9496 13.4142 14.2851 12.7556C14.6666 12.0069 14.6666 11.0269 14.6666 9.06667V7.93334C14.6666 5.97315 14.6666 4.99306 14.2851 4.24437C13.9496 3.5858 13.4141 3.05037 12.7556 2.71481C12.0069 2.33333 11.0268 2.33333 9.06659 2.33333H6.93325C4.97307 2.33333 3.99298 2.33333 3.24429 2.71481C2.58572 3.05037 2.05029 3.5858 1.71473 4.24437C1.33325 4.99306 1.33325 5.97315 1.33325 7.93333V9.06667C1.33325 11.0269 1.33325 12.0069 1.71473 12.7556C2.05029 13.4142 2.58572 13.9496 3.24429 14.2852C3.99298 14.6667 4.97307 14.6667 6.93325 14.6667Z"
                              ></path>
                            </svg>
                            <time dateTime="2023-10-23T22:23:46Z">
                              Oct 23, 2023
                            </time>
                          </li>
                          <li class="inline-flex gap-2 text-xs relative">
                            <svg
                              class="icon icon-comment icon-xs stroke-1"
                              viewBox="0 0 16 16"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.33325 6.66665H10.6666M5.33325 9.33331H7.99992M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C7.24034 14.6666 6.58895 14.5585 5.9841 14.3421C5.41245 14.1376 5.12661 14.0354 5.01693 14.0096C4.00499 13.7716 3.58519 14.4651 2.71302 14.6105C2.28464 14.6818 1.90348 14.3311 1.93903 13.8983C1.97011 13.5198 2.23184 13.1619 2.33628 12.7985C2.5534 12.0429 2.25878 11.4701 1.94752 10.7982C1.55335 9.94729 1.33325 8.99931 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z"
                              ></path>
                            </svg>
                            <a class="reversed-link" href="#">
                              0 comments
                            </a>
                          </li>
                        </ul>
                        <p>
                          <a
                            class="article-card__title reversed-link text-lg-2xl font-bold leading-tight tracking-tight"
                            href="#"
                          >
                            Spooky Sips: Unleash the Halloween Spirit with These
                            Ghoulishly Good Cocktails!
                          </a>
                        </p>
                        <div class="article-card__bottom rte leading-normal">
                          Estimated Reading Time: 5 minutes Introduction As the
                          leaves turn shades of fiery orange and the chill of
                          autumn fills the air, it's time to embrace all things
                          spooky and sip on some chilling concoctions. Enter
                          Spooky Sips – a...
                        </div>
                      </div>

                      <p>
                        <a
                          class="link text-sm font-medium leading-tight"
                          href="#"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="card article-card relative flex flex-col gap-5 md:gap-8 leading-none">
                    <div class="article-card__media relative overflow-hidden">
                      <a
                        href="#"
                        class="article-card__link block relative media media--landscape"
                        aria-label="Pumpkin Patch Party: The Ultimate Autumn Cocktail Mixlist"
                        tabIndex="-1"
                      >
                        <Image
                          src={require("../../../assets/images/Blog_cover_Pumpkin_Patch_Party.png")}
                          alt="Pumpkin Patch Party: The Ultimate Autumn Cocktail Mixlist"
                          loading="lazy"
                          is="lazy-image"
                          class="article-card__image"
                        />
                      </a>
                    </div>
                    <div class="article-card__content flex flex-col gap-5 md:gap-8">
                      <div class="grid gap-4 md:gap-5">
                        <ul class="article-card__top flex flex-wrap gap-4">
                          <li class="inline-flex gap-2 text-xs relative">
                            <svg
                              class="icon icon-calendar icon-xs stroke-1"
                              viewBox="0 0 16 16"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.33325 0.666668V3.40544M10.6666 0.666668V3.40544M14.4999 6.33333H1.49994M6.93325 14.6667H9.06659C11.0268 14.6667 12.0069 14.6667 12.7556 14.2852C13.4141 13.9496 13.9496 13.4142 14.2851 12.7556C14.6666 12.0069 14.6666 11.0269 14.6666 9.06667V7.93334C14.6666 5.97315 14.6666 4.99306 14.2851 4.24437C13.9496 3.5858 13.4141 3.05037 12.7556 2.71481C12.0069 2.33333 11.0268 2.33333 9.06659 2.33333H6.93325C4.97307 2.33333 3.99298 2.33333 3.24429 2.71481C2.58572 3.05037 2.05029 3.5858 1.71473 4.24437C1.33325 4.99306 1.33325 5.97315 1.33325 7.93333V9.06667C1.33325 11.0269 1.33325 12.0069 1.71473 12.7556C2.05029 13.4142 2.58572 13.9496 3.24429 14.2852C3.99298 14.6667 4.97307 14.6667 6.93325 14.6667Z"
                              ></path>
                            </svg>
                            <time dateTime="2023-10-23T21:58:18Z">
                              Oct 23, 2023
                            </time>
                          </li>
                          <li class="inline-flex gap-2 text-xs relative">
                            <svg
                              class="icon icon-comment icon-xs stroke-1"
                              viewBox="0 0 16 16"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.33325 6.66665H10.6666M5.33325 9.33331H7.99992M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C7.24034 14.6666 6.58895 14.5585 5.9841 14.3421C5.41245 14.1376 5.12661 14.0354 5.01693 14.0096C4.00499 13.7716 3.58519 14.4651 2.71302 14.6105C2.28464 14.6818 1.90348 14.3311 1.93903 13.8983C1.97011 13.5198 2.23184 13.1619 2.33628 12.7985C2.5534 12.0429 2.25878 11.4701 1.94752 10.7982C1.55335 9.94729 1.33325 8.99931 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z"
                              ></path>
                            </svg>
                            <a class="reversed-link" href="#">
                              0 comments
                            </a>
                          </li>
                        </ul>
                        <p>
                          <a
                            class="article-card__title reversed-link text-lg-2xl font-bold leading-tight tracking-tight"
                            href="#"
                          >
                            Pumpkin Patch Party: The Ultimate Autumn Cocktail
                            Mixlist
                          </a>
                        </p>
                        <div class="article-card__bottom rte leading-normal">
                          Estimated Reading Time: 5 minutes Introduction As the
                          leaves change their colors and the air grows crisp,
                          it's time to embrace the cozy vibes of autumn. And
                          what better way to do that than with a Pumpkin Patch
                          Party and...
                        </div>
                      </div>

                      <p>
                        <a
                          class="link text-sm font-medium leading-tight"
                          href="#"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </slider-element>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageContent;
