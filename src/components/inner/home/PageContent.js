import React from "react";
import "./pagecontent.css";
import Image from "next/image";
import Link from 'next/link'
const PageContent = () => {
  const videoData = [
    {
      mobilePoster: require("../../../assets/images/banner-barsys-360-video-mobile-poster.jpg"),
      mobileVideo: "../../../assets/videos/banner-barsys-360-video-mobile.mp4",
      desktopPoster: require("../../../assets/images/banner-barsys-360-video-desktop-poster.jpg"),
      desktopVideo: "../../../assets/videos/banner-barsys-360-video-desktop.mp4",
    },
    {
      mobilePoster: require("../../../assets/images/banner-coaster-2-0-video-mobile-poster.jpg"),
      mobileVideo: "../../../assets/videos/banner-coaster-2-0-video-mobile.mp4",
      desktopPoster: require("../../../assets/images/banner-coaster-2-0-video-desktop-poster.jpg"),
      desktopVideo: "../../../assets/videos/banner-coaster-2-0-video-desktop.mp4",
    },
    {
      mobilePoster: require("../../../assets/images/banner-barsys-2-0-video-mobile-poster.jpg"),
      mobileVideo: "../../../assets/videos/banner-barsys-2-0-video-mobile.mp4",
      desktopPoster: require("../../../assets/images/banner-barsys-2-0-video-desktop-poster.jpg"),
      desktopVideo: "../../../assets/videos/banner-barsys-2-0-video-desktop.mp4",
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
                        stroke-linecap="round"
                        stroke-width="6"
                        d="M9 4V32"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-width="6"
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
                  autoplay
                  autoplay-speed="7"
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
                                  playsinline="true"
                                  muted="muted"
                                  autoplay="autoplay"
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
                                  playsinline="true"
                                  muted="muted"
                                  autoplay="autoplay"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
          {/* <style>
                #shopify-section-template--15951546220625__rich-text {
                    --section-padding-top: 72px;
                    --section-padding-bottom: 0px;
                }
            </style> */}

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
                            stroke-linecap="round"
                            stroke-width="30"
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
                    class="button button--secondary"
                    type="button"
                    is="previous-button"
                    aria-controls="Slider-template--15951546220625__collection-list"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14 6L8 12L14 18"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    class="button button--secondary"
                    type="button"
                    is="next-button"
                    aria-controls="Slider-template--15951546220625__collection-list"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
              >
                <motion-list class="card-grid card-grid--4 mobile:card-grid--1 grid">
                  <div
                    class="card media-card media-card--card media-card--overlap overflow-hidden"
                    id="shopify-block-custom_box_D9iHh7"
                  >
                    {/* <style>
                                    #shopify-block-custom_box_D9iHh7 {
                                        --color-foreground: 255 255 255;
                                        --color-border: var(--color-foreground)/ 0.1;
                                        --color-border-dark: var(--color-foreground)/ 0.4;
                                        --color-border-light: var(--color-foreground)/ 0.06;
                                        --color-overlay: 0 0 0;
                                        --overlay-opacity: 0.3;
                                    }
                                </style> */}
                    <a
                      href="mixlist.html"
                      class="media-card__link grid w-full h-full relative"
                    >
                      <div class="media media--square relative overflow-hidden">
                        <Image
                          src={require("../../../assets/images/mixlist-all-recipes.jpg")}
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                          src={require("../../../assets/images/Mixlist_Cover_Earth_Day.jpg")}
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
                            Sip sustainably with our eco-friendly cocktail
                            selections
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                          src={require("../../../assets/images/Mixlist_Cover_Pitch_Perfect_Mixology.jpg")}
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                          src={require("../../../assets/images/Mixlist_Cover_Ice_Cube.jpg")}
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                          src={require("../../../assets/images/Mixlist_Cover_Mimosa_Series.jpg")}
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                          src={require("../../../assets/images/Mixlist_Cover_Mothers_Day.jpg")}
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div
                    class="card media-card media-card--card overflow-hidden"
                    id="shopify-block-collection_LPgnmB"
                  >
                    <a
                      href="mixlist-details.html"
                      class="media-card__link flex flex-col w-full h-full relative"
                    >
                      <div class="media media--square relative overflow-hidden">
                        <Image
                          src={require("../../../assets/images/Mixlist_Cover_Memorial.jpg")}
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                            stroke-linecap="round"
                            stroke-width="30"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                  autoplay
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
                      playsinline="true"
                      muted="muted"
                      autoplay="autoplay"
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
                          stroke-linecap="round"
                          stroke-width="6"
                          d="M9 4V32"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="6"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
          id="shopify-section-template--15951546220625__featured-product"
          class="shopify-section"
        >
          <script src="assets/js/product-popup.js" defer="defer"></script>
          {/* <style>
                #shopify-section-template--15951546220625__featured-product {
                    --section-padding-top: 120px;
                    --section-padding-bottom: 0px;
                }

                @media screen and (min-width: 1024px) {
                    #shopify-section-template--15951546220625__featured-product {
                        --product-grid: auto / minmax(0, 1.28fr) minmax(0, 0.72fr);
                    }
                }
            </style> */}
          <div class="section section--padding section--rounded relative">
            <div class="page-width relative">
              <div class="featured-product product product--thumbnail flex flex-col items-start lg:grid gap-5 w-full relative">
                <media-gallery
                  class="product__gallery product__gallery--full_width block w-full relative"
                  form="ProductForm-template--15951546220625__featured-product"
                  aria-label="Gallery Viewer"
                  data-animate="fade-up"
                  data-immediate
                >
                  <div class="product__media-container flex flex-col gap-4 items-start xl:flex-row">
                    <div class="relative w-full h-full">
                      <slider-element
                        id="SliderGallery-template--15951546220625__featured-product"
                        class="slider slider--desktop slider--tablet block w-full h-full"
                        selector=".product__media"
                      >
                        <div class="product__media-list flex gap-1">
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068050739281"
                            data-gang-option="color"
                            data-gang-connect="color_black"
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-black-1.jpg")}
                              alt=""
                              loading="eager"
                              fetchpriority="high"
                              class="w-full"
                              is="lazy-image"
                            />

                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 1 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068050772049"
                            data-gang-option="color"
                            data-gang-connect="color_black"
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-black-2.jpg")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />

                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 2 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068050804817"
                            data-gang-option="color"
                            data-gang-connect="color_black"
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-black-3.jpg")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />

                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 3 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068050837585"
                            data-gang-option="color"
                            data-gang-connect="color_black"
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-black-4.jpg")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />

                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 4 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068050870353"
                            data-gang-option="color"
                            data-gang-connect="color_black"
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-black-5.jpg")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />

                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 5 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068050903121"
                            data-gang-option="color"
                            data-gang-connect="color_black"
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-black-6.jpg")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />

                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 6 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068050935889"
                            data-gang-option="color"
                            data-gang-connect="color_black"
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-black-7.jpg")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />
                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 7 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068050968657"
                            data-gang-option="color"
                            data-gang-connect="color_white"
                            hidden
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-white-1.jpg")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />

                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 8 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068051001425"
                            data-gang-option="color"
                            data-gang-connect="color_white"
                            hidden
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-white-2.png")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />
                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 9 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068051034193"
                            data-gang-option="color"
                            data-gang-connect="color_white"
                            hidden
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-white-3.png")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />
                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 10 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068051066961"
                            data-gang-option="color"
                            data-gang-connect="color_white"
                            hidden
                          >
                            <Image
                              src={require("../../../assets/images/product-barsys-360-white-4.png")}
                              alt=""
                              loading="lazy"
                              fetchpriority="auto"
                              class="w-full"
                              is="lazy-image"
                            />
                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 11 in modal"
                              tabindex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </slider-element>
                      <div class="indicators hidden items-center justify-between opacity-0 z-1 absolute top-0 left-0 w-full h-full pointer-events-none">
                        <button
                          class="button button--secondary pointer-events-auto"
                          type="button"
                          is="previous-button"
                          aria-controls="SliderGallery-template--15951546220625__featured-product"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14 6L8 12L14 18"
                              ></path>
                            </svg>
                          </span>
                        </button>
                        <button
                          class="button button--secondary pointer-events-auto"
                          type="button"
                          is="next-button"
                          aria-controls="SliderGallery-template--15951546220625__featured-product"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 6L16 12L10 18"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <scroll-shadow class="product__thumbnails with-dots product__thumbnails--beside grid items-center relative w-full">
                      <media-dots
                        class="product__thumbnails-list scroll-area grid items-end justify-start gap-4 w-full"
                        aria-controls="SliderGallery-template--15951546220625__featured-product"
                      >
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068050739281"
                          aria-label="Go to item "
                          aria-current="true"
                          data-gang-option="color"
                          data-gang-connect="color_black"
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-black-1.jpg")}
                            alt=""
                            loading="lazy"
                            sizes="(max-width: 1280px) 90px, 98px"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068050772049"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_black"
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-black-2.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068050804817"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_black"
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-black-3.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068050837585"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_black"
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-black-4.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068050870353"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_black"
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-black-5.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068050903121"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_black"
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-black-6.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068050935889"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_black"
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-black-7.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068050968657"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_white"
                          hidden
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-white-1.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068051001425"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_white"
                          hidden
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-white-2.png")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068051034193"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_white"
                          hidden
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-white-3.png")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068051066961"
                          aria-label="Go to item "
                          aria-current="false"
                          data-gang-option="color"
                          data-gang-connect="color_white"
                          hidden
                        >
                          <Image
                            src={require("../../../assets/images/product-barsys-360-white-4.png")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                          />
                        </button>
                      </media-dots>
                      <template>
                        <slot></slot>
                        <s dir="ltr">
                          <span class="t">
                            <svg
                              class="icon icon-chevron-up icon-md"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 15L12 9L18 15"
                              ></path>
                            </svg>
                          </span>
                          <span class="b">
                            <svg
                              class="icon icon-chevron-down icon-md"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 9L12 15L18 9"
                              ></path>
                            </svg>
                          </span>
                          <span class="l">
                            <svg
                              class="icon icon-chevron-left icon-md"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14 6L8 12L14 18"
                              ></path>
                            </svg>
                          </span>
                          <span class="r">
                            <svg
                              class="icon icon-chevron-right icon-md"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 6L16 12L10 18"
                              ></path>
                            </svg>
                          </span>
                        </s>
                        {/* <style>
                                            :host {
                                                display: inline-block;
                                                position: relative
                                            }

                                            :host([hidden]) {
                                                display: none
                                            }

                                            s {
                                                position: absolute;
                                                inset: 0;
                                                pointer-events: none;
                                            }

                                            s svg {
                                                width: 24px;
                                                height: auto;
                                                stroke-width: var(--icon-weight);
                                            }

                                            s span {
                                                position: absolute;
                                                display: grid;
                                                align-items: center;
                                                justify-items: center;
                                                background-color: rgb(var(--color-background));
                                                padding: 8px;
                                                opacity: 0;
                                                transition: opacity var(--animation-short);
                                            }

                                            s .t {
                                                inset-block-start: 0;
                                                inset-inline: -5px;
                                                border-block-end: 1px solid rgb(var(--color-border));
                                                opacity: var(--t);
                                            }

                                            s .b {
                                                inset-block-end: 0;
                                                inset-inline: -5px;
                                                border-block-start: 1px solid rgb(var(--color-border));
                                                opacity: var(--b);
                                            }

                                            s .l {
                                                inset-inline-start: 0;
                                                inset-block: -5px;
                                                border-inline-end: 1px solid rgb(var(--color-border));
                                                opacity: var(--l);
                                            }

                                            s .r {
                                                inset-inline-end: 0;
                                                inset-block: -5px;
                                                border-inline-start: 1px solid rgb(var(--color-border));
                                                opacity: var(--r);
                                            }

                                            s[dir=rtl] :is(.icon-chevron-left, .icon-chevron-right) {
                                                transform: scaleX(-1);
                                            }
                                        </style> */}
                      </template>
                    </scroll-shadow>
                  </div>
                  <spinning-text
                    class="product__spinning text-xs md:text-base lg:text-lg uppercase flex items-center justify-center absolute top-0 z-10"
                    data-string="Pre-Order Pre-Order"
                  >
                    <svg
                      class="icon icon-barsys-icon icon-md absolute"
                      width="41"
                      height="47"
                      viewBox="0 0 728 837"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M79.414 453.723C71.8022 459.855 64.5527 466.422 57.702 473.394V491.523C64.554 498.465 71.8035 505.002 79.414 511.103C88.6593 500.58 98.94 491.014 110.101 482.549C98.9504 473.971 88.6719 464.316 79.414 453.723ZM678.465 482.368C669.167 472.029 659.056 462.45 648.231 453.723C581.463 399.652 478.796 364.935 363.8 364.935C248.803 364.935 146.227 399.652 79.414 453.723C71.8022 459.855 64.5527 466.422 57.702 473.394C54.7104 476.294 51.9002 479.286 49.1352 482.458C17.9497 517.176 0 557.514 0 600.617C0 730.514 163.18 836.299 363.8 836.299C564.42 836.299 727.6 730.605 727.6 600.617C727.6 557.56 709.65 517.176 678.465 482.504V482.368ZM363.8 793.65C186.75 793.65 42.6534 707.036 42.6534 600.707C42.8259 580.274 48.0584 560.203 57.8834 542.285C63.8746 531.063 71.1618 520.582 79.5954 511.058C88.8406 500.535 99.1213 490.968 110.282 482.504C169.208 437.18 260.951 407.584 364.117 407.584C467.283 407.584 559.026 436.954 617.952 482.504C629.113 490.968 639.394 500.535 648.639 511.058C672.073 537.889 685.354 568.392 685.354 600.662C684.946 706.991 540.85 793.65 363.8 793.65ZM79.414 453.723C71.8022 459.855 64.5527 466.422 57.702 473.394V491.523C64.554 498.465 71.8035 505.002 79.414 511.103C88.6593 500.58 98.94 491.014 110.101 482.549C98.9504 473.971 88.6719 464.316 79.414 453.723Z"
                        fill="black"
                      />
                      <path
                        d="M57.8838 399.789V450.687C64.7344 443.716 71.984 437.148 79.5958 431.016C71.1519 421.5 63.8639 411.018 57.8838 399.789ZM363.982 105.82C163.361 105.82 0.181641 211.56 0.181641 341.503C0.181641 384.605 18.3127 425.034 49.3168 459.752C52.0818 462.834 54.9828 465.734 57.8838 468.816C64.7474 475.746 71.9962 482.283 79.5958 488.396C146.318 542.784 248.985 577.275 363.982 577.275C478.978 577.275 581.554 542.558 648.413 488.396C659.206 479.666 669.314 470.12 678.646 459.842C709.832 425.124 727.781 384.696 727.781 341.593C727.6 211.56 564.42 105.82 363.8 105.82H363.982ZM648.231 431.062C638.965 441.591 628.686 451.185 617.545 459.706C558.619 505.03 466.83 534.49 363.71 534.49C260.589 534.49 168.801 505.166 109.875 459.706C98.7328 451.185 88.4547 441.591 79.1879 431.062C70.8838 421.509 63.7332 411.013 57.8838 399.789C48.108 381.877 42.9367 361.817 42.835 341.412C42.835 235.038 186.932 148.47 363.982 148.47C541.031 148.47 685.128 235.038 685.128 341.412C684.947 373.773 671.666 404.185 648.231 431.062ZM57.8838 399.789V450.687C64.7344 443.716 71.984 437.148 79.5958 431.016C71.1519 421.5 63.8639 411.018 57.8838 399.789Z"
                        fill="black"
                      />
                      <path
                        d="M68.5358 440.127L57.8838 542.286C48.1292 560.206 42.9594 580.26 42.835 600.663H0.181641V341.412L42.835 364.074C42.6537 384.651 58.7904 421.997 68.5358 440.127Z"
                        fill="black"
                      />
                      <path
                        d="M340.864 720.77C339.479 720.761 338.109 720.484 336.83 719.954C334.293 718.883 332.283 716.852 331.238 714.305C330.194 711.757 330.199 708.9 331.254 706.357L623.754 6.78831C624.249 5.47111 625.004 4.26716 625.974 3.24837C626.945 2.22957 628.111 1.41686 629.403 0.858768C630.694 0.300679 632.085 0.00867415 633.493 0.000190335C634.9 -0.00829348 636.294 0.266916 637.593 0.809389C638.891 1.35186 640.067 2.15046 641.05 3.15747C642.032 4.16449 642.802 5.35925 643.313 6.67039C643.823 7.98153 644.064 9.38214 644.022 10.7885C643.979 12.1949 643.653 13.5783 643.063 14.8559L350.519 714.334C349.723 716.239 348.382 717.866 346.664 719.011C344.946 720.156 342.928 720.768 340.864 720.77Z"
                        fill="black"
                      />
                    </svg>
                  </spinning-text>
                </media-gallery>
                <animate-element
                  class="product__info block sticky w-full"
                  data-animate="fade-up"
                  data-immediate
                >
                  <p class="product__vendor text-base">
                    <a class="reversed-link" href="#" title="Barsys">
                      Barsys
                    </a>
                  </p>
                  <div class="product__title with-price">
                    <h1 class="leading-none font-bold product-title-md col-span-full">
                      <split-words
                        class="split-words flex flex-wrap"
                        data-animate="fade-up"
                      >
                        Barsys 360
                      </split-words>
                    </h1>
                    <div
                      id="Price-template--15951546220625__featured-product"
                      class="product__price"
                    >
                      <div class="price flex items-baseline gap-2 lg:flex-col xl:items-end lg:gap-1d5">
                        <span class="price__regular whitespace-nowrap">
                          Rs. 55,700.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <form
                    method="post"
                    action="/cart/add"
                    id="ProductFormInstallment-template--15951546220625__featured-product"
                    accept-charset="UTF-8"
                    class="installment text-sm leading-tight"
                    enctype="multipart/form-data"
                  >
                    <input type="hidden" name="form_type" value="product" />
                    <input type="hidden" name="utf8" value="✓" />
                    <input type="hidden" name="id" value="41307125645393" />

                    <input
                      type="hidden"
                      name="product-id"
                      value="7423884132433"
                    />
                    <input
                      type="hidden"
                      name="section-id"
                      value="template--15951546220625__featured-product"
                    />
                  </form>
                  <div class="product__text rte text-base">
                    <p>
                      Discover Barsys 360, your gateway to unparalleled cocktail
                      mastery at home. With cutting-edge technology and expert
                      curation, Barsys 360 revolutionizes your mixology journey.
                      Craft personalized cocktails effortlessly, guided by top
                      bars, mixologists, and brands. Elevate your home cocktail
                      experience to new heights with Barsys 360, redefining how
                      you savor and celebrate cocktails with precision and
                      innovation.
                    </p>
                  </div>
                  <variant-radios
                    class="variant-picker grid gap-5 no-js-hidden"
                    form="ProductForm-template--15951546220625__featured-product"
                    data-section="template--15951546220625__featured-product"
                    data-url="/products/barsys-360"
                    data-update-url="false"
                  >
                    <fieldset
                      class="js product-form__input variant-input-wrapper"
                      data-option-index="option1"
                      data-option-slug="color"
                    >
                      <legend class="sr-only">Color</legend>
                      <div class="form__label flex items-center justify-between gap-2 w-full">
                        <div class="flex gap-2">
                          Color:
                          <span
                            class="font-medium"
                            id="template--15951546220625__featured-product-option1"
                          >
                            Black
                          </span>
                        </div>
                      </div>
                      <ul class="swatches swatches--round flex items-center flex-wrap gap-4">
                        <li>
                          <magnet-element class="block">
                            <input
                              type="radio"
                              class="sr-only"
                              id="template--15951546220625__featured-product-color-0"
                              name="Color"
                              value="Black"
                              form="ProductForm-template--15951546220625__featured-product"
                              checked
                              data-option-value="Black"
                            />
                            <label
                              for="template--15951546220625__featured-product-color-0"
                              class="color-swatch relative"
                              title="Black"
                              // style="--swatch-background: black;"
                            >
                              <span class="tooltip opacity-0 pointer-events-none text-sm rounded-full z-10">
                                Black
                              </span>
                            </label>
                          </magnet-element>
                        </li>
                        <li>
                          <magnet-element class="block">
                            <input
                              type="radio"
                              class="sr-only"
                              id="template--15951546220625__featured-product-color-1"
                              name="Color"
                              value="White"
                              form="ProductForm-template--15951546220625__featured-product"
                              data-option-value="White"
                            />
                            <label
                              for="template--15951546220625__featured-product-color-1"
                              class="color-swatch relative"
                              title="White"
                              // style="--swatch-background: white;"
                            >
                              <span class="tooltip opacity-0 pointer-events-none text-sm rounded-full z-10">
                                White
                              </span>
                            </label>
                          </magnet-element>
                        </li>
                      </ul>
                    </fieldset>
                    {/* <script type="application/json">
            [{"id":41307125645393,"title":"Black","option1":"Black","option2":null,"option3":null,"sku":"barsys360","requires_shipping":true,"taxable":true,"featured_image":{"id":33020007972945,"product_id":7423884132433,"position":1,"created_at":"2024-04-25T15:19:30-04:00","updated_at":"2024-04-25T15:19:32-04:00","alt":"#color_black","width":1500,"height":1500,"src":"\/\/barsys.com\/cdn\/shop\/files\/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?v=1714072772","variant_ids":[41307125645393]},"available":true,"name":"Barsys 360 - Black","public_title":"Black","options":["Black"],"price":5570000,"weight":0,"compare_at_price":null,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":"#color_black","id":26068050739281,"position":1,"preview_image":{"aspect_ratio":1.0,"height":1500,"width":1500,"src":"\/\/barsys.com\/cdn\/shop\/files\/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?v=1714072772"}},"requires_selling_plan":false,"selling_plan_allocations":[],"quantity_rule":{"min":1,"max":null,"increment":1}},{"id":41307125678161,"title":"White","option1":"White","option2":null,"option3":null,"sku":"barsys361","requires_shipping":true,"taxable":true,"featured_image":{"id":33020008071249,"product_id":7423884132433,"position":8,"created_at":"2024-04-25T15:19:30-04:00","updated_at":"2024-04-25T15:19:33-04:00","alt":"#color_white","width":1920,"height":1080,"src":"\/\/barsys.com\/cdn\/shop\/files\/product-360-info-image-1_a674e9f5-006c-43d6-a46d-3265b008e84e.webp?v=1714072773","variant_ids":[41307125678161]},"available":true,"name":"Barsys 360 - White","public_title":"White","options":["White"],"price":5570000,"weight":0,"compare_at_price":null,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":"#color_white","id":26068050968657,"position":8,"preview_image":{"aspect_ratio":1.778,"height":1080,"width":1920,"src":"\/\/barsys.com\/cdn\/shop\/files\/product-360-info-image-1_a674e9f5-006c-43d6-a46d-3265b008e84e.webp?v=1714072773"}},"requires_selling_plan":false,"selling_plan_allocations":[],"quantity_rule":{"min":1,"max":null,"increment":1}}]
          </script> */}
                  </variant-radios>
                  <noscript>
                    <div class="product-form__input">
                      <label
                        class="form__label flex gap-2"
                        for="Variants-template--15951546220625__featured-product"
                      >
                        Product variants
                      </label>
                      <div class="field">
                        <select
                          name="id"
                          id="Variants-template--15951546220625__featured-product"
                          class="select"
                          form="ProductForm-template--15951546220625__featured-product"
                        >
                          <option selected value="41307125645393">
                            Black - Rs. 55,700.00
                          </option>
                          <option value="41307125678161">
                            White - Rs. 55,700.00
                          </option>
                        </select>
                        <svg
                          class="icon icon-chevron-up icon-sm absolute"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 15L12 9L18 15"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </noscript>
                  <div
                    class="product__inventory no-js-hidden"
                    id="Inventory-template--15951546220625__featured-product"
                    role="status"
                  >
                    <div class="alert alert--success inline-flex items-center gap-3">
                      <svg
                        class="icon icon-ellipse icon-xs flex-auto"
                        viewBox="0 0 16 16"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          fill="currentColor"
                          cx="8"
                          cy="8"
                          r="5"
                        ></circle>
                        <circle
                          cx="8"
                          cy="8"
                          r="6.5"
                          stroke-opacity="0.3"
                          stroke-width="3"
                        ></circle>
                      </svg>
                      <span class="text-sm font-medium leading-tight">
                        Pre-Order
                      </span>
                    </div>
                  </div>

                  <div class="product-form-wrapper">
                    <form
                      method="post"
                      action="/cart/add"
                      id="ProductForm-template--15951546220625__featured-product"
                      accept-charset="UTF-8"
                      class="product-form grid gap-2"
                      enctype="multipart/form-data"
                      novalidate="novalidate"
                      data-type="add-to-cart-form"
                      data-hide-errors="false"
                      is="product-form"
                    >
                      <input type="hidden" name="form_type" value="product" />
                      <input type="hidden" name="utf8" value="✓" />
                      <input
                        type="hidden"
                        name="id"
                        value="41307125645393"
                        disabled
                      />
                      <div class="product-form__buttons grid gap-4">
                        <div
                          class="product-form__error-message alert alert--error text-sm font-medium leading-tight"
                          role="alert"
                          hidden
                        ></div>
                        <div class="flex gap-4">
                          <button
                            type="submit"
                            name="add"
                            class="product-form__submit button button--primary button--fixed w-full"
                            is="hover-button"
                          >
                            <span class="btn-fill" data-fill></span>
                            <span class="btn-text">Add to cart</span>
                          </button>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="product-id"
                        value="7423884132433"
                      />
                      <input
                        type="hidden"
                        name="section-id"
                        value="template--15951546220625__featured-product"
                      />
                    </form>
                  </div>

                  <div class="flex justify-between items-center">
                    <div class="hidden sm:flex items-center gap-3">
                      <p class="leading-none">Share:</p>
                      <ul class="social-sharing flex flex-wrap items-center">
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="//www.facebook.com/sharer.php?u=https://barsys.com/products/barsys-360"
                            title="Share on Facebook"
                          >
                            <svg
                              class="icon icon-facebook icon-sm"
                              viewBox="0 0 24 24"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.03153 23L9 13H5V9H9V6.5C9 2.7886 11.2983 1 14.6091 1C16.1951 1 17.5581 1.11807 17.9553 1.17085V5.04948L15.6591 5.05052C13.8584 5.05052 13.5098 5.90614 13.5098 7.16171V9H18.75L16.75 13H13.5098V23H9.03153Z" />
                            </svg>
                            <span class="sr-only">Share on Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="//twitter.com/intent/tweet?text=Barsys%20360&amp;url=https://barsys.com/products/barsys-360"
                            title="Tweet on Twitter"
                          >
                            <svg
                              class="icon icon-twitter icon-sm"
                              viewBox="0 0 24 24"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M13.8984 10.4679L21.3339 2H19.5687L13.1074 9.35221L7.95337 2H2L9.80183 13.1157L2 22H3.7652L10.5845 14.2315L16.03 22H21.9833M4.398 3.29892H7.10408L19.5687 20.7594H16.8626" />
                            </svg>
                            <span class="sr-only">Tweet on Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="//pinterest.com/pin/create/button/?url=https://barsys.com/products/barsys-360&amp;media=//barsys.com/cdn/shop/files/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?crop=center&height=1024&v=1714072772&width=1024&amp;description=Barsys%20360"
                            title="Pin on Pinterest"
                          >
                            <svg
                              class="icon icon-pinterest icon-sm"
                              viewBox="0 0 24 24"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 1C5.95 1 1 5.95 1 12C1 16.675 3.93333 20.6167 7.96667 22.2667C7.875 21.4417 7.78333 20.0667 7.96667 19.15C8.15 18.325 9.25 13.65 9.25 13.65C9.25 13.65 8.975 12.9167 8.975 12C8.975 10.4417 9.89167 9.34167 10.9917 9.34167C11.9083 9.34167 12.3667 10.075 12.3667 10.9C12.3667 11.8167 11.725 13.2833 11.45 14.5667C11.175 15.6667 12 16.5833 13.1 16.5833C15.025 16.5833 16.5833 14.5667 16.5833 11.5417C16.5833 8.88333 14.6583 7.05 12 7.05C8.88333 7.05 7.05 9.43333 7.05 11.8167C7.05 12.7333 7.41667 13.7417 7.875 14.2917C7.96667 14.3833 7.96667 14.475 7.96667 14.5667C7.875 14.9333 7.69167 15.6667 7.69167 15.85C7.6 16.0333 7.50833 16.125 7.325 16.0333C5.95 15.3917 5.125 13.375 5.125 11.8167C5.125 8.33333 7.69167 5.125 12.3667 5.125C16.2167 5.125 19.15 7.875 19.15 11.45C19.15 15.2083 16.7667 18.325 13.4667 18.325C12.3667 18.325 11.2667 17.775 10.9 17.0417C10.9 17.0417 10.35 19.15 10.2583 19.7C9.98333 20.6167 9.34167 21.8083 8.88333 22.5417C9.8 22.8167 10.9 23 12 23C18.05 23 23 18.05 23 12C23 5.95 18.05 1 12 1Z" />
                            </svg>
                            <span class="sr-only">Pin on Pinterest</span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="//web.whatsapp.com/send?text=https://barsys.com/products/barsys-360"
                            title="Share on WhatsApp"
                          >
                            <svg
                              class="icon icon-whatsapp icon-sm"
                              viewBox="0 0 24 24"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 24L1.69 17.84C0.65 16.03 0.1 13.99 0.1 11.89C0.1 5.33 5.44 0 12 0C15.18 0 18.17 1.24 20.42 3.49C22.67 5.74 23.9 8.73 23.9 11.9C23.9 18.46 18.56 23.79 12 23.79C10.01 23.79 8.05 23.29 6.32 22.34L0.01 23.99L0 24ZM6.6 20.19L6.96 20.4C8.48 21.3 10.22 21.78 11.99 21.78C17.44 21.78 21.88 17.35 21.88 11.9C21.88 9.26 20.85 6.78 18.99 4.91C17.13 3.04 14.64 2.01 12 2.01C6.55 2.01 2.11 6.44 2.11 11.89C2.11 13.76 2.63 15.58 3.62 17.15L3.86 17.52L2.86 21.17L6.6 20.19ZM9.02 6.92C8.78 6.34 8.53 6.42 8.35 6.41C8.18 6.41 7.98 6.4 7.78 6.4C7.58 6.4 7.26 6.47 6.99 6.77C6.72 7.07 5.95 7.79 5.95 9.25C5.95 10.71 7.02 12.13 7.16 12.32C7.31 12.52 9.26 15.52 12.24 16.81C12.95 17.12 13.5 17.3 13.93 17.44C14.64 17.67 15.29 17.63 15.8 17.56C16.37 17.47 17.56 16.84 17.81 16.15C18.06 15.46 18.06 14.86 17.98 14.74C17.91 14.62 17.71 14.54 17.41 14.39C17.11 14.24 15.65 13.52 15.38 13.42C15.11 13.32 14.91 13.27 14.71 13.57C14.51 13.87 13.94 14.54 13.77 14.74C13.6 14.94 13.42 14.96 13.13 14.81C12.83 14.66 11.87 14.35 10.74 13.34C9.86 12.55 9.26 11.58 9.09 11.28C8.92 10.98 9.07 10.82 9.22 10.67C9.35 10.54 9.52 10.32 9.67 10.15C9.82 9.98 9.87 9.85 9.97 9.65C10.07 9.45 10.02 9.28 9.95 9.13C9.88 8.98 9.28 7.52 9.03 6.92H9.02Z" />
                            </svg>
                            <span class="sr-only">Share on WhatsApp</span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="mailto:?&subject=Barsys%20360&body=https://barsys.com/products/barsys-360"
                            title="Share by Email"
                          >
                            <svg
                              class="icon icon-email icon-sm"
                              viewBox="0 0 24 22"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2.73.545C3.8 0 5.2 0 8 0h8c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C24 3.8 24 5.2 24 8v5.767c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.186c-1.07.544-2.47.544-5.27.544H8c-2.8 0-4.2 0-5.27-.544a5 5 0 0 1-2.185-2.186C0 17.967 0 16.567 0 13.767V8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545Zm2.988 5.25a.75.75 0 1 0-.832 1.248l1.117.744.256.17.139.093c1.791 1.195 2.858 1.906 4.029 2.187a6.75 6.75 0 0 0 3.146 0c1.171-.28 2.238-.992 4.03-2.187l.138-.092.256-.171 1.117-.744a.75.75 0 1 0-.832-1.248l-1.117.744-.256.17c-1.973 1.316-2.807 1.858-3.685 2.07a5.25 5.25 0 0 1-2.447 0c-.88-.212-1.713-.754-3.686-2.07l-.256-.17-1.117-.744Z" />
                            </svg>
                            <span class="sr-only">Share by Email</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="sm:hidden flex items-center gap-2">
                      <svg
                        class="icon icon-share icon-sm"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m7.218 8.527 5.564-2.782M7.218 11.39l5.564 2.783m-8.509-.9a3.273 3.273 0 1 0 0-6.546 3.273 3.273 0 0 0 0 6.546Zm11.454-5.728a3.273 3.273 0 1 0 0-6.545 3.273 3.273 0 0 0 0 6.545Zm0 11.455a3.273 3.273 0 1 0 0-6.545 3.273 3.273 0 0 0 0 6.545Z"
                        ></path>
                      </svg>
                      <a
                        class="link text-sm"
                        href="#"
                        aria-controls="ShareDrawer-template--15951546220625__featured-product"
                        aria-expanded="false"
                      >
                        Share
                      </a>
                    </div>
                    <share-drawer
                      id="ShareDrawer-template--15951546220625__featured-product"
                      class="sm:hidden share-drawer drawer drawer--end z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
                      role="dialog"
                      aria-modal="true"
                      aria-label="Share"
                      data-section-id="template--15951546220625__featured-product"
                      hidden
                    >
                      <overlay-element
                        class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
                        aria-controls="ShareDrawer-template--15951546220625__featured-product"
                        aria-expanded="false"
                      ></overlay-element>
                      <div class="drawer__inner z-10 absolute top-0 flex flex-col w-full h-full overflow-hidden">
                        <gesture-element class="drawer__header flex items-center justify-between opacity-0 invisible relative">
                          <span class="drawer__title heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                            Share
                          </span>
                          <button
                            class="button button--secondary button--close drawer__close hidden sm:flex items-center justify-center"
                            type="button"
                            is="hover-button"
                            aria-controls="ShareDrawer-template--15951546220625__featured-product"
                            aria-expanded="false"
                            aria-label="Close"
                          >
                            <span class="btn-fill" data-fill></span>
                            <span class="btn-text">
                              <svg
                                class="icon icon-close icon-sm"
                                viewBox="0 0 20 20"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 15L15 5M5 5L15 15"
                                ></path>
                              </svg>
                              <svg
                                class="icon icon-loader icon-sm absolute opacity-0 invisible animate-spin"
                                viewBox="0 0 18 18"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M0.7,9.9C0.5,5.2,4.1,1.2,8.5,1c4.7-0.3,8.9,3.8,8.8,8.8"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </gesture-element>
                        <div class="drawer__content opacity-0 invisible">
                          <div class="drawer__scrollable relative w-full">
                            <ul class="share-buttons grid">
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="//www.facebook.com/sharer.php?u=https://barsys.comhttps://barsys.com/products/barsys-360"
                                  title="Share on Facebook"
                                >
                                  <svg
                                    class="icon icon-facebook icon-lg"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.03153 23L9 13H5V9H9V6.5C9 2.7886 11.2983 1 14.6091 1C16.1951 1 17.5581 1.11807 17.9553 1.17085V5.04948L15.6591 5.05052C13.8584 5.05052 13.5098 5.90614 13.5098 7.16171V9H18.75L16.75 13H13.5098V23H9.03153Z" />
                                  </svg>
                                  <span aria-hidden="true">Facebook</span>
                                  <span class="sr-only">Share on Facebook</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="//twitter.com/intent/tweet?text=Barsys%20360&amp;url=https://barsys.comhttps://barsys.com/products/barsys-360"
                                  title="Tweet on Twitter"
                                >
                                  <svg
                                    class="icon icon-twitter icon-lg"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M13.8984 10.4679L21.3339 2H19.5687L13.1074 9.35221L7.95337 2H2L9.80183 13.1157L2 22H3.7652L10.5845 14.2315L16.03 22H21.9833M4.398 3.29892H7.10408L19.5687 20.7594H16.8626" />
                                  </svg>
                                  <span aria-hidden="true">Twitter</span>
                                  <span class="sr-only">Tweet on Twitter</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="//pinterest.com/pin/create/button/?url=https://barsys.comhttps://barsys.com/products/barsys-360&amp;media=//barsys.com/cdn/shop/files/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?crop=center&height=1024&v=1714072772&width=1024&amp;description=Barsys%20360"
                                  title="Pin on Pinterest"
                                >
                                  <svg
                                    class="icon icon-pinterest icon-lg"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M12 1C5.95 1 1 5.95 1 12C1 16.675 3.93333 20.6167 7.96667 22.2667C7.875 21.4417 7.78333 20.0667 7.96667 19.15C8.15 18.325 9.25 13.65 9.25 13.65C9.25 13.65 8.975 12.9167 8.975 12C8.975 10.4417 9.89167 9.34167 10.9917 9.34167C11.9083 9.34167 12.3667 10.075 12.3667 10.9C12.3667 11.8167 11.725 13.2833 11.45 14.5667C11.175 15.6667 12 16.5833 13.1 16.5833C15.025 16.5833 16.5833 14.5667 16.5833 11.5417C16.5833 8.88333 14.6583 7.05 12 7.05C8.88333 7.05 7.05 9.43333 7.05 11.8167C7.05 12.7333 7.41667 13.7417 7.875 14.2917C7.96667 14.3833 7.96667 14.475 7.96667 14.5667C7.875 14.9333 7.69167 15.6667 7.69167 15.85C7.6 16.0333 7.50833 16.125 7.325 16.0333C5.95 15.3917 5.125 13.375 5.125 11.8167C5.125 8.33333 7.69167 5.125 12.3667 5.125C16.2167 5.125 19.15 7.875 19.15 11.45C19.15 15.2083 16.7667 18.325 13.4667 18.325C12.3667 18.325 11.2667 17.775 10.9 17.0417C10.9 17.0417 10.35 19.15 10.2583 19.7C9.98333 20.6167 9.34167 21.8083 8.88333 22.5417C9.8 22.8167 10.9 23 12 23C18.05 23 23 18.05 23 12C23 5.95 18.05 1 12 1Z" />
                                  </svg>
                                  <span aria-hidden="true">Pinterest</span>
                                  <span class="sr-only">Pin on Pinterest</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="//web.whatsapp.com/send?text=https://barsys.comhttps://barsys.com/products/barsys-360"
                                  title="Share on WhatsApp"
                                >
                                  <svg
                                    class="icon icon-whatsapp icon-lg"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M0 24L1.69 17.84C0.65 16.03 0.1 13.99 0.1 11.89C0.1 5.33 5.44 0 12 0C15.18 0 18.17 1.24 20.42 3.49C22.67 5.74 23.9 8.73 23.9 11.9C23.9 18.46 18.56 23.79 12 23.79C10.01 23.79 8.05 23.29 6.32 22.34L0.01 23.99L0 24ZM6.6 20.19L6.96 20.4C8.48 21.3 10.22 21.78 11.99 21.78C17.44 21.78 21.88 17.35 21.88 11.9C21.88 9.26 20.85 6.78 18.99 4.91C17.13 3.04 14.64 2.01 12 2.01C6.55 2.01 2.11 6.44 2.11 11.89C2.11 13.76 2.63 15.58 3.62 17.15L3.86 17.52L2.86 21.17L6.6 20.19ZM9.02 6.92C8.78 6.34 8.53 6.42 8.35 6.41C8.18 6.41 7.98 6.4 7.78 6.4C7.58 6.4 7.26 6.47 6.99 6.77C6.72 7.07 5.95 7.79 5.95 9.25C5.95 10.71 7.02 12.13 7.16 12.32C7.31 12.52 9.26 15.52 12.24 16.81C12.95 17.12 13.5 17.3 13.93 17.44C14.64 17.67 15.29 17.63 15.8 17.56C16.37 17.47 17.56 16.84 17.81 16.15C18.06 15.46 18.06 14.86 17.98 14.74C17.91 14.62 17.71 14.54 17.41 14.39C17.11 14.24 15.65 13.52 15.38 13.42C15.11 13.32 14.91 13.27 14.71 13.57C14.51 13.87 13.94 14.54 13.77 14.74C13.6 14.94 13.42 14.96 13.13 14.81C12.83 14.66 11.87 14.35 10.74 13.34C9.86 12.55 9.26 11.58 9.09 11.28C8.92 10.98 9.07 10.82 9.22 10.67C9.35 10.54 9.52 10.32 9.67 10.15C9.82 9.98 9.87 9.85 9.97 9.65C10.07 9.45 10.02 9.28 9.95 9.13C9.88 8.98 9.28 7.52 9.03 6.92H9.02Z" />
                                  </svg>
                                  <span aria-hidden="true">WhatsApp</span>
                                  <span class="sr-only">Share on WhatsApp</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="mailto:?&subject=Barsys%20360&body=https://barsys.comhttps://barsys.com/products/barsys-360"
                                  title="Share by Email"
                                >
                                  <svg
                                    class="icon icon-email icon-lg"
                                    viewBox="0 0 24 22"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M2.73.545C3.8 0 5.2 0 8 0h8c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C24 3.8 24 5.2 24 8v5.767c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.186c-1.07.544-2.47.544-5.27.544H8c-2.8 0-4.2 0-5.27-.544a5 5 0 0 1-2.185-2.186C0 17.967 0 16.567 0 13.767V8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545Zm2.988 5.25a.75.75 0 1 0-.832 1.248l1.117.744.256.17.139.093c1.791 1.195 2.858 1.906 4.029 2.187a6.75 6.75 0 0 0 3.146 0c1.171-.28 2.238-.992 4.03-2.187l.138-.092.256-.171 1.117-.744a.75.75 0 1 0-.832-1.248l-1.117.744-.256.17c-1.973 1.316-2.807 1.858-3.685 2.07a5.25 5.25 0 0 1-2.447 0c-.88-.212-1.713-.754-3.686-2.07l-.256-.17-1.117-.744Z" />
                                  </svg>
                                  <span aria-hidden="true">E-mail</span>
                                  <span class="sr-only">Share by Email</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </share-drawer>
                    <div class="flex items-center gap-2">
                      <svg
                        class="icon icon-question icon-md"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.167 9.625v-.458a1.833 1.833 0 1 1 3.666 0v.11a1.94 1.94 0 0 1-.57 1.376L11 11.917m.458 2.75a.458.458 0 0 1-.916 0m.916 0a.458.458 0 0 0-.916 0m.916 0h-.916M20.167 11a9.167 9.167 0 1 1-18.334 0 9.167 9.167 0 0 1 18.334 0Z"
                        ></path>
                      </svg>
                      <Link
                        class="link text-sm leading-tight cursor-pointer"
                        href="faqs"
                      >
                        Need help?
                      </Link>
                    </div>
                  </div>
                  <Link  class="product__more flex items-center justify-between" href="/product-detail">
                    <span class="text-sm-base font-medium leading-none">
                      View full details
                    </span>
                    <svg
                      class="icon icon-arrow-right icon-xs flex-auto"
                      viewBox="0 0 21 20"
                      stroke="currentColor"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                      ></path>
                    </svg>
                    </Link>
                </animate-element>
              </div>
            </div>
            {/* <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "Product",
          "offers": [{
                "@type" : "Offer","sku": "barsys360","availability" : "http://schema.org/InStock",
                "price" : 55700.0,
                "priceCurrency" : "INR",
                "priceValidUntil": "2024-05-30",
                "url" : "https:\/\/barsys.com\/products\/barsys-360?variant=41307125645393"
              },
    {
                "@type" : "Offer","sku": "barsys361","availability" : "http://schema.org/InStock",
                "price" : 55700.0,
                "priceCurrency" : "INR",
                "priceValidUntil": "2024-05-30",
                "url" : "https:\/\/barsys.com\/products\/barsys-360?variant=41307125678161"
              }
    ],
          "brand": "Barsys",
          "sku": "barsys360",
          "name": "Barsys 360",
          "description": "Discover Barsys 360, your gateway to unparalleled cocktail mastery at home. With cutting-edge technology and expert curation, Barsys 360 revolutionizes your mixology journey. Craft personalized cocktails effortlessly, guided by top bars, mixologists, and brands. Elevate your home cocktail experience to new heights with Barsys 360, redefining how you savor and celebrate cocktails with precision and innovation.",
          "category": "",
          "url": "https://barsys.com/products/barsys-360","image": {
            "@type": "ImageObject",
            "url": "https://barsys.com/cdn/shop/files/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?crop=center&height=1024&v=1714072772&width=1024",
            "image": "https://barsys.com/cdn/shop/files/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?crop=center&height=1024&v=1714072772&width=1024",
            "name": "Barsys 360",
            "width": 1024,
            "height": 1024
          }
        }
      </script> */}
          </div>
        </div>
        <div
          id="shopify-section-template--15951546220625__image-comparison"
          class="shopify-section"
        >
          {/* <style>
                #shopify-section-template--15951546220625__image-comparison {
                    --section-padding-top: 100px;
                    --section-padding-bottom: 0px;
                    --gradient-highlight: linear-gradient(90deg, rgba(249, 197, 141, 1), rgba(43, 43, 43, 1) 100%);
                    --ratio-percent: 39.47603453408753%;
                }

                @media screen and (max-width: 767px) {
                    #shopify-section-template--15951546220625__image-comparison {
                        --ratio-percent: 93.71024734982332%;
                    }
                }
            </style> */}

          <div class="section section--padding">
            <div class="page-width relative">
              <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-center md:items-center md:justify-between relative z-1">
                <div class="grid gap-4">
                  <p class="heading font-medium subtext-lg leading-none tracking-none">
                    Designed for your Living Room
                  </p>
                  <h2 class="heading font-bold title-md">
                    <em
                      class="highlighted-text inline-block not-italic relative with-gradient"
                      is="highlighted-text"
                      data-style="text"
                    >
                      Barsys 360 Color Choices
                    </em>
                  </h2>
                </div>
              </div>
              <image-comparison
                class="image-comparison media--750px mobile:media--300px block relative overflow-hidden"
                data-layout="horizontal"
              >
                <div class="comparison__before w-full h-full">
                  <picture class="media media--height w-full h-full block relative">
                    <source media="(max-width: 767px)" />
                    <Image
                      src={require("../../../assets/images/Interactive_Image_360_white.jpg")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </picture>
                  <div
                    class="comparison__box comparison__box--end grid items-start absolute top-0 left-0 w-full h-full"
                    // style="--color-foreground: 255 255 255;"
                  >
                    <div class="grid gap-1 md:gap-2">
                      <p class="text-xs md:text-base lg:text-lg text-medium leading-none">
                        Barsys 360
                      </p>
                      <p class="heading text-base md:text-2xl lg:text-3xl font-bold leading-none tracking-tight">
                        Polar White
                      </p>
                    </div>
                  </div>
                </div>
                <div class="comparison__after absolute top-0 left-0 w-full h-full z-1">
                  <picture class="media media--height w-full h-full block relative">
                    <source media="(max-width: 767px)" />
                    <Image
                      src={require("../../../assets/images/Interactive_Image_360_black.jpg")}
                      alt=""
                      loading="lazy"
                      is="lazy-image"
                    />
                  </picture>
                  <div
                    class="comparison__box comparison__box--end grid items-start absolute top-0 left-0 w-full h-full text-right"
                    // style="--color-foreground: 255 255 255;"
                  >
                    <div class="grid gap-1 md:gap-2">
                      <p class="text-xs md:text-base lg:text-lg text-medium leading-none">
                        Barsys 360
                      </p>
                      <p class="heading text-base md:text-2xl lg:text-3xl font-bold leading-none tracking-tight">
                        Midnight Black
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="comparison__button absolute z-1"
                  aria-label="Drag"
                  tabindex="-1"
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
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M1 1L0.999999 16"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M6 1L6 16"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M11 1L11 16"
                      ></path>
                    </svg>
                  </span>
                </button>
              </image-comparison>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--15951546220625__scrolling-text-1"
          class="shopify-section scrolling-text-section"
        >
          {/* <style>
                #shopify-section-template--15951546220625__scrolling-text-1 {
                    --section-padding-top: 120px;
                    --section-padding-bottom: 120px;
                    --section-grid-gap: 70px;
                }
            </style> */}
          <div class="section section--padding overflow-hidden">
            <div class="relative z-1">
              <marquee-element
                class="scrolling-text scrolling-text--left flex items-center"
                data-speed="2"
                data-direction="left"
                data-parallax="1.5"
              >
                <div class="marquee flex items-center flex-auto whitespace-nowrap">
                  <div
                    class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                    // style="--font-size: 168px;"
                  >
                    <strong>Innovation</strong>
                  </div>
                  <div
                    class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                    // style="--font-size: 160px;"
                  >
                    <strong>Mixology</strong>
                  </div>
                  <div
                    class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                    // style="--font-size: 160px;"
                  >
                    <strong>Elegance</strong>
                  </div>
                </div>
              </marquee-element>
            </div>
          </div>
        </div>
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                        autoplay
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
                            playsinline="true"
                            muted="muted"
                            autoplay="autoplay"
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
                        tabindex="-1"
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
                        tabindex="-1"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
                          tabindex="-1"
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
        <div
          id="shopify-section-template--15951546220625__scrolling-text-2"
          class="shopify-section scrolling-text-section"
        >
          {/* <style>
                #shopify-section-template--15951546220625__scrolling-text-2 {
                    --section-padding-top: 72px;
                    --section-padding-bottom: 72px;
                    --color-background: 23 23 23;
                    --section-grid-gap: 140px;
                }
            </style> */}
          <div class="section section--padding section--plain overflow-hidden">
            <div class="relative z-1">
              <div class="scrolling-wrapper with-right relative z-1">
                <marquee-element
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
                          src={require("../../../assets/images/partners/home-scroll-icon-1.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-2.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-3.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-4.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-5.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-6.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-7.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-8.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-9.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-10.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-11.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-12.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-14.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-19.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-21.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-22.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-24.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-1.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-2.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-3.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-4.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-5.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-6.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-7.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-8.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-9.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-10.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-11.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-12.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-14.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-19.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-21.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-22.png")}
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
                          src={require("../../../assets/images/partners/home-scroll-icon-24.png")}
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
        <div
          id="shopify-section-template--15951546220625__blog-posts-collage"
          class="shopify-section"
        >
          <link
            rel="stylesheet"
            href="assets/blog.css"
            media="print"
            onload="this.media='all'"
          />
          <noscript>
            <link
              href="assets/blog.css"
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
                  <Link
                    class="button button--secondary icon-with-text"
                    href="blogs"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 12V2L15.2874 3.20562C14.6759 3.47739 14.3701 3.61328 14.0607 3.64727C13.7214 3.68455 13.3782 3.63437 13.0638 3.50149C12.777 3.38032 12.523 3.16258 12.0149 2.7271V2.7271C11.3403 2.14881 11.0029 1.85966 10.6296 1.73584C10.2208 1.60026 9.77918 1.60026 9.3704 1.73584C8.99706 1.85966 8.65972 2.14881 7.98505 2.7271V2.7271C7.47699 3.16258 7.22295 3.38032 6.93623 3.50149C6.6218 3.63437 6.2786 3.68455 5.93929 3.64727C5.62988 3.61328 5.32414 3.47739 4.71265 3.20562L2 2V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03968 22 6.15979 22 8.4 22H20M18 12H18.8C19.9201 12 20.4802 12 20.908 12.218C21.2843 12.4097 21.5903 12.7157 21.782 13.092C22 13.5198 22 14.0799 22 15.2V20C22 21.1046 21.1046 22 20 22V22C18.8954 22 18 21.1046 18 20V12ZM7 17H13M7 9H11M7 13H13"
                        ></path>
                      </svg>
                      View all
                    </span>
                  </Link>
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
                        tabindex="-1"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5.33325 0.666668V3.40544M10.6666 0.666668V3.40544M14.4999 6.33333H1.49994M6.93325 14.6667H9.06659C11.0268 14.6667 12.0069 14.6667 12.7556 14.2852C13.4141 13.9496 13.9496 13.4142 14.2851 12.7556C14.6666 12.0069 14.6666 11.0269 14.6666 9.06667V7.93334C14.6666 5.97315 14.6666 4.99306 14.2851 4.24437C13.9496 3.5858 13.4141 3.05037 12.7556 2.71481C12.0069 2.33333 11.0268 2.33333 9.06659 2.33333H6.93325C4.97307 2.33333 3.99298 2.33333 3.24429 2.71481C2.58572 3.05037 2.05029 3.5858 1.71473 4.24437C1.33325 4.99306 1.33325 5.97315 1.33325 7.93333V9.06667C1.33325 11.0269 1.33325 12.0069 1.71473 12.7556C2.05029 13.4142 2.58572 13.9496 3.24429 14.2852C3.99298 14.6667 4.97307 14.6667 6.93325 14.6667Z"
                              ></path>
                            </svg>
                            <time datetime="2024-05-01T09:55:02Z">
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                        tabindex="-1"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5.33325 0.666668V3.40544M10.6666 0.666668V3.40544M14.4999 6.33333H1.49994M6.93325 14.6667H9.06659C11.0268 14.6667 12.0069 14.6667 12.7556 14.2852C13.4141 13.9496 13.9496 13.4142 14.2851 12.7556C14.6666 12.0069 14.6666 11.0269 14.6666 9.06667V7.93334C14.6666 5.97315 14.6666 4.99306 14.2851 4.24437C13.9496 3.5858 13.4141 3.05037 12.7556 2.71481C12.0069 2.33333 11.0268 2.33333 9.06659 2.33333H6.93325C4.97307 2.33333 3.99298 2.33333 3.24429 2.71481C2.58572 3.05037 2.05029 3.5858 1.71473 4.24437C1.33325 4.99306 1.33325 5.97315 1.33325 7.93333V9.06667C1.33325 11.0269 1.33325 12.0069 1.71473 12.7556C2.05029 13.4142 2.58572 13.9496 3.24429 14.2852C3.99298 14.6667 4.97307 14.6667 6.93325 14.6667Z"
                              ></path>
                            </svg>
                            <time datetime="2023-10-23T22:23:46Z">
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                        tabindex="-1"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5.33325 0.666668V3.40544M10.6666 0.666668V3.40544M14.4999 6.33333H1.49994M6.93325 14.6667H9.06659C11.0268 14.6667 12.0069 14.6667 12.7556 14.2852C13.4141 13.9496 13.9496 13.4142 14.2851 12.7556C14.6666 12.0069 14.6666 11.0269 14.6666 9.06667V7.93334C14.6666 5.97315 14.6666 4.99306 14.2851 4.24437C13.9496 3.5858 13.4141 3.05037 12.7556 2.71481C12.0069 2.33333 11.0268 2.33333 9.06659 2.33333H6.93325C4.97307 2.33333 3.99298 2.33333 3.24429 2.71481C2.58572 3.05037 2.05029 3.5858 1.71473 4.24437C1.33325 4.99306 1.33325 5.97315 1.33325 7.93333V9.06667C1.33325 11.0269 1.33325 12.0069 1.71473 12.7556C2.05029 13.4142 2.58572 13.9496 3.24429 14.2852C3.99298 14.6667 4.97307 14.6667 6.93325 14.6667Z"
                              ></path>
                            </svg>
                            <time datetime="2023-10-23T21:58:18Z">
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
