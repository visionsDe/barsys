import React from "react";
import "./recipedetails.css";
import Image from "next/image";
const RecipeDetailContent = () => {
  // const likeListData=[
  //     {
  //         imgSrc
  //     }
  // ]
  return (
    <div class="page-container" id="PageContainer">
      <main class="main-content relative" id="MainContent" role="main">
        <div
          id="shopify-section-template--17495030202614__main-product"
          class="shopify-section"
        >
          {/* <script src="assets/js/product-popup.js" defer="defer"></script> */}
          {/* <style>
                    #shopify-section-template--17495030202614__main-product {
                        --section-padding-top: 72px;
                        --section-padding-bottom: 72px;
                    }

                    @media screen and (min-width: 1024px) {
                        #shopify-section-template--17495030202614__main-product {
                            --product-grid: auto / minmax(0, 1.32fr) minmax(0, 0.68fr);
                        }
                    }
                </style> */}
          <div class="section section--padding">
            <div class="page-width page-width--full relative">
              <div class="featured-product product product--scroll flex flex-col items-start lg:grid gap-5 w-full relative">
                <media-gallery
                  class="product__gallery product__gallery--full_width block w-full relative with-only1 xl:grid xl:items-start gap-5 h-full"
                  form="ProductForm-template--17495030202614__main-product"
                  aria-label="Gallery Viewer"
                  data-animate="fade-up"
                  data-immediate=""
                >
                  <sticky-element
                    class="product__preview relative overflow-hidden w-full h-full hidden xl:block sticky top-0"
                    // style="inset-block-start: 116.2px; --inset: 116.20000004768372px;"
                  >
                    <div
                      class="product__media media flex w-full relative overflow-hidden"
                      data-media-type="image"
                      data-media-id="32813686391030"
                    >
                      <Image
                        src={require("../../../assets/images/HotToddy.jpg")}
                        loading="eager"
                        fetchpriority="high"
                        class="w-full loaded"
                        is="lazy-image"
                      />
                      {/* <img src="assets/images/HotToddy.jpg" loading="eager" fetchpriority="high" class="w-full loaded" is="lazy-image"> */}
                    </div>
                  </sticky-element>
                  <div class="product__media-container flex flex-col gap-4">
                    <div class="relative w-full h-full">
                      <slider-element
                        id="SliderGallery-template--17495030202614__main-product"
                        class="slider slider--desktop slider--tablet block w-full h-full"
                        selector=".product__media"
                      >
                        <div class="product__media-list flex gap-1 lg:grid lg:gap-4 xl:gap-5 grid-cols-2">
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden xl:hidden"
                            data-media-type="image"
                            data-media-id="32813686391030"
                          >
                            <Image
                              src={require("../../../assets/images/HotToddy.jpg")}
                              alt="Hot Toddy"
                              loading="eager"
                              fetchpriority="high"
                              sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(580px, 30vw)"
                              class="w-full loaded"
                              is="lazy-image"
                            />
                            {/* <img src="assets/images/HotToddy.jpg" alt="Hot Toddy" loading="eager" fetchpriority="high" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(580px, 30vw)" class="w-full loaded" is="lazy-image"> */}
                          </div>
                        </div>
                      </slider-element>

                      <div class="indicators hidden items-center justify-between opacity-0 z-1 absolute top-0 left-0 w-full h-full pointer-events-none">
                        <button
                          class="button button--secondary pointer-events-auto"
                          type="button"
                          is="previous-button"
                          aria-controls="SliderGallery-template--17495030202614__main-product"
                          aria-label="Previous"
                          disabled=""
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
                          aria-controls="SliderGallery-template--17495030202614__main-product"
                          aria-label="Next"
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
                  <p class="text-base"></p>
                  <div class="product__title ">
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
                            Hot
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
                            Toddy
                          </animate-element>
                        </div>
                      </split-words>
                    </h1>
                  </div>
                  <div class="product__text rte text-base">
                    The Hot Toddy is a sweet and sour drink that is made with
                    Whiskey, Honey, Lime Juice, and Hot Water. The whiskey gives
                    it a strong flavor, while the honey and lime juice help to
                    balance it out. The hot water makes it warm and comforting.
                    The origin of the Hot Toddy has mixed accounts. Some say
                    that it originated in Scotland, or India while others say it
                    was created in America. This popular winter time drink is
                    perfect for your next holiday party! Cheers!
                  </div>

                  <div class="recipes-falvor">
                    <ul class="flex flex-wrap gap-2"></ul>
                  </div>
                  <noscript>
                    <div class="product-form__input hidden">
                      <label
                        class="form__label flex gap-2"
                        for="Variants-template--17495030202614__main-product"
                      >
                        Product variants
                      </label>
                      <div class="field">
                        <select
                          name="id"
                          id="Variants-template--17495030202614__main-product"
                          class="select"
                          form="ProductForm-template--17495030202614__main-product"
                        >
                          <option selected value="46158478737654">
                            Default Title - Rs. 12,535.00
                          </option>
                        </select>
                        <svg
                          class="icon icon-chevron-up icon-sm absolute"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 15L12 9L18 15"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </noscript>
                  <div
                    class="product__inventory no-js-hidden sr-only"
                    id="Inventory-template--17495030202614__main-product"
                    role="status"
                  ></div>
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
                            href="//www.facebook.com/sharer.php?u=https://thebarsys.com/products/hot-toddy"
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
                            href="//twitter.com/intent/tweet?text=Hot%20Toddy&amp;url=https://thebarsys.com/products/hot-toddy"
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
                            href="//pinterest.com/pin/create/button/?url=https://thebarsys.com/products/hot-toddy&amp;media=//thebarsys.com/cdn/shop/files/HotToddy.jpg?crop=center&amp;height=1024&amp;v=1710884885&amp;width=1024&amp;description=Hot%20Toddy"
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
                            href="//web.whatsapp.com/send?text=https://thebarsys.com/products/hot-toddy"
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
                            href="mailto:?&amp;subject=Hot%20Toddy&amp;body=https://thebarsys.com/products/hot-toddy"
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
                        aria-controls="ShareDrawer-template--17495030202614__main-product"
                        aria-expanded="false"
                      >
                        Share
                      </a>
                    </div>
                    <share-drawer
                      id="ShareDrawer-template--17495030202614__main-product"
                      class="sm:hidden share-drawer drawer drawer--end z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
                      role="dialog"
                      aria-modal="true"
                      aria-label="Share"
                      data-section-id="template--17495030202614__main-product"
                      hidden=""
                    >
                      <overlay-element
                        class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
                        aria-controls="ShareDrawer-template--17495030202614__main-product"
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
                            aria-controls="ShareDrawer-template--17495030202614__main-product"
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
                                  href="//www.facebook.com/sharer.php?u=https://thebarsys.comhttps://thebarsys.com/products/hot-toddy"
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
                                  href="//twitter.com/intent/tweet?text=Hot%20Toddy&amp;url=https://thebarsys.comhttps://thebarsys.com/products/hot-toddy"
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
                                  href="//pinterest.com/pin/create/button/?url=https://thebarsys.comhttps://thebarsys.com/products/hot-toddy&amp;media=//thebarsys.com/cdn/shop/files/HotToddy.jpg?crop=center&amp;height=1024&amp;v=1710884885&amp;width=1024&amp;description=Hot%20Toddy"
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
                                  href="//web.whatsapp.com/send?text=https://thebarsys.comhttps://thebarsys.com/products/hot-toddy"
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
                                  href="mailto:?&amp;subject=Hot%20Toddy&amp;body=https://thebarsys.comhttps://thebarsys.com/products/hot-toddy"
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
                      <a
                        class="link text-sm leading-tight cursor-pointer"
                        href="/pages/faqs"
                      >
                        Need help?
                      </a>
                    </div>
                  </div>
                  <product-recommendations
                    class="complementary-products grid gap-5"
                    data-url="/recommendations/products?section_id=template--17495030202614__main-product&amp;product_id=8425972695286&amp;limit=4&amp;intent=complementary"
                    hidden=""
                  >
                    <div class="flex justify-between gap-4 items-center">
                      <p class="recommend__title font-medium text-lg grow">
                        Recommendation
                      </p>
                    </div>
                    <product-complementary class="horizontal-products block"></product-complementary>
                  </product-recommendations>
                </animate-element>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--17495030202614__help-drawer"
          class="shopify-section"
        >
          {/* <style>
                    #shopify-block-content-1 {
                        --color-background: 255 251 235;
                        --color-foreground: 180 83 9;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 255 221 191;
                    }

                    #shopify-block-content-2 {
                        --color-background: 240 249 255;
                        --color-foreground: 3 105 161;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 255 221 191;
                    }

                    #shopify-block-content-3 {
                        --color-background: 255 241 242;
                        --color-foreground: 190 18 60;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 255 221 191;
                    }

                    #shopify-block-content-4 {
                        --color-background: 247 254 231;
                        --color-foreground: 77 124 15;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 255 221 191;
                    }
                </style> */}

          <drawer-element
            id="HelpDrawer"
            class="drawer drawer--end z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-label="Need help?"
            data-section-id="template--17495030202614__help-drawer"
            shopify-design-mode=""
            hidden=""
          >
            <overlay-element
              class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
              aria-controls="HelpDrawer"
              aria-expanded="false"
            ></overlay-element>
            <div class="drawer__inner z-10 absolute top-0 flex flex-col w-full h-full overflow-hidden">
              <gesture-element class="drawer__header flex items-center justify-between opacity-0 invisible relative">
                <span class="drawer__title heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                  Need help?
                </span>
                <button
                  class="button button--secondary button--close drawer__close hidden sm:flex items-center justify-center"
                  type="button"
                  is="hover-button"
                  aria-controls="HelpDrawer"
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
                  </span>
                  <span class="btn-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </gesture-element>
              <div class="drawer__content opacity-0 invisible flex flex-col h-full grow shrink">
                <div class="drawer__scrollable relative flex flex-col gap-5 md:gap-7 grow shrink">
                  <div class="rte text-base">
                    <p>
                      If you have any questions, you are always welcome to
                      contact us. We'll get back to you as soon as possible,
                      within 24 hours on weekdays.
                    </p>
                  </div>
                  <div class="help-list grid gap-4 md:gap-5">
                    <div
                      class="help-list__item grid gap-2d5 md:gap-3d5 relative z-1"
                      id="shopify-block-content-1"
                    >
                      <div class="flex items-center gap-3">
                        <svg
                          class="icon icon-rocket icon-md"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            class="fill"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.9991 6.8C21.9991 5.11985 21.9991 4.27977 21.6722 3.63803C21.3845 3.07355 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11054C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18283 12.1246 3.8747L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27698C21.9991 8.81665 21.9991 8.32749 21.9991 7.34918V6.8ZM15.0024 10.9995C16.107 10.9995 17.0024 10.1041 17.0024 8.99952C17.0024 7.89495 16.107 6.99952 15.0024 6.99952C13.8979 6.99952 13.0024 7.89495 13.0024 8.99952C13.0024 10.1041 13.8979 10.9995 15.0024 10.9995Z"
                          ></path>
                          <path
                            d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03645 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.9123 6.42603 4.86115C7.01719 4.80337 7.63117 4.92617 8.85913 5.17178L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9999L8.99985 15M17.0024 8.99952C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99952C13.0024 7.89495 13.8979 6.99952 15.0024 6.99952C16.107 6.99952 17.0024 7.89495 17.0024 8.99952ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11054C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18283 12.1246 3.8747L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27698C21.9991 8.81665 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11985 21.9991 4.27977 21.6722 3.63803C21.3845 3.07355 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p class="h4 font-medium leading-tight md:text-lg">
                          Shipping Information
                        </p>
                      </div>
                      <div class="rte text-sm">
                        <p>
                          Use this text to answer questions in as much detail as
                          possible for your customers.
                        </p>
                      </div>
                    </div>
                    <div
                      class="help-list__item grid gap-2d5 md:gap-3d5 relative z-1"
                      id="shopify-block-content-2"
                    >
                      <div class="flex items-center gap-3">
                        <svg
                          class="icon icon-headphone icon-md"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g class="fill">
                            <path d="M2 16C2 15.0681 2 14.6022 2.15224 14.2346C2.35523 13.7446 2.74458 13.3552 3.23463 13.1522C3.60218 13 4.06812 13 5 13C5.93188 13 6.39782 13 6.76537 13.1522C7.25542 13.3552 7.64477 13.7446 7.84776 14.2346C8 14.6022 8 15.0681 8 16V19C8 19.9319 8 20.3978 7.84776 20.7654C7.64477 21.2554 7.25542 21.6448 6.76537 21.8478C6.39782 22 5.93188 22 5 22C4.06812 22 3.60218 22 3.23463 21.8478C2.74458 21.6448 2.35523 21.2554 2.15224 20.7654C2 20.3978 2 19.9319 2 19V16Z"></path>
                            <path d="M16 16C16 15.0681 16 14.6022 16.1522 14.2346C16.3552 13.7446 16.7446 13.3552 17.2346 13.1522C17.6022 13 18.0681 13 19 13C19.9319 13 20.3978 13 20.7654 13.1522C21.2554 13.3552 21.6448 13.7446 21.8478 14.2346C22 14.6022 22 15.0681 22 16V19C22 19.9319 22 20.3978 21.8478 20.7654C21.6448 21.2554 21.2554 21.6448 20.7654 21.8478C20.3978 22 19.9319 22 19 22C18.0681 22 17.6022 22 17.2346 21.8478C16.7446 21.6448 16.3552 21.2554 16.1522 20.7654C16 20.3978 16 19.9319 16 19V16Z"></path>
                          </g>
                          <path
                            d="M22 17V12C22 6.47715 17.5228 2 12 2V2C6.47715 2 2 6.47715 2 12V17M22 19V16C22 15.0681 22 14.6022 21.8478 14.2346C21.6448 13.7446 21.2554 13.3552 20.7654 13.1522C20.3978 13 19.9319 13 19 13V13C18.0681 13 17.6022 13 17.2346 13.1522C16.7446 13.3552 16.3552 13.7446 16.1522 14.2346C16 14.6022 16 15.0681 16 16V19C16 19.9319 16 20.3978 16.1522 20.7654C16.3552 21.2554 16.7446 21.6448 17.2346 21.8478C17.6022 22 18.0681 22 19 22V22C19.9319 22 20.3978 22 20.7654 21.8478C21.2554 21.6448 21.6448 21.2554 21.8478 20.7654C22 20.3978 22 19.9319 22 19ZM5 22V22C5.93188 22 6.39782 22 6.76537 21.8478C7.25542 21.6448 7.64477 21.2554 7.84776 20.7654C8 20.3978 8 19.9319 8 19V16C8 15.0681 8 14.6022 7.84776 14.2346C7.64477 13.7446 7.25542 13.3552 6.76537 13.1522C6.39782 13 5.93188 13 5 13V13C4.06812 13 3.60218 13 3.23463 13.1522C2.74458 13.3552 2.35523 13.7446 2.15224 14.2346C2 14.6022 2 15.0681 2 16V19C2 19.9319 2 20.3978 2.15224 20.7654C2.35523 21.2554 2.74458 21.6448 3.23463 21.8478C3.60218 22 4.06812 22 5 22Z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p class="h4 font-medium leading-tight md:text-lg">
                          Customer Support
                        </p>
                      </div>
                      <div class="rte text-sm">
                        <p>
                          Use this text to answer questions in as much detail as
                          possible for your customers.
                        </p>
                      </div>
                    </div>
                    <div
                      class="help-list__item grid gap-2d5 md:gap-3d5 relative z-1"
                      id="shopify-block-content-3"
                    >
                      <div class="flex items-center gap-3">
                        <svg
                          class="icon icon-chat_bubble icon-md"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            class="fill"
                            d="M2 10C2 7.19974 2 5.79961 2.54497 4.73005C3.02433 3.78924 3.78924 3.02433 4.73005 2.54497C5.79961 2 7.19974 2 10 2H14C16.8003 2 18.2004 2 19.27 2.54497C20.2108 3.02433 20.9757 3.78924 21.455 4.73005C22 5.79961 22 7.19974 22 10V19.1708C22 20.1969 22 20.71 21.8373 21.0302C21.5642 21.5676 20.996 21.8893 20.3947 21.847C20.0363 21.8218 19.5964 21.5578 18.7165 21.0299C18.1917 20.715 17.9293 20.5576 17.6542 20.4347C17.1972 20.2306 16.7122 20.0963 16.2154 20.0362C15.9163 20 15.6103 20 14.9983 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12V10Z"
                          ></path>
                          <path
                            d="M7 8H15M7 12H11M18.7165 21.0299V21.0299C19.5964 21.5578 20.0363 21.8218 20.3947 21.847C20.996 21.8893 21.5642 21.5676 21.8373 21.0302C22 20.71 22 20.1969 22 19.1708V10C22 7.19974 22 5.79961 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.2004 2 16.8003 2 14 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V12C2 14.8003 2 16.2004 2.54497 17.27C3.02433 18.2108 3.78924 18.9757 4.73005 19.455C5.79961 20 7.19974 20 10 20H14.9983C15.6103 20 15.9163 20 16.2154 20.0362C16.7122 20.0962 17.1972 20.2306 17.6542 20.4347C17.9293 20.5576 18.1917 20.715 18.7165 21.0299Z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p class="h4 font-medium leading-tight md:text-lg">
                          FAQ’s
                        </p>
                      </div>
                      <div class="rte text-sm">
                        <p>
                          Use this text to answer questions in as much detail as
                          possible for your customers.
                        </p>
                      </div>
                    </div>
                    <div
                      class="help-list__item grid gap-2d5 md:gap-3d5 relative z-1"
                      id="shopify-block-content-4"
                    >
                      <div class="flex items-center gap-3">
                        <svg
                          class="icon icon-phone icon-md"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            class="fill"
                            d="M18.9522 15.7381L19.6605 15.9151C20.4461 16.1115 20.8389 16.2097 21.1388 16.4174C21.4725 16.6486 21.7279 16.9757 21.8712 17.3555C22 17.6968 22 18.0916 22 18.8812C22 19.8953 22 20.4024 21.7915 20.8225C21.5771 21.2546 21.1194 21.6595 20.6644 21.8198C20.2221 21.9756 19.7876 21.9223 18.9186 21.8158C15.8039 21.4338 13.0221 20.467 10.6579 19C8.23342 17.4956 6.24802 15.4652 4.79292 13C3.44179 10.7109 2.54788 8.04699 2.18421 5.0812C2.07767 4.21234 2.02441 3.77791 2.18022 3.33555C2.34048 2.88055 2.74541 2.42295 3.17752 2.2085C3.59762 2 4.09459 2 5.08854 2C5.89832 2 6.30321 2 6.6445 2.12878C7.02426 2.27207 7.35144 2.52752 7.58256 2.8612C7.79026 3.16106 7.88846 3.55386 8.08486 4.33946L8.08486 4.33946L8.20715 4.82862L8.20716 4.82863C8.49761 5.99045 8.64284 6.57136 8.62096 7.14144C8.60158 7.64629 8.48674 8.14289 8.28251 8.60499C8.05189 9.12681 7.66637 9.58498 6.89534 10.5013L4.79292 13C6.24802 15.4652 8.23342 17.4956 10.6579 19L13.5641 16.8239L13.5641 16.8239C14.459 16.1539 14.9064 15.8188 15.4047 15.6219C15.8462 15.4474 16.3151 15.3529 16.7897 15.3428C17.3254 15.3313 17.8677 15.4669 18.9522 15.7381Z"
                          ></path>
                          <path
                            d="M4.79292 13C3.44179 10.7109 2.54788 8.04699 2.18421 5.0812C2.07767 4.21234 2.02441 3.77791 2.18022 3.33555C2.34048 2.88055 2.74541 2.42295 3.17752 2.2085C3.59762 2 4.09459 2 5.08854 2V2C5.89832 2 6.30321 2 6.6445 2.12878C7.02426 2.27207 7.35144 2.52752 7.58256 2.8612C7.79026 3.16106 7.88846 3.55386 8.08486 4.33946L8.20715 4.82862C8.49761 5.99044 8.64284 6.57136 8.62096 7.14144C8.60158 7.64629 8.48674 8.14289 8.28251 8.60499C8.05189 9.12681 7.66637 9.58498 6.89534 10.5013L4.79292 13ZM4.79292 13C6.24802 15.4652 8.23342 17.4956 10.6579 19M10.6579 19C13.0221 20.467 15.8039 21.4338 18.9186 21.8158C19.7876 21.9223 20.2221 21.9756 20.6644 21.8198C21.1194 21.6595 21.5771 21.2546 21.7915 20.8225C22 20.4024 22 19.8953 22 18.8812V18.8812C22 18.0916 22 17.6968 21.8712 17.3555C21.7279 16.9757 21.4725 16.6486 21.1388 16.4174C20.8389 16.2097 20.4461 16.1115 19.6605 15.9151L18.9522 15.7381C17.8677 15.4669 17.3254 15.3313 16.7897 15.3428C16.3151 15.3529 15.8462 15.4474 15.4047 15.6219C14.9064 15.8188 14.459 16.1539 13.5641 16.8239L10.6579 19Z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p class="h4 font-medium leading-tight md:text-lg">
                          Contact Us
                        </p>
                      </div>
                      <div class="rte text-sm">
                        <p>
                          Use this text to answer questions in as much detail as
                          possible for your customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </drawer-element>
        </div>
        <div
          id="shopify-section-template--17495030202614__collage"
          class="shopify-section"
        >
          {/* <style>
                    #shopify-section-template--17495030202614__collage {
                        --section-padding-top: 72px;
                        --section-padding-bottom: 0px;
                    }

                    #shopify-block-image-1 {
                        --color-foreground: 255 255 255;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 253 224 71;
                        --color-overlay: 0 0 0;
                        --overlay-opacity: 0.3;
                    }

                    #shopify-block-video_7HJpGV {
                        --color-foreground: 255 255 255;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 253 224 71;
                        --color-overlay: 23 23 23;
                        --overlay-opacity: 0.3;
                    }

                    #shopify-block-image-2 {
                        --color-foreground: 255 255 255;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 253 224 71;
                        --color-overlay: 0 0 0;
                        --overlay-opacity: 0.3;
                    }

                    #shopify-block-image-4 {
                        --color-foreground: 255 255 255;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 253 224 71;
                        --color-overlay: 0 0 0;
                        --overlay-opacity: 0.3;
                    }
                </style> */}
          <div class="section section--padding">
            <div class="page-width relative">
              <div class="collage grid items-center">
                <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
                  <div class="grid gap-4">
                    <h2 class="heading font-bold title-md">Sip and Stir</h2>
                    <div class="page-width--narrow rte leading-normal subtext-md">
                      <div class="metafield-rich_text_field">
                        <p>
                          Unleash your inner bartender and explore our treasure
                          trove of cocktail recipes. From refreshing summer sips
                          to cozy winter warmers, our collection caters to every
                          palate and preference. Embark on a journey of flavor
                          exploration like never before. Cheers to creativity,
                          innovation, and the art of cocktail crafting!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid md:grid-cols-2 gap-4 md:gap-6 xl:gap-9">
                  <div
                    class="collage-left flex flex-col gap-4 md:gap-6 xl:gap-9"
                    is="parallax-element"
                    data-start="-15%"
                    data-stop="15%"
                  >
                    <div
                      id="shopify-block-image-1"
                      class="collage__item with-image banner relative overflow-hidden"
                    >
                      <picture class="media media--landscape mobile:media--landscape block relative overflow-hidden">
                        <Image
                          src={require("../../../assets/images/General.jpg")}
                          alt=""
                          loading="lazy"
                          is="lazy-image"
                          class="loaded"
                        />
                        {/* <img src="assets/images/General.jpg" alt="" loading="lazy" is="lazy-image" class="loaded"> */}
                      </picture>
                      <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                      <div class="collage__content absolute z-1 top-0 left-0 w-full h-full">
                        <div class="banner__box w-full h-full flex md:items-start md:justify-start items-end justify-center">
                          <div class="md:text-left text-center">
                            <p class="text-base leading-tight">
                              <em
                                class="highlighted-text inline-block not-italic relative animate"
                                is="highlighted-text"
                                data-style="text"
                              >
                                Crafted for Palate Pleasure
                              </em>
                            </p>
                            <span class="block"></span>
                            <p class="heading text-3xl font-bold leading-none tracking-tight">
                              <a
                                class="reversed-link"
                                role="link"
                                aria-disabled="true"
                              >
                                Indulge in a symphony of flavors.
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="shopify-block-video_7HJpGV"
                      class="collage__item with-image banner relative overflow-hidden"
                    >
                      <div class="aspect-portrait mobile:aspect-landscape relative">
                        <video-media class="media deferred-media block media--height w-full h-full">
                          {/* <img
                                                    src="assets/images/Hot-toddy-video-banner.jpg"
                                                    alt="Load video: " loading="lazy" fetchpriority="auto"
                                                    is="lazy-image"
                                                    class="loaded"> */}
                          <Image
                            src={require("../../../assets/images/Hot-toddy-video-banner.jpg")}
                            alt="Load video: "
                            loading="lazy"
                            fetchpriority="auto"
                            is="lazy-image"
                            class="loaded"
                          />
                          <template>
                            <video
                              playsinline="true"
                              muted="muted"
                              autoplay="autoplay"
                              preload="none"
                              poster="assets/images/Hot-toddy-video-banner.jpg"
                            >
                              <source
                                src="assets/images/Hot-toddy-video.mp4"
                                type="video/mp4"
                              />
                              <Image
                                src={require("../../../assets/images/Hot-toddy-video-banner.jpg")}
                              />
                              {/* <img src="assets/images/Hot-toddy-video-banner.jpg"> */}
                            </video>
                          </template>
                          <button
                            type="button"
                            id="DeferredPoster-32927206703350"
                            class="deferred-poster absolute top-0 left-0 w-full h-full"
                            aria-label="Play video"
                          >
                            <span class="play-button absolute flex items-center justify-center rounded-full pointer-events-auto z-10">
                              <svg
                                class="icon icon-play icon-md"
                                viewBox="0 0 36 36"
                                stroke="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M34 17.5006C34 18.3302 33.5707 19.0963 32.8683 19.5206L9.535 33.6629C9.164 33.8869 8.74867 34 8.33333 34C7.93667 34 7.54 33.8986 7.183 33.6936C6.45267 33.274 6 32.4915 6 31.6429V3.35817C6 2.50962 6.45267 1.72708 7.183 1.30752C7.91333 0.885606 8.814 0.899749 9.535 1.33816L32.8683 15.4805C33.5707 15.9048 34 16.6709 34 17.5006"></path>
                              </svg>
                              <svg
                                class="icon icon-pause icon-md"
                                viewBox="0 0 36 36"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-width="6"
                                  d="M9 4V32"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  stroke-width="6"
                                  d="M27 4V32"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </video-media>
                        <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                        <div class="collage__content absolute z-1 top-0 left-0 w-full h-full">
                          <div class="banner__box w-full h-full flex md:items-end md:justify-start items-end justify-start">
                            <div class="md:text-left text-left">
                              <p class="text-base leading-tight">
                                <em
                                  class="highlighted-text inline-block not-italic relative animate"
                                  is="highlighted-text"
                                  data-style="text"
                                >
                                  Global Inspirations, Unique Flavors
                                </em>
                              </p>
                              <span class="block"></span>
                              <p class="heading text-3xl font-bold leading-none tracking-tight">
                                <a
                                  class="reversed-link"
                                  role="link"
                                  aria-disabled="true"
                                >
                                  Diverse cultures and ingredients.
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="collage-right flex flex-col gap-4 md:gap-6 xl:gap-9"
                    is="parallax-element"
                    data-start="-6%"
                    data-stop="6%"
                  >
                    <div
                      id="shopify-block-image-2"
                      class="collage__item with-image banner relative overflow-hidden"
                    >
                      <picture class="media media--portrait mobile:media--portrait block relative overflow-hidden">
                        <Image
                          src={require("../../../assets/images/General-2.jpg")}
                          alt=""
                          loading="lazy"
                          is="lazy-image"
                          class="loaded"
                        />
                        {/* <img src="assets/images/General-2.jpg" alt="" loading="lazy" is="lazy-image" class="loaded"> */}
                      </picture>
                      <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                      <div class="collage__content absolute z-1 top-0 left-0 w-full h-full">
                        <div class="banner__box w-full h-full flex md:items-start md:justify-end items-end justify-start">
                          <div class="md:text-right text-left">
                            <p class="text-base leading-tight">
                              <em
                                class="highlighted-text inline-block not-italic relative animate"
                                is="highlighted-text"
                                data-style="text"
                              >
                                Heritage-inspired, Future-forward
                              </em>
                            </p>
                            <span class="block"></span>
                            <p class="heading text-3xl font-bold leading-none tracking-tight">
                              <a
                                class="reversed-link"
                                role="link"
                                aria-disabled="true"
                              >
                                Blending the best of the past and present.
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="shopify-block-image-4"
                      class="collage__item with-image banner relative overflow-hidden"
                    >
                      <picture class="media media--landscape mobile:media--landscape block relative overflow-hidden">
                        <Image
                          src={require("../../../assets/images/General-4.jpg")}
                          alt=""
                          loading="lazy"
                          is="lazy-image"
                          class="loaded"
                        />
                        {/* <img src="assets/images/General-4.jpg" alt="" loading="lazy" is="lazy-image" class="loaded"> */}
                      </picture>
                      <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                      <div class="collage__content absolute z-1 top-0 left-0 w-full h-full">
                        <div class="banner__box w-full h-full flex md:items-end md:justify-end items-end justify-end">
                          <div class="md:text-right text-right">
                            <p class="text-base leading-tight">
                              <em
                                class="highlighted-text inline-block not-italic relative animate"
                                is="highlighted-text"
                                data-style="text"
                              >
                                Raise Your Glass to Any Occasion
                              </em>
                            </p>
                            <span class="block"></span>
                            <p class="heading text-3xl font-bold leading-none tracking-tight">
                              <a
                                class="reversed-link"
                                role="link"
                                aria-disabled="true"
                              >
                                Add a touch of sparkle to any event.
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--17495030202614__product-recommendations"
          class="shopify-section"
        >
          {/* <style>
                    #shopify-section-template--17495030202614__product-recommendations {
                        --section-padding-top: 72px;
                        --section-padding-bottom: 72px;
                    }
                </style> */}

          <product-recommendations
            class="related-products block"
            data-url="/recommendations/products?section_id=template--17495030202614__product-recommendations&amp;product_id=8425972695286&amp;limit=6&amp;intent=related"
          >
            <div class="section section--padding section--rounded relative">
              <div class="page-width relative overflow-hidden md:overflow-visible">
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
                            class="block animate"
                            data-animate="fade-up-large"
                            data-animate-delay="0"
                            style={{ transform: "translateY(0px)", opacity: 1 }}
                          >
                            You
                          </animate-element>
                        </div>
                        <div
                          class="single-word"
                          style={{ display: "inline-block" }}
                        >
                          <animate-element
                            class="block animate"
                            data-animate="fade-up-large"
                            data-animate-delay="30"
                            style={{ transform: "translateY(0px)", opacity: 1 }}
                          >
                            may
                          </animate-element>
                        </div>
                        <div
                          class="single-word"
                          style={{ display: "inline-block" }}
                        >
                          <animate-element
                            class="block animate"
                            data-animate="fade-up-large"
                            data-animate-delay="60"
                            style={{ transform: "translateY(0px)", opacity: 1 }}
                          >
                            also
                          </animate-element>
                        </div>
                        <div
                          class="single-word"
                          style={{ display: "inline-block" }}
                        >
                          <animate-element
                            class="block animate"
                            data-animate="fade-up-large"
                            data-animate-delay="90"
                            style={{ transform: "translateY(0px)", opacity: 1 }}
                          >
                            like
                          </animate-element>
                        </div>
                      </split-words>
                    </h2>
                  </div>
                  <div class="indicators hidden lg:flex gap-2d5">
                    <button
                      class="button button--secondary"
                      type="button"
                      is="previous-button"
                      aria-controls="Slider-template--17495030202614__product-recommendations"
                      aria-label="Previous"
                      disabled=""
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
                      class="button button--secondary"
                      type="button"
                      is="next-button"
                      aria-controls="Slider-template--17495030202614__product-recommendations"
                      aria-label="Next"
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
                <slider-element
                  id="Slider-template--17495030202614__product-recommendations"
                  class="grid slider slider--desktop slider--tablet"
                  selector=".card-grid>.card"
                >
                  <motion-list class="card-grid card-grid--4 mobile:card-grid--1 grid">
                    <div
                      class="card product-card product-card--card grid leading-none relative overflow-hidden"
                      // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                    >
                      <div class="product-card__media relative h-auto">
                        <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                        <a
                          class="block relative media media--square overflow-hidden"
                          href="/products/hot-toddy-with-cinnamon-twist?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8376709120246&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                          tabindex="-1"
                        >
                          <Image
                            src={require("../../../assets/images/HotToddywithCinnamonTwist.jpg")}
                            alt="Hot Toddy with Cinnamon Twist"
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
                          {/* <img src="assets/images/HotToddywithCinnamonTwist.jpg" alt="Hot Toddy with Cinnamon Twist" loading="lazy" is="lazy-image" class="loaded"> */}
                        </a>
                      </div>
                      <div class="product-card__content flex flex-col justify-start text-left">
                        <div class="product-card__top w-full"></div>
                        <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                          <p class="grow">
                            <a
                              class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                              href="/products/hot-toddy-with-cinnamon-twist?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8376709120246&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                            >
                              Hot Toddy with Cinnamon Twist
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="card product-card product-card--card grid leading-none relative overflow-hidden"
                      // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                    >
                      <div class="product-card__media relative h-auto">
                        <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                        <a
                          class="block relative media media--square overflow-hidden"
                          href="/products/warm-ginger-snap-bourbon?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8374246015222&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                          tabindex="-1"
                        >
                          <Image
                            src={require("../../../assets/images/Warm_Ginger_Snap_Bourbon.jpg")}
                            alt="Warm Ginger Snap Bourbon"
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
                          {/* <img src="assets/images/Warm_Ginger_Snap_Bourbon.jpg" alt="Warm Ginger Snap Bourbon" loading="lazy" is="lazy-image" class="loaded"> */}
                        </a>
                      </div>
                      <div class="product-card__content flex flex-col justify-start text-left">
                        <div class="product-card__top w-full"></div>
                        <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                          <p class="grow">
                            <a
                              class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                              href="/products/warm-ginger-snap-bourbon?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8374246015222&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                            >
                              Warm Ginger Snap Bourbon
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="card product-card product-card--card grid leading-none relative overflow-hidden"
                      // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                    >
                      <div class="product-card__media relative h-auto">
                        <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                        <a
                          class="block relative media media--square overflow-hidden"
                          href="/products/highball?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8426695262454&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                          tabindex="-1"
                        >
                          <Image
                            src={require("../../../assets/images/Highball.jpg")}
                            alt="Highball"
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
                          {/* <img src="assets/images/Highball.jpg" alt="Highball" loading="lazy" is="lazy-image" class="loaded"> */}
                        </a>
                      </div>
                      <div class="product-card__content flex flex-col justify-start text-left">
                        <div class="product-card__top w-full"></div>
                        <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                          <p class="grow">
                            <a
                              class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                              href="/products/highball?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8426695262454&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                            >
                              Highball
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="card product-card product-card--card grid leading-none relative overflow-hidden"
                      // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                    >
                      <div class="product-card__media relative h-auto">
                        <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                        <a
                          class="block relative media media--square overflow-hidden"
                          href="/products/ginger-ale-highball?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8426692182262&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                          tabindex="-1"
                        >
                          <Image
                            src={require("../../../assets/images/GingerAleHighball.jpg")}
                            alt="Ginger Ale Highball"
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
                          {/* <img src="assets/images/GingerAleHighball.jpg" alt="Ginger Ale Highball" loading="lazy" is="lazy-image" class="loaded"> */}
                        </a>
                      </div>
                      <div class="product-card__content flex flex-col justify-start text-left">
                        <div class="product-card__top w-full"></div>
                        <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                          <p class="grow">
                            <a
                              class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                              href="/products/ginger-ale-highball?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8426692182262&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                            >
                              Ginger Ale Highball
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="card product-card product-card--card grid leading-none relative overflow-hidden"
                      // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                    >
                      <div class="product-card__media relative h-auto">
                        <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                        <a
                          class="block relative media media--square overflow-hidden"
                          href="/products/new-york-sour?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8426780360950&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                          tabindex="-1"
                        >
                          <Image
                            src={require("../../../assets/images/NewYorkSour.jpg")}
                            alt="New York Sour"
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
                          {/* <img src="assets/images/NewYorkSour.jpg" alt="New York Sour" loading="lazy" is="lazy-image" class="loaded"> */}
                        </a>
                      </div>
                      <div class="product-card__content flex flex-col justify-start text-left">
                        <div class="product-card__top w-full"></div>
                        <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                          <p class="grow">
                            <a
                              class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                              href="/products/new-york-sour?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8426780360950&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                            >
                              New York Sour
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="card product-card product-card--card grid leading-none relative overflow-hidden"
                      // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                    >
                      <div class="product-card__media relative h-auto">
                        <div class="badges z-2 absolute grid gap-3 pointer-events-none"></div>
                        <a
                          class="block relative media media--square overflow-hidden"
                          href="/products/knockout?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8425976692982&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                          tabindex="-1"
                        >
                          <Image
                            src={require("../../../assets/images/Knockout.jpg")}
                            alt="Knockout"
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
                          {/* <img src="assets/images/Knockout.jpg" alt="Knockout" loading="lazy" is="lazy-image" class="loaded"> */}
                        </a>
                      </div>
                      <div class="product-card__content flex flex-col justify-start text-left">
                        <div class="product-card__top w-full"></div>
                        <div class="product-card__details flex flex-col lg:flex-row items-baseline gap-2 w-full">
                          <p class="grow">
                            <a
                              class="product-card__title reversed-link text-base-xl font-medium leading-tight"
                              href="/products/knockout?pr_prod_strat=e5_desc&amp;pr_rec_id=cc9b23791&amp;pr_rec_pid=8425976692982&amp;pr_ref_pid=8425972695286&amp;pr_seq=uniform"
                            >
                              Knockout
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion-list>
                </slider-element>
              </div>
            </div>
          </product-recommendations>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetailContent;
