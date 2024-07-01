import React from "react";
import "./pagecontent.css";
import Image from "next/image";
import Link from "next/link";
import MixlistSlider from "@/components/homePageComponents/MixlistSlider";
import Barsys360ProductView from "@/components/homePageComponents/Barsys360ProductView";
import SlideProductView from "@/components/homePageComponents/SlideProductView";
import MarqueeMixology from "@/components/homePageComponents/MarqueeMixology";
import MarqueeBrands from "@/components/homePageComponents/MarqueeBrands";
import LeaderBoard from "@/components/homePageComponents/LeaderBoard";
import Barsys360BgVideo from "@/components/homePageComponents/Barsys360BgVideo";
import BarsysArticles from "@/components/homePageComponents/BarsysArticles";
import BathtubGin from "@/components/homePageComponents/BathtubGin";
import MainCarousel from "@/components/homePageComponents/MainCarousel";
import BarsysPara1 from "./BarsysPara1";
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
        <MainCarousel />
        <BarsysPara1 />
        <MixlistSlider />
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
        <Barsys360BgVideo />
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
        <BathtubGin />
        <BarsysArticles />
        <LeaderBoard />
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
