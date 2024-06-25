import React from "react";
import "./collections.css";
import Image from "next/image";
import Link from "next/link";
const CollectionContent = () => {
    const collectionData=[
        {
            mainImg:require("../../../assets/images/06_Barsys_Coaster_Midnight_Black.jpg"),
            cardTitle:"Coaster 2.0",
            link:"/product-detail",
            colorMatch:[
                {
                   colorTitle:"Matte Black", color:"#000000",link:"/product-detail"
                },
                {
                    colorTitle:"Silver", color:"#f7f7f7",link:"/product-detail"
                 }
            ],
            templaImg:[
                {tempImg:require("../../../assets/images/06_Barsys_Coaster_Midnight_Black.jpg")},
                {tempImg:require("../../../assets/images/08_Barsys_Coaster_Midnight_Black.jpg")},
                {tempImg:require("../../../assets/images/Coaster-video-banner.jpg")},
                {tempImg:require("../../../assets/images/01_Barsys_Coaster_Midnight_Black.jpg")},
            ],
            secondryImg:[
                {secondryImg:require("../../../assets/images/06_Barsys_Coaster_Midnight_Black.jpg")},
                {secondryImg:require("../../../assets/images/08_Barsys_Coaster_Midnight_Black.jpg")},
                {secondryImg:require("../../../assets/images/Coaster-video-banner.jpg")},
                {secondryImg:require("../../../assets/images/01_Barsys_Coaster_Midnight_Black.jpg")},
            ],
        },
        {
            mainImg:require("../../../assets/images/Basys-2-0-product.jpg"),
            cardTitle:"Barsys 2.0+",
            // colorMatch:[
            //     "Matte Black",
            //     "Silver"
            // ],
            templaImg:[
                {tempImg:require("../../../assets/images/Basys-2-0-product.jpg")},
                {tempImg:require("../../../assets/images/barsys-2-0productimage1.png")},
                {tempImg:require("../../../assets/images/barsys-2-0productimage2.png")},
                {tempImg:require("../../../assets/images/barsys-2-0productimage3.png")},
            ],
            secondryImg:[
                {secondryImg:require("../../../assets/images/Basys-2-0-product.jpg")},
                {secondryImg:require("../../../assets/images/barsys-2-0productimage1.png")},
                {secondryImg:require("../../../assets/images/barsys-2-0productimage2.png")},
                {secondryImg:require("../../../assets/images/barsys-2-0productimage3.png")},
            ],
        },
        {
            mainImg:require("../../../assets/images/barsys-360-black-1.jpg"),
            cardTitle:"Barsys 360",
            colorMatch:[
                {
                    colorTitle:"Black", color:"#000000",link:"product-detail"
                 },
                 {
                     colorTitle:"White", color:"#ffffff",link:"product-detail"
                  }
            ],
            templaImg:[
                {tempImg:require("../../../assets/images/barsys-360-black-1.jpg")},
                {tempImg:require("../../../assets/images/barsys-360-black-2.jpg")},
                {tempImg:require("../../../assets/images/barsys-360-black-3.jpg")},
                {tempImg:require("../../../assets/images/barsys-360-black-4.jpg")},
            ],
            secondryImg:[
                {secondryImg:require("../../../assets/images/barsys-360-black-1.jpg")},
                {secondryImg:require("../../../assets/images/barsys-360-black-2.jpg")},
                {secondryImg:require("../../../assets/images/barsys-360-black-3.jpg")},
                {secondryImg:require("../../../assets/images/barsys-360-black-4.jpg")},
            ],
        }
    ]
  return (
    <div class="page-container" id="PageContainer">
      <main class="main-content relative" id="MainContent" role="main">
        <div
          id="shopify-section-template--17771870716150__main-collection-banner"
          class="shopify-section collection-banner-section"
        >
          {/* <style>
                #shopify-section-template--17771870716150__main-collection-banner {
                    --section-padding-top: 0px;
                    --section-padding-bottom: 0px;
                    --color-foreground: 255 255 255;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                    --color-overlay: 0 0 0;
                    --overlay-opacity: 0.4;
                }
            </style> */}

          <div class="section section--padding">
            <div class="relative">
              <div class="banner relative media--750px mobile:media--auto">
                <media-element
                  class="banner__media block w-full h-full overflow-hidden"
                  data-parallax="0.3"
                  data-parallax-dir="vertical"
                >
                  <animate-element
                    data-animate="zoom-out"
                    class="media media--height block w-full h-full relative overflow-hidden animate"
                    style={{ transform: "scale(1)" }}
                  >
                    <Image
                      src={require("../../../assets/images/Global_Collaboration_Banner.jpg")}
                      alt="Barsys Products"
                      loading="eager"
                      fetchpriority="high"
                      is="lazy-image"
                      class="loaded"
                    />
                    {/* <img src="assets/images/Global_Collaboration_Banner.jpg" alt="Barsys Products" loading="eager" fetchpriority="high" is="lazy-image" class="loaded"> */}
                  </animate-element>
                </media-element>
                <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                <div class="banner__content overflow-hidden absolute z-1 top-0 left-0 w-full h-full">
                  <div class="page-width w-full h-full flex md:items-end md:justify-start items-end justify-start">
                    <div class="banner__box md:text-left text-left">
                      <empty-element
                        class="block spacing-section hidden md:block"
                        // style="--spacing-height-desktop: 48px; --spacing-height-mobile: 0px;"
                      ></empty-element>
                      <animate-element
                        class="block animate"
                        data-animate="fade-up"
                        data-animate-delay="250"
                        style={{transform: "translateY(0px)", opacity: 1}}
                      >
                        <nav
                          class="breadcrumb"
                          role="navigation"
                          aria-label="breadcrumbs"
                        >
                          <ul class="inline-flex gap-4 md:gap-6">
                            <li class="flex items-center gap-4 md:gap-6">
                              <a
                                class="block"
                                href="/"
                                title="Back to the frontpage"
                                is="magnet-link"
                              >
                                <svg
                                  class="icon icon-home icon-sm"
                                  viewBox="0 0 20 21"
                                  stroke="currentColor"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M18.333 14.667v-3.713c0-1.355 0-2.033-.165-2.66a5 5 0 0 0-.818-1.702c-.387-.521-.916-.945-1.974-1.791l-.378-.303h0c-1.784-1.427-2.676-2.14-3.665-2.414a5 5 0 0 0-2.666 0c-.99.274-1.881.987-3.665 2.414h0l-.378.303c-1.058.846-1.587 1.27-1.974 1.79a5 5 0 0 0-.818 1.703c-.165.627-.165 1.305-.165 2.66v3.713a4.167 4.167 0 0 0 4.166 4.166c.92 0 1.667-.746 1.667-1.666v-3.334a2.5 2.5 0 0 1 5 0v3.334c0 .92.746 1.666 1.667 1.666a4.167 4.167 0 0 0 4.166-4.166Z"
                                  ></path>
                                </svg>
                              </a>
                            </li>
                            <li class="flex items-center gap-4 md:gap-6">
                              <a
                                class="block"
                                href="collections.html"
                                is="magnet-link"
                              >
                                Collections
                              </a>
                            </li>
                            <li class="flex items-center gap-4 md:gap-6">
                              Barsys Products
                            </li>
                          </ul>
                        </nav>
                      </animate-element>
                      <h1 class="banner__title heading font-bold leading-none title-xl tracking-heading">
                        <split-words
                          class="split-words flex flex-wrap"
                          data-animate="fade-up-large"
                          data-animate-delay="500"
                        >
                          <div
                            class="single-word"
                            style={{display: "inline-block"}}
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="500"
                              style={{transform: "translateY(0px)", opacity: 1}}
                            >
                              Barsys
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            style={{display: "inline-block"}}
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="530"
                              style={{transform: "translateY(0px)", opacity: 1}}
                            >
                              Products
                            </animate-element>
                          </div>
                        </split-words>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--17771870716150__vendor_images_with_text_M9jJiq"
          class="shopify-section"
        ></div>
        <div
          id="shopify-section-template--17771870716150__main-collection"
          class="shopify-section collection-section"
        >
          {/* <style>
                #shopify-section-template--17771870716150__main-collection {
                    --section-padding-top: 40px;
                    --section-padding-bottom: 100px;
                }
            </style> */}

          {/* <script src="assets/js/collection.js"></script> */}
          <div class="section section--padding section--rounded relative">
            <div class="collection page-width relative">
              <div class="collection__content flex">
                <div
                  class="flex flex-col gap-12 grow"
                  id="ProductGridContainer"
                >
                  <motion-list class="card-grid card-grid--4 mobile:card-grid--2 grid relative">
                    {
                        collectionData.map((dataList,index)=>{
                            return(
                                <div key={index}
                                class="card product-card product-card--card grid leading-none relative overflow-hidden"
                              //   style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                              >
                                <div class="product-card__media relative h-auto">
                                  <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                                  <a
                                    class="block relative media media--square"
                                    href={`${dataList.link}`}
                                    tabindex="-1"
                                  >
                                    <template>
                                      {
                                        dataList?.templaImg?.map((items,id)=>{
                                          return(
                                            <div key={id} class="media media--height w-full h-full">
                                            <Image
                                              src={items?.tempImg}
                                              alt="#color_matte-black"
                                              loading="lazy"
                                              is="lazy-image"
                                            />
                                            {/* <img src="assets/images/Coaster-video-banner.jpg" alt="#color_matte-black" loading="lazy" is="lazy-image"> */}
                                          </div>
                                          )
                                        })
                                      }
                                    </template>
                                    <secondary-media class="product-card__carousel block absolute top-0 left-0 w-full h-full hidden md:block flickity-enabled">
                                      <div
                                        class="flickity-viewport"
                                        style={{height: "341.25px"}}
                                      >
                                        <div
                                          class="flickity-slider"
                                          style={{transform: "translateX(0%)"}}
                                        >
                                        {
                                        dataList?.secondryImg?.map((items,id)=>{
                                          return(
                                            <div
                                            class="media media--height w-full h-full flickity-cell is-selected"
                                            style={{transform: "translateX(0%)"}}
                                          >
                                            <Image
                                              src={items.secondryImg}
                                              alt="#color_matte-black"
                                              loading="lazy"
                                              is="lazy-image"
                                              class="loaded"
                                            />
                                            {/* <img src="assets/images/06_Barsys_Coaster_Midnight_Black.jpg" alt="#color_matte-black" loading="lazy" is="lazy-image"> */}
                                          </div>
                                          )
                                        })
                                      } 
                                        </div>
                                      </div>
                                      <div class="flickity-page-dots">
                                        <button
                                          type="button"
                                          class="flickity-page-dot is-selected"
                                          aria-label="View slide 1"
                                          aria-current="step"
                                        ></button>
                                        <button
                                          type="button"
                                          class="flickity-page-dot"
                                          aria-label="View slide 2"
                                        ></button>
                                        <button
                                          type="button"
                                          class="flickity-page-dot"
                                          aria-label="View slide 3"
                                        ></button>
                                        <button
                                          type="button"
                                          class="flickity-page-dot"
                                          aria-label="View slide 4"
                                        ></button>
                                      </div>
                                    </secondary-media>
                                    <Image
                                      src={dataList.mainImg}
                                      alt="#color_matte-black"
                                      loading="lazy"
                                      is="lazy-image"
                                      class="loaded"
                                    />
                                    {/* <img src="assets/images/06_Barsys_Coaster_Midnight_Black.jpg" alt="#color_matte-black" loading="lazy" is="lazy-image" class="loaded"> */}
                                  </a>
                                </div>
                                <div class="product-card__content flex flex-col justify-start text-left">
                                  <div class="product-card__top w-full"></div>
                                  <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                                    <p class="grow">
                                      <Link
                                        class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                                        href={`${dataList?.link}`}
                                      >
                                        {dataList.cardTitle}
                                      </Link>
                                    </p>
                                  </div>
                                  <div class="product-card__bottom flex items-center gap-2">
                                    <ul class="swatches swatches--round swatches--8194709848310 inline-flex items-center gap-2">
                                        {
                                            dataList?.colorMatch?.map((items,id)=>{
                                                return(
                                                    <li>
                                                    <Link
                                                      href={`${items.link}`}
                                                      class="color-swatch block relative"
                                                      title={dataList.cardTitle + "-" +items.colorTitle}
                                                      aria-label={dataList.cardTitle + "-" +items.colorTitle}
                                                      style={{background:items?.color}}
                                                      // style="--swatch-background: #000000;"
                                                    >
                                                      <span class="sr-only">{items.colorTitle}</span>
                                                    </Link>
                                                  </li>
                                                )
                                            })
                                        }
                                      {/* <li>
                                        <a
                                          href="product-details.html"
                                          class="color-swatch block relative"
                                          title="Coaster 2.0 - Matte Black"
                                          aria-label="Coaster 2.0 - Matte Black"
                                          style={{background:"#000000"}}
                                          // style="--swatch-background: #000000;"
                                        >
                                          <span class="sr-only">Matte Black</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="product-details.html"
                                          class="color-swatch block relative"
                                          title="Coaster 2.0 - Silver"
                                          aria-label="Coaster 2.0 - Silver"
                                          // style="--swatch-background: #f7f7f7;"
                                        >
                                          <span class="sr-only">Silver</span>
                                        </a>
                                      </li> */}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )
                        })
                    }
                   
                  </motion-list>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--17771870716150__vendor_testimonials_yeQf94"
          class="shopify-section"
        ></div>
        <div
          id="shopify-section-template--17771870716150__vendor_rich_text_M3F673"
          class="shopify-section"
        ></div>
        <div
          id="shopify-section-template--17771870716150__vendor_scrolling_text_EUJXkD"
          class="shopify-section scrolling-text-section"
        ></div>
      </main>
    </div>
  );
};

export default CollectionContent;
