import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import * as Motion from "motion";
const LeaderBoard = () => {
  const TabButtons = [
    "Top Cocktails",
    "New Cocktails",
    "Cocktails of the Week",
  ];
  const TabPanel1 = useRef();
  const TabPanel2 = useRef();
  const TabPanel3 = useRef();
  const SlideContainer = useRef();
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [TabPanels, setTabPanels] = useState([]);
  const [showRightBtn, setRightBtnActive] = useState(true);
  const [showLeftBtn, setLeftBtnActive] = useState(false);
  const [SlideFirstItem, setFirstItem] = useState();
  const [SlideLastItem, setLastItem] = useState();
  const [hideSlideBtn, setHideSlideBtn] = useState(false);

  useEffect(() => {
    setTabPanels([TabPanel1.current, TabPanel2.current, TabPanel3.current]);
    const childNodes = SlideContainer.current.firstElementChild.childNodes;
    const LastSlideItem = childNodes[childNodes.length - 1];
    setFirstItem(childNodes[0]);
    setLastItem(LastSlideItem);
    HideActionBtn();
  }, []);

  const HideActionBtn = () => {
    let offsetRight =
      window.innerWidth -
      SlideLastItem?.offsetLeft -
      SlideLastItem?.offsetWidth;
    if (offsetRight > 0) setHideSlideBtn(true);
  };

  const ActivateTab = (index, element) => {
    if (element) {
      if (index < ActiveIndex) {
        element.parentNode.nextSibling.childNodes[1].style.color = "black";
      }
      if (index > ActiveIndex) {
        element.parentNode.previousSibling.childNodes[1].style.color = "black";
      }
      PanelTransition(TabPanels[ActiveIndex], TabPanels[index]);

      setActiveIndex(index);
      Motion.animate(element, { y: "-76%" }, { duration: 0 });
    }
  };

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
  const PanelTransition = async (fromPanel, toPanel) => {
    await Motion.animate(
      fromPanel,
      { transform: ["translateY(0)", "translateY(2rem)"], opacity: [1, 0] },
      { duration: 0.15 }
    ).finished;
    fromPanel.hidden = true;
    toPanel.hidden = false;
    Motion.animate(
      toPanel,
      { transform: ["translateY(2rem)", "translateY(0)"], opacity: [0, 1] },
      { duration: 0.15 }
    ).finished;
    LoadItems(toPanel.firstElementChild.firstElementChild.childNodes);
  };

  const LoadItems = (childNodes) => {
    Motion.animate(
      childNodes,
      { y: [50, 0], opacity: [0, 1], visibility: ["hidden", "visible"] },
      {
        duration: 0.5,
        delay: Motion.stagger(0.1),
      }
    );
  };

  const UpdateBtnStatus = () => {
    HideActionBtn();
    if (SlideContainer.current.scrollLeft == 0) UpdateBtnState(false, true);
    else if (
      SlideContainer.current.scrollLeft + SlideContainer.current.clientWidth >=
      SlideLastItem.offsetLeft + SlideLastItem.clientWidth
    )
      UpdateBtnState(true);
    else UpdateBtnState(true, true);
  };

  const UpdateBtnState = (left = false, right = false) => {
    setLeftBtnActive(left);
    setRightBtnActive(right);
  };

  const SlideLeftToRight = () => {
    SlideContainer.current.scrollTo({
      left:
        Number(getComputedStyle(SlideFirstItem).width.replace("px", "")) * 4,
      behavior: "smooth",
    });
  };
  const SlideRightToLeft = () => {
    SlideContainer.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      id="shopify-section-template--15951546220625__featured-collections"
      class="shopify-section featured-collections"
    >
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
                {TabButtons.map((text, i) => (
                  <button
                    disabled={ActiveIndex === i}
                    class={`tab__item button ${
                      ActiveIndex === i
                        ? "button--primary"
                        : "button--secondary"
                    } whitespace-nowrap`}
                    type="button"
                    is="hover-button"
                    role="tab"
                    aria-controls="TabPanel-collection-1"
                    onClick={(e) => ActivateTab(i, e.target)}
                    onMouseEnter={(e) => btnHoverAnimation(e.target, "start")}
                    onMouseLeave={(e) => btnHoverAnimation(e.target, "end")}
                  >
                    <span class="btn-fill" data-fill></span>
                    <span class="btn-text">{text}</span>
                  </button>
                ))}
              </div>
            </div>
            <div
              hidden={hideSlideBtn}
              class="indicators hidden lg:flex gap-2d5"
              data-index="0"
            >
              <button
                class="button button--secondary"
                type="button"
                is="previous-button"
                aria-controls="Slider-collection-1"
                aria-label="Previous"
                disabled={!showLeftBtn}
                onClick={SlideRightToLeft}
                onMouseEnter={(e) => btnHoverAnimation(e.target, "start")}
                onMouseLeave={(e) => btnHoverAnimation(e.target, "end")}
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
                disabled={!showRightBtn}
                onClick={SlideLeftToRight}
                onMouseEnter={(e) => btnHoverAnimation(e.target, "start")}
                onMouseLeave={(e) => btnHoverAnimation(e.target, "end")}
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
          <div ref={TabPanel1} role="tabpanel">
            <slider-element
              onScroll={UpdateBtnStatus}
              ref={SlideContainer}
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
                        src={require("../../assets/images/product-Watermelon_Wave_Smash.jpg")}
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
                        src={require("../../assets/images/product-End-Zone-Punch.jpg")}
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
                        src={require("../../assets/images/product-Coastal_Breeze_Cooler.jpg")}
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
                        src={require("../../assets/images/product-Pineapple_Coconut_Paloma.jpg")}
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
          <div ref={TabPanel2} role="tabpanel" hidden>
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
                        src={require("../../assets/images/product-Mango_Tango_Margarita.jpg")}
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
                        src={require("../../assets/images/product-Firework_Fizz.jpg")}
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
                        src={require("../../assets/images/product-Cardamom_And_Rosemary_Gin_Fizz.jpg")}
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
                        src={require("../../assets/images/product-Passionfruit_Fizz.jpg")}
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
          <div ref={TabPanel3} role="tabpanel" hidden>
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
                        src={require("../../assets/images/product-Tropical_Pineapple_Fusion.jpg")}
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
                        src={require("../../assets/images/product-Lemon_Zest.jpg")}
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
                        src={require("../../assets/images/product-Rose_infused_Rose.jpg")}
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
                        src={require("../../assets/images/product-Botanical_Bliss_Fizz.jpg")}
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
  );
};

export default LeaderBoard;
