import React from "react";
import Pic1 from "../../assets/images/banner-barsys-360-video-mobile-poster.jpg";
import Image from "next/image";

const Carousel = () => {
  const videoData = [
    {
      mobilePoster: Pic1,
      mobileVideo: "../../../assets/videos/banner-barsys-360-video-mobile.mp4",
      desktopPoster:
        "../../../assets/images/banner-barsys-360-video-desktop-poster.jpg",
      desktopVideo:
        "../../../assets/videos/banner-barsys-360-video-desktop.mp4",
    },
    {
      mobilePoster:
        "../../../assets/images/banner-coaster-2-0-video-mobile-poster.jpg",
      mobileVideo: "../../../assets/videos/banner-coaster-2-0-video-mobile.mp4",
      desktopPoster:
        "../../../assets/images/banner-coaster-2-0-video-desktop-poster.jpg",
      desktopVideo:
        "../../../assets/videos/banner-coaster-2-0-video-desktop.mp4",
    },
    {
      mobilePoster:
        "../../../assets/images/banner-barsys-2-0-video-mobile-poster.jpg",
      mobileVideo: "../../../assets/videos/banner-barsys-2-0-video-mobile.mp4",
      desktopPoster:
        "../../../assets/images/banner-barsys-2-0-video-desktop-poster.jpg",
      desktopVideo:
        "../../../assets/videos/banner-barsys-2-0-video-desktop.mp4",
    },
  ];

  return (
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
                    src={require("../../assets/images/banner-barsys-360-video-mobile-poster.jpg")}
                    alt="Load video: "
                    loading="eager"
                    fetchpriority="high"
                    width="100vw"
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
                      <source src={data?.mobileVideo} type="video/mp4" />
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
                      <source src={data?.desktopVideo} type="video/mp4" />
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
  );
};

export default Carousel;
