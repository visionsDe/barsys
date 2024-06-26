import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Barsys360ProductView = () => {
  const [currentIndex, setIndex] = useState(0);
  const [blackSelected, setBlackSelected] = useState(true);
  const scrollContainer = useRef();

  useEffect(() => {
    if (currentIndex != 0) {
      changeSlide(0, "none");
      setIndex(0);
    }
  }, [blackSelected]);

  const BlackTabImages = new Array(7)
    .fill(0)
    .map((v, i) =>
      require(`../../assets/images/product-barsys-360-black-${i + 1}.jpg`)
    );

  const WhiteTabImages = new Array(4)
    .fill(0)
    .map((v, i) =>
      require(`../../assets/images/product-barsys-360-white-${i + 1}.${
        i == 0 ? "jpg" : "png"
      }`)
    );

  const slideNext = () => {
    let index = currentIndex + 1;
    changeSlide(index);
    setIndex(index);
  };
  const slidePrev = () => {
    let index = currentIndex - 1;
    changeSlide(index);
    setIndex(index);
  };

  const changeSlide = (index, animation) => {
    const scrollItem = document.querySelector("#scrollItem1");
    scrollContainer.current.scrollTo({
      left:
        Number(getComputedStyle(scrollItem).width.replace("px", "")) * index,
      behavior: animation ? "instant" : "smooth",
    });
  };
  return (
    <div
      id="shopify-section-template--15951546220625__featured-product"
      class="shopify-section"
    >
      <div class="section section--padding section--rounded relative">
        <div class="page-width relative">
          <div class="featured-product product product--thumbnail flex flex-col items-start lg:grid gap-5 w-full relative">
            <media-gallery
              class="product__gallery product__gallery--full_width block w-full relative"
              form="ProductForm-template--15951546220625__featured-product"
              aria-label="Gallery Viewer"
              data-animate="fade-up"
              data-immediate
            >
              <div class="product__media-container flex flex-col gap-4 items-start xl:flex-row">
                <div class="relative w-full h-full">
                  <div
                    ref={scrollContainer}
                    id="SliderGallery-template--15951546220625__featured-product"
                    class="slider slider--desktop slider--tablet block w-full h-full"
                    selector=".product__media"
                  >
                    <div class="product__media-list flex gap-2">
                      {(blackSelected ? BlackTabImages : WhiteTabImages).map(
                        (src, i) => (
                          <div
                            class="product__media card media flex w-full flex-auto relative overflow-hidden"
                            data-media-type="image"
                            data-media-id="26068050739281"
                            data-gang-option="color"
                            data-gang-connect="color_black"
                            id={`scrollItem${i + 1}`}
                          >
                            <Image
                              src={src}
                              alt=""
                              loading="eager"
                              fetchpriority="high"
                              class="w-full"
                              is="lazy-image"
                            />

                            <button
                              type="button"
                              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                              is="media-lightbox-button"
                              aria-label="Open media 1 in modal"
                              tabIndex="-1"
                            >
                              <svg
                                class="icon icon-zoom icon-xs lg:hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 3V9M3 3H9M3 3L9 9M21 21V15M21 21H15M21 21L15 15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div class="indicators hidden items-center justify-between opacity-0 z-1 absolute top-0 left-0 w-full h-full pointer-events-none">
                    <button
                      class="button button--secondary pointer-events-auto"
                      type="button"
                      is="previous-button"
                      aria-controls="SliderGallery-template--15951546220625__featured-product"
                      aria-label="Previous"
                      onClick={slidePrev}
                      disabled={currentIndex == 0}
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
                      class="button button--secondary pointer-events-auto"
                      type="button"
                      is="next-button"
                      aria-controls="SliderGallery-template--15951546220625__featured-product"
                      aria-label="Next"
                      onClick={slideNext}
                      disabled={
                        currentIndex ==
                        (blackSelected ? BlackTabImages : WhiteTabImages)
                          .length -
                          1
                      }
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
                </div>
                <scroll-shadow class="product__thumbnails with-dots product__thumbnails--beside grid items-center relative w-full">
                  <media-dots
                    class="product__thumbnails-list scroll-area grid items-end justify-start gap-4 w-full"
                    aria-controls="SliderGallery-template--15951546220625__featured-product"
                  >
                    {(blackSelected ? BlackTabImages : WhiteTabImages).map(
                      (src, i) => (
                        <button
                          type="button"
                          class="product__thumbnail media media--square relative overflow-hidden"
                          data-media-id="26068050739281"
                          aria-label="Go to item "
                          aria-current={currentIndex == i ? "true" : "false"}
                          data-gang-option="color"
                          data-gang-connect="color_black"
                          onClick={() => {
                            changeSlide(i);
                            setIndex(i);
                          }}
                        >
                          <Image
                            src={src}
                            alt=""
                            loading="lazy"
                            sizes="(max-width: 1280px) 90px, 98px"
                            is="lazy-image"
                          />
                        </button>
                      )
                    )}
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6L16 12L10 18"
                          ></path>
                        </svg>
                      </span>
                    </s>
                  </template>
                </scroll-shadow>
              </div>
              <spinning-text
                class="product__spinning text-xs md:text-base lg:text-lg uppercase flex items-center justify-center absolute top-0 z-10"
                data-string="Pre-Order Pre-Order"
                style={{
                  "--char-count": 20,
                  "--font-size": 2,
                  "--character-width": 2,
                  "--radius":
                    "calc((var(--character-width) / sin(var(--inner-angle))) * -1ch)",
                }}
              >
                <svg
                  class="icon icon-barsys-icon icon-md absolute"
                  width="41"
                  height="47"
                  viewBox="0 0 728 837"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M79.414 453.723C71.8022 459.855 64.5527 466.422 57.702 473.394V491.523C64.554 498.465 71.8035 505.002 79.414 511.103C88.6593 500.58 98.94 491.014 110.101 482.549C98.9504 473.971 88.6719 464.316 79.414 453.723ZM678.465 482.368C669.167 472.029 659.056 462.45 648.231 453.723C581.463 399.652 478.796 364.935 363.8 364.935C248.803 364.935 146.227 399.652 79.414 453.723C71.8022 459.855 64.5527 466.422 57.702 473.394C54.7104 476.294 51.9002 479.286 49.1352 482.458C17.9497 517.176 0 557.514 0 600.617C0 730.514 163.18 836.299 363.8 836.299C564.42 836.299 727.6 730.605 727.6 600.617C727.6 557.56 709.65 517.176 678.465 482.504V482.368ZM363.8 793.65C186.75 793.65 42.6534 707.036 42.6534 600.707C42.8259 580.274 48.0584 560.203 57.8834 542.285C63.8746 531.063 71.1618 520.582 79.5954 511.058C88.8406 500.535 99.1213 490.968 110.282 482.504C169.208 437.18 260.951 407.584 364.117 407.584C467.283 407.584 559.026 436.954 617.952 482.504C629.113 490.968 639.394 500.535 648.639 511.058C672.073 537.889 685.354 568.392 685.354 600.662C684.946 706.991 540.85 793.65 363.8 793.65ZM79.414 453.723C71.8022 459.855 64.5527 466.422 57.702 473.394V491.523C64.554 498.465 71.8035 505.002 79.414 511.103C88.6593 500.58 98.94 491.014 110.101 482.549C98.9504 473.971 88.6719 464.316 79.414 453.723Z"
                    fill="black"
                  ></path>
                  <path
                    d="M57.8838 399.789V450.687C64.7344 443.716 71.984 437.148 79.5958 431.016C71.1519 421.5 63.8639 411.018 57.8838 399.789ZM363.982 105.82C163.361 105.82 0.181641 211.56 0.181641 341.503C0.181641 384.605 18.3127 425.034 49.3168 459.752C52.0818 462.834 54.9828 465.734 57.8838 468.816C64.7474 475.746 71.9962 482.283 79.5958 488.396C146.318 542.784 248.985 577.275 363.982 577.275C478.978 577.275 581.554 542.558 648.413 488.396C659.206 479.666 669.314 470.12 678.646 459.842C709.832 425.124 727.781 384.696 727.781 341.593C727.6 211.56 564.42 105.82 363.8 105.82H363.982ZM648.231 431.062C638.965 441.591 628.686 451.185 617.545 459.706C558.619 505.03 466.83 534.49 363.71 534.49C260.589 534.49 168.801 505.166 109.875 459.706C98.7328 451.185 88.4547 441.591 79.1879 431.062C70.8838 421.509 63.7332 411.013 57.8838 399.789C48.108 381.877 42.9367 361.817 42.835 341.412C42.835 235.038 186.932 148.47 363.982 148.47C541.031 148.47 685.128 235.038 685.128 341.412C684.947 373.773 671.666 404.185 648.231 431.062ZM57.8838 399.789V450.687C64.7344 443.716 71.984 437.148 79.5958 431.016C71.1519 421.5 63.8639 411.018 57.8838 399.789Z"
                    fill="black"
                  ></path>
                  <path
                    d="M68.5358 440.127L57.8838 542.286C48.1292 560.206 42.9594 580.26 42.835 600.663H0.181641V341.412L42.835 364.074C42.6537 384.651 58.7904 421.997 68.5358 440.127Z"
                    fill="black"
                  ></path>
                  <path
                    d="M340.864 720.77C339.479 720.761 338.109 720.484 336.83 719.954C334.293 718.883 332.283 716.852 331.238 714.305C330.194 711.757 330.199 708.9 331.254 706.357L623.754 6.78831C624.249 5.47111 625.004 4.26716 625.974 3.24837C626.945 2.22957 628.111 1.41686 629.403 0.858768C630.694 0.300679 632.085 0.00867415 633.493 0.000190335C634.9 -0.00829348 636.294 0.266916 637.593 0.809389C638.891 1.35186 640.067 2.15046 641.05 3.15747C642.032 4.16449 642.802 5.35925 643.313 6.67039C643.823 7.98153 644.064 9.38214 644.022 10.7885C643.979 12.1949 643.653 13.5783 643.063 14.8559L350.519 714.334C349.723 716.239 348.382 717.866 346.664 719.011C344.946 720.156 342.928 720.768 340.864 720.77Z"
                    fill="black"
                  ></path>
                </svg>
                <div class="split-chars">
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 0 }}
                  >
                    •
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 1 }}
                  >
                    P
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 2 }}
                  >
                    r
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 3 }}
                  >
                    e
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 4 }}
                  >
                    -
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 5 }}
                  >
                    O
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 6 }}
                  >
                    r
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 7 }}
                  >
                    d
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 8 }}
                  >
                    e
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 9 }}
                  >
                    r
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 10 }}
                  >
                    •
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 11 }}
                  >
                    P
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 12 }}
                  >
                    r
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 13 }}
                  >
                    e
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 14 }}
                  >
                    -
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 15 }}
                  >
                    O
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 16 }}
                  >
                    r
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 17 }}
                  >
                    d
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 18 }}
                  >
                    e
                  </span>
                  <span
                    aria-hidden="true"
                    class="split-char"
                    style={{ "--char-index": 19 }}
                  >
                    r
                  </span>
                  <span class="sr-only">•Pre-Order•Pre-Order</span>
                </div>
              </spinning-text>
            </media-gallery>
            <animate-element
              class="product__info block sticky w-full"
              data-animate="fade-up"
              data-immediate
            >
              <p class="product__vendor text-base">
                <a class="reversed-link" href="#" title="Barsys">
                  Barsys
                </a>
              </p>
              <div class="product__title with-price">
                <h1 class="leading-none font-bold product-title-md col-span-full">
                  <split-words
                    class="split-words flex flex-wrap"
                    data-animate="fade-up"
                  >
                    Barsys 360
                  </split-words>
                </h1>
                <div
                  id="Price-template--15951546220625__featured-product"
                  class="product__price"
                >
                  <div class="price flex items-baseline gap-2 lg:flex-col xl:items-end lg:gap-1d5">
                    <span class="price__regular whitespace-nowrap">
                      Rs. 55,700.00
                    </span>
                  </div>
                </div>
              </div>
              <form
                method="post"
                action="/cart/add"
                id="ProductFormInstallment-template--15951546220625__featured-product"
                acceptCharset="UTF-8"
                class="installment text-sm leading-tight"
                encType="multipart/form-data"
              >
                <input type="hidden" name="form_type" value="product" />
                <input type="hidden" name="utf8" value="✓" />
                <input type="hidden" name="id" value="41307125645393" />

                <input type="hidden" name="product-id" value="7423884132433" />
                <input
                  type="hidden"
                  name="section-id"
                  value="template--15951546220625__featured-product"
                />
              </form>
              <div class="product__text rte text-base">
                <p>
                  Discover Barsys 360, your gateway to unparalleled cocktail
                  mastery at home. With cutting-edge technology and expert
                  curation, Barsys 360 revolutionizes your mixology journey.
                  Craft personalized cocktails effortlessly, guided by top bars,
                  mixologists, and brands. Elevate your home cocktail experience
                  to new heights with Barsys 360, redefining how you savor and
                  celebrate cocktails with precision and innovation.
                </p>
              </div>
              <variant-radios
                class="variant-picker grid gap-5 no-js-hidden"
                form="ProductForm-template--15951546220625__featured-product"
                data-section="template--15951546220625__featured-product"
                data-url="/products/barsys-360"
                data-update-url="false"
              >
                <fieldset
                  class="js product-form__input variant-input-wrapper"
                  data-option-index="option1"
                  data-option-slug="color"
                >
                  <legend class="sr-only">Color</legend>
                  <div class="form__label flex items-center justify-between gap-2 w-full">
                    <div class="flex gap-2">
                      Color:
                      <span
                        class="font-medium"
                        id="template--15951546220625__featured-product-option1"
                      >
                        Black
                      </span>
                    </div>
                  </div>
                  <ul class="swatches swatches--round flex items-center flex-wrap gap-4">
                    <li>
                      <magnet-element class="block">
                        <input
                          type="radio"
                          class="sr-only"
                          id="template--15951546220625__featured-product-color-0"
                          name="Color"
                          value="Black"
                          form="ProductForm-template--15951546220625__featured-product"
                          checked={blackSelected}
                          onClick={() => setBlackSelected(true)}
                          data-option-value="Black"
                        />
                        <label
                          for="template--15951546220625__featured-product-color-0"
                          class="color-swatch relative"
                          title="Black"
                          style={{ "--swatch-background": "black" }}
                        >
                          <span class="tooltip opacity-0 pointer-events-none text-sm rounded-full z-10">
                            Black
                          </span>
                        </label>
                      </magnet-element>
                    </li>
                    <li>
                      <magnet-element class="block">
                        <input
                          type="radio"
                          class="sr-only"
                          id="template--15951546220625__featured-product-color-1"
                          name="Color"
                          value="White"
                          form="ProductForm-template--15951546220625__featured-product"
                          checked={!blackSelected}
                          onClick={() => setBlackSelected(false)}
                          data-option-value="White"
                        />
                        <label
                          for="template--15951546220625__featured-product-color-1"
                          class="color-swatch relative"
                          title="White"
                          // style="--swatch-background: white;"
                        >
                          <span class="tooltip opacity-0 pointer-events-none text-sm rounded-full z-10">
                            White
                          </span>
                        </label>
                      </magnet-element>
                    </li>
                  </ul>
                </fieldset>
                {/* <script type="application/json">
            [{"id":41307125645393,"title":"Black","option1":"Black","option2":null,"option3":null,"sku":"barsys360","requires_shipping":true,"taxable":true,"featured_image":{"id":33020007972945,"product_id":7423884132433,"position":1,"created_at":"2024-04-25T15:19:30-04:00","updated_at":"2024-04-25T15:19:32-04:00","alt":"#color_black","width":1500,"height":1500,"src":"\/\/barsys.com\/cdn\/shop\/files\/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?v=1714072772","variant_ids":[41307125645393]},"available":true,"name":"Barsys 360 - Black","public_title":"Black","options":["Black"],"price":5570000,"weight":0,"compare_at_price":null,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":"#color_black","id":26068050739281,"position":1,"preview_image":{"aspect_ratio":1.0,"height":1500,"width":1500,"src":"\/\/barsys.com\/cdn\/shop\/files\/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?v=1714072772"}},"requires_selling_plan":false,"selling_plan_allocations":[],"quantity_rule":{"min":1,"max":null,"increment":1}},{"id":41307125678161,"title":"White","option1":"White","option2":null,"option3":null,"sku":"barsys361","requires_shipping":true,"taxable":true,"featured_image":{"id":33020008071249,"product_id":7423884132433,"position":8,"created_at":"2024-04-25T15:19:30-04:00","updated_at":"2024-04-25T15:19:33-04:00","alt":"#color_white","width":1920,"height":1080,"src":"\/\/barsys.com\/cdn\/shop\/files\/product-360-info-image-1_a674e9f5-006c-43d6-a46d-3265b008e84e.webp?v=1714072773","variant_ids":[41307125678161]},"available":true,"name":"Barsys 360 - White","public_title":"White","options":["White"],"price":5570000,"weight":0,"compare_at_price":null,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":"#color_white","id":26068050968657,"position":8,"preview_image":{"aspect_ratio":1.778,"height":1080,"width":1920,"src":"\/\/barsys.com\/cdn\/shop\/files\/product-360-info-image-1_a674e9f5-006c-43d6-a46d-3265b008e84e.webp?v=1714072773"}},"requires_selling_plan":false,"selling_plan_allocations":[],"quantity_rule":{"min":1,"max":null,"increment":1}}]
          </script> */}
              </variant-radios>
              <noscript>
                <div class="product-form__input">
                  <label
                    class="form__label flex gap-2"
                    for="Variants-template--15951546220625__featured-product"
                  >
                    Product variants
                  </label>
                  <div class="field">
                    <select
                      name="id"
                      id="Variants-template--15951546220625__featured-product"
                      class="select"
                      form="ProductForm-template--15951546220625__featured-product"
                    >
                      <option selected value="41307125645393">
                        Black - Rs. 55,700.00
                      </option>
                      <option value="41307125678161">
                        White - Rs. 55,700.00
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 15L12 9L18 15"
                      ></path>
                    </svg>
                  </div>
                </div>
              </noscript>
              <div
                class="product__inventory no-js-hidden"
                id="Inventory-template--15951546220625__featured-product"
                role="status"
              >
                <div class="alert alert--success inline-flex items-center gap-3">
                  <svg
                    class="icon icon-ellipse icon-xs flex-auto"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle fill="currentColor" cx="8" cy="8" r="5"></circle>
                    <circle
                      cx="8"
                      cy="8"
                      r="6.5"
                      strokeOpacity="0.3"
                      strokeWidth="3"
                    ></circle>
                  </svg>
                  <span class="text-sm font-medium leading-tight">
                    Pre-Order
                  </span>
                </div>
              </div>

              <div class="product-form-wrapper">
                <form
                  method="post"
                  action="/cart/add"
                  id="ProductForm-template--15951546220625__featured-product"
                  acceptCharset="UTF-8"
                  class="product-form grid gap-2"
                  encType="multipart/form-data"
                  novalidate="novalidate"
                  data-type="add-to-cart-form"
                  data-hide-errors="false"
                  is="product-form"
                >
                  <input type="hidden" name="form_type" value="product" />
                  <input type="hidden" name="utf8" value="✓" />
                  <input
                    type="hidden"
                    name="id"
                    value="41307125645393"
                    disabled
                  />
                  <div class="product-form__buttons grid gap-4">
                    <div
                      class="product-form__error-message alert alert--error text-sm font-medium leading-tight"
                      role="alert"
                      hidden
                    ></div>
                    <div class="flex gap-4">
                      <button
                        type="submit"
                        name="add"
                        class="product-form__submit button button--primary button--fixed w-full"
                        is="hover-button"
                      >
                        <span class="btn-fill" data-fill></span>
                        <span class="btn-text">Add to cart</span>
                      </button>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="product-id"
                    value="7423884132433"
                  />
                  <input
                    type="hidden"
                    name="section-id"
                    value="template--15951546220625__featured-product"
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
                        href="//www.facebook.com/sharer.php?u=https://barsys.com/products/barsys-360"
                        title="Share on Facebook"
                      >
                        <svg
                          class="icon icon-facebook icon-sm"
                          viewBox="0 0 24 24"
                          stroke="none"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.03153 23L9 13H5V9H9V6.5C9 2.7886 11.2983 1 14.6091 1C16.1951 1 17.5581 1.11807 17.9553 1.17085V5.04948L15.6591 5.05052C13.8584 5.05052 13.5098 5.90614 13.5098 7.16171V9H18.75L16.75 13H13.5098V23H9.03153Z" />
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
                        href="//twitter.com/intent/tweet?text=Barsys%20360&amp;url=https://barsys.com/products/barsys-360"
                        title="Tweet on Twitter"
                      >
                        <svg
                          class="icon icon-twitter icon-sm"
                          viewBox="0 0 24 24"
                          stroke="none"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.8984 10.4679L21.3339 2H19.5687L13.1074 9.35221L7.95337 2H2L9.80183 13.1157L2 22H3.7652L10.5845 14.2315L16.03 22H21.9833M4.398 3.29892H7.10408L19.5687 20.7594H16.8626" />
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
                        href="//pinterest.com/pin/create/button/?url=https://barsys.com/products/barsys-360&amp;media=//barsys.com/cdn/shop/files/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?crop=center&height=1024&v=1714072772&width=1024&amp;description=Barsys%20360"
                        title="Pin on Pinterest"
                      >
                        <svg
                          class="icon icon-pinterest icon-sm"
                          viewBox="0 0 24 24"
                          stroke="none"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 1C5.95 1 1 5.95 1 12C1 16.675 3.93333 20.6167 7.96667 22.2667C7.875 21.4417 7.78333 20.0667 7.96667 19.15C8.15 18.325 9.25 13.65 9.25 13.65C9.25 13.65 8.975 12.9167 8.975 12C8.975 10.4417 9.89167 9.34167 10.9917 9.34167C11.9083 9.34167 12.3667 10.075 12.3667 10.9C12.3667 11.8167 11.725 13.2833 11.45 14.5667C11.175 15.6667 12 16.5833 13.1 16.5833C15.025 16.5833 16.5833 14.5667 16.5833 11.5417C16.5833 8.88333 14.6583 7.05 12 7.05C8.88333 7.05 7.05 9.43333 7.05 11.8167C7.05 12.7333 7.41667 13.7417 7.875 14.2917C7.96667 14.3833 7.96667 14.475 7.96667 14.5667C7.875 14.9333 7.69167 15.6667 7.69167 15.85C7.6 16.0333 7.50833 16.125 7.325 16.0333C5.95 15.3917 5.125 13.375 5.125 11.8167C5.125 8.33333 7.69167 5.125 12.3667 5.125C16.2167 5.125 19.15 7.875 19.15 11.45C19.15 15.2083 16.7667 18.325 13.4667 18.325C12.3667 18.325 11.2667 17.775 10.9 17.0417C10.9 17.0417 10.35 19.15 10.2583 19.7C9.98333 20.6167 9.34167 21.8083 8.88333 22.5417C9.8 22.8167 10.9 23 12 23C18.05 23 23 18.05 23 12C23 5.95 18.05 1 12 1Z" />
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
                        href="//web.whatsapp.com/send?text=https://barsys.com/products/barsys-360"
                        title="Share on WhatsApp"
                      >
                        <svg
                          class="icon icon-whatsapp icon-sm"
                          viewBox="0 0 24 24"
                          stroke="none"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 24L1.69 17.84C0.65 16.03 0.1 13.99 0.1 11.89C0.1 5.33 5.44 0 12 0C15.18 0 18.17 1.24 20.42 3.49C22.67 5.74 23.9 8.73 23.9 11.9C23.9 18.46 18.56 23.79 12 23.79C10.01 23.79 8.05 23.29 6.32 22.34L0.01 23.99L0 24ZM6.6 20.19L6.96 20.4C8.48 21.3 10.22 21.78 11.99 21.78C17.44 21.78 21.88 17.35 21.88 11.9C21.88 9.26 20.85 6.78 18.99 4.91C17.13 3.04 14.64 2.01 12 2.01C6.55 2.01 2.11 6.44 2.11 11.89C2.11 13.76 2.63 15.58 3.62 17.15L3.86 17.52L2.86 21.17L6.6 20.19ZM9.02 6.92C8.78 6.34 8.53 6.42 8.35 6.41C8.18 6.41 7.98 6.4 7.78 6.4C7.58 6.4 7.26 6.47 6.99 6.77C6.72 7.07 5.95 7.79 5.95 9.25C5.95 10.71 7.02 12.13 7.16 12.32C7.31 12.52 9.26 15.52 12.24 16.81C12.95 17.12 13.5 17.3 13.93 17.44C14.64 17.67 15.29 17.63 15.8 17.56C16.37 17.47 17.56 16.84 17.81 16.15C18.06 15.46 18.06 14.86 17.98 14.74C17.91 14.62 17.71 14.54 17.41 14.39C17.11 14.24 15.65 13.52 15.38 13.42C15.11 13.32 14.91 13.27 14.71 13.57C14.51 13.87 13.94 14.54 13.77 14.74C13.6 14.94 13.42 14.96 13.13 14.81C12.83 14.66 11.87 14.35 10.74 13.34C9.86 12.55 9.26 11.58 9.09 11.28C8.92 10.98 9.07 10.82 9.22 10.67C9.35 10.54 9.52 10.32 9.67 10.15C9.82 9.98 9.87 9.85 9.97 9.65C10.07 9.45 10.02 9.28 9.95 9.13C9.88 8.98 9.28 7.52 9.03 6.92H9.02Z" />
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
                        href="mailto:?&subject=Barsys%20360&body=https://barsys.com/products/barsys-360"
                        title="Share by Email"
                      >
                        <svg
                          class="icon icon-email icon-sm"
                          viewBox="0 0 24 22"
                          stroke="none"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.73.545C3.8 0 5.2 0 8 0h8c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C24 3.8 24 5.2 24 8v5.767c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.186c-1.07.544-2.47.544-5.27.544H8c-2.8 0-4.2 0-5.27-.544a5 5 0 0 1-2.185-2.186C0 17.967 0 16.567 0 13.767V8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545Zm2.988 5.25a.75.75 0 1 0-.832 1.248l1.117.744.256.17.139.093c1.791 1.195 2.858 1.906 4.029 2.187a6.75 6.75 0 0 0 3.146 0c1.171-.28 2.238-.992 4.03-2.187l.138-.092.256-.171 1.117-.744a.75.75 0 1 0-.832-1.248l-1.117.744-.256.17c-1.973 1.316-2.807 1.858-3.685 2.07a5.25 5.25 0 0 1-2.447 0c-.88-.212-1.713-.754-3.686-2.07l-.256-.17-1.117-.744Z" />
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m7.218 8.527 5.564-2.782M7.218 11.39l5.564 2.783m-8.509-.9a3.273 3.273 0 1 0 0-6.546 3.273 3.273 0 0 0 0 6.546Zm11.454-5.728a3.273 3.273 0 1 0 0-6.545 3.273 3.273 0 0 0 0 6.545Zm0 11.455a3.273 3.273 0 1 0 0-6.545 3.273 3.273 0 0 0 0 6.545Z"
                    ></path>
                  </svg>
                  <a
                    class="link text-sm"
                    href="#"
                    aria-controls="ShareDrawer-template--15951546220625__featured-product"
                    aria-expanded="false"
                  >
                    Share
                  </a>
                </div>
                <share-drawer
                  id="ShareDrawer-template--15951546220625__featured-product"
                  class="sm:hidden share-drawer drawer drawer--end z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Share"
                  data-section-id="template--15951546220625__featured-product"
                  hidden
                >
                  <overlay-element
                    class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
                    aria-controls="ShareDrawer-template--15951546220625__featured-product"
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
                        aria-controls="ShareDrawer-template--15951546220625__featured-product"
                        aria-expanded="false"
                        aria-label="Close"
                      >
                        <span class="btn-fill" data-fill></span>
                        <span class="btn-text">
                          <svg
                            class="icon icon-close icon-sm"
                            viewBox="0 0 20 20"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M0.7,9.9C0.5,5.2,4.1,1.2,8.5,1c4.7-0.3,8.9,3.8,8.8,8.8"
                            ></path>
                          </svg>
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
                              href="//www.facebook.com/sharer.php?u=https://barsys.comhttps://barsys.com/products/barsys-360"
                              title="Share on Facebook"
                            >
                              <svg
                                class="icon icon-facebook icon-lg"
                                viewBox="0 0 24 24"
                                stroke="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.03153 23L9 13H5V9H9V6.5C9 2.7886 11.2983 1 14.6091 1C16.1951 1 17.5581 1.11807 17.9553 1.17085V5.04948L15.6591 5.05052C13.8584 5.05052 13.5098 5.90614 13.5098 7.16171V9H18.75L16.75 13H13.5098V23H9.03153Z" />
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
                              href="//twitter.com/intent/tweet?text=Barsys%20360&amp;url=https://barsys.comhttps://barsys.com/products/barsys-360"
                              title="Tweet on Twitter"
                            >
                              <svg
                                class="icon icon-twitter icon-lg"
                                viewBox="0 0 24 24"
                                stroke="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M13.8984 10.4679L21.3339 2H19.5687L13.1074 9.35221L7.95337 2H2L9.80183 13.1157L2 22H3.7652L10.5845 14.2315L16.03 22H21.9833M4.398 3.29892H7.10408L19.5687 20.7594H16.8626" />
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
                              href="//pinterest.com/pin/create/button/?url=https://barsys.comhttps://barsys.com/products/barsys-360&amp;media=//barsys.com/cdn/shop/files/barsys-360-black-1_9ac5ef01-d048-40e5-b071-3f2a1c791c32.jpg?crop=center&height=1024&v=1714072772&width=1024&amp;description=Barsys%20360"
                              title="Pin on Pinterest"
                            >
                              <svg
                                class="icon icon-pinterest icon-lg"
                                viewBox="0 0 24 24"
                                stroke="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 1C5.95 1 1 5.95 1 12C1 16.675 3.93333 20.6167 7.96667 22.2667C7.875 21.4417 7.78333 20.0667 7.96667 19.15C8.15 18.325 9.25 13.65 9.25 13.65C9.25 13.65 8.975 12.9167 8.975 12C8.975 10.4417 9.89167 9.34167 10.9917 9.34167C11.9083 9.34167 12.3667 10.075 12.3667 10.9C12.3667 11.8167 11.725 13.2833 11.45 14.5667C11.175 15.6667 12 16.5833 13.1 16.5833C15.025 16.5833 16.5833 14.5667 16.5833 11.5417C16.5833 8.88333 14.6583 7.05 12 7.05C8.88333 7.05 7.05 9.43333 7.05 11.8167C7.05 12.7333 7.41667 13.7417 7.875 14.2917C7.96667 14.3833 7.96667 14.475 7.96667 14.5667C7.875 14.9333 7.69167 15.6667 7.69167 15.85C7.6 16.0333 7.50833 16.125 7.325 16.0333C5.95 15.3917 5.125 13.375 5.125 11.8167C5.125 8.33333 7.69167 5.125 12.3667 5.125C16.2167 5.125 19.15 7.875 19.15 11.45C19.15 15.2083 16.7667 18.325 13.4667 18.325C12.3667 18.325 11.2667 17.775 10.9 17.0417C10.9 17.0417 10.35 19.15 10.2583 19.7C9.98333 20.6167 9.34167 21.8083 8.88333 22.5417C9.8 22.8167 10.9 23 12 23C18.05 23 23 18.05 23 12C23 5.95 18.05 1 12 1Z" />
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
                              href="//web.whatsapp.com/send?text=https://barsys.comhttps://barsys.com/products/barsys-360"
                              title="Share on WhatsApp"
                            >
                              <svg
                                class="icon icon-whatsapp icon-lg"
                                viewBox="0 0 24 24"
                                stroke="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 24L1.69 17.84C0.65 16.03 0.1 13.99 0.1 11.89C0.1 5.33 5.44 0 12 0C15.18 0 18.17 1.24 20.42 3.49C22.67 5.74 23.9 8.73 23.9 11.9C23.9 18.46 18.56 23.79 12 23.79C10.01 23.79 8.05 23.29 6.32 22.34L0.01 23.99L0 24ZM6.6 20.19L6.96 20.4C8.48 21.3 10.22 21.78 11.99 21.78C17.44 21.78 21.88 17.35 21.88 11.9C21.88 9.26 20.85 6.78 18.99 4.91C17.13 3.04 14.64 2.01 12 2.01C6.55 2.01 2.11 6.44 2.11 11.89C2.11 13.76 2.63 15.58 3.62 17.15L3.86 17.52L2.86 21.17L6.6 20.19ZM9.02 6.92C8.78 6.34 8.53 6.42 8.35 6.41C8.18 6.41 7.98 6.4 7.78 6.4C7.58 6.4 7.26 6.47 6.99 6.77C6.72 7.07 5.95 7.79 5.95 9.25C5.95 10.71 7.02 12.13 7.16 12.32C7.31 12.52 9.26 15.52 12.24 16.81C12.95 17.12 13.5 17.3 13.93 17.44C14.64 17.67 15.29 17.63 15.8 17.56C16.37 17.47 17.56 16.84 17.81 16.15C18.06 15.46 18.06 14.86 17.98 14.74C17.91 14.62 17.71 14.54 17.41 14.39C17.11 14.24 15.65 13.52 15.38 13.42C15.11 13.32 14.91 13.27 14.71 13.57C14.51 13.87 13.94 14.54 13.77 14.74C13.6 14.94 13.42 14.96 13.13 14.81C12.83 14.66 11.87 14.35 10.74 13.34C9.86 12.55 9.26 11.58 9.09 11.28C8.92 10.98 9.07 10.82 9.22 10.67C9.35 10.54 9.52 10.32 9.67 10.15C9.82 9.98 9.87 9.85 9.97 9.65C10.07 9.45 10.02 9.28 9.95 9.13C9.88 8.98 9.28 7.52 9.03 6.92H9.02Z" />
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
                              href="mailto:?&subject=Barsys%20360&body=https://barsys.comhttps://barsys.com/products/barsys-360"
                              title="Share by Email"
                            >
                              <svg
                                class="icon icon-email icon-lg"
                                viewBox="0 0 24 22"
                                stroke="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M2.73.545C3.8 0 5.2 0 8 0h8c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C24 3.8 24 5.2 24 8v5.767c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.186c-1.07.544-2.47.544-5.27.544H8c-2.8 0-4.2 0-5.27-.544a5 5 0 0 1-2.185-2.186C0 17.967 0 16.567 0 13.767V8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545Zm2.988 5.25a.75.75 0 1 0-.832 1.248l1.117.744.256.17.139.093c1.791 1.195 2.858 1.906 4.029 2.187a6.75 6.75 0 0 0 3.146 0c1.171-.28 2.238-.992 4.03-2.187l.138-.092.256-.171 1.117-.744a.75.75 0 1 0-.832-1.248l-1.117.744-.256.17c-1.973 1.316-2.807 1.858-3.685 2.07a5.25 5.25 0 0 1-2.447 0c-.88-.212-1.713-.754-3.686-2.07l-.256-.17-1.117-.744Z" />
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.167 9.625v-.458a1.833 1.833 0 1 1 3.666 0v.11a1.94 1.94 0 0 1-.57 1.376L11 11.917m.458 2.75a.458.458 0 0 1-.916 0m.916 0a.458.458 0 0 0-.916 0m.916 0h-.916M20.167 11a9.167 9.167 0 1 1-18.334 0 9.167 9.167 0 0 1 18.334 0Z"
                    ></path>
                  </svg>
                  <a
                    class="link text-sm leading-tight cursor-pointer"
                    href="faqs.html"
                  >
                    Need help?
                  </a>
                </div>
              </div>
              <Link
                class="product__more flex items-center justify-between"
                href="/product-detail"
              >
                <span class="text-sm-base font-medium leading-none">
                  View full details
                </span>
                <svg
                  class="icon icon-arrow-right icon-xs flex-auto"
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
              </Link>
            </animate-element>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barsys360ProductView;
