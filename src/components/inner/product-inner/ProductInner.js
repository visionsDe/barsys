import React from "react";
import "./product.css";
import Image from "next/image";
import Link from "next/link";
const ProductInner = () => {
  return (
    <>
      <div class="page-container" id="PageContainer">
        <main class="main-content relative" id="MainContent" role="main">
          <div
            id="shopify-section-template--17490500976886__main-product"
            class="shopify-section"
          >
            {/* <script src="assets/js/product-popup.js" defer="defer"></script> */}
            <div class="section section--padding">
              <div class="page-width page-width--full relative">
                <div class="featured-product product product--scroll flex flex-col items-start lg:grid gap-5 w-full relative">
                  <media-gallery
                    class="product__gallery product__gallery--full_width block w-full relative xl:grid xl:items-start gap-5 h-full"
                    form="ProductForm-template--17490500976886__main-product"
                    aria-label="Gallery Viewer"
                    data-animate="fade-up"
                    data-immediate=""
                  >
                    <sticky-element
                      class="product__preview relative overflow-hidden w-full h-full hidden xl:block sticky top-0"
                      // style="inset-block-start: 121px; --inset: 121px;"
                    >
                      <div
                        class="product__media media flex w-full relative overflow-hidden"
                        data-media-type="image"
                        data-media-id="32143500640502"
                      >
                        <Image
                          src={require("../../../assets/images/Basys-2-0-product.jpg")}
                          loading="eager"
                          fetchpriority="high"
                          class="w-full loaded"
                          is="lazy-image"
                        />
                        <button
                          type="button"
                          class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                          is="media-lightbox-button"
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
                    </sticky-element>
                    <div class="product__media-container flex flex-col gap-4">
                      <div class="relative w-full h-full">
                        <slider-element
                          id="SliderGallery-template--17490500976886__main-product"
                          class="slider slider--desktop slider--tablet block w-full h-full"
                          selector=".product__media"
                        >
                          <div class="product__media-list flex gap-1 lg:grid lg:gap-4 xl:gap-5 grid-cols-2">
                            <div
                              class="product__media card media flex w-full flex-auto relative overflow-hidden xl:hidden"
                              data-media-type="image"
                              data-media-id="32143500640502"
                            >
                              <Image
                                src={require("../../../assets/images/Basys-2-0-product.jpg")}
                                alt="Barsys 2.0+"
                                loading="eager"
                                fetchpriority="high"
                                class="w-full loaded"
                                is="lazy-image"
                              />

                              <button
                                type="button"
                                class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                is="media-lightbox-button"
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
                            <div
                              class="product__media card media flex w-full flex-auto relative overflow-hidden"
                              data-media-type="image"
                              data-media-id="30478131953910"
                            >
                              <Image
                                src={require("../../../assets/images/barsys-2-0productimage1.png")}
                                alt="Barsys 2.0+"
                                loading="lazy"
                                fetchpriority="auto"
                                class="w-full loaded"
                                is="lazy-image"
                              />
                              <button
                                type="button"
                                class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                is="media-lightbox-button"
                                aria-label="Open media 2 in modal"
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
                            <div
                              class="product__media card media flex w-full flex-auto relative overflow-hidden"
                              data-media-type="image"
                              data-media-id="30478131986678"
                            >
                              <Image
                                src={require("../../../assets/images/barsys-2-0productimage2.png")}
                                alt="Barsys 2.0+"
                                loading="lazy"
                                fetchpriority="auto"
                                class="w-full loaded"
                                is="lazy-image"
                              />
                              <button
                                type="button"
                                class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                is="media-lightbox-button"
                                aria-label="Open media 3 in modal"
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
                            <div
                              class="product__media card media flex w-full flex-auto relative overflow-hidden"
                              data-media-type="image"
                              data-media-id="30478132019446"
                            >
                              <Image
                                src={require("../../../assets/images/barsys-2-0productimage3.png")}
                                alt="Barsys 2.0+"
                                loading="lazy"
                                fetchpriority="auto"
                                class="w-full loaded"
                                is="lazy-image"
                              />
                              <button
                                type="button"
                                class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                is="media-lightbox-button"
                                aria-label="Open media 4 in modal"
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
                            <div
                              class="product__media card media flex w-full flex-auto relative overflow-hidden"
                              data-media-type="image"
                              data-media-id="30478132052214"
                            >
                              <Image
                                src={require("../../../assets/images/barsys-2-0productimage4.jpg")}
                                alt="Barsys 2.0+"
                                loading="lazy"
                                fetchpriority="auto"
                                class="w-full loaded"
                                is="lazy-image"
                              />
                              <button
                                type="button"
                                class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                is="media-lightbox-button"
                                aria-label="Open media 5 in modal"
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
                          </div>
                        </slider-element>

                        <div class="indicators hidden items-center justify-between opacity-0 z-1 absolute top-0 left-0 w-full h-full pointer-events-none">
                          <button
                            class="button button--secondary pointer-events-auto"
                            type="button"
                            is="previous-button"
                            aria-controls="SliderGallery-template--17490500976886__main-product"
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
                            aria-controls="SliderGallery-template--17490500976886__main-product"
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
                      <scroll-shadow class="product__thumbnails with-dots lg:hidden product__thumbnails--beside grid items-center relative w-full">
                        <media-dots
                          class="product__thumbnails-list scroll-area grid items-end justify-start gap-4 w-full"
                          aria-controls="SliderGallery-template--17490500976886__main-product"
                        >
                          <button
                            type="button"
                            class="product__thumbnail media media--square relative overflow-hidden loading"
                            data-media-id="32143500640502"
                            aria-label="Go to item "
                            aria-current="true"
                          >
                            <Image
                              src={require("../../../assets/images/Basys-2-0-product.jpg")}
                              alt="Barsys 2.0+"
                              loading="lazy"
                              is="lazy-image"
                            />
                          </button>
                          <button
                            type="button"
                            class="product__thumbnail media media--square relative overflow-hidden loading"
                            data-media-id="30478131953910"
                            aria-label="Go to item "
                            aria-current="false"
                          >
                            <Image
                              src={require("../../../assets/images/barsys-2-0productimage1.png")}
                              alt="Barsys 2.0+"
                              loading="lazy"
                              is="lazy-image"
                            />
                          </button>
                          <button
                            type="button"
                            class="product__thumbnail media media--square relative overflow-hidden loading"
                            data-media-id="30478131986678"
                            aria-label="Go to item "
                            aria-current="false"
                          >
                            <Image
                              src={require("../../../assets/images/barsys-2-0productimage2.png")}
                              alt="Barsys 2.0+"
                              loading="lazy"
                              is="lazy-image"
                            />
                          </button>
                          <button
                            type="button"
                            class="product__thumbnail media media--square relative overflow-hidden loading"
                            data-media-id="30478132019446"
                            aria-label="Go to item "
                            aria-current="false"
                          >
                            <Image
                              src={require("../../../assets/images/barsys-2-0productimage3.png")}
                              alt="Barsys 2.0+"
                              loading="lazy"
                              is="lazy-image"
                            />
                          </button>
                          <button
                            type="button"
                            class="product__thumbnail media media--square relative overflow-hidden loading"
                            data-media-id="30478132052214"
                            aria-label="Go to item "
                            aria-current="false"
                          >
                            <Image
                              src={require("../../../assets/images/barsys-2-0productimage4.jpg")}
                              alt="Barsys 2.0+"
                              loading="lazy"
                              is="lazy-image"
                            />
                          </button>
                        </media-dots>
                        <template>
                          <slot></slot>
                          <s dir="ltr">
                            <span class="t">
                              <svg
                                class="icon icon-chevron-up icon-md"
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
                            </span>
                            <span class="b">
                              <svg
                                class="icon icon-chevron-down icon-md"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6 9L12 15L18 9"
                                ></path>
                              </svg>
                            </span>
                            <span class="l">
                              <svg
                                class="icon icon-chevron-left icon-md"
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
                            <span class="r">
                              <svg
                                class="icon icon-chevron-right icon-md"
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
                          </s>
                        </template>
                      </scroll-shadow>
                    </div>
                  </media-gallery>

                  <animate-element
                    class="product__info block sticky w-full animate"
                    data-animate="fade-up"
                    data-immediate=""
                    // style="transform: translateY(0px); opacity: 1;"
                  >
                    <p class="product__vendor text-base">
                      <a class="reversed-link" href="#" title="Barsys LLC">
                        Barsys LLC
                      </a>
                    </p>
                    <div class="product__title with-price ">
                      <h1 class="leading-none font-bold product-title-md col-span-full">
                        <split-words
                          class="split-words flex flex-wrap"
                          data-animate="fade-up"
                        >
                          <div
                            class="single-word"
                            //  style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up"
                              data-animate-delay="0"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Barsys
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up"
                              data-animate-delay="30"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              2.0+
                            </animate-element>
                          </div>
                        </split-words>
                      </h1>
                      <div
                        id="Price-template--17490500976886__main-product"
                        class="product__price"
                      >
                        <div class="price flex items-baseline gap-2 lg:flex-col xl:items-end lg:gap-1d5">
                          <span class="price__regular whitespace-nowrap">
                            Rs. 180,000.00
                          </span>
                        </div>
                      </div>
                    </div>
                    <form
                      method="post"
                      action="/cart/add"
                      id="ProductFormInstallment-template--17490500976886__main-product"
                      accept-charset="UTF-8"
                      class="installment text-sm leading-tight"
                      enctype="multipart/form-data"
                    >
                      <input type="hidden" name="form_type" value="product" />
                      <input type="hidden" name="utf8" value="✓" />
                      <input type="hidden" name="id" value="15458076327971" />

                      <input
                        type="hidden"
                        name="product-id"
                        value="1851102691363"
                      />
                      <input
                        type="hidden"
                        name="section-id"
                        value="template--17490500976886__main-product"
                      />
                      <div class="notify-wrapper spo-container"></div>
                      <div class="selling-plan-wrapper spo-container"></div>
                    </form>
                    <div class="product__text rte text-base">
                      Introducing Barsys 2.0 + your ultimate mixology companion
                      at home! This innovative device dispenses precise amounts
                      of ingredients, effortlessly crafting over 2,000 cocktail
                      recipes with just a tap of your finger. With the Barsys
                      App, explore endless combinations or craft your own
                      signature concoctions. Load your favorite spirits and
                      mixers, and watch as Barsys 2.0+ creates perfect cocktails
                      with speed and accuracy. The integrated lighting feature
                      adds a touch of sophistication, highlighting your chosen
                      ingredients for a visually stunning experience. Elevate
                      your home bar setup with Barsys 2.0+ and unlock the art of
                      personalized mixology like never before!
                    </div>

                    <noscript>
                      <div class="product-form__input hidden">
                        <label
                          class="form__label flex gap-2"
                          for="Variants-template--17490500976886__main-product"
                        >
                          Product variants
                        </label>
                        <div class="field">
                          <select
                            name="id"
                            id="Variants-template--17490500976886__main-product"
                            class="select"
                            form="ProductForm-template--17490500976886__main-product"
                          >
                            <option selected value="15458076327971">
                              Default Title - Rs. 180,000.00
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
                      class="product__inventory no-js-hidden"
                      id="Inventory-template--17490500976886__main-product"
                      role="status"
                    >
                      <div class="grid gap-3 w-full">
                        <span class="text-sm leading-tight">
                          Hurry, only <strong>10</strong> items left in stock!
                        </span>
                        <progress-bar
                          class="overflow-hidden rounded-full accent-1"
                          data-value="10"
                          data-max="15"
                          // style="--progress: 50%;"
                        ></progress-bar>
                      </div>
                    </div>

                    <div class="product-form-wrapper">
                      <form
                        method="post"
                        action="/cart/add"
                        id="ProductForm-template--17490500976886__main-product"
                        accept-charset="UTF-8"
                        class="product-form grid gap-2"
                        enctype="multipart/form-data"
                        novalidate="novalidate"
                        data-type="add-to-cart-form"
                        data-hide-errors="false"
                        is="product-form"
                      >
                        <input type="hidden" name="form_type" value="product" />
                        <input type="hidden" name="utf8" value="✓" />
                        <input type="hidden" name="id" value="15458076327971" />
                        <div class="product-form__buttons grid gap-4">
                          <div
                            class="product-form__error-message alert alert--error text-sm font-medium leading-tight"
                            role="alert"
                            hidden=""
                          ></div>
                          <div class="flex gap-4">
                            <label
                              for="Quantity2-template--17490500976886__main-product"
                              class="label sr-only"
                            >
                              Quantity
                            </label>
                            <quantity-selector class="quantity-selector inline-flex flex-auto">
                              <button
                                type="button"
                                name="minus"
                                class="quantity-button"
                                aria-label="Decrease quantity for Barsys 2.0+"
                              >
                                <svg
                                  class="icon icon-chevron-left icon-sm stroke-2 transform"
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
                              </button>
                              <input
                                id="Quantity2-template--17490500976886__main-product"
                                class="quantity-input text-sm sm:text-base font-medium text-center"
                                type="text"
                                value="1"
                                min="1"
                                name="quantity"
                                size="2"
                                inputmode="numeric"
                                autocomplete="off"
                                is="quantity-input"
                              />
                              <button
                                type="button"
                                name="plus"
                                class="quantity-button"
                                aria-label="Increase quantity for Barsys 2.0+"
                              >
                                <svg
                                  class="icon icon-chevron-right icon-sm stroke-2 transform"
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
                              </button>
                            </quantity-selector>
                            <button
                              type="submit"
                              name="add"
                              class="product-form__submit button button--primary button--fixed w-full"
                              is="hover-button"
                            >
                              <span
                                class="btn-fill"
                                data-fill=""
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: -76%;"
                              ></span>
                              <span class="btn-text">Add to cart</span>
                              <span class="btn-loader">
                                <span></span>
                                <span></span>
                                <span></span>
                              </span>
                            </button>
                          </div>

                          <div
                            data-shopify="payment-button"
                            data-has-selling-plan="false"
                            data-has-fixed-selling-plan="false"
                            data-customer-accounts-required="false"
                            class="shopify-payment-button"
                          >
                            <div>
                              <div>
                                <div>
                                  <div class="shopify-cleanslate">
                                    <div
                                      id="shopify-svg-symbols"
                                      class="R9tDu8JrE_i1ctOEo0v_"
                                      aria-hidden="true"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        focusable="false"
                                      >
                                        <defs>
                                          <symbol
                                            id="shopify-svg__warning"
                                            viewBox="0 0 16 14"
                                          >
                                            <path d="M5.925 2.344c1.146-1.889 3.002-1.893 4.149 0l4.994 8.235c1.146 1.889.288 3.421-1.916 3.421h-10.305c-2.204 0-3.063-1.529-1.916-3.421l4.994-8.235zm1.075 1.656v5h2v-5h-2zm0 6v2h2v-2h-2z"></path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__loading"
                                            viewBox="0 0 32 32"
                                          >
                                            <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0v2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14h2z"></path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__error"
                                            viewBox="0 0 18 18"
                                          >
                                            <path
                                              d="M9 18c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"
                                              // style="fill: rgb(255, 62, 62);"
                                            ></path>
                                            <path
                                              d="M8 4h2v6H8z"
                                              // style="fill: rgb(255, 255, 255);"
                                            ></path>
                                            <rect
                                              x="7.8"
                                              y="12"
                                              width="2.5"
                                              height="2.5"
                                              rx="1.3"
                                              // style="fill: rgb(255, 255, 255);"
                                            ></rect>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__close-circle"
                                            viewBox="0 0 16 16"
                                          >
                                            <circle
                                              cx="8"
                                              cy="8"
                                              r="8"
                                            ></circle>
                                            <path
                                              d="M10.5 5.5l-5 5M5.5 5.5l5 5"
                                              stroke="#FFF"
                                              stroke-width="1.5"
                                              stroke-linecap="square"
                                            ></path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__close"
                                            viewBox="0 0 20 20"
                                          >
                                            <path d="M17.1 4.3l-1.4-1.4-5.7 5.7-5.7-5.7-1.4 1.4 5.7 5.7-5.7 5.7 1.4 1.4 5.7-5.7 5.7 5.7 1.4-1.4-5.7-5.7z"></path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__arrow-right"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z"></path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__payments-google-pay-light"
                                            viewBox="0 0 41 17"
                                          >
                                            <path
                                              d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zM27.194 10.442c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568M40.993 4.889l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"
                                              // style="fill: rgb(255, 255, 255);">
                                            >
                                              {" "}
                                            </path>
                                            <path
                                              d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"
                                              // style="fill: rgb(66, 133, 244);">
                                            >
                                              {" "}
                                            </path>
                                            <path
                                              d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703"
                                              // style="fill: rgb(52, 168, 83);">
                                            >
                                              {" "}
                                            </path>
                                            <path
                                              d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z"
                                              // style="fill: rgb(251, 188, 5);">
                                            >
                                              {" "}
                                            </path>
                                            <path
                                              d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"
                                              // style="fill: rgb(234, 67, 53);">
                                            >
                                              {" "}
                                            </path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__payments-google-pay-dark"
                                            viewBox="0 0 41 17"
                                          >
                                            <path
                                              d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zM27.194 10.442c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568M40.993 4.889l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"
                                              // style="fill: rgba(0, 0, 0, 0.55);"
                                            ></path>
                                            <path
                                              d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"
                                              // style="fill: rgb(66, 133, 244);">
                                            >
                                              {" "}
                                            </path>
                                            <path
                                              d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703"
                                              // style="fill: rgb(52, 168, 83);">
                                            >
                                              {" "}
                                            </path>
                                            <path
                                              d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z"
                                              // style="fill: rgb(251, 188, 5);">
                                            >
                                              {" "}
                                            </path>
                                            <path
                                              d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"
                                              // style="fill: rgb(234, 67, 53);">
                                            >
                                              {" "}
                                            </path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__payments-facebook-pay-dark"
                                            viewBox="0 0 300 50"
                                          >
                                            <path
                                              d="M277.374 25.35a330.858 330.858 0 0 1-5.496-14.28h6.355c1.122 3.701 2.393 7.365 3.739 11.066 1.383 3.7 2.803 7.364 4.336 10.953a271.222 271.222 0 0 0 7.29-22.019h6.131a183.26 183.26 0 0 1-2.692 7.963 500.958 500.958 0 0 1-3.402 9.159c-1.271 3.29-2.766 6.99-4.411 11.028-1.57 3.813-3.327 6.542-5.196 8.224-1.907 1.645-4.225 2.505-7.028 2.505a11.37 11.37 0 0 1-2.243-.225v-5.046c.374.037.673.074.897.112h.673c1.645 0 3.028-.449 4.149-1.309 1.122-.86 2.131-2.28 3.066-4.299-2.168-4.523-4.187-9.121-6.131-13.832h-.037Zm-9.795 13.421h-5.682v-3.888c-1.009 1.458-2.28 2.58-3.85 3.365-1.571.785-3.328 1.196-5.309 1.196-2.467 0-4.635-.636-6.505-1.87-1.906-1.233-3.364-2.99-4.448-5.158-1.084-2.206-1.608-4.71-1.608-7.514 0-2.804.561-5.346 1.645-7.552 1.084-2.168 2.617-3.887 4.561-5.121 1.944-1.234 4.187-1.87 6.692-1.87 1.906 0 3.588.375 5.121 1.122 1.495.748 2.766 1.795 3.738 3.14v-3.55h5.683v27.775l-.038-.075Zm-5.794-18.056c-.636-1.57-1.608-2.841-2.953-3.738-1.346-.898-2.879-1.384-4.636-1.384-2.467 0-4.449.823-5.944 2.505-1.458 1.682-2.205 3.925-2.205 6.767 0 2.84.71 5.121 2.13 6.803 1.421 1.682 3.327 2.505 5.795 2.505 1.794 0 3.402-.449 4.785-1.383 1.383-.935 2.43-2.168 3.028-3.739v-8.336ZM209 1.5h14.131c4.747 0 8.411 1.084 10.99 3.252 2.58 2.169 3.888 5.234 3.888 9.271 0 4.038-1.271 7.103-3.85 9.271-2.58 2.169-6.243 3.253-11.028 3.253h-8.038v12.261H209V1.5Zm13.645 19.551c3.14 0 5.42-.56 6.916-1.72 1.495-1.158 2.243-2.915 2.243-5.27 0-2.355-.748-4.225-2.243-5.346-1.496-1.122-3.813-1.72-6.916-1.72h-7.552v14.056h7.552ZM71.937 1.249h7.429l12.63 22.85 12.632-22.85h7.268v37.546h-6.06V10.019L94.758 29.946h-5.686L77.997 10.019v28.776h-6.06V1.249Zm58.947 13.999c-4.346 0-6.964 3.27-7.59 7.32h14.75c-.304-4.171-2.711-7.32-7.16-7.32Zm-13.598 9.628c0-8.522 5.508-14.725 13.703-14.725 8.061 0 12.875 6.124 12.875 15.18v1.665h-20.57c.73 4.405 3.653 7.374 8.367 7.374 3.761 0 6.112-1.147 8.34-3.246l3.22 3.943c-3.033 2.79-6.891 4.398-11.775 4.398-8.872 0-14.16-6.47-14.16-14.589Zm33.926-9.09h-5.579v-4.963h5.579V2.618h5.846v8.205h8.475v4.962h-8.475v12.577c0 4.294 1.373 5.82 4.747 5.82 1.541 0 2.424-.132 3.728-.35v4.909c-1.625.459-3.176.67-4.854.67-6.312 0-9.467-3.449-9.467-10.352V15.785v.001Zm38.941 4.825c-1.174-2.965-3.794-5.148-7.644-5.148-5.003 0-8.205 3.55-8.205 9.333 0 5.638 2.948 9.36 7.966 9.36 3.944 0 6.76-2.296 7.883-5.15V20.61v.001ZM196 38.795h-5.739v-3.916c-1.605 2.305-4.524 4.586-9.253 4.586-7.604 0-12.686-6.366-12.686-14.67 0-8.381 5.204-14.644 13.009-14.644 3.858 0 6.885 1.543 8.93 4.266v-3.594H196v27.972Z"
                                              fill="#000000"
                                            ></path>
                                            <path
                                              d="M6.422 26.042c0 2.27.498 4.013 1.15 5.068.853 1.38 2.127 1.966 3.425 1.966 1.675 0 3.207-.415 6.16-4.499 2.364-3.273 5.151-7.867 7.027-10.747l3.175-4.88c2.206-3.388 4.76-7.155 7.687-9.708C37.436 1.158 40.015 0 42.61 0c4.357 0 8.506 2.524 11.682 7.259 3.475 5.185 5.162 11.717 5.162 18.457 0 4.007-.79 6.95-2.133 9.277-1.299 2.25-3.83 4.497-8.086 4.497v-6.414c3.645 0 4.554-3.35 4.554-7.182 0-5.463-1.273-11.525-4.079-15.856-1.99-3.073-4.571-4.95-7.41-4.95-3.07 0-5.54 2.316-8.317 6.445-1.477 2.193-2.992 4.867-4.694 7.883l-1.873 3.318c-3.763 6.672-4.716 8.192-6.597 10.7-3.298 4.391-6.114 6.056-9.82 6.056-4.398 0-7.18-1.905-8.901-4.774C.69 32.377 0 29.309 0 25.813l6.422.23v-.001Z"
                                              fill="#0081FB"
                                            ></path>
                                            <path
                                              d="M5.063 7.712C8.007 3.174 12.256 0 17.13 0c2.823 0 5.628.835 8.558 3.227 3.204 2.616 6.62 6.922 10.881 14.02l1.528 2.547c3.688 6.145 5.787 9.306 7.015 10.797 1.58 1.914 2.686 2.485 4.123 2.485 3.645 0 4.554-3.35 4.554-7.182l5.665-.178c0 4.007-.79 6.95-2.133 9.277-1.299 2.25-3.83 4.496-8.086 4.496-2.647 0-4.991-.574-7.584-3.02-1.993-1.877-4.323-5.212-6.116-8.21l-5.332-8.907c-2.675-4.47-5.13-7.803-6.55-9.312-1.528-1.623-3.492-3.583-6.626-3.583-2.537 0-4.691 1.78-6.494 4.503L5.064 7.712h-.001Z"
                                              fill="url(#meta-pay-button__a)"
                                            ></path>
                                            <path
                                              d="M17.026 6.457c-2.537 0-4.691 1.78-6.494 4.503-2.55 3.848-4.11 9.579-4.11 15.082 0 2.27.498 4.013 1.15 5.068l-5.476 3.606C.691 32.377 0 29.309 0 25.813c0-6.358 1.745-12.984 5.063-18.101C8.007 3.174 12.256 0 17.13 0l-.103 6.457h-.001Z"
                                              fill="url(#meta-pay-button__b)"
                                            ></path>
                                            <defs>
                                              <linearGradient
                                                id="meta-pay-button__a"
                                                x1="12.612"
                                                y1="24.19"
                                                x2="53.549"
                                                y2="26.257"
                                                gradientUnits="userSpaceOnUse"
                                              >
                                                <stop stop-color="#0064E1"></stop>
                                                <stop
                                                  offset=".4"
                                                  stop-color="#0064E1"
                                                ></stop>
                                                <stop
                                                  offset=".83"
                                                  stop-color="#0073EE"
                                                ></stop>
                                                <stop
                                                  offset="1"
                                                  stop-color="#0082FB"
                                                ></stop>
                                              </linearGradient>
                                              <linearGradient
                                                id="meta-pay-button__b"
                                                x1="9.304"
                                                y1="28.738"
                                                x2="9.304"
                                                y2="13.646"
                                                gradientUnits="userSpaceOnUse"
                                              >
                                                <stop stop-color="#0082FB"></stop>
                                                <stop
                                                  offset="1"
                                                  stop-color="#0064E0"
                                                ></stop>
                                              </linearGradient>
                                            </defs>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__payments-facebook-pay-light"
                                            viewBox="0 0 300 50"
                                          >
                                            <path
                                              d="M277.374 25.35a330.858 330.858 0 0 1-5.496-14.28h6.355c1.122 3.701 2.393 7.365 3.739 11.066 1.383 3.7 2.803 7.364 4.336 10.953a271.222 271.222 0 0 0 7.29-22.019h6.131a183.26 183.26 0 0 1-2.692 7.963 500.958 500.958 0 0 1-3.402 9.159c-1.271 3.29-2.766 6.99-4.411 11.028-1.57 3.813-3.327 6.542-5.196 8.224-1.907 1.645-4.225 2.505-7.028 2.505a11.37 11.37 0 0 1-2.243-.225v-5.046c.374.037.673.074.897.112h.673c1.645 0 3.028-.449 4.149-1.309 1.122-.86 2.131-2.28 3.066-4.299-2.168-4.523-4.187-9.121-6.131-13.832h-.037Zm-9.795 13.421h-5.682v-3.888c-1.009 1.458-2.28 2.58-3.85 3.365-1.571.785-3.328 1.196-5.309 1.196-2.467 0-4.635-.636-6.505-1.87-1.906-1.233-3.364-2.99-4.448-5.158-1.084-2.206-1.608-4.71-1.608-7.514 0-2.804.561-5.346 1.645-7.552 1.084-2.168 2.617-3.887 4.561-5.121 1.944-1.234 4.187-1.87 6.692-1.87 1.906 0 3.588.375 5.121 1.122 1.495.748 2.766 1.795 3.738 3.14v-3.55h5.683v27.775l-.038-.075Zm-5.794-18.056c-.636-1.57-1.608-2.841-2.953-3.738-1.346-.898-2.879-1.384-4.636-1.384-2.467 0-4.449.823-5.944 2.505-1.458 1.682-2.205 3.925-2.205 6.767 0 2.84.71 5.121 2.13 6.803 1.421 1.682 3.327 2.505 5.795 2.505 1.794 0 3.402-.449 4.785-1.383 1.383-.935 2.43-2.168 3.028-3.739v-8.336ZM209 1.5h14.131c4.747 0 8.411 1.084 10.99 3.252 2.58 2.169 3.888 5.234 3.888 9.271 0 4.038-1.271 7.103-3.85 9.271-2.58 2.169-6.243 3.253-11.028 3.253h-8.038v12.261H209V1.5Zm13.645 19.551c3.14 0 5.42-.56 6.916-1.72 1.495-1.158 2.243-2.915 2.243-5.27 0-2.355-.748-4.225-2.243-5.346-1.496-1.122-3.813-1.72-6.916-1.72h-7.552v14.056h7.552ZM71.937 1.249h7.429l12.63 22.85 12.632-22.85h7.268v37.546h-6.06V10.019L94.758 29.946h-5.686L77.997 10.019v28.776h-6.06V1.249Zm58.947 13.999c-4.346 0-6.964 3.27-7.59 7.32h14.75c-.304-4.171-2.711-7.32-7.16-7.32Zm-13.598 9.628c0-8.522 5.508-14.725 13.703-14.725 8.061 0 12.875 6.124 12.875 15.18v1.665h-20.57c.73 4.405 3.653 7.374 8.367 7.374 3.761 0 6.112-1.147 8.34-3.246l3.22 3.943c-3.033 2.79-6.891 4.398-11.775 4.398-8.872 0-14.16-6.47-14.16-14.589Zm33.926-9.09h-5.579v-4.963h5.579V2.618h5.846v8.205h8.475v4.962h-8.475v12.577c0 4.294 1.373 5.82 4.747 5.82 1.541 0 2.424-.132 3.728-.35v4.909c-1.625.459-3.176.67-4.854.67-6.312 0-9.467-3.449-9.467-10.352V15.785v.001Zm38.941 4.825c-1.174-2.965-3.794-5.148-7.644-5.148-5.003 0-8.205 3.55-8.205 9.333 0 5.638 2.948 9.36 7.966 9.36 3.944 0 6.76-2.296 7.883-5.15V20.61v.001ZM196 38.795h-5.739v-3.916c-1.605 2.305-4.524 4.586-9.253 4.586-7.604 0-12.686-6.366-12.686-14.67 0-8.381 5.204-14.644 13.009-14.644 3.858 0 6.885 1.543 8.93 4.266v-3.594H196v27.972Z"
                                              fill="#fff"
                                            ></path>
                                            <path
                                              d="M6.422 26.042c0 2.27.498 4.013 1.15 5.068.853 1.38 2.127 1.966 3.425 1.966 1.675 0 3.207-.415 6.16-4.499 2.364-3.273 5.151-7.867 7.027-10.747l3.175-4.88c2.206-3.388 4.76-7.155 7.687-9.708C37.436 1.158 40.015 0 42.61 0c4.357 0 8.506 2.524 11.682 7.259 3.475 5.185 5.162 11.717 5.162 18.457 0 4.007-.79 6.95-2.133 9.277-1.299 2.25-3.83 4.497-8.086 4.497v-6.414c3.645 0 4.554-3.35 4.554-7.182 0-5.463-1.273-11.525-4.079-15.856-1.99-3.073-4.571-4.95-7.41-4.95-3.07 0-5.54 2.316-8.317 6.445-1.477 2.193-2.992 4.867-4.694 7.883l-1.873 3.318c-3.763 6.672-4.716 8.192-6.597 10.7-3.298 4.391-6.114 6.056-9.82 6.056-4.398 0-7.18-1.905-8.901-4.774C.69 32.377 0 29.309 0 25.813l6.422.23v-.001Z"
                                              fill="#0081FB"
                                            ></path>
                                            <path
                                              d="M5.063 7.712C8.007 3.174 12.256 0 17.13 0c2.823 0 5.628.835 8.558 3.227 3.204 2.616 6.62 6.922 10.881 14.02l1.528 2.547c3.688 6.145 5.787 9.306 7.015 10.797 1.58 1.914 2.686 2.485 4.123 2.485 3.645 0 4.554-3.35 4.554-7.182l5.665-.178c0 4.007-.79 6.95-2.133 9.277-1.299 2.25-3.83 4.496-8.086 4.496-2.647 0-4.991-.574-7.584-3.02-1.993-1.877-4.323-5.212-6.116-8.21l-5.332-8.907c-2.675-4.47-5.13-7.803-6.55-9.312-1.528-1.623-3.492-3.583-6.626-3.583-2.537 0-4.691 1.78-6.494 4.503L5.064 7.712h-.001Z"
                                              fill="url(#meta-pay-button__a)"
                                            ></path>
                                            <path
                                              d="M17.026 6.457c-2.537 0-4.691 1.78-6.494 4.503-2.55 3.848-4.11 9.579-4.11 15.082 0 2.27.498 4.013 1.15 5.068l-5.476 3.606C.691 32.377 0 29.309 0 25.813c0-6.358 1.745-12.984 5.063-18.101C8.007 3.174 12.256 0 17.13 0l-.103 6.457h-.001Z"
                                              fill="url(#meta-pay-button__b)"
                                            ></path>
                                            <defs>
                                              <linearGradient
                                                id="meta-pay-button__a"
                                                x1="12.612"
                                                y1="24.19"
                                                x2="53.549"
                                                y2="26.257"
                                                gradientUnits="userSpaceOnUse"
                                              >
                                                <stop stop-color="#0064E1"></stop>
                                                <stop
                                                  offset=".4"
                                                  stop-color="#0064E1"
                                                ></stop>
                                                <stop
                                                  offset=".83"
                                                  stop-color="#0073EE"
                                                ></stop>
                                                <stop
                                                  offset="1"
                                                  stop-color="#0082FB"
                                                ></stop>
                                              </linearGradient>
                                              <linearGradient
                                                id="meta-pay-button__b"
                                                x1="9.304"
                                                y1="28.738"
                                                x2="9.304"
                                                y2="13.646"
                                                gradientUnits="userSpaceOnUse"
                                              >
                                                <stop stop-color="#0082FB"></stop>
                                                <stop
                                                  offset="1"
                                                  stop-color="#0064E0"
                                                ></stop>
                                              </linearGradient>
                                            </defs>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__payments-amazon-pay"
                                            viewBox="0 0 102 20"
                                          >
                                            <path
                                              d="M75.19 1.786c-.994 0-1.933.326-2.815.98v5.94c.896.683 1.82 1.023 2.774 1.023 1.932 0 2.899-1.32 2.899-3.96 0-2.655-.953-3.983-2.858-3.983zm-2.962-.277A5.885 5.885 0 0 1 73.93.444a4.926 4.926 0 0 1 1.85-.362c.672 0 1.282.127 1.827.383a3.763 3.763 0 0 1 1.387 1.108c.378.482.669 1.068.872 1.757.203.689.305 1.466.305 2.332 0 .88-.109 1.675-.326 2.385-.217.71-.522 1.314-.914 1.81a4.137 4.137 0 0 1-1.429 1.16 4.165 4.165 0 0 1-1.87.416c-1.26 0-2.346-.419-3.256-1.256v4.983c0 .284-.14.426-.42.426h-1.24c-.28 0-.42-.142-.42-.426V.827c0-.284.14-.426.42-.426h.925c.28 0 .441.142.483.426l.105.682zm13.194 8.37a4.21 4.21 0 0 0 1.45-.277 5.463 5.463 0 0 0 1.45-.81V6.62c-.35-.085-.719-.152-1.104-.202a8.8 8.8 0 0 0-1.124-.075c-1.583 0-2.374.617-2.374 1.853 0 .54.147.955.441 1.246.294.29.715.437 1.261.437zm-2.458-7.625l-.158.053a.561.561 0 0 1-.179.033c-.182 0-.273-.128-.273-.384V1.38c0-.199.028-.337.084-.415.056-.078.169-.153.337-.224.448-.199 1-.359 1.66-.48.657-.12 1.316-.18 1.974-.18 1.33 0 2.311.277 2.942.83.63.554.945 1.413.945 2.577v7.284c0 .284-.14.426-.42.426h-.903c-.267 0-.42-.135-.463-.405l-.105-.702a5.74 5.74 0 0 1-1.67 1.022 4.908 4.908 0 0 1-1.817.362c-1.009 0-1.807-.288-2.395-.863-.589-.575-.883-1.345-.883-2.31 0-1.037.364-1.864 1.092-2.481.73-.618 1.71-.927 2.942-.927.784 0 1.667.12 2.647.362V3.852c0-.767-.168-1.307-.504-1.619-.336-.313-.925-.469-1.764-.469-.982 0-2.01.163-3.09.49zm14.16 10.84c-.379.98-.816 1.683-1.314 2.109-.496.426-1.144.639-1.943.639-.448 0-.847-.05-1.197-.15a.606.606 0 0 1-.336-.202c-.07-.093-.105-.237-.105-.437V14.5c0-.27.105-.405.315-.405.07 0 .175.014.315.043.14.028.33.043.567.043.532 0 .946-.128 1.24-.384.294-.255.56-.724.798-1.406l.4-1.086-4.056-10.137c-.098-.241-.146-.411-.146-.511 0-.17.097-.256.294-.256h1.26c.224 0 .378.036.463.106.083.072.167.228.251.47l2.942 8.263L99.708.976c.084-.24.168-.397.252-.469.084-.07.238-.106.462-.106h1.177c.196 0 .294.086.294.256 0 .1-.05.27-.147.51l-4.622 11.927M40.15 15.47c-3.761 2.814-9.216 4.31-13.912 4.31-6.583 0-12.51-2.466-16.996-6.572-.352-.322-.038-.763.385-.513 4.84 2.855 10.825 4.574 17.006 4.574 4.17 0 8.753-.877 12.971-2.691.636-.273 1.17.425.547.891"
                                              // style="fill: rgb(51, 62, 72);"
                                            ></path>
                                            <path
                                              d="M41.717 13.657c-.482-.624-3.181-.296-4.394-.148-.368.044-.425-.281-.093-.517 2.153-1.533 5.682-1.09 6.092-.577.413.518-.108 4.104-2.127 5.816-.31.263-.605.122-.468-.225.455-1.15 1.471-3.724.99-4.349M37.429 2.06V.57A.365.365 0 0 1 37.8.193l6.59-.001c.21 0 .38.155.38.376v1.278c-.003.214-.18.494-.496.938L40.86 7.722c1.267-.03 2.607.163 3.757.818.26.148.33.367.35.582v1.59c0 .218-.237.472-.485.34-2.028-1.077-4.718-1.194-6.96.013-.23.124-.47-.126-.47-.345V9.209c0-.242.005-.656.246-1.024l3.953-5.75H37.81a.369.369 0 0 1-.38-.375M13.4 11.365h-2.005a.38.38 0 0 1-.358-.343L11.038.595a.38.38 0 0 1 .387-.375h1.866a.38.38 0 0 1 .365.35v1.36h.037C14.18.615 15.096 0 16.331 0c1.253 0 2.039.614 2.6 1.93C19.418.615 20.521 0 21.7 0c.842 0 1.758.351 2.32 1.141.635.878.505 2.15.505 3.27l-.002 6.58a.38.38 0 0 1-.387.374h-2.001a.378.378 0 0 1-.36-.374V5.463c0-.438.037-1.535-.056-1.952-.15-.703-.6-.9-1.179-.9-.486 0-.991.33-1.197.855-.206.527-.188 1.405-.188 1.997v5.527a.38.38 0 0 1-.386.375h-2.002a.379.379 0 0 1-.36-.374l-.001-5.528c0-1.163.186-2.874-1.235-2.874-1.44 0-1.384 1.668-1.384 2.874l-.001 5.527a.38.38 0 0 1-.387.375m37.059-9.236c-1.478 0-1.571 2.04-1.571 3.312 0 1.273-.02 3.993 1.552 3.993 1.554 0 1.628-2.194 1.628-3.532 0-.877-.038-1.93-.3-2.764-.224-.724-.673-1.01-1.31-1.01zM50.439 0c2.975 0 4.584 2.59 4.584 5.88 0 3.181-1.777 5.705-4.584 5.705-2.918 0-4.508-2.59-4.508-5.814C45.93 2.523 47.539 0 50.439 0zm8.441 11.365h-1.997a.379.379 0 0 1-.36-.374L56.52.561a.381.381 0 0 1 .386-.34L58.764.22c.175.009.32.13.356.291v1.595h.038C59.72.68 60.505 0 61.89 0c.898 0 1.778.329 2.339 1.229.524.834.524 2.237.524 3.247v6.561a.382.382 0 0 1-.385.328H62.36a.38.38 0 0 1-.357-.328V5.376c0-1.141.13-2.809-1.253-2.809-.487 0-.936.33-1.16.834-.281.636-.319 1.272-.319 1.975v5.614a.386.386 0 0 1-.39.375m-24.684.075a.41.41 0 0 1-.473.047c-.665-.56-.785-.82-1.149-1.354-1.1 1.136-1.879 1.477-3.304 1.477-1.687 0-3-1.055-3-3.166 0-1.65.882-2.77 2.138-3.32 1.087-.484 2.606-.572 3.769-.704v-.264c0-.484.037-1.055-.245-1.473-.243-.374-.712-.528-1.124-.528-.765 0-1.444.397-1.611 1.22-.035.183-.167.364-.348.374l-1.943-.214c-.164-.037-.346-.17-.299-.425C27.055.721 29.183 0 31.09 0c.975 0 2.25.263 3.018 1.011.975.924.881 2.155.881 3.497v3.165c0 .952.39 1.37.757 1.882.128.185.156.405-.007.54-.409.348-1.136.988-1.537 1.35l-.005-.005zm-2.02-4.953v-.44c-1.45 0-2.98.314-2.98 2.045 0 .88.45 1.473 1.218 1.473.562 0 1.069-.352 1.387-.923.394-.704.376-1.363.376-2.155zM7.926 11.44a.41.41 0 0 1-.473.047c-.667-.56-.786-.82-1.15-1.354C5.204 11.27 4.425 11.61 3 11.61c-1.688 0-3-1.055-3-3.166 0-1.65.88-2.77 2.137-3.32 1.087-.484 2.606-.572 3.768-.704v-.264c0-.484.038-1.055-.243-1.473-.244-.374-.713-.528-1.125-.528-.764 0-1.444.397-1.61 1.22-.036.183-.168.364-.35.374l-1.94-.214c-.165-.037-.347-.17-.3-.425C.783.721 2.911 0 4.818 0c.975 0 2.25.263 3.018 1.011.975.924.882 2.155.882 3.497v3.165c0 .952.39 1.37.756 1.882.128.185.157.405-.006.54a78.47 78.47 0 0 0-1.537 1.35l-.005-.005zm-2.02-4.953v-.44c-1.45 0-2.982.314-2.982 2.045 0 .88.45 1.473 1.219 1.473.562 0 1.069-.352 1.387-.923.394-.704.375-1.363.375-2.155z"
                                              // style="fill: rgb(51, 62, 72);"
                                            ></path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__payments-apple-pay-dark"
                                            viewBox="0 0 43 19"
                                          >
                                            <path
                                              d="M6.948 1.409C7.934.147 9.305.147 9.305.147s.193 1.18-.771 2.316c-1.05 1.2-2.228.993-2.228.993s-.236-.93.642-2.047zM3.82 3.663c-1.735 0-3.6 1.51-3.6 4.363 0 2.916 2.186 6.555 3.943 6.555.6 0 1.543-.6 2.485-.6.922 0 1.607.559 2.464.559 1.907 0 3.322-3.826 3.322-3.826s-2.015-.744-2.015-2.936c0-1.944 1.629-2.73 1.629-2.73s-.836-1.447-2.936-1.447c-1.22 0-2.164.661-2.656.661-.622.021-1.5-.6-2.636-.6zM19.64 1.426c2.453 0 4.188 1.788 4.188 4.396 0 2.608-1.755 4.417-4.248 4.417h-2.932v4.564h-1.974V1.426h4.966zm-2.992 7.067h2.473c1.695 0 2.693-.967 2.693-2.65 0-1.683-.978-2.671-2.693-2.671h-2.473v5.321zm7.559 3.429c0-1.767 1.296-2.777 3.65-2.945l2.572-.147v-.78c0-1.156-.738-1.787-1.994-1.787-1.037 0-1.795.568-1.955 1.43h-1.775c.06-1.788 1.656-3.092 3.79-3.092 2.333 0 3.829 1.304 3.829 3.281v6.9h-1.815v-1.684h-.04c-.519 1.094-1.715 1.788-3.012 1.788-1.934.021-3.25-1.178-3.25-2.965zm6.222-.905v-.778l-2.313.168c-1.297.084-1.975.59-1.975 1.494 0 .862.718 1.409 1.815 1.409 1.396-.021 2.473-.968 2.473-2.293zm3.969 7.383v-1.64c.14.041.438.041.598.041.897 0 1.416-.4 1.735-1.472l.14-.526L33.4 4.707h2.054l2.453 8.224h.04L40.4 4.707h1.994l-3.57 10.538c-.818 2.419-1.715 3.197-3.67 3.197-.14.02-.598-.021-.757-.042z"
                                              // style="fill: rgb(0, 0, 0);"
                                            ></path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__payments-apple-pay-light"
                                            viewBox="0 0 43 19"
                                          >
                                            <path
                                              d="M6.948 1.409C7.934.147 9.305.147 9.305.147s.193 1.18-.771 2.316c-1.05 1.2-2.228.993-2.228.993s-.236-.93.642-2.047zM3.82 3.663c-1.735 0-3.6 1.51-3.6 4.363 0 2.916 2.186 6.555 3.943 6.555.6 0 1.543-.6 2.485-.6.922 0 1.607.559 2.464.559 1.907 0 3.322-3.826 3.322-3.826s-2.015-.744-2.015-2.936c0-1.944 1.629-2.73 1.629-2.73s-.836-1.447-2.936-1.447c-1.22 0-2.164.661-2.656.661-.622.021-1.5-.6-2.636-.6zM19.64 1.426c2.453 0 4.188 1.788 4.188 4.396 0 2.608-1.755 4.417-4.248 4.417h-2.932v4.564h-1.974V1.426h4.966zm-2.992 7.067h2.473c1.695 0 2.693-.967 2.693-2.65 0-1.683-.978-2.671-2.693-2.671h-2.473v5.321zm7.559 3.429c0-1.767 1.296-2.777 3.65-2.945l2.572-.147v-.78c0-1.156-.738-1.787-1.994-1.787-1.037 0-1.795.568-1.955 1.43h-1.775c.06-1.788 1.656-3.092 3.79-3.092 2.333 0 3.829 1.304 3.829 3.281v6.9h-1.815v-1.684h-.04c-.519 1.094-1.715 1.788-3.012 1.788-1.934.021-3.25-1.178-3.25-2.965zm6.222-.905v-.778l-2.313.168c-1.297.084-1.975.59-1.975 1.494 0 .862.718 1.409 1.815 1.409 1.396-.021 2.473-.968 2.473-2.293zm3.969 7.383v-1.64c.14.041.438.041.598.041.897 0 1.416-.4 1.735-1.472l.14-.526L33.4 4.707h2.054l2.453 8.224h.04L40.4 4.707h1.994l-3.57 10.538c-.818 2.419-1.715 3.197-3.67 3.197-.14.02-.598-.021-.757-.042z"
                                              // style="fill: rgb(255, 255, 255);"
                                            ></path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__payments-paypal"
                                            viewBox="0 0 67 19"
                                          >
                                            <path
                                              d="M8.44.57H3.29a.718.718 0 0 0-.707.61L.502 14.517c-.041.263.16.5.425.5h2.458a.718.718 0 0 0 .707-.61l.561-3.597a.717.717 0 0 1 .706-.611h1.63c3.391 0 5.349-1.658 5.86-4.944.23-1.437.01-2.566-.657-3.357C11.461 1.029 10.162.57 8.44.57zm.594 4.87C8.752 7.308 7.34 7.308 5.976 7.308h-.777l.545-3.485a.43.43 0 0 1 .424-.366h.356c.93 0 1.807 0 2.26.535.27.32.353.794.25 1.45zm14.796-.06h-2.466a.43.43 0 0 0-.424.367l-.109.696-.172-.252c-.534-.783-1.724-1.044-2.912-1.044-2.725 0-5.052 2.084-5.505 5.008-.235 1.46.1 2.854.919 3.827.75.894 1.826 1.267 3.105 1.267 2.195 0 3.412-1.426 3.412-1.426l-.11.692a.432.432 0 0 0 .424.502h2.22a.718.718 0 0 0 .707-.61l1.333-8.526a.43.43 0 0 0-.423-.5zm-3.437 4.849c-.238 1.422-1.356 2.378-2.782 2.378-.716 0-1.288-.232-1.655-.672-.365-.436-.503-1.058-.387-1.75.222-1.41 1.359-2.397 2.763-2.397.7 0 1.269.235 1.644.678.375.448.524 1.073.417 1.763zM36.96 5.38h-2.478a.716.716 0 0 0-.592.318l-3.417 5.085-1.448-4.887a.719.719 0 0 0-.687-.515h-2.435a.433.433 0 0 0-.407.573l2.73 8.09-2.567 3.66a.434.434 0 0 0 .35.684h2.475a.712.712 0 0 0 .588-.31l8.24-12.016a.434.434 0 0 0-.352-.681z"
                                              // style="fill: rgb(37, 59, 128);"
                                            ></path>
                                            <path
                                              d="M45.163.57h-5.15a.717.717 0 0 0-.706.61l-2.082 13.337a.43.43 0 0 0 .423.5h2.642a.502.502 0 0 0 .494-.427l.591-3.78a.717.717 0 0 1 .706-.611h1.63c3.392 0 5.348-1.658 5.86-4.944.231-1.437.009-2.566-.657-3.357C48.183 1.029 46.886.57 45.163.57zm.593 4.87c-.28 1.867-1.692 1.867-3.057 1.867h-.777l.546-3.485a.429.429 0 0 1 .423-.366h.356c.93 0 1.807 0 2.26.535.27.32.353.794.25 1.45zm14.795-.06h-2.464a.428.428 0 0 0-.423.367l-.109.696-.173-.252c-.534-.783-1.723-1.044-2.911-1.044-2.724 0-5.05 2.084-5.504 5.008-.235 1.46.099 2.854.918 3.827.753.894 1.826 1.267 3.105 1.267 2.195 0 3.413-1.426 3.413-1.426l-.11.692a.432.432 0 0 0 .424.502h2.22a.717.717 0 0 0 .707-.61l1.333-8.526a.433.433 0 0 0-.426-.5zm-3.436 4.849c-.237 1.422-1.356 2.378-2.782 2.378-.714 0-1.288-.232-1.655-.672-.365-.436-.502-1.058-.387-1.75.223-1.41 1.359-2.397 2.763-2.397.7 0 1.269.235 1.644.678.377.448.526 1.073.417 1.763zM63.458.935l-2.113 13.582a.43.43 0 0 0 .423.5h2.124a.716.716 0 0 0 .707-.61L66.683 1.07a.432.432 0 0 0-.423-.5h-2.379c-.21 0-.39.156-.423.366z"
                                              // style="fill: rgb(23, 155, 215);"
                                            ></path>
                                          </symbol>
                                          <symbol
                                            id="shopify-svg__payments-shop-pay"
                                            viewBox="0 -2 341 81"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M227.297 0C220.448 0 214.896 5.47237 214.896 12.2229V67.8125C214.896 74.563 220.448 80.0354 227.297 80.0354H328.357C335.206 80.0354 340.758 74.563 340.758 67.8125V12.2229C340.758 5.47237 335.206 0 328.357 0H227.297ZM244.999 55.8917V41.8012H253.993C262.21 41.8012 266.579 37.2604 266.579 30.379C266.579 23.4976 262.21 19.3782 253.993 19.3782H239.205V55.8917H244.999ZM244.999 24.8084H252.663C257.982 24.8084 260.595 26.9617 260.595 30.5663C260.595 34.1708 258.077 36.3242 252.9 36.3242H244.999V24.8084ZM276.795 56.6407C281.212 56.6407 284.109 54.7214 285.439 51.4445C285.819 55.0959 288.052 56.9684 292.896 55.7044L292.944 51.819C290.996 52.0063 290.616 51.3041 290.616 49.2912V39.7415C290.616 34.124 286.864 30.8003 279.93 30.8003C273.09 30.8003 269.148 34.1708 269.148 39.8819H274.468C274.468 37.1668 276.415 35.5284 279.835 35.5284C283.444 35.5284 285.107 37.0732 285.059 39.7415V40.9586L278.932 41.614C272.045 42.3629 268.246 44.9376 268.246 49.4316C268.246 53.1298 270.905 56.6407 276.795 56.6407ZM277.982 52.4276C274.99 52.4276 273.803 50.836 273.803 49.2443C273.803 47.091 276.273 46.1079 281.117 45.5462L284.917 45.1249C284.679 49.2443 281.877 52.4276 277.982 52.4276ZM310.537 57.7174C308.115 63.5221 304.22 65.2541 298.141 65.2541H295.528V60.4793H298.331C301.655 60.4793 303.27 59.4494 305.028 56.5002L294.246 31.5493H300.23L307.925 49.7593L314.764 31.5493H320.606L310.537 57.7174Z"
                                              fill="white"
                                            ></path>
                                            <path
                                              d="M29.5136 35.1798C21.5797 33.4835 18.0451 32.8197 18.0451 29.8064C18.0451 26.9722 20.4371 25.5604 25.221 25.5604C29.4282 25.5604 32.5036 27.3726 34.7674 30.9232C34.9382 31.1972 35.2906 31.292 35.5789 31.1445L44.506 26.6983C44.8263 26.5402 44.9438 26.1399 44.7623 25.8343C41.0569 19.5022 34.2121 16.0358 25.1996 16.0358C13.3574 16.0358 6 21.7885 6 30.9338C6 40.648 14.9591 43.1029 22.9038 44.7992C30.8484 46.4955 34.3936 47.1592 34.3936 50.1725C34.3936 53.1858 31.8095 54.6082 26.6518 54.6082C21.8893 54.6082 18.3548 52.4589 16.2191 48.2866C16.059 47.981 15.6852 47.8546 15.3756 48.0127L6.46985 52.364C6.16017 52.5221 6.03203 52.8908 6.19221 53.2069C9.72673 60.2134 16.9773 64.1538 26.6625 64.1538C38.996 64.1538 46.4494 58.496 46.4494 49.0663C46.4494 39.6365 37.4476 36.8972 29.5136 35.2009V35.1798Z"
                                              fill="white"
                                            ></path>
                                            <path
                                              d="M77.3525 16.0358C72.291 16.0358 67.8168 17.8059 64.6026 20.9561C64.3997 21.1458 64.0687 21.0088 64.0687 20.7349V0.621625C64.0687 0.273937 63.791 0 63.4387 0H52.2692C51.9168 0 51.6391 0.273937 51.6391 0.621625V63.0476C51.6391 63.3952 51.9168 63.6692 52.2692 63.6692H63.4387C63.791 63.6692 64.0687 63.3952 64.0687 63.0476V35.6644C64.0687 30.3754 68.1798 26.319 73.7219 26.319C79.2639 26.319 83.279 30.2911 83.279 35.6644V63.0476C83.279 63.3952 83.5566 63.6692 83.909 63.6692H95.0785C95.4309 63.6692 95.7085 63.3952 95.7085 63.0476V35.6644C95.7085 24.1591 88.0628 16.0464 77.3525 16.0464V16.0358Z"
                                              fill="white"
                                            ></path>
                                            <path
                                              d="M118.389 14.2552C112.324 14.2552 106.622 16.0779 102.542 18.7224C102.265 18.9016 102.169 19.2703 102.34 19.5548L107.262 27.8466C107.444 28.1416 107.828 28.247 108.127 28.0679C111.224 26.2241 114.769 25.2653 118.389 25.2864C128.138 25.2864 135.303 32.0716 135.303 41.0377C135.303 48.6763 129.569 54.3342 122.297 54.3342C116.371 54.3342 112.26 50.9311 112.26 46.1266C112.26 43.3767 113.445 41.122 116.531 39.5311C116.851 39.3625 116.969 38.9727 116.777 38.6671L112.132 30.9126C111.982 30.6598 111.662 30.5439 111.373 30.6492C105.148 32.925 100.78 38.4037 100.78 45.7579C100.78 56.8839 109.761 65.1863 122.287 65.1863C136.916 65.1863 147.434 55.1876 147.434 40.8481C147.434 25.476 135.197 14.2446 118.368 14.2446L118.389 14.2552Z"
                                              fill="white"
                                            ></path>
                                            <path
                                              d="M180.098 15.9515C174.449 15.9515 169.409 18.006 165.725 21.6304C165.522 21.8306 165.191 21.6831 165.191 21.4092V17.0473C165.191 16.6996 164.914 16.4256 164.561 16.4256H153.68C153.328 16.4256 153.05 16.6996 153.05 17.0473V79.3784C153.05 79.7261 153.328 80 153.68 80H164.849C165.202 80 165.48 79.7261 165.48 79.3784V58.9385C165.48 58.6645 165.811 58.5276 166.013 58.7067C169.687 62.0782 174.545 64.0485 180.109 64.0485C193.211 64.0485 203.43 53.5862 203.43 39.9947C203.43 26.4032 193.2 15.941 180.109 15.941L180.098 15.9515ZM177.995 53.4914C170.541 53.4914 164.892 47.6439 164.892 39.9104C164.892 32.177 170.53 26.3295 177.995 26.3295C185.459 26.3295 191.086 32.0822 191.086 39.9104C191.086 47.7387 185.533 53.4914 177.984 53.4914H177.995Z"
                                              fill="white"
                                            ></path>
                                          </symbol>
                                        </defs>
                                      </svg>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    class="shopify-payment-button__button shopify-payment-button__button--unbranded BUz42FHpSPncCPJ4Pr_f jjzYeefyWpPZLH9pIgyw RWJ0IfBjxIhflh4AIrUw"
                                    data-testid="Checkout-button"
                                  >
                                    Buy it now
                                  </button>
                                  <button
                                    aria-disabled="true"
                                    aria-hidden="true"
                                    class="shopify-payment-button__more-options BUz42FHpSPncCPJ4Pr_f shopify-payment-button__button--hidden"
                                    type="button"
                                    data-testid="sheet-open-button"
                                  >
                                    More payment options
                                  </button>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="product-id"
                          value="1851102691363"
                        />
                        <input
                          type="hidden"
                          name="section-id"
                          value="template--17490500976886__main-product"
                        />
                      </form>
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
                              href="//www.facebook.com/sharer.php?u=https://thebarsys.com/products/barsys-2-0"
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
                              href="//twitter.com/intent/tweet?text=Barsys%202.0+&amp;url=https://thebarsys.com/products/barsys-2-0"
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
                              href="//pinterest.com/pin/create/button/?url=https://thebarsys.com/products/barsys-2-0&amp;media=//thebarsys.com/cdn/shop/files/Basys-2-0-product.jpg?crop=center&amp;height=1024&amp;v=1700070107&amp;width=1024&amp;description=Barsys%202.0+"
                              title="Pin on Pinterest"
                              // style="transform: translateX(var(--motion-translateX)) translateY(var(--motion-translateY)); --motion-translateX: 0px; --motion-translateY: 0px;"
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
                              href="//web.whatsapp.com/send?text=https://thebarsys.com/products/barsys-2-0"
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
                              href="mailto:?&amp;subject=Barsys%202.0+&amp;body=https://thebarsys.com/products/barsys-2-0"
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
                          aria-controls="ShareDrawer-template--17490500976886__main-product"
                          aria-expanded="false"
                        >
                          Share
                        </a>
                      </div>
                      <share-drawer
                        id="ShareDrawer-template--17490500976886__main-product"
                        class="sm:hidden share-drawer drawer drawer--end z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Share"
                        data-section-id="template--17490500976886__main-product"
                        hidden=""
                      >
                        <overlay-element
                          class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
                          aria-controls="ShareDrawer-template--17490500976886__main-product"
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
                              aria-controls="ShareDrawer-template--17490500976886__main-product"
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
                                    href="//www.facebook.com/sharer.php?u=https://thebarsys.comhttps://thebarsys.com/products/barsys-2-0"
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
                                    <span class="sr-only">
                                      Share on Facebook
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noopener"
                                    class="social-sharing__link flex items-center gap-4 text-sm"
                                    href="//twitter.com/intent/tweet?text=Barsys%202.0+&amp;url=https://thebarsys.comhttps://thebarsys.com/products/barsys-2-0"
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
                                    <span class="sr-only">
                                      Tweet on Twitter
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noopener"
                                    class="social-sharing__link flex items-center gap-4 text-sm"
                                    href="//pinterest.com/pin/create/button/?url=https://thebarsys.comhttps://thebarsys.com/products/barsys-2-0&amp;media=//thebarsys.com/cdn/shop/files/Basys-2-0-product.jpg?crop=center&amp;height=1024&amp;v=1700070107&amp;width=1024&amp;description=Barsys%202.0+"
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
                                    <span class="sr-only">
                                      Pin on Pinterest
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noopener"
                                    class="social-sharing__link flex items-center gap-4 text-sm"
                                    href="//web.whatsapp.com/send?text=https://thebarsys.comhttps://thebarsys.com/products/barsys-2-0"
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
                                    <span class="sr-only">
                                      Share on WhatsApp
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noopener"
                                    class="social-sharing__link flex items-center gap-4 text-sm"
                                    href="mailto:?&amp;subject=Barsys%202.0+&amp;body=https://thebarsys.comhttps://thebarsys.com/products/barsys-2-0"
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
                          href="/faqs"
                        >
                          Need help?
                        </Link>
                      </div>
                    </div>
                    <product-recommendations
                      class="complementary-products grid gap-5"
                      data-url="/recommendations/products?section_id=template--17490500976886__main-product&amp;product_id=1851102691363&amp;limit=4&amp;intent=complementary"
                    >
                      <div class="flex justify-between gap-4 items-center">
                        <p class="recommend__title font-medium text-lg grow">
                          Pairs well with
                        </p>
                      </div>
                      <product-complementary class="horizontal-products block">
                        <div class="horizontal-product flex items-center gap-4 md:gap-6 w-full">
                          <a
                            class="horizontal-product__media media media--square relative overflow-hidden flex-auto"
                            href="product-details.html"
                            tabindex="-1"
                          >
                            <Image
                              src={require("../../../assets/images/barsys-360-black-1.jpg")}
                              alt="#color_black"
                              loading="lazy"
                              is="lazy-image"
                              class="loaded"
                            />
                          </a>
                          <div class="horizontal-product__details flex flex-col justify-start gap-1d5">
                            <div class="grid gap-1">
                              <div class="block">
                                <a
                                  href="product-details.html"
                                  class="horizontal-product__title reversed-link font-medium text-base leading-tight"
                                >
                                  Barsys 360
                                </a>
                              </div>
                            </div>

                            <div class="grid gap-1">
                              <div class="price flex items-end gap-2 text-sm">
                                <span class="price__regular whitespace-nowrap">
                                  Rs. 55,700.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="horizontal-product__quantity shrink-0 text-sm sm:block">
                            <div class="grid gap-3">
                              <a
                                href="product-details.html"
                                class="button button--primary button--small icon-with-text"
                                is="hover-link"
                              >
                                <span class="btn-fill" data-fill=""></span>
                                <span class="btn-text">
                                  <svg
                                    class="icon icon-plus icon-2xs"
                                    viewBox="0 0 12 12"
                                    stroke="currentColor"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M2.5 6H6M9.5 6H6M6 6V2.5M6 6V9.5"
                                    ></path>
                                  </svg>
                                  View
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </product-complementary>
                    </product-recommendations>
                  </animate-element>
                </div>
                <sticky-buy-button
                  class="sticky-buy-button fixed z-20 bottom-0 right-0 opacity-0 invisible"
                  form="ProductForm-template--17490500976886__main-product"
                  // style="opacity: 0; visibility: hidden; transform: translateY(15px);"
                >
                  <form
                    method="post"
                    action="/cart/add"
                    id="StickyProductForm-template--17490500976886__main-product"
                    accept-charset="UTF-8"
                    class="product-form grid gap-4"
                    enctype="multipart/form-data"
                    novalidate="novalidate"
                    data-type="add-to-cart-form"
                    is="product-form"
                  >
                    <input type="hidden" name="form_type" value="product" />
                    <input type="hidden" name="utf8" value="✓" />
                    <input type="hidden" name="id" value="15458076327971" />
                    <div class="sticky-buy-button__variant grid items-center gap-4">
                      <sticky-variant-media
                        class="hidden md:block media media--adapt relative overflow-hidden"
                        widths="80,160"
                        form="ProductForm-template--17490500976886__main-product"
                      >
                        <Image
                          src={require("../../../assets/images/Basys-2-0-product.jpg")}
                          alt="Barsys 2.0+"
                          loading="lazy"
                          sizes="80px"
                          is="lazy-image"
                          class="loaded"
                        />
                      </sticky-variant-media>
                      <div class="grid gap-2">
                        <div class="grid gap-1">
                          <p class="text-base font-medium leading-tight">
                            Barsys 2.0+
                          </p>
                        </div>
                        <div id="StickyPrice-template--17490500976886__main-product">
                          <div class="price flex items-center gap-2 lg:gap-1d5">
                            <span class="price__regular whitespace-nowrap">
                              Rs. 180,000.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        name="add"
                        class="button button--primary"
                        is="hover-button"
                      >
                        <span class="btn-fill" data-fill=""></span>
                        <span class="btn-text">Add to cart</span>
                        <span class="btn-loader">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </button>
                    </div>
                    <div
                      class="product-form__error-message alert alert--error text-sm font-medium leading-tight"
                      role="alert"
                      hidden=""
                    ></div>
                    <input
                      type="hidden"
                      name="product-id"
                      value="1851102691363"
                    />
                    <input
                      type="hidden"
                      name="section-id"
                      value="template--17490500976886__main-product"
                    />
                  </form>
                </sticky-buy-button>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__help-drawer"
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
              data-section-id="template--17490500976886__help-drawer"
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
                            Use this text to answer questions in as much detail
                            as possible for your customers.
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
                            Use this text to answer questions in as much detail
                            as possible for your customers.
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
                            Use this text to answer questions in as much detail
                            as possible for your customers.
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
                            Use this text to answer questions in as much detail
                            as possible for your customers.
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
            id="shopify-section-template--17490500976886__video-hero"
            class="shopify-section"
          >
            {/* <style>
                    #shopify-section-template--17490500976886__video-hero {
                        --section-padding-top: 0px;
                        --section-padding-bottom: 0px;
                        --color-foreground: 255 255 255;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-overlay: 0 0 0;
                        --overlay-opacity: 0.0;
                        --overlay-opacity: 1;
                    }
                </style> */}

            {/* <noscript>
                    <style>
                        #shopify-section-template--17490500976886__video-hero .banner__overlay {
                            background-color: rgb(var(--color-overlay)/ 0.0);
                        }
                    </style>
                </noscript> */}

            <div class="section section--padding">
              <div class="relative">
                <div class="video-hero banner sticky left-0 top-0 w-full h-screen">
                  <video-media
                    class="media deferred-media mobile:deferred-media block banner__media w-full h-full relative overflow-hidden pointer-events-none loading"
                    autoplay=""
                  >
                    <Image
                      src={require("../../../assets/images/barsys-2-0-product-video-banner.jpg")}
                      alt="Load video: "
                      loading="lazy"
                      fetchpriority="auto"
                      is="lazy-image"
                    />
                    <template>
                      <video
                        playsinline="true"
                        muted="muted"
                        autoplay="autoplay"
                        loop="loop"
                        preload="none"
                        poster={require("../../../assets/images/barsys-2-0-product-video-banner.jpg")}
                      >
                        <source
                          src="../../../assets/images/barsys-2-0-product-video-mobile.mp4"
                          type="video/mp4"
                        />
                        <Image
                          src={require("../../../assets/images/barsys-2-0-product-video-banner.jpg")}
                        />
                      </video>
                    </template>
                    <button
                      type="button"
                      id="DeferredPoster-32591665791222"
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
                  <video-media
                    class="media deferred-media block banner__media w-full h-full relative overflow-hidden pointer-events-none"
                    autoplay=""
                    loaded=""
                  >
                    <Image
                      src={require("../../../assets/images/banner-barsys-2-0-video-desktop-poster.jpg")}
                      alt="Load video: "
                      loading="lazy"
                      fetchpriority="auto"
                      sizes="100vw"
                      is="lazy-image"
                    />
                    <template>
                      <video
                        playsinline="true"
                        muted="muted"
                        autoplay="autoplay"
                        loop="loop"
                        preload="none"
                        poster={require("../../../assets/images/banner-barsys-2-0-video-desktop-poster.jpg")}
                      >
                        <source
                          src="../../../assets/images/banner-barsys-2-0-video-desktop.mp4"
                          type="video/mp4"
                        />
                        <Image
                          src={require("../../../assets/images/banner-barsys-2-0-video-desktop-poster.jpg")}
                          alt="Load video: "
                          loading="eager"
                          fetchpriority="high"
                          is="lazy-image"
                        />
                      </video>
                    </template>
                    <button
                      type="button"
                      id="DeferredPoster-32591667560694"
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
                    <video
                      playsinline="true"
                      muted="muted"
                      autoplay="autoplay"
                      loop="loop"
                      preload="none"
                      poster={require("../../../assets/images/banner-barsys-2-0-video-desktop-poster.jpg")}
                    >
                      <source
                        src="../../../assets/images/banner-barsys-2-0-video-desktop.mp4"
                        type="video/mp4"
                      />
                      <Image
                        src={require("../../../assets/images/banner-barsys-2-0-video-desktop-poster.jpg")}
                        alt="Load video: "
                        loading="eager"
                        fetchpriority="high"
                        is="lazy-image"
                      />
                    </video>
                  </video-media>
                  <parallax-overlay
                    class="banner__overlay block absolute left-0 top-0 w-full h-full pointer-events-none"
                    data-target="opacity"
                    data-start="1"
                    data-stop="0.0"
                  ></parallax-overlay>
                </div>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__collage"
            class="shopify-section"
          >
            {/* <style>
                    #shopify-section-template--17490500976886__collage {
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

                    #shopify-block-image-2 {
                        --color-foreground: 255 255 255;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 253 224 71;
                        --color-overlay: 0 0 0;
                        --overlay-opacity: 0.3;
                    }

                    #shopify-block-image-3 {
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
                      <h2 class="heading font-bold title-md">
                        Master Cocktail Artistry
                      </h2>
                      <div class="page-width--narrow rte leading-normal subtext-md">
                        <p>
                          Step up your cocktail game with Barsys 2.0+! Craft
                          over 2,000 cocktails effortlessly. Just load your
                          favorite spirits, mixers, and let Barsys 2.0+ do the
                          magic. It's mixology made simple!
                        </p>
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
                            src={require("../../../assets/images/Product-cs-1.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
                        </picture>
                        <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                        <div class="collage__content absolute z-1 top-0 left-0 w-full h-full">
                          <div class="banner__box w-full h-full flex md:items-end md:justify-center items-end justify-center">
                            <div class="md:text-right text-center">
                              <p class="text-base leading-tight">
                                <em
                                  class="highlighted-text inline-block not-italic relative animate"
                                  is="highlighted-text"
                                  data-style="text"
                                >
                                  Effortless Mixology
                                </em>
                              </p>
                              <span class="block"></span>
                              <p class="heading text-3xl font-bold leading-none tracking-tight">
                                <a
                                  class="reversed-link"
                                  role="link"
                                  aria-disabled="true"
                                >
                                  Precision pours and&nbsp; sleek design.
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="shopify-block-image-2"
                        class="collage__item with-image banner relative overflow-hidden"
                      >
                        <picture class="media media--portrait mobile:media--portrait block relative overflow-hidden">
                          <Image
                            src={require("../../../assets/images/Product-cs-3.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
                        </picture>
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
                                  Mixology Magic
                                </em>
                              </p>
                              <span class="block"></span>
                              <p class="heading text-3xl font-bold leading-none tracking-tight">
                                <a
                                  class="reversed-link"
                                  role="link"
                                  aria-disabled="true"
                                >
                                  Effortlessly with our Cocktail Maker.
                                </a>
                              </p>
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
                        id="shopify-block-image-3"
                        class="collage__item with-image banner relative overflow-hidden"
                      >
                        <picture class="media media--portrait mobile:media--portrait block relative overflow-hidden">
                          <Image
                            src={require("../../../assets/images/Product-cs-2.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
                        </picture>
                        <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                        <div class="collage__content absolute z-1 top-0 left-0 w-full h-full">
                          <div class="banner__box w-full h-full flex md:items-start md:justify-end items-start justify-end">
                            <div class="md:text-right text-right">
                              <p class="text-base leading-tight">
                                <em
                                  class="highlighted-text inline-block not-italic relative animate"
                                  is="highlighted-text"
                                  data-style="text"
                                >
                                  Mixology Magic
                                </em>
                              </p>
                              <span class="block"></span>
                              <p class="heading text-3xl font-bold leading-none tracking-tight">
                                <a
                                  class="reversed-link"
                                  role="link"
                                  aria-disabled="true"
                                >
                                  Effortlessly with our robotic bartender.
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
                            src={require("../../../assets/images/Product-cs-4.jpg")}
                            alt=""
                            loading="lazy"
                            is="lazy-image"
                            class="loaded"
                          />
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
                                  Perfect Pours, Every Time.
                                </em>
                              </p>
                              <span class="block"></span>
                              <p class="heading text-3xl font-bold leading-none tracking-tight">
                                <a
                                  class="reversed-link"
                                  role="link"
                                  aria-disabled="true"
                                >
                                  Create your own signature cocktails
                                  effortlessly.
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
            id="shopify-section-template--17490500976886__image-with-text-1"
            class="shopify-section"
          >
            {/* <style>
                    #shopify-section-template--17490500976886__image-with-text-1 {
                        --section-padding-top: 72px;
                        --section-padding-bottom: 72px;
                        --color-background-2: 250 250 250;
                        --color-foreground: 23 23 23;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                    }
                </style> */}

            <div class="section section--padding">
              <div class="page-width relative">
                <div class="image-with-text with-background flex lg:gap-8 flex-col lg:flex-row-reverse overflow-hidden">
                  <div class="image-with-text__item grow shrink-0 relative">
                    <div class="image-with-text__media h-full">
                      <media-element class="image-with-text__image block media--600px mobile:media--400px relative overflow-hidden">
                        <div class="media media--height block w-full h-full relative overflow-hidden">
                          <picture class="media media--height block w-full h-full relative overflow-hidden">
                            <Image
                              src={require("../../../assets/images/Automated_Robotic_Bartender.jpg")}
                              alt=""
                              loading="lazy"
                              is="lazy-image"
                              class="loaded"
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
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Automated
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="280"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Robotic
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            //  style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="310"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Bartender
                            </animate-element>
                          </div>
                        </split-words>
                      </h2>
                      <div class="rte leading-normal body subtext-md">
                        <p>
                          The Barsys 2.0+ is your at home bartender. It can mix
                          more than 2,000 different cocktail recipes with just
                          the press of a button. The app works along with the
                          Barsys Machine to produce hand crafted cocktails,
                          personalized to your liking. Simply add your favorite
                          alcohol and mixers and discover the endless recipe
                          combinations available at your fingertips.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__image-with-text-2"
            class="shopify-section"
          >
            {/* <style>
                    #shopify-section-template--17490500976886__image-with-text-2 {
                        --section-padding-top: 72px;
                        --section-padding-bottom: 72px;
                        --color-background-2: 250 250 250;
                        --color-foreground: 23 23 23;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                    }
                </style> */}

            <div class="section section--padding">
              <div class="page-width relative">
                <div class="image-with-text with-background flex lg:gap-8 flex-col lg:flex-row overflow-hidden">
                  <div class="image-with-text__item grow shrink-0 relative">
                    <div class="image-with-text__media h-full">
                      <media-element class="image-with-text__image block media--600px mobile:media--400px relative overflow-hidden">
                        <div class="media media--height block w-full h-full relative overflow-hidden">
                          <picture class="media media--height block w-full h-full relative overflow-hidden">
                            <Image
                              src={require("../../../assets/images/Craft_Cocktails_in_20_seconds.jpg")}
                              alt=""
                              loading="lazy"
                              is="lazy-image"
                              class="loaded"
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
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Craft
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            //  style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="280"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Cocktails
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="310"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              in
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="340"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              20
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="370"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              seconds
                            </animate-element>
                          </div>
                        </split-words>
                      </h2>
                      <div class="rte leading-normal body subtext-md">
                        <p>
                          Craft any of your favorite cocktails from our Barsys
                          library or create your own. We have a cocktail library
                          with over 10,000 possible combinations for cocktail
                          recipes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__image_with_text_gjgW4E"
            class="shopify-section"
          >
            {/* <style>
                    #shopify-section-template--17490500976886__image_with_text_gjgW4E {
                        --section-padding-top: 72px;
                        --section-padding-bottom: 72px;
                        --color-background-2: 250 250 250;
                    }
                </style> */}

            <div class="section section--padding">
              <div class="page-width relative">
                <div class="image-with-text with-background flex lg:gap-8 flex-col lg:flex-row-reverse overflow-hidden">
                  <div class="image-with-text__item grow shrink-0 relative">
                    <div class="image-with-text__media h-full">
                      <media-element
                        class="image-with-text__image block media--600px mobile:media--400px relative overflow-hidden"
                        data-parallax="0.3"
                        data-parallax-dir="vertical"
                      >
                        <div class="media media--height block w-full h-full relative overflow-hidden">
                          <picture class="media media--height block w-full h-full relative overflow-hidden">
                            <Image
                              src={require("../../../assets/images/App_available_on_Android_and_iOS.jpg")}
                              alt=""
                              loading="lazy"
                              is="lazy-image"
                              class="loaded"
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
                          <div
                            class="single-word"
                            style={{display:"inline-block"}}
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              App
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            //  style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="280"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              available
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="310"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              on
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="340"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Android
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="370"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              and
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="400"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              iOS
                            </animate-element>
                          </div>
                        </split-words>
                      </h2>
                      <div class="rte leading-normal body subtext-md">
                        <p>
                          You can connect your phone or smart tablet to the
                          Barsys 2.0+ through the Barsys App. Just download the
                          app, create an account and begin crafting your
                          favorite cocktails.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__image_with_text_TVYwhK"
            class="shopify-section"
          >
            {/* <style>
                    #shopify-section-template--17490500976886__image_with_text_TVYwhK {
                        --section-padding-top: 72px;
                        --section-padding-bottom: 72px;
                        --color-background-2: 250 250 250;
                    }
                </style> */}

            <div class="section section--padding">
              <div class="page-width relative">
                <div class="image-with-text with-background flex lg:gap-8 flex-col lg:flex-row overflow-hidden">
                  <div class="image-with-text__item grow shrink-0 relative">
                    <div class="image-with-text__media h-full">
                      <media-element
                        class="image-with-text__image block media--600px mobile:media--400px relative overflow-hidden"
                        data-parallax="0.3"
                        data-parallax-dir="vertical"
                      >
                        <div class="media media--height block w-full h-full relative overflow-hidden">
                          <picture class="media media--height block w-full h-full relative overflow-hidden">
                            <Image
                              src={require("../../../assets/images/Sleek_Metal_Case_Design.jpg")}
                              alt=""
                              loading="lazy"
                              sizes="(max-width: 767px) 100vw, 50vw"
                              is="lazy-image"
                              class="loaded"
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
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Sleek
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="280"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Metal
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="310"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Case
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            // style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="340"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Design
                            </animate-element>
                          </div>
                        </split-words>
                      </h2>
                      <div class="rte leading-normal body subtext-md">
                        <p>
                          The machine is made with food grade polycarbonate,
                          giving it a sleek and professional design, perfect to
                          elevate any kitchen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__image_with_text_VaGHn7"
            class="shopify-section"
          >
            {/* <style>
                    #shopify-section-template--17490500976886__image_with_text_VaGHn7 {
                        --section-padding-top: 72px;
                        --section-padding-bottom: 72px;
                        --color-background-2: 250 250 250;
                    }
                </style> */}

            <div class="section section--padding">
              <div class="page-width relative">
                <div class="image-with-text with-background flex lg:gap-8 flex-col lg:flex-row-reverse overflow-hidden">
                  <div class="image-with-text__item grow shrink-0 relative">
                    <div class="image-with-text__media h-full">
                      <media-element
                        class="image-with-text__image block media--600px mobile:media--400px relative overflow-hidden"
                        data-parallax="0.3"
                        data-parallax-dir="vertical"
                      >
                        <div class="media media--height block w-full h-full relative overflow-hidden">
                          <picture class="media media--height block w-full h-full relative overflow-hidden">
                            <Image
                              src={require("../../../assets/images/Automated_Clean.jpg")}
                              alt=""
                              loading="lazy"
                              is="lazy-image"
                              class="loaded"
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
                          <div
                            class="single-word"
                            //  style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Automated
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            //  style="display: inline-block;"
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="280"
                              // style="transform: translateY(0px); opacity: 1;"
                            >
                              Cleaning
                            </animate-element>
                          </div>
                        </split-words>
                      </h2>
                      <div class="rte leading-normal body subtext-md">
                        <p>
                          Our machine also comes equipped with an automated
                          self-cleaning feature. When you are finished, just run
                          the cleaning feature and you can get back to enjoying
                          your handcrafted cocktails in no time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__scrolling-text"
            class="shopify-section scrolling-text-section"
          >
            {/* <style>
                    #shopify-section-template--17490500976886__scrolling-text {
                        --section-padding-top: 28px;
                        --section-padding-bottom: 28px;
                        --section-grid-gap: 70px;
                    }
                </style> */}

            <div class="section section--padding overflow-hidden">
              <div class="relative z-1">
                <marquee-element
                  class="scrolling-text scrolling-text--left flex items-center"
                  data-speed="1.6"
                  data-direction="left"
                  data-parallax="1.5"
                  //  style="--duration: 38.672000000000004s;"
                >
                  <div class="marquee flex items-center flex-auto whitespace-nowrap animate">
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                  <div
                    class="marquee flex items-center flex-auto whitespace-nowrap animate"
                    aria-hidden="true"
                  >
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Sleek</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Precision</strong>
                    </div>
                    <div
                      class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                      // style="--font-size: 160px;"
                    >
                      <strong>Efficient</strong>
                    </div>
                  </div>
                </marquee-element>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__product-details"
            class="shopify-section specifications-section"
          >
            {/* <style>
                    #shopify-section-template--17490500976886__product-details {
                        --section-padding-top: 28px;
                        --section-padding-bottom: 28px;
                        --color-foreground: 0 0 0;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --section-grid-gap: px;
                    }
                </style> */}
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
                          // style="display: inline-block;"
                        >
                          <animate-element
                            class="block animate"
                            data-animate="fade-up-large"
                            data-animate-delay="0"
                            // style="transform: translateY(0px); opacity: 1;"
                          >
                            Product
                          </animate-element>
                        </div>
                        <div
                          class="single-word"
                          // style="display: inline-block;"
                        >
                          <animate-element
                            class="block animate"
                            data-animate="fade-up-large"
                            data-animate-delay="30"
                            // style="transform: translateY(0px); opacity: 1;"
                          >
                            Description
                          </animate-element>
                        </div>
                      </split-words>
                    </h2>
                  </div>
                </div>
                <div class="specifications flex flex-col lg:flex-row">
                  <accordions-details class="accordions grow">
                    <div class="accordion">
                      <details
                        class="details"
                        is="accordion-details"
                        open=""
                        aria-expanded="true"
                      >
                        <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                          <span class="text-base-xl font-medium leading-none">
                            How it Works
                          </span>
                          <svg
                            class="icon icon-plus-alt icon-xs flex-auto"
                            viewBox="0 0 14 14"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7 1V13M13 7H1"
                            ></path>
                          </svg>
                        </summary>
                        <div class="details__content text-base rte">
                          <div class="specification grid grid-cols-12 gap-6 md:gap-10">
                            <div class="col-span-full">
                              <p>
                                Simply load your machine with your five favorite
                                spirits &amp; three mixers. Select your
                                cocktails from the Barsys App, and watch as your
                                beverage is poured with speed and precision. The
                                Barsys 2.0+ moves your glass left to right,
                                dispensing the exact amounts of each ingredient
                                and can make a limitless number of cocktails.
                                You can customize any of the drinks to meet your
                                own personal preferences or create your own
                                signature drinks from scratch. The lighting
                                feature lets you know the progress of your
                                recipe completion along the way. Up lighting
                                prominently displays each spirit you selected,
                                so guests will always know that you are serving
                                them the best.
                              </p>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div class="accordion">
                      <details
                        class="details"
                        is="accordion-details"
                        aria-expanded="false"
                      >
                        <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                          <span class="text-base-xl font-medium leading-none">
                            Dimensions
                          </span>
                          <svg
                            class="icon icon-plus-alt icon-xs flex-auto"
                            viewBox="0 0 14 14"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7 1V13M13 7H1"
                            ></path>
                          </svg>
                        </summary>
                        <div class="details__content text-base rte">
                          <div class="specification grid grid-cols-12 gap-6 md:gap-10">
                            <div class="col-span-full">
                              <p>
                                Dimensions <br></br>Length - 50 cm<br></br>Width
                                - 34 cm<br></br>Height&nbsp;-&nbsp;40&nbsp;cm
                              </p>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div class="accordion">
                      <details
                        class="details"
                        is="accordion-details"
                        aria-expanded="false"
                      >
                        <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                          <span class="text-base-xl font-medium leading-none">
                            Connectivity
                          </span>
                          <svg
                            class="icon icon-plus-alt icon-xs flex-auto"
                            viewBox="0 0 14 14"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7 1V13M13 7H1"
                            ></path>
                          </svg>
                        </summary>
                        <div class="details__content text-base rte">
                          <div class="specification grid grid-cols-12 gap-6 md:gap-10">
                            <div class="col-span-full">
                              <p>Bluetooth 5.1</p>
                              <p>iOS, Android</p>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div class="accordion">
                      <details
                        class="details"
                        is="accordion-details"
                        aria-expanded="false"
                      >
                        <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                          <span class="text-base-xl font-medium leading-none">
                            The App
                          </span>
                          <svg
                            class="icon icon-plus-alt icon-xs flex-auto"
                            viewBox="0 0 14 14"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7 1V13M13 7H1"
                            ></path>
                          </svg>
                        </summary>
                        <div class="details__content text-base rte">
                          <div class="specification grid grid-cols-12 gap-6 md:gap-10">
                            <div class="col-span-full">
                              <p>
                                <a
                                  href="https://thebarsys.com/pages/app"
                                  title="https://thebarsys.com/pages/app"
                                >
                                  Learn more
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div class="accordion">
                      <details
                        class="details"
                        is="accordion-details"
                        aria-expanded="false"
                      >
                        <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                          <span class="text-base-xl font-medium leading-none">
                            What's included in the Box
                          </span>
                          <svg
                            class="icon icon-plus-alt icon-xs flex-auto"
                            viewBox="0 0 14 14"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7 1V13M13 7H1"
                            ></path>
                          </svg>
                        </summary>
                        <div class="details__content text-base rte">
                          <div class="specification grid grid-cols-12 gap-6 md:gap-10">
                            <div class="col-span-full">
                              <p>3 Metal canisters</p>
                              <ul>
                                <li>1 Patented wireless mixer</li>
                                <li>
                                  1 Removable spill tray for easy cleaning
                                </li>
                                <li>5 Bottle mounts</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                  </accordions-details>
                  <div class="grow-0">
                    <sticky-element
                      class="specs__sidebar flex flex-col gap-7d5 md:gap-10 sticky top-0 text-center"
                      // style="inset-block-start: 120.2px; --inset: 120.20000004768372px;"
                    >
                      <svg
                        class="icon-box"
                        viewBox="0 0 234 74"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 20C0 8.95431 8.95431 0 20 0H214C225.046 0 234 8.9543 234 20V74H0V20Z"
                          fill="currentColor"
                        ></path>
                        <rect
                          x="58"
                          y="32"
                          width="118"
                          height="19"
                          rx="9.5"
                          class="fill"
                        ></rect>
                        <circle
                          cx="117.5"
                          cy="32.5"
                          r="11.5"
                          class="fill"
                        ></circle>
                      </svg>
                      <p class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                        What’s Included in the Box
                      </p>
                      <ul class="flex flex-wrap items-start justify-center gap-6 md:gap-10">
                        <li class="flex-auto grid gap-2d5">
                          <div class="media relative flex items-center justify-center rounded-full">
                            <Image
                              src={require("../../../assets/images/Metal_canisters.png")}
                              alt=""
                              loading="lazy"
                              is="lazy-image"
                              class="loaded"
                            />
                          </div>
                          <p class="text-sm">3 Metal canisters</p>
                        </li>
                        <li class="flex-auto grid gap-2d5">
                          <div class="media relative flex items-center justify-center rounded-full">
                            <Image
                              src={require("../../../assets/images/wq.png")}
                              alt=""
                              loading="lazy"
                              is="lazy-image"
                              class="loaded"
                            />
                          </div>
                          <p class="text-sm">1 Patented wireless mixer</p>
                        </li>
                        <li class="flex-auto grid gap-2d5">
                          <div class="media relative flex items-center justify-center rounded-full">
                            <Image
                              src={require("../../../assets/images/Bottle_mounts.png")}
                              alt=""
                              loading="lazy"
                              is="lazy-image"
                              class="loaded"
                            />
                          </div>
                          <p class="text-sm">5 Bottle mounts</p>
                        </li>
                        <li class="flex-auto grid gap-2d5">
                          <div class="media relative flex items-center justify-center rounded-full">
                            <Image
                              src={require("../../../assets/images/User_Manual.png")}
                              alt=""
                              loading="lazy"
                              is="lazy-image"
                              class="loaded"
                            />
                          </div>
                          <p class="text-sm">User Manual</p>
                        </li>
                      </ul>
                    </sticky-element>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__faq"
            class="shopify-section"
          >
            <div class="section section--padding section--plain">
              <div class="page-width relative">
                <div class="faqs with-background flex flex-col lg:flex-row relative z-1">
                  <div class="grow grid gap-8 md:gap-12">
                    <div class="grid gap-4 text-left md:items-end md:flex-row">
                      <div class="title-wrapper leading-none grid gap-4 text-left md:items-end md:flex-row">
                        <h2 class="heading font-bold title-lg tracking-heading">
                          <split-words
                            class="split-words flex flex-wrap"
                            data-animate="fade-up-large"
                          >
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                              // style="display: inline-block;"
                            >
                              <animate-element
                                class="block animate"
                                data-animate="fade-up-large"
                                data-animate-delay="0"
                                style={{transform: "translateY(0px)",opacity:"1"}}
                                // style="transform: translateY(0px); opacity: 1;"
                              >
                                FAQs
                              </animate-element>
                            </div>
                          </split-words>
                        </h2>
                        <div class="page-width--narrow rte leading-normal text-sm xl:text-base">
                          <p>
                            Please read our{" "}
                            <Link href="faqs" title="FAQs">
                              FAQs
                            </Link>{" "}
                            page to find out more.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="faq">
                      <div class="accordion">
                        <details
                          class="details"
                          is="accordion-details"
                          aria-expanded="false"
                        >
                          <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                              How do I put the liquor bottles on?
                            </span>
                            <svg
                              class="icon icon-plus-alt icon-xs flex-auto"
                              viewBox="0 0 14 14"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M7 1V13M13 7H1"
                              ></path>
                            </svg>
                          </summary>
                          <div class="details__content text-base rte">
                            <p>
                              Simply insert one of the mounts into the neck of
                              the bottle after removing the bottle cap. Once the
                              mount is inserted into the bottle correctly, flip
                              the bottle and press into one of 5 slots on top of
                              the machine until the mount is flush with the top
                              of the 2.0+
                            </p>
                          </div>
                        </details>
                      </div>
                      <div class="accordion">
                        <details
                          class="details"
                          is="accordion-details"
                          aria-expanded="false"
                        >
                          <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                              How do I insert the canisters?
                            </span>
                            <svg
                              class="icon icon-plus-alt icon-xs flex-auto"
                              viewBox="0 0 14 14"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M7 1V13M13 7H1"
                              ></path>
                            </svg>
                          </summary>
                          <div class="details__content text-base rte">
                            <p>
                              Once you fill the canister with whichever mixer
                              you’d like, make sure to put the cap back on the
                              canister. Once sealed, slide the canister into one
                              of the three slots on the side, lining up the
                              circular hole on the cap with the bottom center of
                              the slot. Press the canister into the side of the
                              machine and you will hear and feel a click which
                              means the canister is locked into place.
                            </p>
                          </div>
                        </details>
                      </div>
                      <div class="accordion">
                        <details
                          class="details"
                          is="accordion-details"
                          aria-expanded="false"
                        >
                          <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                              What liquids can the machine not process?
                            </span>
                            <svg
                              class="icon icon-plus-alt icon-xs flex-auto"
                              viewBox="0 0 14 14"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M7 1V13M13 7H1"
                              ></path>
                            </svg>
                          </summary>
                          <div class="details__content text-base rte">
                            <p>
                              The Barsys 2.0+ can handle almost any alcohol and
                              mixer. Make sure the bottle mount fits inside the
                              bottle neck of whichever bottles you place on top
                              of the machine. For mixers, we advise avoiding
                              honey/any similarly highly viscous liquids or
                              juices with a heavy concentration of seeds/pulp.
                            </p>
                          </div>
                        </details>
                      </div>
                      <div class="accordion">
                        <details
                          class="details"
                          is="accordion-details"
                          aria-expanded="false"
                        >
                          <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                              How do I clean the mixer slots?
                            </span>
                            <svg
                              class="icon icon-plus-alt icon-xs flex-auto"
                              viewBox="0 0 14 14"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M7 1V13M13 7H1"
                              ></path>
                            </svg>
                          </summary>
                          <div class="details__content text-base rte">
                            <p>
                              Once finished with your mixers, all you need to do
                              is fill each canister with lukewarm water and a
                              little bit of soap, and run the “station cleaning”
                              tool within the Barsys app. This will clean out
                              all the mixer lines, and after using soap water
                              just use plain water to eliminate any residual
                              soap/foam left after the first station cleaning
                              process is run.
                            </p>
                          </div>
                        </details>
                      </div>
                      <div class="accordion">
                        <details
                          class="details"
                          is="accordion-details"
                          aria-expanded="false"
                        >
                          <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                              How do I power and connect the machine?
                            </span>
                            <svg
                              class="icon icon-plus-alt icon-xs flex-auto"
                              viewBox="0 0 14 14"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M7 1V13M13 7H1"
                              ></path>
                            </svg>
                          </summary>
                          <div class="details__content text-base rte">
                            <p>
                              Simply plug the power cord into any standard
                              outlet, once turned on the machine will begin
                              blinking green which means it is ready to be
                              paired with Bluetooth.
                            </p>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                  <form
                    method="post"
                    action="/contact#ContactForm-template--17490500976886__faq"
                    id="ContactForm-template--17490500976886__faq"
                    accept-charset="UTF-8"
                    class="grow-0"
                  >
                    <input type="hidden" name="form_type" value="contact" />
                    <input type="hidden" name="utf8" value="✓" />
                    <sticky-element
                      class="contact__sidebar grid gap-7d5 md:gap-10 sticky top-0"
                      // style="inset-block-start: 120.2px; --inset: 120.20000004768372px;"
                    >
                      <div class="flex justify-between gap-6">
                        <div class="grid gap-2d5">
                          <p class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                            Didn’t find your answer?
                          </p>
                          <div class="text-opacity text-base rte">
                            <p>Don't hestitate to contact us</p>
                          </div>
                        </div>
                      </div>
                      <div class="grid gap-4d5 md:gap-6">
                        <div class="field">
                          <input
                            class="input is-floating"
                            autocomplete="name"
                            type="text"
                            id="ContactFormName-template--17490500976886__faq"
                            name="contact[Name]"
                            value=""
                            placeholder="Name"
                          />
                          <label
                            class="label is-floating"
                            for="ContactFormName-template--17490500976886__faq"
                          >
                            Name
                          </label>
                        </div>
                        <div class="field">
                          <input
                            class="input is-floating"
                            autocomplete="email"
                            type="email"
                            id="ContactFormEmail-template--17490500976886__faq"
                            name="contact[email]"
                            spellcheck="false"
                            autocapitalize="off"
                            value=""
                            placeholder="Email"
                            required=""
                          />
                          <label
                            class="label is-floating"
                            for="ContactFormEmail-template--17490500976886__faq"
                          >
                            Email
                          </label>
                        </div>
                        <div class="field">
                          <textarea
                            class="textarea is-floating"
                            rows="4"
                            id="ContactFormMessage-template--17490500976886__faq"
                            name="contact[Message]"
                            placeholder=" "
                          ></textarea>
                          <label
                            class="label is-floating"
                            for="ContactFormMessage-template--17490500976886__faq"
                          >
                            Message
                          </label>
                        </div>
                        <div class="field">
                          <label
                            for="ContactSubmit-template--17490500976886__faq"
                            class="sr-only"
                          >
                            Send message
                          </label>
                          <button
                            type="submit"
                            id="ContactSubmit-template--17490500976886__faq"
                            class="button button--primary button--fixed"
                            is="hover-button"
                          >
                            <span class="btn-fill" data-fill=""></span>
                            <span class="btn-text">Send message</span>
                            <span class="btn-loader">
                              <span></span>
                              <span></span>
                              <span></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </sticky-element>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--17490500976886__product-recommendations"
            class="shopify-section"
          >

            <product-recommendations
              class="related-products block"
              data-url="/recommendations/products?section_id=template--17490500976886__product-recommendations&amp;product_id=1851102691363&amp;limit=6&amp;intent=related"
            >
              <div class="section section--padding section--rounded relative"></div>
            </product-recommendations>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductInner;
