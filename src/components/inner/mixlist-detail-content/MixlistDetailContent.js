import Image from "next/image";
import React from "react";
import "./mixlistdetail.css";
import Link from "next/link";
const MixlistDetailContent = () => {
  const detailListData = [
    {
      sliderData: [
        {
          imgSrc: require("../../../assets/images/Pineapple_Sage_Serenity.jpg"),
        },
        {
          imgSrc: require("../../../assets/images/Cucumber_Basil_Breeze.jpg"),
        },
        {
          imgSrc: require("../../../assets/images/Herbal_Hibiscus_Highball.jpg"),
        },
        {
          imgSrc: require("../../../assets/images/Mango_Tango_Margarita.jpg"),
        },
        {
          imgSrc: require("../../../assets/images/Citrus_Sunrise_Spritzer.jpg"),
        },
        {
          imgSrc: require("../../../assets/images/BlueHorizon_Blueberry_Smash.jpg"),
        },
        {
          imgSrc: require("../../../assets/images/Earthy_Rosemary_Mule.jpg"),
        },
        {
          imgSrc: require("../../../assets/images/Tropical_Rainforest_Rum_Punch.jpg"),
        },
        {
          imgSrc: require("../../../assets/images/Botanical_Bliss_Fizz.jpg"),
        },
        {
          imgSrc: require("../../../assets/images/Green_Goddess_Cooler.jpg"),
        },
      ],
    },
    {
      mediaList: [
        {
          mediaImg: require("../../../assets/images/Pineapple_Sage_Serenity.jpg"),
          mediaTitle: [
            { name: "Pineapple", delay: "250" },
            { name: "Sage", delay: "280" },
            { name: "Serenity", delay: "310" },
          ],
          content:
            "Find serenity in the Pineapple Sage Serenity, a tranquil combination of 1.5 oz of sage-infused rum, 2 oz of pineapple juice, 0.5 oz of coconut water, and 0.75 oz of lime juice. Shaken with ice and strained into a Tiki mug over ice, this cocktail is a perfect blend of tropical and serene flavors. Garnished with a pineapple wedge and a sage leaf, it's an exotic and refreshing libation for those who crave a tropical escape with a touch of tranquility.",
        },
        {
          mediaImg: require("../../../assets/images/Cucumber_Basil_Breeze.jpg"),
          mediaTitle: [
            { name: "Cucumber", delay: "250" },
            { name: "Basil", delay: "280" },
            { name: "Breeze", delay: "310" },
          ],
          content:
            "Feel the breeze with the Cucumber Basil Breeze, a refreshing cocktail featuring 2 oz of vodka, 1 oz of fresh cucumber juice, 0.5 oz of simple syrup, and 4-6 fresh basil leaves. Muddled and shaken with ice, then strained into a rocks glass over ice, this cocktail is a celebration of refreshing and herbaceous notes. Garnished with a cucumber ribbon and basil sprig, it's a perfect libation for those who seek a breezy and revitalizing cocktail experience.",
        },
        {
          mediaImg: require("../../../assets/images/Herbal_Hibiscus_Highball.jpg"),
          mediaTitle: [
            { name: "Herbal", delay: "250" },
            { name: "Hibiscus", delay: "280" },
            { name: "Highball", delay: "310" },
          ],
          content:
            " Savor the herbal notes of the Herbal Hibiscus Highball, featuring 1.5 oz of gin, 0.5 oz of cooled hibiscus tea, and 0.75 oz of agave syrup. Served over ice in a highball glass and topped with soda water, this highball is a perfect balance of floral and herbal flavors. Garnished with a hibiscus flower, it's a refreshing and elegant libation for those who appreciate the nuanced herbal undertones of a well-crafted highball.",
        },
        {
          mediaImg: require("../../../assets/images/Mango_Tango_Margarita.jpg"),
          mediaTitle: [
            { name: "Mango", delay: "250" },
            { name: "Tango", delay: "280" },
            { name: "Margarita", delay: "310" },
          ],
          content:
            "Embark on a tropical dance with the Mango Tango Margarita, a delightful twist on the classic featuring 2 oz of tequila, 1 oz of mango puree, 0.75 oz of triple sec, and 0.5 oz of fresh lime juice. Served in a rimmed margarita glass with chili-salted rim, this margarita is a spicy and exotic journey. Garnished with a mango slice, it's a perfect libation for those who crave a tropical and spicy margarita experience.",
        },
        {
          mediaImg: require("../../../assets/images/Citrus_Sunrise_Spritzer.jpg"),
          mediaTitle: [
            { name: "Citrus", delay: "250" },
            { name: "Sunshine", delay: "280" },
            { name: "Spritzer", delay: "310" },
          ],
          content:
            "Welcome the day with the Citrus Sunrise Spritzer, a citrusy delight featuring 1.5 oz of orange-infused vodka, 0.5 oz of triple sec, and 1 oz of fresh orange juice. Served over ice in a wine glass and topped with sparkling water, this spritzer is a celebration of bright and effervescent citrus notes. Garnished with an orange wheel, it's a perfect libation for a sparkling and refreshing start to any occasion.",
        },
        {
          mediaImg: require("../../../assets/images/BlueHorizon_Blueberry_Smash.jpg"),
          mediaTitle: [
            { name: "Blue", delay: "250" },
            { name: "Horizon", delay: "280" },
            { name: "Blueberry", delay: "310" },
            { name: "Smash", delay: "340" },
          ],
          content:
            "Dive into a berry-infused delight with the Blue Horizon Blueberry Smash, featuring 2 oz of bourbon, 0.5 oz of blueberry liqueur, and 0.75 oz of fresh lemon juice. Muddled with a handful of fresh basil leaves and served over ice in an Old Fashioned glass, this smash is a celebration of fruity and herbal notes. Garnished with blueberries and a basil leaf, it's a vibrant and flavorful libation for those who crave a delightful bourbon smash.",
        },
        {
          mediaImg: require("../../../assets/images/Earthy_Rosemary_Mule.jpg"),
          mediaTitle: [
            { name: "Earthy", delay: "250" },
            { name: "Rosemary", delay: "280" },
            { name: "Mule", delay: "310" },
          ],
          content:
            "Embrace the earthy sophistication of the Earthy Rosemary Mule, a mule variation featuring 1.5 oz of vodka, 0.5 oz of rosemary syrup, and 0.75 oz of fresh lime juice. Served over ice in a Moscow Mule mug and topped with ginger beer, this cocktail is a perfect harmony of herbaceous and zesty notes. Garnished with a rosemary sprig, it's a delightful libation for those who appreciate the refreshing kick of a mule with a touch of herbal complexity.",
        },
        {
          mediaImg: require("../../../assets/images/Tropical_Rainforest_Rum_Punch.jpg"),
          mediaTitle: [
            { name: "Tropical", delay: "250" },
            { name: "Rainforest", delay: "280" },
            { name: "Rum", delay: "310" },
            { name: "Punch", delay: "340" },
          ],
          content:
            "Immerse yourself in the exotic allure of the Tropical Rainforest Rum Punch, a tropical delight featuring 2 oz of dark rum, 3 oz of pineapple juice, 1 oz of coconut cream, and 0.5 oz of lime juice. Shaken with ice and strained into a hurricane glass, this punch is a celebration of tropical flavors. Garnished with a pineapple leaf and edible flowers, it's a visual and flavorful escape to an exotic rainforest.",
        },
        {
          mediaImg: require("../../../assets/images/Botanical_Bliss_Fizz.jpg"),
          mediaTitle: [
            { name: "Botanical", delay: "250" },
            { name: "Bliss", delay: "280" },
            { name: "Fizz", delay: "310" },
          ],
          content:
            "Indulge in the effervescent delight of the Botanical Bliss Fizz, a bubbly concoction featuring 1.5 oz of botanical-infused vodka, 0.5 oz of lavender syrup, and 0.75 oz of fresh lemon juice. Served over ice in a Collins glass and topped with soda water, this floral fizz is a sensory journey into the world of botanicals. Garnished with a lavender sprig, it's an elegant libation perfect for those who appreciate the delicate nuances of botanical and floral notes.",
        },
        {
          mediaImg: require("../../../assets/images/Green_Goddess_Cooler.jpg"),
          mediaTitle: [
            { name: "Green", delay: "250" },
            { name: "Goddess", delay: "280" },
            { name: "Cooler", delay: "310" },
          ],
          content:
            "Experience a revitalizing journey with the Green Goddess Cooler, a verdant cocktail featuring 2 oz of gin, 0.75 oz of elderflower liqueur, and 1 oz of fresh cucumber juice. Muddled with 6-8 fresh mint leaves and served over ice in a highball glass, this refreshing highball is a celebration of herbal and green notes. Garnished with a cucumber wheel and mint sprig, it's an invigorating libation perfect for those who seek a refreshing and herbal escape.",
        },
      ],
    },
  ];
  return (
    <div class="page-container" id="PageContainer">
      <main class="main-content relative" id="MainContent" role="main">
        <div
          id="shopify-section-template--17610579509494__mixlist_information_DtXHb7"
          class="shopify-section"
        >
          <div class="section section--padding section--rounded relative">
            <div class="page-width page-width--full relative">
              <div class="featured-product product product--scroll flex flex-col items-start lg:grid gap-5 w-full relative">
                <media-gallery
                  class="product__gallery product__gallery--partial block w-full relative xl:grid xl:items-start gap-5 h-full"
                  form="ProductForm-template--17610579509494__mixlist_information_DtXHb7"
                  aria-label="Gallery Viewer"
                  data-animate="fade-up"
                  data-immediate=""
                >
                  <sticky-element
                    class="1234 product__preview relative overflow-hidden w-full h-full hidden xl:block sticky top-0"
                    // style="inset-block-start: 121px; --inset: 121px;"
                  >
                    <div
                      class="product__media media flex w-full relative overflow-hidden"
                      data-media-type=""
                      data-media-id=""
                    >
                      <Image
                        src={require("../../../assets/images/Barsys_Mixlist_Cover_Earth_Day.jpg")}
                        class="w-full loaded"
                        is="lazy-image"
                      />
                    </div>
                  </sticky-element>
                  <div class="product__media-container flex flex-col gap-4">
                    <div class="relative w-full h-full">
                      <slider-element
                        id="SliderGallery-template--17610579509494__mixlist_information_DtXHb7"
                        class="slider slider--desktop slider--tablet block w-full h-full"
                        selector=".product__media"
                      >
                        <div class="product__media-list flex gap-1 lg:grid lg:gap-4 xl:gap-5 grid-cols-2">
                          {detailListData[0]?.sliderData?.map((data, id) => {
                            return (
                              <div
                                key={id}
                                class="product__media card media flex w-full flex-auto relative overflow-hidden"
                                data-media-type=""
                                data-media-id="40268611158262"
                              >
                                <Image
                                  src={data.imgSrc}
                                  class="w-full loaded"
                                  is="lazy-image"
                                />
                                <button
                                  type="button"
                                  class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                  is="media-none-button"
                                  aria-label="Open media 1 in modal"
                                  tabindex="-1"
                                >
                                  <svg
                                    class="icon icon-zoom icon-xs lg:hidden"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </slider-element>

                      <div class="indicators hidden items-center justify-between opacity-0 z-1 absolute top-0 left-0 w-full h-full pointer-events-none">
                        <button
                          class="button button--secondary pointer-events-auto"
                          type="button"
                          is="previous-button"
                          aria-controls="SliderGallery-template--17610579509494__mixlist_information_DtXHb7"
                          aria-label="Previous"
                          disabled=""
                          hidden=""
                        >
                          <span class="btn-fill" data-fill=""></span>
                          <span class="btn-text">
                            <svg
                              class="icon icon-chevron-left icon-md transform"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14 6L8 12L14 18"
                              ></path>
                            </svg>
                          </span>
                          <span class="btn-loader">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </button>
                        <button
                          class="button button--secondary pointer-events-auto"
                          type="button"
                          is="next-button"
                          aria-controls="SliderGallery-template--17610579509494__mixlist_information_DtXHb7"
                          aria-label="Next"
                          hidden=""
                        >
                          <span class="btn-fill" data-fill=""></span>
                          <span class="btn-text">
                            <svg
                              class="icon icon-chevron-right icon-md transform"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 6L16 12L10 18"
                              ></path>
                            </svg>
                          </span>
                          <span class="btn-loader">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </media-gallery>
                <animate-element
                  class="product__info block sticky w-full animate"
                  data-animate="fade-up"
                  data-immediate=""
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <div class="product__title with-price ">
                    <h1 class="leading-none font-bold product-title-md col-span-full">
                      <split-words
                        class="split-words flex flex-wrap"
                        data-animate="fade-up"
                      >
                        <div
                          class="single-word"
                          style={{ display: "inline-block" }}
                        >
                          <animate-element
                            class="block animate"
                            data-animate="fade-up"
                            data-animate-delay="0"
                            style={{ transform: "translateY(0px)", opacity: 1 }}
                          >
                            Earth
                          </animate-element>
                        </div>
                        <div
                          class="single-word"
                          style={{ display: "inline-block" }}
                        >
                          <animate-element
                            class="block animate"
                            data-animate="fade-up"
                            data-animate-delay="30"
                            style={{ transform: "translateY(0px)", opacity: 1 }}
                          >
                            Day
                          </animate-element>
                        </div>
                      </split-words>
                    </h1>
                  </div>
                  <div class="product__text rte text-base">
                    Celebrate Earth Day with our eco-conscious cocktail mixlist,
                    designed to honor the planet while you sip! Each drink in
                    this series features sustainable, locally-sourced
                    ingredients and eco-friendly practices, from organic spirits
                    to garnishes grown in community gardens. Enjoy fresh, green
                    or herbal delights that remind us of nature's bounty.
                    Perfect for Earth Day festivities or any
                    environmentally-minded gathering, these cocktails are
                    crafted not only to taste good but also to do good.
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="hidden sm:flex items-center gap-3">
                      <p class="leading-none">Share:</p>
                      <ul class="social-sharing flex flex-wrap items-center">
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="//www.facebook.com/sharer.php?u=https://thebarsys.com"
                            title="Share on Facebook"
                          >
                            <svg
                              class="icon icon-facebook icon-sm"
                              viewBox="0 0 24 24"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.03153 23L9 13H5V9H9V6.5C9 2.7886 11.2983 1 14.6091 1C16.1951 1 17.5581 1.11807 17.9553 1.17085V5.04948L15.6591 5.05052C13.8584 5.05052 13.5098 5.90614 13.5098 7.16171V9H18.75L16.75 13H13.5098V23H9.03153Z"></path>
                            </svg>
                            <span class="sr-only">Share on Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="//twitter.com/intent/tweet?text=&amp;url=https://thebarsys.com"
                            title="Tweet on Twitter"
                          >
                            <svg
                              class="icon icon-twitter icon-sm"
                              viewBox="0 0 24 24"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M13.8984 10.4679L21.3339 2H19.5687L13.1074 9.35221L7.95337 2H2L9.80183 13.1157L2 22H3.7652L10.5845 14.2315L16.03 22H21.9833M4.398 3.29892H7.10408L19.5687 20.7594H16.8626"></path>
                            </svg>
                            <span class="sr-only">Tweet on Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="//pinterest.com/pin/create/button/?url=https://thebarsys.com&amp;media=Liquid error (snippets/social-sharing line 25): invalid url input&amp;description="
                            title="Pin on Pinterest"
                          >
                            <svg
                              class="icon icon-pinterest icon-sm"
                              viewBox="0 0 24 24"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 1C5.95 1 1 5.95 1 12C1 16.675 3.93333 20.6167 7.96667 22.2667C7.875 21.4417 7.78333 20.0667 7.96667 19.15C8.15 18.325 9.25 13.65 9.25 13.65C9.25 13.65 8.975 12.9167 8.975 12C8.975 10.4417 9.89167 9.34167 10.9917 9.34167C11.9083 9.34167 12.3667 10.075 12.3667 10.9C12.3667 11.8167 11.725 13.2833 11.45 14.5667C11.175 15.6667 12 16.5833 13.1 16.5833C15.025 16.5833 16.5833 14.5667 16.5833 11.5417C16.5833 8.88333 14.6583 7.05 12 7.05C8.88333 7.05 7.05 9.43333 7.05 11.8167C7.05 12.7333 7.41667 13.7417 7.875 14.2917C7.96667 14.3833 7.96667 14.475 7.96667 14.5667C7.875 14.9333 7.69167 15.6667 7.69167 15.85C7.6 16.0333 7.50833 16.125 7.325 16.0333C5.95 15.3917 5.125 13.375 5.125 11.8167C5.125 8.33333 7.69167 5.125 12.3667 5.125C16.2167 5.125 19.15 7.875 19.15 11.45C19.15 15.2083 16.7667 18.325 13.4667 18.325C12.3667 18.325 11.2667 17.775 10.9 17.0417C10.9 17.0417 10.35 19.15 10.2583 19.7C9.98333 20.6167 9.34167 21.8083 8.88333 22.5417C9.8 22.8167 10.9 23 12 23C18.05 23 23 18.05 23 12C23 5.95 18.05 1 12 1Z"></path>
                            </svg>
                            <span class="sr-only">Pin on Pinterest</span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="//web.whatsapp.com/send?text=https://thebarsys.com"
                            title="Share on WhatsApp"
                          >
                            <svg
                              class="icon icon-whatsapp icon-sm"
                              viewBox="0 0 24 24"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 24L1.69 17.84C0.65 16.03 0.1 13.99 0.1 11.89C0.1 5.33 5.44 0 12 0C15.18 0 18.17 1.24 20.42 3.49C22.67 5.74 23.9 8.73 23.9 11.9C23.9 18.46 18.56 23.79 12 23.79C10.01 23.79 8.05 23.29 6.32 22.34L0.01 23.99L0 24ZM6.6 20.19L6.96 20.4C8.48 21.3 10.22 21.78 11.99 21.78C17.44 21.78 21.88 17.35 21.88 11.9C21.88 9.26 20.85 6.78 18.99 4.91C17.13 3.04 14.64 2.01 12 2.01C6.55 2.01 2.11 6.44 2.11 11.89C2.11 13.76 2.63 15.58 3.62 17.15L3.86 17.52L2.86 21.17L6.6 20.19ZM9.02 6.92C8.78 6.34 8.53 6.42 8.35 6.41C8.18 6.41 7.98 6.4 7.78 6.4C7.58 6.4 7.26 6.47 6.99 6.77C6.72 7.07 5.95 7.79 5.95 9.25C5.95 10.71 7.02 12.13 7.16 12.32C7.31 12.52 9.26 15.52 12.24 16.81C12.95 17.12 13.5 17.3 13.93 17.44C14.64 17.67 15.29 17.63 15.8 17.56C16.37 17.47 17.56 16.84 17.81 16.15C18.06 15.46 18.06 14.86 17.98 14.74C17.91 14.62 17.71 14.54 17.41 14.39C17.11 14.24 15.65 13.52 15.38 13.42C15.11 13.32 14.91 13.27 14.71 13.57C14.51 13.87 13.94 14.54 13.77 14.74C13.6 14.94 13.42 14.96 13.13 14.81C12.83 14.66 11.87 14.35 10.74 13.34C9.86 12.55 9.26 11.58 9.09 11.28C8.92 10.98 9.07 10.82 9.22 10.67C9.35 10.54 9.52 10.32 9.67 10.15C9.82 9.98 9.87 9.85 9.97 9.65C10.07 9.45 10.02 9.28 9.95 9.13C9.88 8.98 9.28 7.52 9.03 6.92H9.02Z"></path>
                            </svg>
                            <span class="sr-only">Share on WhatsApp</span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener"
                            class="social-sharing__link block"
                            is="magnet-link"
                            href="mailto:?&amp;subject=&amp;body=https://thebarsys.com"
                            title="Share by Email"
                          >
                            <svg
                              class="icon icon-email icon-sm"
                              viewBox="0 0 24 22"
                              stroke="none"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2.73.545C3.8 0 5.2 0 8 0h8c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C24 3.8 24 5.2 24 8v5.767c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.186c-1.07.544-2.47.544-5.27.544H8c-2.8 0-4.2 0-5.27-.544a5 5 0 0 1-2.185-2.186C0 17.967 0 16.567 0 13.767V8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545Zm2.988 5.25a.75.75 0 1 0-.832 1.248l1.117.744.256.17.139.093c1.791 1.195 2.858 1.906 4.029 2.187a6.75 6.75 0 0 0 3.146 0c1.171-.28 2.238-.992 4.03-2.187l.138-.092.256-.171 1.117-.744a.75.75 0 1 0-.832-1.248l-1.117.744-.256.17c-1.973 1.316-2.807 1.858-3.685 2.07a5.25 5.25 0 0 1-2.447 0c-.88-.212-1.713-.754-3.686-2.07l-.256-.17-1.117-.744Z"></path>
                            </svg>
                            <span class="sr-only">Share by Email</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="sm:hidden flex items-center gap-2">
                      <svg
                        class="icon icon-share icon-sm"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m7.218 8.527 5.564-2.782M7.218 11.39l5.564 2.783m-8.509-.9a3.273 3.273 0 1 0 0-6.546 3.273 3.273 0 0 0 0 6.546Zm11.454-5.728a3.273 3.273 0 1 0 0-6.545 3.273 3.273 0 0 0 0 6.545Zm0 11.455a3.273 3.273 0 1 0 0-6.545 3.273 3.273 0 0 0 0 6.545Z"
                        ></path>
                      </svg>
                      <a
                        class="link text-sm"
                        href="#"
                        aria-controls="ShareDrawer-template--17610579509494__mixlist_information_DtXHb7"
                        aria-expanded="false"
                      >
                        Share
                      </a>
                    </div>
                    <share-drawer
                      id="ShareDrawer-template--17610579509494__mixlist_information_DtXHb7"
                      class="sm:hidden share-drawer drawer drawer--end z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
                      role="dialog"
                      aria-modal="true"
                      aria-label="Share"
                      data-section-id="template--17610579509494__mixlist_information_DtXHb7"
                      hidden=""
                    >
                      <overlay-element
                        class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
                        aria-controls="ShareDrawer-template--17610579509494__mixlist_information_DtXHb7"
                        aria-expanded="false"
                      ></overlay-element>
                      <div class="drawer__inner z-10 absolute top-0 flex flex-col w-full h-full overflow-hidden">
                        <gesture-element class="drawer__header flex items-center justify-between opacity-0 invisible relative">
                          <span class="drawer__title heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                            Share
                          </span>
                          <button
                            class="button button--secondary button--close drawer__close hidden sm:flex items-center justify-center"
                            type="button"
                            is="hover-button"
                            aria-controls="ShareDrawer-template--17610579509494__mixlist_information_DtXHb7"
                            aria-expanded="false"
                            aria-label="Close"
                          >
                            <span class="btn-fill" data-fill=""></span>
                            <span class="btn-text">
                              <svg
                                class="icon icon-close icon-sm"
                                viewBox="0 0 20 20"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 15L15 5M5 5L15 15"
                                ></path>
                              </svg>
                              <svg
                                class="icon icon-loader icon-sm absolute opacity-0 invisible animate-spin"
                                viewBox="0 0 18 18"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M0.7,9.9C0.5,5.2,4.1,1.2,8.5,1c4.7-0.3,8.9,3.8,8.8,8.8"
                                ></path>
                              </svg>
                            </span>
                            <span class="btn-loader">
                              <span></span>
                              <span></span>
                              <span></span>
                            </span>
                          </button>
                        </gesture-element>
                        <div class="drawer__content opacity-0 invisible">
                          <div class="drawer__scrollable relative w-full">
                            <ul class="share-buttons grid">
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="//www.facebook.com/sharer.php?u=https://thebarsys.comhttps://thebarsys.com"
                                  title="Share on Facebook"
                                >
                                  <svg
                                    class="icon icon-facebook icon-lg"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.03153 23L9 13H5V9H9V6.5C9 2.7886 11.2983 1 14.6091 1C16.1951 1 17.5581 1.11807 17.9553 1.17085V5.04948L15.6591 5.05052C13.8584 5.05052 13.5098 5.90614 13.5098 7.16171V9H18.75L16.75 13H13.5098V23H9.03153Z"></path>
                                  </svg>
                                  <span aria-hidden="true">Facebook</span>
                                  <span class="sr-only">Share on Facebook</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="//twitter.com/intent/tweet?text=&amp;url=https://thebarsys.comhttps://thebarsys.com"
                                  title="Tweet on Twitter"
                                >
                                  <svg
                                    class="icon icon-twitter icon-lg"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M13.8984 10.4679L21.3339 2H19.5687L13.1074 9.35221L7.95337 2H2L9.80183 13.1157L2 22H3.7652L10.5845 14.2315L16.03 22H21.9833M4.398 3.29892H7.10408L19.5687 20.7594H16.8626"></path>
                                  </svg>
                                  <span aria-hidden="true">Twitter</span>
                                  <span class="sr-only">Tweet on Twitter</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="//pinterest.com/pin/create/button/?url=https://thebarsys.comhttps://thebarsys.com&amp;media=Liquid error (snippets/social-sharing line 113): invalid url input&amp;description="
                                  title="Pin on Pinterest"
                                >
                                  <svg
                                    class="icon icon-pinterest icon-lg"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M12 1C5.95 1 1 5.95 1 12C1 16.675 3.93333 20.6167 7.96667 22.2667C7.875 21.4417 7.78333 20.0667 7.96667 19.15C8.15 18.325 9.25 13.65 9.25 13.65C9.25 13.65 8.975 12.9167 8.975 12C8.975 10.4417 9.89167 9.34167 10.9917 9.34167C11.9083 9.34167 12.3667 10.075 12.3667 10.9C12.3667 11.8167 11.725 13.2833 11.45 14.5667C11.175 15.6667 12 16.5833 13.1 16.5833C15.025 16.5833 16.5833 14.5667 16.5833 11.5417C16.5833 8.88333 14.6583 7.05 12 7.05C8.88333 7.05 7.05 9.43333 7.05 11.8167C7.05 12.7333 7.41667 13.7417 7.875 14.2917C7.96667 14.3833 7.96667 14.475 7.96667 14.5667C7.875 14.9333 7.69167 15.6667 7.69167 15.85C7.6 16.0333 7.50833 16.125 7.325 16.0333C5.95 15.3917 5.125 13.375 5.125 11.8167C5.125 8.33333 7.69167 5.125 12.3667 5.125C16.2167 5.125 19.15 7.875 19.15 11.45C19.15 15.2083 16.7667 18.325 13.4667 18.325C12.3667 18.325 11.2667 17.775 10.9 17.0417C10.9 17.0417 10.35 19.15 10.2583 19.7C9.98333 20.6167 9.34167 21.8083 8.88333 22.5417C9.8 22.8167 10.9 23 12 23C18.05 23 23 18.05 23 12C23 5.95 18.05 1 12 1Z"></path>
                                  </svg>
                                  <span aria-hidden="true">Pinterest</span>
                                  <span class="sr-only">Pin on Pinterest</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="//web.whatsapp.com/send?text=https://thebarsys.comhttps://thebarsys.com"
                                  title="Share on WhatsApp"
                                >
                                  <svg
                                    class="icon icon-whatsapp icon-lg"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M0 24L1.69 17.84C0.65 16.03 0.1 13.99 0.1 11.89C0.1 5.33 5.44 0 12 0C15.18 0 18.17 1.24 20.42 3.49C22.67 5.74 23.9 8.73 23.9 11.9C23.9 18.46 18.56 23.79 12 23.79C10.01 23.79 8.05 23.29 6.32 22.34L0.01 23.99L0 24ZM6.6 20.19L6.96 20.4C8.48 21.3 10.22 21.78 11.99 21.78C17.44 21.78 21.88 17.35 21.88 11.9C21.88 9.26 20.85 6.78 18.99 4.91C17.13 3.04 14.64 2.01 12 2.01C6.55 2.01 2.11 6.44 2.11 11.89C2.11 13.76 2.63 15.58 3.62 17.15L3.86 17.52L2.86 21.17L6.6 20.19ZM9.02 6.92C8.78 6.34 8.53 6.42 8.35 6.41C8.18 6.41 7.98 6.4 7.78 6.4C7.58 6.4 7.26 6.47 6.99 6.77C6.72 7.07 5.95 7.79 5.95 9.25C5.95 10.71 7.02 12.13 7.16 12.32C7.31 12.52 9.26 15.52 12.24 16.81C12.95 17.12 13.5 17.3 13.93 17.44C14.64 17.67 15.29 17.63 15.8 17.56C16.37 17.47 17.56 16.84 17.81 16.15C18.06 15.46 18.06 14.86 17.98 14.74C17.91 14.62 17.71 14.54 17.41 14.39C17.11 14.24 15.65 13.52 15.38 13.42C15.11 13.32 14.91 13.27 14.71 13.57C14.51 13.87 13.94 14.54 13.77 14.74C13.6 14.94 13.42 14.96 13.13 14.81C12.83 14.66 11.87 14.35 10.74 13.34C9.86 12.55 9.26 11.58 9.09 11.28C8.92 10.98 9.07 10.82 9.22 10.67C9.35 10.54 9.52 10.32 9.67 10.15C9.82 9.98 9.87 9.85 9.97 9.65C10.07 9.45 10.02 9.28 9.95 9.13C9.88 8.98 9.28 7.52 9.03 6.92H9.02Z"></path>
                                  </svg>
                                  <span aria-hidden="true">WhatsApp</span>
                                  <span class="sr-only">Share on WhatsApp</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  class="social-sharing__link flex items-center gap-4 text-sm"
                                  href="mailto:?&amp;subject=&amp;body=https://thebarsys.comhttps://thebarsys.com"
                                  title="Share by Email"
                                >
                                  <svg
                                    class="icon icon-email icon-lg"
                                    viewBox="0 0 24 22"
                                    stroke="none"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M2.73.545C3.8 0 5.2 0 8 0h8c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C24 3.8 24 5.2 24 8v5.767c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.186c-1.07.544-2.47.544-5.27.544H8c-2.8 0-4.2 0-5.27-.544a5 5 0 0 1-2.185-2.186C0 17.967 0 16.567 0 13.767V8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545Zm2.988 5.25a.75.75 0 1 0-.832 1.248l1.117.744.256.17.139.093c1.791 1.195 2.858 1.906 4.029 2.187a6.75 6.75 0 0 0 3.146 0c1.171-.28 2.238-.992 4.03-2.187l.138-.092.256-.171 1.117-.744a.75.75 0 1 0-.832-1.248l-1.117.744-.256.17c-1.973 1.316-2.807 1.858-3.685 2.07a5.25 5.25 0 0 1-2.447 0c-.88-.212-1.713-.754-3.686-2.07l-.256-.17-1.117-.744Z"></path>
                                  </svg>
                                  <span aria-hidden="true">E-mail</span>
                                  <span class="sr-only">Share by Email</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </share-drawer>
                    <div class="flex items-center gap-2">
                      <svg
                        class="icon icon-question icon-md"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.167 9.625v-.458a1.833 1.833 0 1 1 3.666 0v.11a1.94 1.94 0 0 1-.57 1.376L11 11.917m.458 2.75a.458.458 0 0 1-.916 0m.916 0a.458.458 0 0 0-.916 0m.916 0h-.916M20.167 11a9.167 9.167 0 1 1-18.334 0 9.167 9.167 0 0 1 18.334 0Z"
                        ></path>
                      </svg>
                      <Link
                        class="link text-sm leading-tight cursor-pointer"
                        href="faqs"
                      >
                        Need help?
                      </Link>
                    </div>
                  </div>
                  <product-recommendations
                    class="complementary-products grid gap-5"
                    data-url="/recommendations/products?section_id=template--17610579509494__mixlist_information_DtXHb7&amp;product_id=&amp;limit=&amp;intent=complementary"
                  >
                    <div class="flex justify-between gap-4 items-center">
                      <p class="recommend__title font-medium text-lg grow">
                        Similar Mixlists
                      </p>
                      <div class="indicators indicators--small flex gap-2">
                        <button
                          class="button button--secondary"
                          type="button"
                          is="hover-button"
                          aria-label="Previous"
                          disabled=""
                          data-prev-button=""
                        >
                          <span class="btn-fill" data-fill=""></span>
                          <span class="btn-text">
                            <svg
                              class="icon icon-chevron-left icon-sm transform"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14 6L8 12L14 18"
                              ></path>
                            </svg>
                          </span>
                          <span class="btn-loader">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </button>
                        <button
                          class="button button--secondary"
                          type="button"
                          is="hover-button"
                          aria-label="Next"
                          data-next-button=""
                        >
                          <span class="btn-fill" data-fill=""></span>
                          <span class="btn-text">
                            <svg
                              class="icon icon-chevron-right icon-sm transform"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 6L16 12L10 18"
                              ></path>
                            </svg>
                          </span>
                          <span class="btn-loader">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <product-complementary
                      class="horizontal-products block flickity flickity-enabled is-draggable"
                      tabindex="0"
                    >
                      <div class="flickity-viewport" style={{ height: "96px" }}>
                        <div
                          class="flickity-slider"
                          style={{ transform: "translateX(0%)" }}
                        >
                          <div
                            class="horizontal-product flex items-center gap-4 md:gap-6 w-full flickity-cell is-selected"
                            style={{ transform: "translateX(0%)" }}
                          >
                            <a
                              class="horizontal-product__media media media--square relative overflow-hidden flex-auto"
                              href=""
                              tabindex="-1"
                            >
                              <Image
                                src={require("../../../assets/images/Gingerbread_Dreams.png")}
                                alt="Gingerbread Dreams"
                                loading="lazy"
                                is="lazy-image"
                                class="loaded"
                              />
                              {/* <img src="assets/images/Gingerbread_Dreams.png" alt="Gingerbread Dreams" loading="lazy" is="lazy-image" class="loaded"> */}
                            </a>
                            <div class="horizontal-product__details flex flex-col justify-start gap-1d5">
                              <div class="grid gap-1">
                                <div class="block">
                                  <a
                                    href="recipe-details.html"
                                    class="horizontal-product__title reversed-link font-medium text-base leading-tight"
                                  >
                                    Gingerbread Dreams
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="horizontal-product__quantity shrink-0 text-sm sm:block">
                              <div class="grid gap-3">
                                <a
                                  href="recipe-details.html"
                                  class="button button--primary button--small icon-with-text"
                                  is="hover-link"
                                >
                                  <span class="btn-fill" data-fill=""></span>
                                  <span class="btn-text">View</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            class="horizontal-product flex items-center gap-4 md:gap-6 w-full flickity-cell"
                            aria-hidden="true"
                            style={{ transform: "translateX(108.55%)" }}
                          >
                            <a
                              class="horizontal-product__media media media--square relative overflow-hidden flex-auto"
                              href=""
                              tabindex="-1"
                            >
                              <Image
                                src={require("../../../assets/images/CnadyCane.png")}
                                alt="Candy Cane Crush"
                                loading="lazy"
                                is="lazy-image"
                                class="loaded"
                              />
                              {/* <img src="assets/images/CnadyCane.png" alt="Candy Cane Crush" loading="lazy" is="lazy-image" class="loaded"> */}
                            </a>
                            <div class="horizontal-product__details flex flex-col justify-start gap-1d5">
                              <div class="grid gap-1">
                                <div class="block">
                                  <a
                                    href="recipe-details.html"
                                    class="horizontal-product__title reversed-link font-medium text-base leading-tight"
                                  >
                                    Candy Cane Crush
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="horizontal-product__quantity shrink-0 text-sm sm:block">
                              <div class="grid gap-3">
                                <a
                                  href="recipe-details.html"
                                  class="button button--primary button--small icon-with-text"
                                  is="hover-link"
                                >
                                  <span class="btn-fill" data-fill=""></span>
                                  <span class="btn-text">View</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            class="horizontal-product flex items-center gap-4 md:gap-6 w-full flickity-cell"
                            aria-hidden="true"
                            style={{ transform: "translateX(217.11%)" }}
                          >
                            <a
                              class="horizontal-product__media media media--square relative overflow-hidden flex-auto"
                              href=""
                              tabindex="-1"
                            >
                              <Image
                                src={require("../../../assets/images/WinterWonderland.png")}
                                alt="Winter Spice Wonderland"
                                loading="lazy"
                                is="lazy-image"
                                class="loaded"
                              />
                              {/* <img src="assets/images/WinterWonderland.png" alt="Winter Spice Wonderland" loading="lazy" is="lazy-image" class="loaded"> */}
                            </a>
                            <div class="horizontal-product__details flex flex-col justify-start gap-1d5">
                              <div class="grid gap-1">
                                <div class="block">
                                  <a
                                    href="recipe-details.html"
                                    class="horizontal-product__title reversed-link font-medium text-base leading-tight"
                                  >
                                    Winter Spice Wonderland
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="horizontal-product__quantity shrink-0 text-sm sm:block">
                              <div class="grid gap-3">
                                <a
                                  href="recipe-details.html"
                                  class="button button--primary button--small icon-with-text"
                                  is="hover-link"
                                >
                                  <span class="btn-fill" data-fill=""></span>
                                  <span class="btn-text">View</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </product-complementary>
                  </product-recommendations>
                </animate-element>
              </div>
            </div>
            {/* <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Product",
        "offers": [],
        "brand": null,
        "sku": null,
        "name": null,
        "description": "",
        "category": "",
        "url": "https://thebarsys.com","image": {
          "@type": "ImageObject",
          "url": "https:Liquid error (sections/mixlist-information line 224): invalid url input",
          "image": "https:Liquid error (sections/mixlist-information line 225): invalid url input",
          "name": null,
          "width": 1024,
          "height": 1024
        }
      }
    </script> */}
          </div>
        </div>
        <div
          id="shopify-section-template--17610579509494__mixlist_recipes_list_PG6aqh"
          class="shopify-section"
        >
          {detailListData[1]?.mediaList?.map((items, id) => {
            const evenId = id % 2 === 0;
            return (
              <div key={id} class="section section--padding">
                <div class="page-width relative">
                  <div
                    class={`image-with-text with-background flex lg:gap-8 flex-col lg:flex-${
                      !evenId ? "row-reverse" : "row"
                    } overflow-hidden`}
                  >
                    <div class="image-with-text__item grow shrink-0 relative">
                      <div class="image-with-text__media h-full">
                        <media-element class="image-with-text__image block media--650px mobile:media--auto relative overflow-hidden">
                          <div class="media media--height block w-full h-full relative overflow-hidden">
                            <picture class="media media--height block w-full h-full relative overflow-hidden">
                              <Image
                                src={items.mediaImg}
                                class="w-full loaded"
                                is="lazy-image"
                              />
                            </picture>
                          </div>
                        </media-element>
                      </div>
                    </div>

                    <div class="image-with-text__item grow shrink-0 align-self-center">
                      <div class="rich-text lg:text-left text-left relative z-1">
                        <h2 class="heading font-bold leading-none title-md">
                          <split-words
                            class="split-words flex flex-wrap"
                            data-animate="fade-up-large"
                            data-animate-delay="250"
                          >
                            {items?.mediaTitle?.map((title, id) => {
                              return (
                                <div
                                  key={id}
                                  class="single-word"
                                  style={{ display: "inline-block" }}
                                >
                                  <animate-element
                                    class="block"
                                    data-animate="fade-up-large"
                                    data-animate-delay={title.delay}
                                    // style={{transform: "translateY(90%)", opacity: 0}}
                                  >
                                    {title.name}
                                  </animate-element>
                                </div>
                              );
                            })}
                          </split-words>
                        </h2>
                        <div class="leading-normal body subtext-md">
                          {items.content}
                        </div>

                        <a
                          class="button button--primary button-- icon-with-text"
                          href="recipe-details.html"
                          is="hover-link"
                        >
                          <span class="btn-fill" data-fill=""></span>
                          <span class="btn-text">
                            Read More
                            <svg
                              class="icon icon-arrow-right icon-sm transform"
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
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          id="shopify-section-template--17610579509494__collection_list_3UJCQR"
          class="shopify-section"
        >
          <div class="section section--padding">
            <div class="page-width relative">
              <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
                <div class="grid gap-4">
                  <h2 class="heading font-bold title-md">
                    <split-words
                      class="split-words flex flex-wrap"
                      data-animate="fade-up-large"
                    >
                      <div
                        class="single-word"
                        style={{ display: "inline-block" }}
                      >
                        <animate-element
                          class="block"
                          data-animate="fade-up-large"
                          data-animate-delay="0"
                          // style={{transform: "translateY(90%)", opacity: 0}}
                        >
                          You
                        </animate-element>
                      </div>
                      <div
                        class="single-word"
                        style={{ display: "inline-block" }}
                      >
                        <animate-element
                          class="block"
                          data-animate="fade-up-large"
                          data-animate-delay="30"
                          // style={{transform: "translateY(90%)", opacity: 0}}
                        >
                          may
                        </animate-element>
                      </div>
                      <div
                        class="single-word"
                        style={{ display: "inline-block" }}
                      >
                        <animate-element
                          class="block"
                          data-animate="fade-up-large"
                          data-animate-delay="60"
                          // style={{transform: "translateY(90%)", opacity: 0}}
                        >
                          also
                        </animate-element>
                      </div>
                      <div
                        class="single-word"
                        style={{ display: "inline-block" }}
                      >
                        <animate-element
                          class="block"
                          data-animate="fade-up-large"
                          data-animate-delay="90"
                          // style={{transform: "translateY(90%)", opacity: 0}}
                        >
                          like
                        </animate-element>
                      </div>
                      <div
                        class="single-word"
                        style={{ display: "inline-block" }}
                      >
                        <animate-element
                          class="block"
                          data-animate="fade-up-large"
                          data-animate-delay="120"
                          // style={{transform: "translateY(90%)", opacity: 0}}
                        >
                          this
                        </animate-element>
                      </div>
                    </split-words>
                  </h2>
                </div>
                <p></p>
              </div>
              <slider-element
                id="Slider-template--17610579509494__collection_list_3UJCQR"
                class="grid slider slider--tablet"
                selector=".card-grid>.card"
              >
                <motion-list class="card-grid card-grid--4 mobile:card-grid--1 grid">
                  <div
                    class="card media-card media-card--card overflow-hidden"
                    id="shopify-block-collection_3kj6qA"
                    // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                  >
                    <a
                      href="recipe-details.html"
                      class="media-card__link flex flex-col w-full h-full relative"
                    >
                      <div class="media media--square relative overflow-hidden">
                        <Image
                          src={require("../../../assets/images/NewYears.png")}
                          alt="New Year's Sparkle"
                          loading="lazy"
                          is="lazy-image"
                          class="loaded"
                        />
                        {/* <img src="assets/images/NewYears.png" alt="New Year's Sparkle" loading="lazy" is="lazy-image" class="loaded"> */}
                      </div>
                      <div class="media-card__content flex justify-between items-center gap-4 w-full">
                        <div class="media-card__text shrink-1 relative">
                          <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                            New Year's Sparkle
                          </span>
                          <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                            3
                          </small>
                        </div>
                        <svg
                          class="icon icon-arrow-right icon-xs transform shrink-0"
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
                      </div>
                    </a>
                  </div>

                  <div
                    class="card media-card media-card--card overflow-hidden"
                    id="shopify-block-collection_jDer9R"
                    // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                  >
                    <a
                      href="recipe-details.html"
                      class="media-card__link flex flex-col w-full h-full relative"
                    >
                      <div class="media media--square relative overflow-hidden">
                        <Image
                          src={require("../../../assets/images/Gingerbread_Dreams.png")}
                          alt="Gingerbread Dreams"
                          loading="lazy"
                          is="lazy-image"
                          class="loaded"
                        />
                        {/* <img src="assets/images/Gingerbread_Dreams.png" alt="Gingerbread Dreams" loading="lazy" is="lazy-image" class="loaded"> */}
                      </div>
                      <div class="media-card__content flex justify-between items-center gap-4 w-full">
                        <div class="media-card__text shrink-1 relative">
                          <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                            Gingerbread Dreams
                          </span>
                          <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                            3
                          </small>
                        </div>
                        <svg
                          class="icon icon-arrow-right icon-xs transform shrink-0"
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
                      </div>
                    </a>
                  </div>

                  <div
                    class="card media-card media-card--card overflow-hidden"
                    id="shopify-block-collection_7AGCpe"
                    // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                  >
                    <a
                      href="recipe-details.html"
                      class="media-card__link flex flex-col w-full h-full relative"
                    >
                      <div class="media media--square relative overflow-hidden">
                        <Image
                          src={require("../../../assets/images/CnadyCane.png")}
                          alt="Candy Cane Crush"
                          loading="lazy"
                          is="lazy-image"
                          class="loaded"
                        />
                        {/* <img src="assets/images/CnadyCane.png" alt="Candy Cane Crush" loading="lazy" is="lazy-image" class="loaded"> */}
                      </div>
                      <div class="media-card__content flex justify-between items-center gap-4 w-full">
                        <div class="media-card__text shrink-1 relative">
                          <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                            Candy Cane Crush
                          </span>
                          <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                            2
                          </small>
                        </div>
                        <svg
                          class="icon icon-arrow-right icon-xs transform shrink-0"
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
                      </div>
                    </a>
                  </div>

                  <div
                    class="card media-card media-card--card overflow-hidden"
                    id="shopify-block-collection_fEVRT6"
                    // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                  >
                    <a
                      href="recipe-details.html"
                      class="media-card__link flex flex-col w-full h-full relative"
                    >
                      <div class="media media--square relative overflow-hidden">
                        <Image
                          src={require("../../../assets/images/WinterWonderland.png")}
                          alt="Winter Spice Wonderland"
                          loading="lazy"
                          is="lazy-image"
                          class="loaded"
                        />
                        {/* <img src="assets/images/WinterWonderland.png" alt="Winter Spice Wonderland" loading="lazy" is="lazy-image" class="loaded"> */}
                      </div>
                      <div class="media-card__content flex justify-between items-center gap-4 w-full">
                        <div class="media-card__text shrink-1 relative">
                          <span class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                            Winter Spice Wonderland
                          </span>
                          <small class="count font-medium absolute text-xs tracking-none whitespace-nowrap">
                            3
                          </small>
                        </div>
                        <svg
                          class="icon icon-arrow-right icon-xs transform shrink-0"
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
                      </div>
                    </a>
                  </div>
                </motion-list>
              </slider-element>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MixlistDetailContent;
