import React from "react";
import "./collectionrecipes.css";
import Image from "next/image";
import Link from "next/link";
const CollectionRecipesContent = () => {
  const collectionRecipeList = [
    {
      title: "Hot Toddy",
      imgUrl: require("../../../assets/images/HotToddy.jpg"),
    },
    {
      title: "Ginger Ale Highball",
      imgUrl: require("../../../assets/images/GingerAleHighball.jpg"),
    },
    {
      title: "Ginger Snap",
      imgUrl: require("../../../assets/images/GingerSnap.jpg"),
    },
    { title: "Gimlet", imgUrl: require("../../../assets/images/Gimlet.jpg") },
    {
      title: "Gin & Tonic",
      imgUrl: require("../../../assets/images/Gin_Tonic.jpg"),
    },
    {
      title: "Ghost-tini",
      imgUrl: require("../../../assets/images/Ghosttini.jpg"),
    },
    {
      title: "Fuzzy Navel",
      imgUrl: require("../../../assets/images/FuzzyNavel.jpg"),
    },
    {
      title: "End Zone Punch",
      imgUrl: require("../../../assets/images/EndZonePunch.jpg"),
    },
    {
      title: "Blueberry Blast Margarita",
      imgUrl: require("../../../assets/images/Blueberry_Blast_Margarita.jpg"),
    },
    {
      title: "Grilled Pineapple Paradise",
      imgUrl: require("../../../assets/images/Grilled_Pineapple_Paradise.jpg"),
    },
    {
      title: "Citrus Salute Spritzer",
      imgUrl: require("../../../assets/images/Citrus_Salute_Spritzer.jpg"),
    },
    {
      title: "Watermelon Wave Smash",
      imgUrl: require("../../../assets/images/Watermelon_Wave_Smash.jpg"),
    },
  ];
  return (
    <div class="page-container" id="PageContainer">
      <main class="main-content relative" id="MainContent" role="main">
        <div
          id="shopify-section-template--17535652102390__images-with-text-overlay"
          class="shopify-section"
        >
          <div class="section section--padding section--rounded relative">
            <div class="relative">
              <div class="banner media--650px mobile:media--500px relative">
                <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                <scrolled-images
                  class="scrolled-images block absolute top-0 left-0 w-full h-full overflow-hidden"
                  data-parallax="1.5"
                >
                  <div class="scrolled-images__main absolute top-0 left-0 w-full h-full"></div>
                  <template>
                    <lazy-background
                      class="scrolled-images__item"
                    //   style="background-image:url(assets/images/Sex_on_the_Beach.jpg)"
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
                </scrolled-images>
                <div class="banner__content overflow-hidden absolute z-1 top-0 left-0 w-full h-full">
                  <div class="page-width w-full h-full flex md:items-center md:justify-start items-center justify-start">
                    <div class="banner__box banner__box--small md:text-left text-left">
                      <empty-element
                        class="block spacing-section"
                        // style="--spacing-height-desktop: 80px; --spacing-height-mobile: 20px;"
                      ></empty-element>
                      <p class="banner__subheading heading uppercase leading-none tracking-widest subtitle-md banner__text--colored">
                        Explore Cocktail Recipes
                      </p>
                      <h2 class="banner__title heading font-bold leading-none title-md">
                        <split-words
                          class="split-words flex flex-wrap"
                          data-animate="fade-up-large"
                          data-animate-delay="250"
                        >
                          <div
                            class="single-word"
                            style={{display: "inline-block"}}
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                              style={{transform: "translateY(0px); opacity: 1"}}
                            >
                              All
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            style={{display: "inline-block"}}
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="280"
                              style={{transform: "translateY(0px); opacity: 1"}}
                            >
                              Recipes
                            </animate-element>
                          </div>
                        </split-words>
                      </h2>
                      <div class="rte leading-normal body subtext-md">
                        <p>
                          Welcome to Mixology Hub, your ultimate destination for
                          discovering unique and delicious cocktail recipes!
                          Dive into a world of flavors and creativity as we
                          unveil a curated collection of cocktail recipes,
                          complete with detailed ingredient lists and
                          step-by-step instructions. Explore tantalizing
                          combinations of spirits, mixers, and garnishes, and
                          unlock the secrets to crafting extraordinary
                          libations. Get ready to shake, stir, and sip your way
                          to cocktail perfection with&nbsp;Mixology&nbsp;Hub!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--17535652102390__main-collection"
          class="shopify-section collection-section"
        >
          

          {/* <script src="assets/js/collection.js"></script> */}
          <div class="section section--padding section--rounded relative">
            <div class="collection page-width relative">
              <div class="collection__content flex">
                <div
                  class="flex flex-col gap-12 grow"
                  id="ProductGridContainer"
                >
                  <motion-list class="card-grid card-grid--4 mobile:card-grid--2 grid relative">
                    {collectionRecipeList.map((dataList, index) => {
                      return (
                        <div
                          key={index}
                          class="card product-card product-card--card grid leading-none relative overflow-hidden"
                          // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                        >
                          <div class="product-card__media relative h-auto">
                            <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                            <Link
                              class="block relative media media--square overflow-hidden"
                              href="recipe-details"
                              tabindex="-1"
                            >
                              <Image
                                src={dataList.imgUrl}
                                alt={dataList.title}
                                loading="lazy"
                                is="lazy-image"
                                class="loaded"
                              />
                            </Link>
                          </div>
                          <div class="product-card__content flex flex-col justify-start text-left">
                            <div class="product-card__top w-full"></div>
                            <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                              <p class="grow">
                                <Link
                                  class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                                  href="recipe-details"
                                >
                                  {dataList.title}
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                                     </motion-list>

                  <div class="pagination flex align-self-center md:gap-2 text-sm md:text-base">
                    <span
                      class="page current flex items-center justify-center rounded-full pointer-events-none"
                      aria-current="page"
                      aria-label="1"
                    >
                      1
                    </span>
                    <a
                      class="page flex items-center justify-center rounded-full"
                      href="#"
                      is="magnet-link"
                      aria-current="page"
                      aria-label="2"
                    >
                      {" "}
                      <span class="btn-text" data-text="">
                        2
                      </span>
                    </a>
                    <a
                      class="page flex items-center justify-center rounded-full"
                      href="#"
                      is="magnet-link"
                      aria-current="page"
                      aria-label="3"
                    >
                      <span class="btn-text" data-text="">
                        3
                      </span>
                    </a>
                    <span
                      class="page flex items-center justify-center rounded-full"
                      aria-current="page"
                      aria-label="…"
                    >
                      …
                    </span>
                    <a
                      class="page flex items-center justify-center rounded-full"
                      href="#"
                      is="magnet-link"
                      aria-current="page"
                      aria-label="11"
                    >
                      <span class="btn-text" data-text="">
                        11
                      </span>
                    </a>
                    <a
                      class="next flex items-center justify-center gap-2"
                      href="#"
                      is="magnet-link"
                      aria-current="page"
                      aria-label="Next"
                    >
                      <span class="btn-text" data-text="">
                        Next
                      </span>
                      <svg
                        class="icon icon-arrow-right icon-sm transform stroke-1 flex-auto"
                        viewBox="0 0 21 20"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollectionRecipesContent;
