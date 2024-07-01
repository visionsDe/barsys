import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import * as Motion from "motion";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { LoadItemsAnimation, UnloadItems } from "../utils/Animate";

const MainCarousel = () => {
  const videoData = [
    {
      mobilePoster: require("../../assets/images/banner-barsys-360-video-mobile-poster.jpg"),
      mobileVideo: "banner-barsys-360-video-mobile.mp4",
      desktopPoster: require("../../assets/images/banner-barsys-360-video-desktop-poster.jpg"),
      desktopVideo: "banner-barsys-360-video-desktop.mp4",
    },
    {
      mobilePoster: require("../../assets/images/banner-coaster-2-0-video-mobile-poster.jpg"),
      mobileVideo: "banner-coaster-2-0-video-mobile.mp4",
      desktopPoster: require("../../assets/images/banner-coaster-2-0-video-desktop-poster.jpg"),
      desktopVideo: "banner-coaster-2-0-video-desktop.mp4",
    },
    {
      mobilePoster: require("../../assets/images/banner-barsys-2-0-video-mobile-poster.jpg"),
      mobileVideo: "banner-barsys-2-0-video-mobile.mp4",
      desktopPoster: require("../../assets/images/banner-barsys-2-0-video-desktop-poster.jpg"),
      desktopVideo: "banner-barsys-2-0-video-desktop.mp4",
    },
  ];

  const ContentData = [
    {
      title: "Barsys 360",
      content: "Effortlessly revolutionize your home cocktails with Barsys 360",
    },
    {
      title: "Coaster 2.0",
      content: "Seamlessly enhance your cocktails with Barsys Coaster 2.0",
    },
    {
      title: "Barsys 2.0+",
      content: "Elevate your home bar experience with Barsys 2.0+",
    },
  ];
  const SlideContent = useRef();
  const ContentContainer = useRef();
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [flickity, setFlickity] = useState(null);

  const handleSlide = (i) => {
    if (i < 0) i = 2;
    if (i > 2) i = 0;

    let direction = ActiveIndex < i ? "right" : "left";

    if (ActiveIndex == 2 && i == 0) direction = "right";
    if (ActiveIndex == 0 && i == 2) direction = "left";

    let elementPrev = ContentContainer.current.childNodes[ActiveIndex];
    // UnloadItems(elementPrev);

    if (direction == "right" && flickity) flickity.next();
    if (direction == "left" && flickity) flickity.previous();
    let elementCurrent =
      ContentContainer.current.childNodes[i].firstElementChild
        .firstElementChild;

    LoadItemsAnimation(elementCurrent);
    setActiveIndex(i);
  };

  useEffect(() => {
    let flickity = new Flickity(SlideContent.current, {
      accessibility: false,
      pageDots: false,
      prevNextButtons: false,
      wrapAround: true,
      rightToLeft: false,
      autoPlay: true,
    });
    flickity.on("change", (index) => handleSlide(index));

    setFlickity(flickity);
  }, []);

  return (
    <div
      id="shopify-section-template--15951546220625__slideshow"
      class="shopify-section"
    >
      <div class="section section--padding">
        <div class="relative">
          <div class="relative">
            <slideshow-element
              class="slideshow block"
              id="Slider-template--15951546220625__slideshow"
              autoPlay
              autoPlay-speed="7"
              ref={SlideContent}
            >
              {videoData.map((data, id) => {
                return (
                  <div
                    class="banner media--750px mobile:media--500px w-full overflow-hidden"
                    data-type="video"
                    key={id}
                  >
                    <video
                      width={"100%"}
                      playsInline="true"
                      muted="muted"
                      autoPlay="autoPlay"
                      loop="loop"
                      preload="none"
                      src={data?.mobileVideo}
                    />
                    <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                  </div>
                );
              })}
            </slideshow-element>
            <div class="page-width absolute bottom-0 left-0 w-full pointer-events-none">
              <div class="slideshow-content">
                <slideshow-words
                  ref={ContentContainer}
                  class="slideshow-words grid items-center"
                  aria-controls="Slider-template--15951546220625__slideshow"
                >
                  {ContentData.map((content, i) => (
                    <div
                      class="slideshow-word flex flex-col md:flex-row md:items-end justify-between gap-6"
                      data-index={i}
                      aria-current={ActiveIndex == i ? "true" : "false"}
                    >
                      <div class="banner__box banner__box--small">
                        <h2 class="heading font-bold leading-none title-md">
                          <split-words
                            class="split-words flex flex-wrap"
                            data-animate="fade-up-large"
                            data-animate-delay="250"
                          >
                            {content.title}
                          </split-words>
                        </h2>
                        <p>{content.content}</p>
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
                  ))}
                </slideshow-words>
                <div class="slideshow-dots flex items-end justify-between">
                  <button
                    onClick={() => handleSlide(ActiveIndex - 1, "left")}
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
                    {[1, 2, 3].map((v, i) => (
                      <button
                        type="button"
                        class="flickity-page-dot"
                        data-index="0"
                        aria-current={ActiveIndex == i ? "true" : "false"}
                        onClick={() => handleSlide(i)}
                      >
                        <span class="sr-only">Page {v}</span>
                      </button>
                    ))}
                  </slider-dots>
                  <button
                    type="button"
                    is="next-button"
                    class="hidden md:block pointer-events-auto"
                    aria-controls="Slider-template--15951546220625__slideshow"
                    aria-label="Next"
                    onClick={() => handleSlide(ActiveIndex + 1, "right")}
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
  );
};

export default MainCarousel;
