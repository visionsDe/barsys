import React from "react";
import * as Motion from "motion";

const HoverAnimatedBtn = ({ children, ...args }) => {
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
  return (
    <button
      {...args}
      onMouseEnter={(e) => btnHoverAnimation(e.target, "start")}
      onMouseLeave={(e) => btnHoverAnimation(e.target, "end")}
    >
      {children}
    </button>
  );
};

export default HoverAnimatedBtn;
