"use client";
import React, { useState } from "react";
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
  const [slideDown, setSlideDown] = useState(false);

  const slideNext = () => {
    setSlideDown(true);
    setTimeout(() => {
      if (index == 2) setIndex(0);
      else setIndex(index + 1);
      setSlideDown(false);
    }, 400);
  };
  const slidePrev = () => {
    setSlideDown(true);
    setTimeout(() => {
      if (index == 0) setIndex(2);
      else setIndex(index - 1);
      setSlideDown(false);
    }, 400);
  };
  return (
    <Wrapper>
      <Button onClick={slidePrev}>{LeftIcon}</Button>
      <Content>
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
  width: 50%;
  font-size: 1rem;
  margin: 0 5rem;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;

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
