"use client";
import Image from "next/image";
import React, { useState } from "react";
import Shop from "./Shop";
import Explore from "./Explore";
import AboutUs from "./AboutUs";
const MagnetElement = ({ data }) => {
  const menuTab = ["Shop", "Explore", "About Us","Blogs"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabs, setActiveTabs] = useState(null);
  const handleMouseEnter = (index) => {
    setIsOpen(true);
    setActiveTabs(index);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveTabs(null)
  };
  return (
    <ul class="flex flex-wrap list-menu with-block">
      {menuTab?.map((items, index) => {
        return (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <details
              is="details-mega"
              trigger="hover"
              level="top"
              open={activeTabs === index}
            >
              <summary >
                <div
                  class="menu__item text-sm-lg flex items-center font-medium z-2 relative cursor-pointer"
                  data-magnet="0"
                >
                  <span class="btn-text" data-text>
                    {items}
                  </span>
                  <span class="btn-text btn-duplicate">{items}</span>
                </div>
              </summary>
              {
                activeTabs==0 && <Shop />
              }
               {
                activeTabs==1 && <Explore />
              }
              {
                activeTabs==2 && <AboutUs />
              }
            </details>
          </li>
        );
      })}
    </ul>
  );
};

export default MagnetElement;
