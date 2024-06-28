import Image from 'next/image'
import React from 'react'

const Explore = () => {
  return (
    <div class="mega-menu absolute left-0 w-full max-w-full overflow-hidden pointer-events-none 123" open>
    <div class="mega-menu__container invisible"   style={{visibility: "visible", transform: "translateY(0px)"}}>
      <ul
        class="mega-menu__list page-width page-width--full flex flex-wrap w-full h-full overflow-hidden"
        role="list"
        tabIndex="-1"
      >
        <li class="147 mega-menu__item media-card media-card--card overflow-hidden opacity-0 w-full">
          <a
            class="media-card__link grid w-full h-full relative"
            href="bars.html"
            // style="--color-foreground: 23 23 23; --color-overlay: 0 0 0; --overlay-opacity: 0.4;"
          >
            <div class="media media--adapt relative overflow-hidden">
              <Image
                src={require("../../../../assets/images/Explore_bars.jpg")}
                alt=""
                loading="lazy"
                is="lazy-image"
              />
            </div>
            <div class="media-card__content flex justify-between items-center gap-4 w-full">
              <div class="media-card__text opacity-0 shrink-1">
                <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                  Bars
                  <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                    5
                  </small>
                </span>
                <p class="leading-none text-xs">
                  See all the bars we work with
                </p>
              </div>
              <svg
                class="icon icon-arrow-right icon-xs transform shrink-0 hidden xl:block"
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
            </div>
          </a>
        </li>
        <li class="147 mega-menu__item media-card media-card--card overflow-hidden opacity-0 w-full">
          <a
            class="media-card__link grid w-full h-full relative"
            href="collection-recipes.html"
            // style="--color-foreground: 23 23 23; --color-overlay: 0 0 0; --overlay-opacity: 0.4;"
          >
            <div class="media media--adapt relative overflow-hidden">
              <Image
                src={require("../../../../assets/images/Explore_Mixologist.jpg")}
                alt=""
                loading="lazy"
                is="lazy-image"
              />
            </div>
            <div class="media-card__content flex justify-between items-center gap-4 w-full">
              <div class="media-card__text opacity-0 shrink-1">
                <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                  All Recipes
                  <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                    27
                  </small>
                </span>
                <p class="leading-none text-xs">
                  Check out all our recipes
                </p>
              </div>
              <svg
                class="icon icon-arrow-right icon-xs transform shrink-0 hidden xl:block"
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
            </div>
          </a>
        </li>
        <li class="147 mega-menu__item media-card media-card--card overflow-hidden opacity-0 w-full">
          <a
            class="media-card__link grid w-full h-full relative"
            href="mixlist.html"
            // style="--color-foreground: 23 23 23; --color-overlay: 0 0 0; --overlay-opacity: 0.4;"
          >
            <div class="media media--adapt relative overflow-hidden">
              <Image
                src={require("../../../../assets/images/Explore_Mixlist.jpg")}
                alt=""
                loading="lazy"
                is="lazy-image"
              />
            </div>
            <div class="media-card__content flex justify-between items-center gap-4 w-full">
              <div class="media-card__text opacity-0 shrink-1">
                <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                  Mixlists
                  <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                    4
                  </small>
                </span>
                <p class="leading-none text-xs">
                  Explore all our mixlists
                </p>
              </div>
              <svg
                class="icon icon-arrow-right icon-xs transform shrink-0 hidden xl:block"
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
            </div>
          </a>
        </li>
        <li class="147 mega-menu__item media-card media-card--card media-card--overlap overflow-hidden opacity-0 w-full">
          <a
            class="media-card__link grid w-full h-full relative"
            href="collection-recipes.html"
            // style="--color-foreground: 255 255 255; --color-overlay: 0 0 0; --overlay-opacity: 0.4;"
          >
            <div class="media media--adapt relative overflow-hidden">
              <Image
                src={require("../../../../assets/images/Explore_all_recipes.jpg")}
                alt=""
                is="lazy-image"
              />
              {/* <img src="assets/images/Explore_all_recipes.jpg" alt="" is="lazy-image" /> */}
            </div>
            <div class="media-card__content flex justify-between items-center gap-4 w-full">
              <div class="media-card__text opacity-0 shrink-1">
                <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                  All Collections
                  <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                    85
                  </small>
                </span>
                <p class="leading-none text-xs">
                  Check out all our collections
                </p>
              </div>
              <svg
                class="icon icon-arrow-right icon-xs transform shrink-0 hidden xl:block"
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
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Explore