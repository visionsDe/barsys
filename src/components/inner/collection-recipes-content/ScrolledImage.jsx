"use client";
import React, { useEffect, useRef } from "react";
// import motion from 'motion';
import styled from "styled-components";
import LazyBackgroundImg from "./LazyBackgroundImg";
const ScrolledImage = () => {
  const imgSrc = require("../../../assets/images/Sex_on_the_Beach.jpg");
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const inViewCallback = () => {
      init();
    };

    // motion.inView(container, inViewCallback, {
    //   margin: "200px 0px 200px 0px",
    // });

    const handleScroll = () => {
      if (theme.config.motionReduced || !container.dataset.parallax) return;

      setupParallax();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const init = () => {
    beforeInit();

    if (theme.config.motionReduced || !containerRef.current.dataset.parallax)
      return;

    setupParallax();
  };

  const beforeInit = () => {
    const main = containerRef.current.querySelector(".scrolled-images__main");

    for (let i = 0; i < 3; i++) {
      let images = shuffle(
        Array.from(
          containerRef.current.querySelectorAll(".scrolled-images__item")
        )
      );

      if (images.length < 8) {
        let start = 0;
        while (images.length < 8) {
          images.push(images[start].cloneNode(true));
          start++;
        }
      }

      const row = document.createElement("div");
      row.classList = "scrolled-images__row";
      images.forEach((item) => row.appendChild(item.cloneNode(true)));

      main.appendChild(row);
    }
  };

  const setupParallax = () => {
    Array.from(
      containerRef.current.querySelectorAll(".scrolled-images__row")
    ).forEach((element, index) => {
      let translate =
        (-1 * parseFloat(containerRef.current.dataset.parallax) * 100) /
        (1 + parseFloat(containerRef.current.dataset.parallax));
      if (theme.config.rtl) {
        translate = translate * -1;
      }

      if (index % 2 === 0) {
        motion.scroll(
          motion.animate(
            element,
            { transform: [`translateX(${translate}%)`, "translateX(0)"] },
            { easing: "linear" }
          ),
          { target: containerRef.current, offset: motion.ScrollOffset.Any }
        );
      } else {
        motion.scroll(
          motion.animate(
            element,
            { transform: ["translateX(0)", `translateX(${translate}%)`] },
            { easing: "linear" }
          ),
          { target: containerRef.current, offset: motion.ScrollOffset.Any }
        );
      }
    });
  };

  const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  return (
    <MainWrapper>
      <div class="scrolled-images__main absolute top-0 left-0 w-full h-full">
      <ImageWraper  imgSrc={imgSrc}>
<div className="scrolled-images__item">
        {/* Content inside the image wrapper */}
      </div>
</ImageWraper>
      </div>
      <template>
      {/* <LazyBackgroundImg className="scrolled-images__item" img={imgSrc} /> */}
<ImageWraper  imgSrc={imgSrc}>
<div className="scrolled-images__item">
        {/* Content inside the image wrapper */}
      </div>
</ImageWraper>
        <lazy-background
          class="scrolled-images__item"
            style={{backgroundImage:"url(" + {imgSrc} + ")"}}
        ></lazy-background>
        <lazy-background
          class="scrolled-images__item"
          //   style="background-image:url(assets/images/Manhattan.jpg)"
        ></lazy-background>
        <lazy-background
          class="scrolled-images__item"
          //   style="background-image:url(assets/images/Long_Island_Iced_Tea.jpg)"
        ></lazy-background>
        <lazy-background
          class="scrolled-images__item"
          //   style="background-image:url(assets/images/Lemon_Drop.jpg)"
        ></lazy-background>
        <lazy-background
          class="scrolled-images__item"
          //   style="background-image:url(assets/images/Blue_Hawaiian.jpg)"
        ></lazy-background>
      </template>
    </MainWrapper>
  );
};

export default ScrolledImage;

const MainWrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const ImageWraper = styled.div`
 .scrolled-images__item{
  background-image:url(${props => props.imgSrc})
 }
`;