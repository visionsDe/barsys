"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import * as Motion from "motion";
import HoverAnimatedBtn from "../HOC/HoverAnimatedBtn";

const Barsys360BgVideo = () => {
  const VideoTag = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const TitleText = "Say Hello to the Future".split(" ");
  const Title = useRef();
  useEffect(() => {
    Title.current.style.opacity = 0;
    Motion.inView(Title.current, () => {
      Motion.animate(
        Title.current.childNodes,
        {
          transform: ["translateY(90%)", "translateY(0)"],
          opacity: [0, 1],
        },
        {
          duration: 1,
          delay: Motion.stagger(0.1),
          easing: [0.16, 1, 0.3, 1],
        }
      ).finished.then(() => {
        Title.current.style.opacity = 1;
      });
    });
  }, []);

  const btnHoverAnimation = (element, action) => {
    if (element.hasAttribute("disabled")) return;
    element = element.firstElementChild ? element.firstElementChild : element;

    if (action == "start") {
      element.nextSibling.style.color = "white";
      Motion.animate(element, { y: ["76%", "0%"] }, { duration: 0.6 });
    }
    if (action == "end") {
      element.nextSibling.style.color = "black";
      Motion.animate(element, { y: "-76%" }, { duration: 0.6 });
    }
  };

  const handlePlay = () => {
    if (playVideo === true) {
      VideoTag.current.play();
    } else {
      VideoTag.current.pause();
    }
    setPlayVideo(!playVideo);
  };
  return (
    <div
      id="shopify-section-template--15951546220625__video-with-text-overlay"
      class="shopify-section"
    >
      <div class="section section--padding section--rounded relative">
        <div class="relative">
          <div class="video-hero banner media--adapt mobile:media--400px relative">
            <video
              style={{ borderRadius: "2rem" }}
              ref={VideoTag}
              playsInline
              autoPlay
              loop
              muted="muted"
              src={"banner-future-video-desktop.mp4"}
            />
            <button
              onClick={handlePlay}
              type="button"
              id="DeferredPoster-26061769539665"
              class="deferred-poster absolute top-0 left-0 w-full h-full"
              aria-label="Play video"
            >
              <span class="play-button absolute flex items-center justify-center rounded-full pointer-events-auto z-10">
                {playVideo ? (
                  <svg
                    class="icon icon-play icon-md"
                    viewBox="0 0 36 36"
                    stroke="none"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M34 17.5006C34 18.3302 33.5707 19.0963 32.8683 19.5206L9.535 33.6629C9.164 33.8869 8.74867 34 8.33333 34C7.93667 34 7.54 33.8986 7.183 33.6936C6.45267 33.274 6 32.4915 6 31.6429V3.35817C6 2.50962 6.45267 1.72708 7.183 1.30752C7.91333 0.885606 8.814 0.899749 9.535 1.33816L32.8683 15.4805C33.5707 15.9048 34 16.6709 34 17.5006"></path>
                  </svg>
                ) : (
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
                )}
              </span>
            </button>
            <span
              style={{ borderRadius: "2rem" }}
              class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"
            ></span>
            <div class="banner__content overflow-hidden absolute z-1 top-0 left-0 w-full h-full">
              <div class="page-width w-full h-full flex md:items-center md:justify-center items-center justify-center">
                <div class="banner__box banner__box--medium md:text-center text-center">
                  <h2 class="banner__title heading font-bold leading-none title-md">
                    <split-words
                      ref={Title}
                      class="split-words flex flex-wrap"
                      data-animate="fade-up-large"
                      data-animate-delay="250"
                    >
                      {TitleText.map((v) => (
                        <span>{v}</span>
                      ))}
                    </split-words>
                  </h2>
                  <div class="rte leading-normal body subtext-xl text-opacity">
                    <p>
                      Elevate your home mixology experience with the Barsys 360.
                    </p>
                  </div>
                  <HoverAnimatedBtn
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
                  </HoverAnimatedBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barsys360BgVideo;
