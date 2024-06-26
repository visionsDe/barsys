"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Contexts = [
  "Coaster 2.0 Now Shipping!",
  "Download the Barsys App in the App Store!",
  "Barsys 360 Coming Soon!",
];

const LeftIcon = (
  <svg
    class="icon icon-arrow-left icon-xs transform"
    viewBox="0 0 15 14"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.33333 2.91675L2.25 7.00004M2.25 7.00004L6.33333 11.0834M2.25 7.00004H12.75"
    ></path>
  </svg>
);

const RightIcon = (
  <svg
    class="icon icon-arrow-right icon-xs transform"
    viewBox="0 0 15 14"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 7.00004H12.75M12.75 7.00004L8.66667 2.91675M12.75 7.00004L8.66667 11.0834"
    ></path>
  </svg>
);

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const container = useRef();
  const [slideDown, setSlideDown] = useState(false);
  const [autoSlide, setAutoSlide] = useState(false);
  const [MouseHover, setMouseHover] = useState(false);

  const slideNext = () => {
    setMouseHover(true);
    changeSlide("next");
  };
  const slidePrev = () => {
    setMouseHover(true);
    changeSlide("prev");
  };

  const changeSlide = (slide) => {
    setSlideDown(true);
    setTimeout(() => {
      setIndex((prev) => {
        if (slide == "next") return prev == 2 ? 0 : prev + 1;
        return prev == 0 ? 2 : prev - 1;
      });
      setSlideDown(false);
      setMouseHover(false);
    }, 400);
  };

  useEffect(() => {
    container.current.onmouseenter = () => {
      setMouseHover(true);
      setAutoSlide(false);
    };
    container.current.onmouseleave = () => {
      setMouseHover(false);
    };

    if (autoSlide || MouseHover) return;
    setTimeout(() => setAutoSlide(true), 6000);
  }, [autoSlide, MouseHover]);

  useEffect(() => {
    if (!autoSlide) return;
    let interval = setInterval(() => slideNext(), 6000);

    return () => clearInterval(interval);
  }, [autoSlide]);

  return (
    <Wrapper>
      <Button onClick={slidePrev}>{LeftIcon}</Button>
      <Content ref={container}>
        <Title className={`${slideDown ? "slideDown" : "slideUp"}`}>
          {Contexts[index]}
        </Title>
      </Content>
      <Button onClick={slideNext}>{RightIcon}</Button>
    </Wrapper>
  );
};

export default AnnouncementBar;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin: 0 1rem;
  cursor: pointer;
`;

const Content = styled.div`
  height: 100%;
  color: white;
  width: 75%;
  font-size: 1rem;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: grab;

  .slideDown {
    top: 100%;
    transform: translateY(10%);
    opacity: 0;
  }

  .slideUp {
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Title = styled.p`
  position: absolute;
  transition: 0.4s ease-in-out;
`;
