import React, { useState } from "react";
import "@/components/layout/header/headerStyle.css";
import Image from "next/image";
import AnnoucementBar from "@/components/homePageComponents/AnnoucementBar";
import MagnetElement from "./headerComponets/MagnetElement";
import UseScroll from "@/components/scroll/UseScroll";
export const Header = () => {
  const [scroll,setScroll]= useState(false);
  UseScroll((scrollTop) => {
    if (scrollTop > 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const menuData=[
        {
        titile:"Shop",
        list:[
          {
            titleData:[
              {
                subMenuTitle:'Cocktail Maker',
                subMenu:[
                  "Barsys 2.0+",
                  "Barsys 360",
                  "Barsys 360",
                  "Coaster 2.0"
                ]
              },
              {
                subMenuTitle:'Bar Accessories Kit (Coming Soon)',
                subMenu:[
                  "Classic Bar Kit",
                  "Mixologist Bar Kit",
                  "Artisan Bar Kit",
                ]
              },
              {
                subMenuTitle:'Accessories',
                subMenu:[
                  "Wireless Mixer",
                  "2.0 Bottle Mounts",
                ]
              },
            ],
            bottom:"View All Products"
          },
          {
            productTitle:'Barsys 360',
            productContent:"Elevate Your Cocktail Game: Barsys 360",
            imgUrl:require("../../../assets/images/Barsys_360_header.jpg"),
            productLinkUrl:"product-details"
          },
          {
            productTitle:'Coaster 2.0',
            productContent:"Mixology Made Effortless: Barsys Coaster 2.0",
            productImgUrl:require("../../../assets/images/Barsys_Coaster_header.jpg"),
            productLinkUrl:"product-details"
          }
        ]
      },
      {
        titile:"Explore",
        list:[
          {
                
            subMenuTitle:'Bars',
            count:"5",
            content:'See all the bars we work with',
            imgUrl:require("../../../assets/images/Explore_bars.jpg"),
          },
          {
            subMenuTitle:'All Recipes',
            count:"27",
            content:'Check out all our recipes',
            imgUrl:require("../../../assets/images/Explore_Mixologist.jpg"),
            linkUrl:"collection-recipes"
          },
          {
            
            subMenuTitle:'Mixlists',
            count:"4",
            content:'Explore all our mixlists',
            imgUrl:require("../../../assets/images/Explore_Mixlist.jpg"),
            linkUrl:"mixlist"
          },
          {
            
            subMenuTitle:'All Collections',
            count:"85",
            content:'Check out all our collections',
            imgUrl:require("../../../assets/images/Explore_all_recipes.jpg"),
            linkUrl:"collection-recipes"
          },
        ]
      },
      {
        titile:"About Us",
        list:[
          {
           title: "Our Story",
           linkUrl:"our-story"
          },
          {
            title: "Our Technology",
            linkUrl:"technology"
           },
           {
            title: " FAQ's",
            linkUrl:"faqs"
           }
        ]
      },
      {
        titile:"Blogs",
        titileLink:"blog-list"
      },
  ]
  const images = [
    {
      src: require("../../../assets/images/Barsys-icon-black.png"),
      alt: "",
      loading: "eager",
      style: { maxHeight: "68.53754940711462px", maxWidth: "60px" },
      itemProp: "logo",
      class: "logo hidden md:block",
    },
    {
      src: require("../../../assets/images/Barsys-icon-black.png"),
      alt: "",
      loading: "eager",
      style: { maxHeight: "45.691699604743086px", maxWidth: "40px" },
      itemProp: "logo",
      class: "logo md:hidden",
    },
    {
      src: require("../../../assets/images/Barsys-icon-white.png"),
      alt: "",
      loading: "eager",
      style: { maxHeight: "67.33980582524272px", maxWidth: "60px" },
      itemProp: "logo",
      class: "white-logo hidden md:block absolute",
    },
    {
      src: require("../../../assets/images/Barsys-icon-white.png"),
      alt: "",
      loading: "eager",
      style: { maxHeight: "44.89320388349514px", maxWidth: "40px" },
      itemProp: "logo",
      class: "white-logo md:hidden absolute",
    },
  ];
  return (
    <>
      <div
        id="shopify-section-sections--15951466070097__announcement-bar"
        class="shopify-section shopify-section-group-header-group topbar-section"
      >
        <div class="topbar topbar--center page-width page-width--full z-20 relative grid py-0 h-full w-full items-center">
          <div class="social-icons hidden lg:flex items-center">
            <ul class="flex flex-wrap items-center gap-6">
              <li>
                <a
                  href="https://www.facebook.com/thebarsys/"
                  class="social_platform block relative"
                  is="magnet-link"
                  title="Barsys on Facebook"
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
                    class="icon icon-twitter icon-sm"
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
                    class="icon icon-instagram icon-sm"
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
                    class="icon icon-youtube icon-sm"
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
                    class="icon icon-pinterest icon-sm"
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
          <AnnoucementBar />
          <span class="corner left bottom flex absolute pointer-events-none">
            <svg
              class="w-full h-auto"
              viewBox="0 0 101 101"
              stroke="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z"
              ></path>
              <path d="M1 101C1 45.7715 45.7715 1 101 1" fill="none"></path>
            </svg>
          </span>
          <span class="corner right bottom flex absolute pointer-events-none">
            <svg
              class="w-full h-auto"
              viewBox="0 0 101 101"
              stroke="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z"
              ></path>
              <path d="M1 101C1 45.7715 45.7715 1 101 1" fill="none"></path>
            </svg>
          </span>
        </div>
      </div>
      <div
        id="shopify-section-sections--15951466070097__header"
        class={`shopify-section shopify-section-group-header-group header-section ${scroll?"header-sticky":""}`}
      >
        <menu-drawer
          id="MenuDrawer"
          class="menu-drawer drawer drawer--start z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
          data-section-id="sections--15951466070097__header"
          hidden
        >
          <overlay-element
            class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
            aria-controls="MenuDrawer"
            aria-expanded="false"
          ></overlay-element>
          <div class="drawer__inner z-10 absolute top-0 flex flex-col w-full h-full overflow-hidden">
            <gesture-element class="drawer__header flex items-center justify-between opacity-0 invisible relative">
              <span class="drawer__title heading lg:text-3xl text-2xl font-bold leading-none tracking-tight"></span>
              <button
                class="button button--secondary button--close drawer__close hidden sm:flex items-center justify-center"
                type="button"
                is="hover-button"
                aria-controls="MenuDrawer"
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
                </span>
              </button>
            </gesture-element>
          </div>
        </menu-drawer>
        <header
          data-section-id="sections--15951466070097__header"
          class="header header--left-center mobile:header--center page-width page-width--full section--padding grid items-center z-20 relative w-full"
          is="sticky-header"
          data-sticky-type="always"
        >
          <div class="header__icons header__icons--start flex justify-start z-1">
            <div class="header__buttons flex items-center gap-1d5">
              <a
                href="#"
                class="search-drawer-button flex items-center justify-center"
                is="magnet-link"
                aria-controls="SearchDrawer"
                aria-expanded="false"
              >
                <span class="sr-only">Search</span>
                <svg
                  class="icon icon-search icon-lg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    d="m21 21-3.636-3.636m0 0A9 9 0 1 0 4.636 4.636a9 9 0 0 0 12.728 12.728Z"
                  ></path>
                </svg>
              </a>
              <button
                class="menu-drawer-button flex items-center justify-center"
                type="button"
                is="magnet-button"
                aria-controls="MenuDrawer"
                aria-expanded="false"
              >
                <span class="sr-only">Site navigation</span>
                <svg
                  class="icon icon-hamburger icon-lg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    d="M3 6H21M3 12H11M3 18H16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <h1
            class="header__logo flex justify-center z-1"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <span class="sr-only">Barsys</span>
            <a
              href="/"
              itemProp="url"
              class="header__logo-link has-white-logo flex items-center relative"
            >
              <span class="sr-only">Barsys</span>
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  loading={image.loading}
                  style={image.style}
                  itemProp={image.itemProp}
                  class={image.class}
                />
              ))}{" "}
            </a>
          </h1>
          <div class="header__navigation hidden lg:flex lg:gap-5 lg:justify-start">
            <nav
              class="header__menu hidden lg:flex"
              role="navigation"
              aria-label="Primary"
            >
              <MagnetElement />
            </nav>
          </div>
          <div class="header__icons header__icons--end flex justify-end z-1">
            <div class="header__buttons flex items-center gap-1d5">
              <a
                href="#"
                class="search-drawer-button flex items-center justify-center"
                is="magnet-link"
                aria-controls="SearchDrawer"
                aria-expanded="false"
              >
                <span class="sr-only">Search</span>
                <svg
                  class="icon icon-search icon-lg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    d="m21 21-3.636-3.636m0 0A9 9 0 1 0 4.636 4.636a9 9 0 0 0 12.728 12.728Z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="cart-drawer-button flex items-center justify-center relative"
                is="magnet-link"
                aria-controls="CartDrawer"
                aria-expanded="false"
                data-no-instant
              >
                <span class="sr-only">Cart</span>
                <svg
                  class="icon icon-cart icon-lg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 1h.5v0c.226 0 .339 0 .44.007a3 3 0 0 1 2.62 1.976c.034.095.065.204.127.42l.17.597m0 0 1.817 6.358c.475 1.664.713 2.496 1.198 3.114a4 4 0 0 0 1.633 1.231c.727.297 1.592.297 3.322.297h2.285c1.75 0 2.626 0 3.359-.302a4 4 0 0 0 1.64-1.253c.484-.627.715-1.472 1.175-3.161l.06-.221c.563-2.061.844-3.092.605-3.906a3 3 0 0 0-1.308-1.713C19.92 4 18.853 4 16.716 4H4.857ZM12 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  ></path>
                </svg>
                <cart-count
                  class="count absolute top-0 right-0 text-xs"
                  aria-label="0 items"
                  hidden
                >
                  0
                </cart-count>
              </a>
              <button
                class="menu-drawer-button flex items-center justify-center"
                type="button"
                is="magnet-button"
                aria-controls="MenuDrawer"
                aria-expanded="false"
              >
                <span class="sr-only">Site navigation</span>
                <svg
                  class="icon icon-hamburger icon-lg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    d="M3 6H21M3 12H11M3 18H16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <span class="header__corner corner left bottom flex absolute pointer-events-none">
            <svg
              class="w-full h-auto"
              viewBox="0 0 101 101"
              stroke="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z"
              ></path>
              <path d="M1 101C1 45.7715 45.7715 1 101 1" fill="none"></path>
            </svg>
          </span>
          <span class="header__corner corner right bottom flex absolute pointer-events-none">
            <svg
              class="w-full h-auto"
              viewBox="0 0 101 101"
              stroke="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z"
              ></path>
              <path d="M1 101C1 45.7715 45.7715 1 101 1" fill="none"></path>
            </svg>
          </span>
          <span class="header__cutout cutout opacity-0 absolute left-0 top-100 w-full pointer-events-none"></span>
        </header>
        <span class="overlay opacity-0 fixed left-0 w-full pointer-events-none"></span>
      </div>
    </>
  );
};
