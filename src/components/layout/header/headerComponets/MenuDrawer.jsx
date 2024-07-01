"use client";
import React from "react";

const MenuDrawer = ({ mobileMen,setMobileMenu }) => {
  console.log(mobileMen, "mobileMen,wwwww");
  return (
    <menu-drawer
      id="MenuDrawer"
      class={`menu-drawer drawer drawer--start z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none ${mobileMen ? 'active' : 'hidden'}`}
      data-section-id="sections--15951466070097__header"
      open={mobileMen ? true : false}
      active={mobileMen ? true : false}
      
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
            aria-expanded={mobileMen?"true":"false"}
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
  );
};

export default MenuDrawer;
