import React from "react";
import "./footer.css";
import Image from "next/image";
import Link from "next/link";
const linkData = [
  {
    title: "Quick Links",
    links: [
      { href: "collections", label: "Products" },
      { href: "collection-recipes", label: "All Recipes" },
      { href: "mixlist", label: "Mixlists" },
      { href: "bars", label: "Bars" },
      { href: "blogs", label: "Blogs" },
    ],
  },
  {
    title: "Information",
    links: [
      { href: "contact-us", label: "Contact us" },
      { href: "shipping-policy", label: "Shipping Policy" },
      { href: "refund-policy", label: "Refund Policy" },
      { href: "privacy-policy", label: "Privacy Policy" },
      { href: "terms-of-service", label: "Terms of Service" },
      { href: "#", label: "Pre-Order Terms and Conditions" },
    ],
  },
];
export const Footer = () => {
  return (
    <>
      <div class="page-container" id="PageContainer">
        <footer-group class="footer-group block w-full">
          <div
            id="shopify-section-sections--15951473213521__multicolumn-with-icons"
            class="shopify-section shopify-section-group-footer-group"
          >
            <div class="section section--padding section--divider">
              <div class="page-width relative">
                <carousel-element
                  class="text-with-icons block lg:grid grid--4 relative z-1"
                  watch-css
                >
                  <div class="column flex gap-5 w-full flex-col xl:flex-row xl:text-left text-center">
                    <div class="column__icon">
                      <svg
                        class="icon icon-support icon-lg inline-block"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="fill"
                          d="M6.09 17.43H4.75C3.65 17.43 2.75 16.54 2.75 15.43V12.28C2.75 11.18 3.64 10.28 4.75 10.28H6.09C7.19 10.28 8.09 11.17 8.09 12.28V15.43C8.09 16.53 7.2 17.43 6.09 17.43ZM20.56 15.43V12.28C20.56 11.18 19.67 10.28 18.56 10.28H17.22C16.12 10.28 15.22 11.17 15.22 12.28V15.43C15.22 16.53 16.11 17.43 17.22 17.43H18.56C19.66 17.43 20.56 16.54 20.56 15.43Z"
                        />
                        <path
                          d="M4.94 17.43V19.86C4.94 20.93 6.01 22 7.43 22H11.65M20.56 13.78V10.67C20.57 5.74 16.58 1.75 11.66 1.75C6.74 1.75 2.75 5.74 2.75 10.66V13.77M12.27 21.99C12.27 22.32 12 22.59 11.67 22.59C11.34 22.59 11.07 22.32 11.07 21.99M12.27 21.99C12.27 21.66 12 21.39 11.67 21.39C11.34 21.39 11.07 21.66 11.07 21.99M12.27 21.99H11.07M20.57 14.76V12.96C20.57 12.13 20.57 11.71 20.43 11.39C20.25 10.95 19.9 10.61 19.47 10.43C19.14 10.29 18.73 10.29 17.9 10.29C17.07 10.29 16.65 10.29 16.33 10.43C15.89 10.61 15.55 10.96 15.37 11.39C15.23 11.72 15.23 12.13 15.23 12.96V14.76C15.23 15.59 15.23 16.01 15.37 16.33C15.55 16.77 15.9 17.11 16.33 17.29C16.66 17.43 17.07 17.43 17.9 17.43C18.73 17.43 19.15 17.43 19.47 17.29C19.91 17.11 20.25 16.76 20.43 16.33C20.57 16 20.57 15.59 20.57 14.76ZM5.43 17.43C6.26 17.43 6.68 17.43 7 17.29C7.44 17.11 7.78 16.76 7.96 16.33C8.1 16 8.1 15.59 8.1 14.76V12.96C8.1 12.13 8.1 11.71 7.96 11.39C7.78 10.95 7.43 10.61 7 10.43C6.67 10.29 6.26 10.29 5.43 10.29C4.6 10.29 4.18 10.29 3.86 10.43C3.42 10.61 3.08 10.96 2.9 11.39C2.76 11.72 2.76 12.13 2.76 12.96V14.76C2.76 15.59 2.76 16.01 2.9 16.33C3.08 16.77 3.43 17.11 3.86 17.29C4.19 17.43 4.6 17.43 5.43 17.43Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="column__content">
                      <p class="column__title heading font-medium leading-tight tracking-none">
                        Customer Service
                      </p>
                      <div class="column__text rte">
                        <p>
                          Discover exceptional service with our dedicated
                          customer support team.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="column flex gap-5 w-full flex-col xl:flex-row xl:text-left text-center">
                    <div class="column__icon">
                      <svg
                        class="icon icon-box icon-lg inline-block"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="fill"
                          d="M22 14.2825V7.28202C22 7.10718 21.9083 6.94515 21.7583 6.8552C21.5995 6.75991 21.4009 6.76067 21.2429 6.85718L14.5012 10.9731C13.5927 11.5278 13.1384 11.8052 12.6525 11.9135C12.2228 12.0092 11.7772 12.0092 11.3475 11.9135C10.8616 11.8052 10.4073 11.5278 9.49878 10.9731L2.75714 6.85718C2.59906 6.76067 2.40048 6.75991 2.24166 6.8552C2.09174 6.94515 2 7.10718 2 7.28202V14.2825C2 15.2735 2 15.769 2.14219 16.2143C2.26802 16.6083 2.47396 16.972 2.74708 17.2826C3.05572 17.6336 3.48062 17.8886 4.33042 18.3984L9.53042 21.5184C10.4283 22.0572 10.8773 22.3266 11.3565 22.4318C11.7805 22.5249 12.2195 22.5249 12.6435 22.4318C13.1227 22.3266 13.5717 22.0572 14.4696 21.5184L19.6696 18.3984C20.5194 17.8886 20.9443 17.6336 21.2529 17.2826C21.526 16.972 21.732 16.6083 21.8578 16.2143C22 15.769 22 15.2735 22 14.2825Z"
                        />
                        <path
                          d="M7.49988 9.5L16.5 4M12 12.5L21 7M12 12.5L3 7M12 12.5V22.5M2 9.71771V14.2823C2 15.2733 2 15.7688 2.14219 16.2141C2.26802 16.6081 2.47396 16.9718 2.74708 17.2824C3.05572 17.6334 3.48062 17.8884 4.33042 18.3983L9.53042 21.5183C10.4283 22.057 10.8773 22.3264 11.3565 22.4316C11.7805 22.5247 12.2195 22.5247 12.6435 22.4316C13.1227 22.3264 13.5717 22.057 14.4696 21.5183L19.6696 18.3983C20.5194 17.8884 20.9443 17.6334 21.2529 17.2824C21.526 16.9718 21.732 16.6081 21.8578 16.2141C22 15.7688 22 15.2733 22 14.2823V9.71771C22 8.72669 22 8.23117 21.8578 7.78593C21.732 7.39192 21.526 7.02818 21.2529 6.71757C20.9443 6.36657 20.5194 6.11163 19.6696 5.60175L14.4696 2.48175C13.5717 1.94301 13.1227 1.67364 12.6435 1.56839C12.2195 1.4753 11.7805 1.4753 11.3565 1.56839C10.8773 1.67364 10.4283 1.94301 9.53042 2.48175L4.33042 5.60175C3.48062 6.11163 3.05572 6.36657 2.74708 6.71757C2.47396 7.02818 2.26802 7.39192 2.14219 7.78593C2 8.23117 2 8.72669 2 9.71771Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="column__content">
                      <p class="column__title heading font-medium leading-tight tracking-none">
                        Efficient Shipping
                      </p>
                      <div class="column__text rte">
                        <p>
                          Experience swift and reliable delivery for your
                          convenience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="column flex gap-5 w-full flex-col xl:flex-row xl:text-left text-center">
                    <div class="column__icon">
                      <svg
                        class="icon icon-calendar icon-lg inline-block"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          class="fill"
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="4"
                        />
                        <path
                          d="M8 1V4M16 1V4M17.5 8H6.5M8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5M8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5M8 12.5H7M8 16.5C8 16.7761 7.77614 17 7.5 17C7.22386 17 7 16.7761 7 16.5M8 16.5C8 16.2239 7.77614 16 7.5 16C7.22386 16 7 16.2239 7 16.5M8 16.5H7M12.5 12.5C12.5 12.7761 12.2761 13 12 13C11.7239 13 11.5 12.7761 11.5 12.5M12.5 12.5C12.5 12.2239 12.2761 12 12 12C11.7239 12 11.5 12.2239 11.5 12.5M12.5 12.5H11.5M12.5 16.5C12.5 16.7761 12.2761 17 12 17C11.7239 17 11.5 16.7761 11.5 16.5M12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5M12.5 16.5H11.5M17 12.5C17 12.7761 16.7761 13 16.5 13C16.2239 13 16 12.7761 16 12.5M17 12.5C17 12.2239 16.7761 12 16.5 12C16.2239 12 16 12.2239 16 12.5M17 12.5H16M17 16.5C17 16.7761 16.7761 17 16.5 17C16.2239 17 16 16.7761 16 16.5M17 16.5C17 16.2239 16.7761 16 16.5 16C16.2239 16 16 16.2239 16 16.5M17 16.5H16M8.4 22H15.6C17.8402 22 18.9603 22 19.816 21.564C20.5686 21.1805 21.1805 20.5686 21.564 19.816C22 18.9603 22 17.8402 22 15.6V8.4C22 6.15979 22 5.03968 21.564 4.18404C21.1805 3.43139 20.5686 2.81947 19.816 2.43597C18.9603 2 17.8402 2 15.6 2H8.4C6.15979 2 5.03968 2 4.18404 2.43597C3.43139 2.81947 2.81947 3.43139 2.43597 4.18404C2 5.03968 2 6.15979 2 8.4V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03968 22 6.15979 22 8.4 22Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="column__content">
                      <p class="column__title heading font-medium leading-tight tracking-none">
                        1 Year Replacement Warranty
                      </p>
                      <div class="column__text rte">
                        <p>Stay secure with our 1 Year Replacement Warranty</p>
                      </div>
                    </div>
                  </div>
                  <div class="column flex gap-5 w-full flex-col xl:flex-row xl:text-left text-center">
                    <div class="column__icon">
                      <svg
                        class="icon icon-shield icon-lg inline-block"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="fill"
                          d="M3 8.11938C3 6.99027 3 6.42571 3.17756 5.93283C3.33451 5.49716 3.59019 5.10373 3.92457 4.78337C4.30286 4.42093 4.81875 4.19165 5.85055 3.73308L9.40073 2.15523C10.3579 1.72982 10.8365 1.51712 11.334 1.43311C11.7749 1.35866 12.2251 1.35866 12.666 1.43311C13.1635 1.51712 13.6421 1.72982 14.5993 2.15523L18.1495 3.73308C19.1812 4.19165 19.6971 4.42093 20.0754 4.78337C20.4098 5.10373 20.6655 5.49716 20.8224 5.93283C21 6.42571 21 6.99027 21 8.11938V13.5748C21 14.8271 21 15.4532 20.8274 16.0216C20.6746 16.5247 20.4241 16.9928 20.0902 17.3991C19.713 17.858 19.192 18.2053 18.1501 18.8999L14.6626 21.2249C13.7003 21.8665 13.2192 22.1872 12.6991 22.3118C12.2395 22.422 11.7605 22.422 11.3009 22.3118C10.7808 22.1872 10.2997 21.8665 9.33744 21.2249L5.84992 18.8999C4.80796 18.2053 4.28697 17.858 3.90982 17.3991C3.57592 16.9928 3.32541 16.5247 3.1726 16.0216C3 15.4532 3 14.8271 3 13.5748V8.11938Z"
                        />
                        <path
                          d="M9 12L11 14L15.5 9.5M9.40073 2.15523L5.85055 3.73308C4.81875 4.19165 4.30286 4.42093 3.92457 4.78337C3.59019 5.10373 3.33451 5.49716 3.17756 5.93283C3 6.42571 3 6.99027 3 8.11938V13.5748C3 14.8271 3 15.4532 3.1726 16.0216C3.32541 16.5247 3.57592 16.9928 3.90982 17.3991C4.28697 17.858 4.80796 18.2053 5.84992 18.8999L9.33744 21.2249C10.2997 21.8665 10.7808 22.1872 11.3009 22.3118C11.7605 22.422 12.2395 22.422 12.6991 22.3118C13.2192 22.1872 13.7003 21.8665 14.6626 21.2249L18.1501 18.8999C19.192 18.2053 19.713 17.858 20.0902 17.3991C20.4241 16.9928 20.6746 16.5247 20.8274 16.0216C21 15.4532 21 14.8271 21 13.5748V8.11938C21 6.99027 21 6.42571 20.8224 5.93283C20.6655 5.49716 20.4098 5.10373 20.0754 4.78337C19.6971 4.42093 19.1812 4.19165 18.1495 3.73308L14.5993 2.15523C13.6421 1.72982 13.1635 1.51712 12.666 1.43311C12.2251 1.35866 11.7749 1.35866 11.334 1.43311C10.8365 1.51712 10.3579 1.72982 9.40073 2.15523Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="column__content">
                      <p class="column__title heading font-medium leading-tight tracking-none">
                        Secure Payment
                      </p>
                      <div class="column__text rte">
                        <p>Your payment information is processed securely.</p>
                      </div>
                    </div>
                  </div>
                </carousel-element>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-sections--15951473213521__footer"
            class="shopify-section shopify-section-group-footer-group"
          >
            <div
              class="section section--padding section--rounded"
              is="footer-parallax"
            >
              <footer class="footer page-width relative grid">
                <div class="footer__left flex flex-col md:flex-row gap-10">
                  <div class="footer__logo flex flex-col gap-10">
                    <p class="inline-flex leading-none">
                      <a href="/">
                        <span class="sr-only">Barsys</span>
                        <Image
                          src={require("../../../assets/images/Barsys-icon-white.png")}
                          alt=""
                          loading="eager"
                          width={49.00519031141869}
                          height={55}
                        />
                      </a>
                    </p>
                  </div>
                  <div class="footer__accordions flex flex-wrap flex-col md:flex-row md:grow md:gap-12">
                    {linkData.map((section, index) => {
                      return (
                        <details
                          class={`footer__item--link_list-${
                            index + 1
                          } details active`}
                          is="footer-details"
                          open
                        >
                          <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                            <span class="text-base-2xl font-medium">
                              {section.title}
                            </span>
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
                          </summary>
                          <div class="details__content">
                            <ul class="flex flex-col gap-3">
                              {section.links.map((link, id) => (
                                <li key={id} className="inline-flex">
                                    <Link
                                        href={link.href}
                                        className="block reversed-link text-sm-lg leading-tight"
                                    >
                                    {link.label}
                                    </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </details>
                      );
                    })}
                    {/* <details
                      class="footer__item--link_list-1 details active"
                      is="footer-details"
                      open
                    >
                      <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                        <span class="text-base-2xl font-medium">
                          Quick Links
                        </span>
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
                      </summary>
                      <div class="details__content">
                        <ul class="flex flex-col gap-3">
                          <li class="inline-flex">
                            <a
                              href="collections.html"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Products
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="collection-recipes.html"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              All Recipes
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="mixlist.html"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Mixlists
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="bars.html"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Bars
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="blog-list.html"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Blogs
                            </a>
                          </li>
                        </ul>
                      </div>
                    </details>
                    <details
                      class="footer__item--link_list-2 details active"
                      is="footer-details"
                      open
                    >
                      <summary class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                        <span class="text-base-2xl font-medium">
                          Information
                        </span>
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
                      </summary>
                      <div class="details__content">
                        <ul class="flex flex-col gap-3">
                          <li class="inline-flex">
                            <a
                              href="our-story.html"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Our Story
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="contact.html"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Contact us
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="#"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Shipping Policy
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="#"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Refund Policy
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="#"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Privacy Policy
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="#"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Terms of Service
                            </a>
                          </li>
                          <li class="inline-flex">
                            <a
                              href="#"
                              class="block reversed-link text-sm-lg leading-tight"
                            >
                              Pre-Order Terms and Conditions
                            </a>
                          </li>
                        </ul>
                      </div>
                    </details> */}
                    <div class="footer__item--brand_information no-details">
                      <div class="details__content">
                        <div class="footer__contact flex flex-col gap-1">
                          <p>
                            <a
                              class="link inline-block leading-tight text-left"
                              href="tel:+918448399200"
                              is="magnet-link"
                            >
                              <span class="btn-text" data-text>
                                +91 84483 99200
                              </span>
                            </a>
                          </p>
                          <p>
                            <a
                              class="link inline-block leading-tight text-left"
                              href="mailto:support@thebarsys.com"
                              is="magnet-link"
                            >
                              <span class="btn-text" data-text>
                                support@thebarsys.com
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer__right grid gap-10">
                  <div class="footer__newsletter grid gap-6">
                    <p class="h3 text-xl leading-none tracking-none font-medium lg:font-bold">
                      Subscribe to our newsletter
                    </p>
                    <form
                      method="post"
                      action="/contact#newsletter-sections--15951473213521__footer"
                      id="newsletter-sections--15951473213521__footer"
                      accept-charset="UTF-8"
                      class="newsletter-form grid gap-5"
                    >
                      <input type="hidden" name="form_type" value="customer" />
                      <input type="hidden" name="utf8" value="✓" />
                      <input
                        type="hidden"
                        name="contact[tags]"
                        value="newsletter"
                      />
                      <input
                        type="hidden"
                        name="contact[context]"
                        value="footer"
                      />
                      <div class="field relative">
                        <input
                          id="NewsletterForm--sections--15951473213521__footer"
                          class="input is-floating input--fill"
                          type="email"
                          name="contact[email]"
                          value=""
                          autocorrect="off"
                          autocapitalize="off"
                          autocomplete="email"
                          placeholder="Enter your email"
                          required
                        />
                        <label
                          class="label is-floating"
                          for="NewsletterForm--sections--15951473213521__footer"
                        >
                          Keep me notified
                        </label>
                        <div class="self-submit-button absolute">
                          <button
                            type="submit"
                            class="button button--primary self-button flex justify-center items-center"
                            is="magnet-button"
                            data-magnet="20"
                            aria-label="Subscribe"
                          >
                            <span class="btn-text">
                              <svg
                                class="icon icon-arrow-right icon-xs transform"
                                viewBox="0 0 16 16"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2 8.00012H14M14 8.00012L9.33333 3.3335M14 8.00012L9.33333 12.6668"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="footer__socials flex justify-start md:justify-end xl:justify-start">
                    <ul class="flex flex-wrap items-center gap-7">
                      <li>
                        <a
                          href="https://www.facebook.com/thebarsys/"
                          class="social_platform block relative"
                          is="magnet-link"
                          title="Barsys on Facebook"
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
                          <span class="sr-only">Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/barsyscocktail"
                          class="social_platform block relative"
                          is="magnet-link"
                          title="Barsys on Twitter"
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
                          <span class="sr-only">Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/barsys.inc/"
                          class="social_platform block relative"
                          is="magnet-link"
                          title="Barsys on Instagram"
                        >
                          <svg
                            class="icon icon-instagram icon-lg"
                            viewBox="0 0 24 24"
                            stroke="none"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2.98C14.94 2.98 15.28 2.99 16.44 3.04C17.14 3.04 17.83 3.18 18.48 3.42C18.96 3.6 19.39 3.88 19.75 4.24C20.12 4.59 20.4 5.03 20.57 5.51C20.81 6.16 20.94 6.85 20.95 7.55C21 8.71 21.01 9.06 21.01 12C21.01 14.94 21 15.28 20.95 16.44C20.95 17.14 20.81 17.83 20.57 18.48C20.39 18.95 20.11 19.39 19.75 19.75C19.39 20.11 18.96 20.39 18.48 20.57C17.83 20.81 17.14 20.94 16.44 20.95C15.28 21 14.93 21.01 12 21.01C9.07 21.01 8.72 21 7.55 20.95C6.85 20.95 6.16 20.81 5.51 20.57C5.03 20.39 4.6 20.11 4.24 19.75C3.87 19.4 3.59 18.96 3.42 18.48C3.18 17.83 3.05 17.14 3.04 16.44C2.99 15.28 2.98 14.93 2.98 12C2.98 9.07 2.99 8.72 3.04 7.55C3.04 6.85 3.18 6.16 3.42 5.51C3.6 5.03 3.88 4.6 4.24 4.24C4.59 3.87 5.03 3.59 5.51 3.42C6.16 3.18 6.85 3.05 7.55 3.04C8.71 2.99 9.06 2.98 12 2.98ZM12 1C9.01 1 8.64 1.01 7.47 1.07C6.56 1.09 5.65 1.26 4.8 1.58C4.07 1.86 3.4 2.3 2.85 2.85C2.3 3.41 1.86 4.07 1.58 4.8C1.26 5.65 1.09 6.56 1.07 7.47C1.02 8.64 1 9.01 1 12C1 14.99 1.01 15.36 1.07 16.53C1.09 17.44 1.26 18.35 1.58 19.2C1.86 19.93 2.3 20.6 2.85 21.15C3.41 21.7 4.07 22.14 4.8 22.42C5.65 22.74 6.56 22.91 7.47 22.93C8.64 22.98 9.01 23 12 23C14.99 23 15.36 22.99 16.53 22.93C17.44 22.91 18.35 22.74 19.2 22.42C19.93 22.14 20.6 21.7 21.15 21.15C21.7 20.59 22.14 19.93 22.42 19.2C22.74 18.35 22.91 17.44 22.93 16.53C22.98 15.36 23 14.99 23 12C23 9.01 22.99 8.64 22.93 7.47C22.91 6.56 22.74 5.65 22.42 4.8C22.14 4.07 21.7 3.4 21.15 2.85C20.59 2.3 19.93 1.86 19.2 1.58C18.35 1.26 17.44 1.09 16.53 1.07C15.36 1.02 14.99 1 12 1ZM12 6.35C10.88 6.35 9.79 6.68 8.86 7.3C7.93 7.92 7.21 8.8 6.78 9.84C6.35 10.87 6.24 12.01 6.46 13.1C6.68 14.2 7.22 15.2 8.01 15.99C8.8 16.78 9.81 17.32 10.9 17.54C12 17.76 13.13 17.65 14.16 17.22C15.19 16.79 16.07 16.07 16.7 15.14C17.32 14.21 17.65 13.12 17.65 12C17.65 10.5 17.05 9.06 16 8.01C14.94 6.95 13.5 6.36 12.01 6.36L12 6.35ZM12 15.67C11.27 15.67 10.57 15.45 9.96 15.05C9.36 14.65 8.89 14.07 8.61 13.4C8.33 12.73 8.26 11.99 8.4 11.28C8.54 10.57 8.89 9.92 9.4 9.4C9.91 8.88 10.57 8.54 11.28 8.4C11.99 8.26 12.73 8.33 13.4 8.61C14.07 8.89 14.64 9.36 15.05 9.96C15.45 10.56 15.67 11.27 15.67 12C15.67 12.97 15.28 13.91 14.6 14.59C13.91 15.28 12.98 15.66 12.01 15.66L12 15.67ZM17.87 7.45C18.6 7.45 19.19 6.86 19.19 6.13C19.19 5.4 18.6 4.81 17.87 4.81C17.14 4.81 16.55 5.4 16.55 6.13C16.55 6.86 17.14 7.45 17.87 7.45Z" />
                          </svg>
                          <span class="sr-only">Instagram</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@TheBarsys"
                          class="social_platform block relative"
                          is="magnet-link"
                          title="Barsys on YouTube"
                        >
                          <svg
                            class="icon icon-youtube icon-lg"
                            viewBox="0 0 24 24"
                            stroke="none"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.8 7.6C23.8 7.6 23.6 5.9 22.8 5.2C21.9 4.2 20.9 4.2 20.4 4.2C17 4 12 4 12 4C12 4 7 4 3.6 4.2C3.1 4.3 2.1 4.3 1.2 5.2C0.5 5.9 0.2 7.6 0.2 7.6C0.2 7.6 0 9.5 0 11.5V13.3C0 15.2 0.2 17.2 0.2 17.2C0.2 17.2 0.4 18.9 1.2 19.6C2.1 20.6 3.3 20.5 3.8 20.6C5.7 20.8 12 20.8 12 20.8C12 20.8 17 20.8 20.4 20.5C20.9 20.4 21.9 20.4 22.8 19.5C23.5 18.8 23.8 17.1 23.8 17.1C23.8 17.1 24 15.2 24 13.2V11.4C24 9.5 23.8 7.6 23.8 7.6ZM9.5 15.5V8.8L16 12.2L9.5 15.5Z" />
                          </svg>
                          <span class="sr-only">YouTube</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.pinterest.com/barsyscoaster/"
                          class="social_platform block relative"
                          is="magnet-link"
                          title="Barsys on Pinterest"
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
                          <span class="sr-only">Pinterest</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
              <parallax-overlay
                class="footer-overlay hidden md:block z-20 absolute left-0 top-0 w-full pointer-events-none"
                data-target="height"
                data-start="100%"
                data-stop="0%"
              ></parallax-overlay>
            </div>
          </div>
          <div
            id="shopify-section-sections--15951473213521__footer-copyright"
            class="shopify-section shopify-section-group-footer-group"
          >
            <div class="section section--rounded" is="footer-parallax">
              <div class="footer-copyright page-width page-width--full w-full flex flex-col items-center justify-between gap-4 lg:gap-0 lg:flex-row relative">
                <div class="rte credits text-center">
                  &copy;&nbsp;2024&nbsp;Barsys.&nbsp;
                  <a target="_blank" rel="nofollow" href="#">
                    Powered by Shopify
                  </a>
                  <ul class="flex gap-3 justify-center lg:justify-start">
                    <li>
                      <small>
                        <a href="#" class="block reversed-link">
                          Refund policy
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a href="#" class="block reversed-link">
                          Privacy policy
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a href="#" class="block reversed-link">
                          Terms of service
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a href="#" class="block reversed-link">
                          Shipping policy
                        </a>
                      </small>
                    </li>
                  </ul>
                </div>
                <div class="localization flex items-center justify-center flex-col md:flex-row">
                  <div class="grid gap-2">
                    <form
                      method="post"
                      action="/localization"
                      id="localization_country_form_footer"
                      accept-charset="UTF-8"
                      class="localization__form flex items-center relative"
                      enctype="multipart/form-data"
                      is="localization-form"
                    >
                      <input
                        type="hidden"
                        name="form_type"
                        value="localization"
                      />
                      <input type="hidden" name="utf8" value="✓" />
                      <input type="hidden" name="_method" value="put" />
                      <input type="hidden" name="return_to" value="/" />
                      <label
                        class="sr-only"
                        for="LocalizationCountryFormFooter"
                      >
                        Country/region
                      </label>
                      <svg
                        class="icon icon-currency icon-xs stroke-1 absolute pointer-events-none"
                        viewBox="0 0 16 16"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M0.666687 2.66675V5.33341C0.666687 6.43808 2.45735 7.33341 4.66669 7.33341C6.87602 7.33341 8.66669 6.43808 8.66669 5.33341V2.66675"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M0.666687 5.3335V8.00016C0.666687 9.10483 2.45735 10.0002 4.66669 10.0002C5.69135 10.0002 6.62535 9.80683 7.33335 9.49016"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M0.666687 8V10.6667C0.666687 11.7713 2.45735 12.6667 4.66669 12.6667C5.69135 12.6667 6.62602 12.474 7.33335 12.1573"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.66669 4.66675C6.87583 4.66675 8.66669 3.77132 8.66669 2.66675C8.66669 1.56218 6.87583 0.666748 4.66669 0.666748C2.45755 0.666748 0.666687 1.56218 0.666687 2.66675C0.666687 3.77132 2.45755 4.66675 4.66669 4.66675Z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.33337 8V10.6667C7.33337 11.7713 9.12404 12.6667 11.3334 12.6667C13.5427 12.6667 15.3334 11.7713 15.3334 10.6667V8"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.33337 10.6667V13.3334C7.33337 14.4381 9.12404 15.3334 11.3334 15.3334C13.5427 15.3334 15.3334 14.4381 15.3334 13.3334V10.6667"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.3334 10C13.5425 10 15.3334 9.10457 15.3334 8C15.3334 6.89543 13.5425 6 11.3334 6C9.12424 6 7.33337 6.89543 7.33337 8C7.33337 9.10457 9.12424 10 11.3334 10Z"
                        ></path>
                      </svg>
                      <select
                        class="localization__item cursor-pointer leading-tight w-full"
                        name="country_code"
                        id="LocalizationCountryFormFooter"
                      >
                        <option value="CA">Canada (INR ₹)</option>
                        <option value="DE">Germany (INR ₹)</option>
                        <option value="IN" selected>
                          India (INR ₹)
                        </option>
                        <option value="IL">Israel (INR ₹)</option>
                        <option value="NZ">New Zealand (INR ₹)</option>
                        <option value="GB">United Kingdom (INR ₹)</option>
                        <option value="US">United States (INR ₹)</option>
                      </select>
                      <svg
                        class="icon icon-chevron-down icon-xs absolute pointer-events-none"
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
                    </form>
                    <noscript>
                      <button
                        class="button button--primary button--small w-full"
                        type="submit"
                        form="localization_country_form_footer"
                      >
                        Update country/region
                      </button>
                    </noscript>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer-group>
      </div>
    </>
  );
};
