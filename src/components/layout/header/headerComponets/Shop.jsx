import Image from 'next/image'
import React from 'react'

const Shop = () => {
  return (
    <div class="mega-menu absolute left-0 w-full top-0 max-w-full overflow-hidden pointer-events-none 123" open>
                      <div class="mega-menu__container invisible" 
                      style={{visibility: "visible", transform: "translateY(0px)"}}
                      >
                        <ul
                          class="mega-menu__list page-width page-width--full flex flex-wrap w-full h-full overflow-hidden"
                          role="list"
                          tabIndex="-1"
                        >
                          <li class="mega-menu__item mega-menu__item--nav opacity-0 w-full grid">
                            <ul class="mega-menu__nav grid">
                              <li class="opacity-0">
                                <a
                                  href="#"
                                  class="heading reversed-link text-base-xl leading-tight font-bold tracking-tight"
                                >
                                  Cocktail Maker
                                </a>
                                <ul>
                                  <li>
                                    <a
                                      href="product-details.html"
                                      class="reversed-link text-base xl:text-lg"
                                    >
                                      Barsys 2.0+
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="product-details.html"
                                      class="reversed-link text-base xl:text-lg"
                                    >
                                      Barsys 360
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="product-details.html"
                                      class="reversed-link text-base xl:text-lg"
                                    >
                                      Coaster 2.0
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="opacity-0">
                                <a
                                  href="#"
                                  class="heading reversed-link text-base-xl leading-tight font-bold tracking-tight"
                                >
                                  Bar Accessories Kit (Coming Soon)
                                </a>
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      class="reversed-link text-base xl:text-lg"
                                    >
                                      Classic Bar Kit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="reversed-link text-base xl:text-lg"
                                    >
                                      Mixologist Bar Kit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="reversed-link text-base xl:text-lg"
                                    >
                                      Artisan Bar Kit
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="opacity-0">
                                <a
                                  href="#"
                                  class="heading reversed-link text-base-xl leading-tight font-bold tracking-tight"
                                >
                                  Accessories
                                </a>
                                <ul>
                                  <li>
                                    <a
                                      href="product-details.html"
                                      class="reversed-link text-base xl:text-lg"
                                    >
                                      Wireless Mixer
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="product-details.html"
                                      class="reversed-link text-base xl:text-lg"
                                    >
                                      2.0 Bottle Mounts
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div class="mega-menu__footer relative">
                              <a
                                class="flex items-center justify-between w-full h-full"
                                href="collections.html"
                              >
                                <span class="reversed-link text-lg-2xl font-bold tracking-tight">
                                  View All Products
                                </span>
                                <svg
                                  class="icon icon-arrow-right icon-lg transform"
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
                              </a>
                            </div>
                          </li>
                          <li class="mega-menu__item media-card media-card--card media-card--overlap overflow-hidden opacity-0 w-full">
                            <a
                              class="media-card__link grid w-full h-full relative"
                              href="product-details.html"
                              // style="--color-foreground: 255 255 255; --color-overlay: 0 0 0; --overlay-opacity: 0.3;"
                            >
                              <div class="media media--adapt relative overflow-hidden">
                                <Image
                                  src={require("../../../../assets/images/Barsys_360_header.jpg")}
                                  alt=""
                                  loading="lazy"
                                  is="lazy-image"
                                />
                              </div>
                              <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                <div class="media-card__text opacity-0 shrink-1">
                                  <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                                    Barsys 360
                                    <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap"></small>
                                  </span>
                                  <p class="leading-none text-xs">
                                    Elevate Your Cocktail Game: Barsys 360
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
                              href="product-details.html"
                              // style="--color-foreground: 255 255 255; --color-overlay: 0 0 0; --overlay-opacity: 0.3;"
                            >
                              <div class="media media--adapt relative overflow-hidden">
                                <Image
                                  src={require("../../../../assets/images/Barsys_Coaster_header.jpg")}
                                  alt=""
                                  loading="lazy"
                                  is="lazy-image"
                                />
                              </div>
                              <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                <div class="media-card__text opacity-0 shrink-1">
                                  <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                                    Coaster 2.0
                                    <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap"></small>
                                  </span>
                                  <p class="leading-none text-xs">
                                    Mixology Made Effortless: Barsys Coaster 2.0
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

export default Shop