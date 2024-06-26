import React from "react";
import "./blogs.css";
import Link from "next/link";
import Image from "next/image";
const BlogContent = () => {
  const BlogListData = [
    {
      imgUrl: require("../../../assets/images/Blog_Cover_Bathtub_Gin.png"),
      subMenu: [
        { link: "#", title: "Cocktail recipe" },
        { link: "#", title: "News" },
        { link: "#", title: "Recipes" },
        { link: "#", title: "Stories" },
      ],
      comments: "0 comments",
      blogDate: "May 13, 2024",
      mainTitle: "Bathtub Gin",
      description:
        " History in a Roaring Twenties Speakeasy Introduction In the heart of Manhattan's Chelsea neighborhood, tucked away behind the unassuming facade of Stone Street Coffee Company, lies a portal to a bygone era—the Roaring Twenties. This hidden gem,...",
    },
    {
      imgUrl: require("../../../assets/images/Blog_cover_Barsys_App_Launch.jpg"),
      comments: "0 comments",
      blogDate: "Apr 30, 2024",
      mainTitle:
        "Elevate Your Cocktail Game with the New Barsys App – Launching Soon!",
      description:
        "Introduction Welcome to the future of cocktails with Barsys, your premier partner in digitizing the drinking experience through cutting-edge consumer robotics and its technologies. Barsys is more than just an app; it's a platform that bridges the gap between the...",
    },
    {
      imgUrl: require("../../../assets/images/Blog_cover_Barsys_App_Launch.jpg"),
      comments: "0 comments",
      blogDate: "Oct 23, 2023",
      mainTitle:
        "Spooky Sips: Unleash the Halloween Spirit with These Ghoulishly Good Cocktails!",
      description:
        "Estimated Reading Time: 5 minutes Introduction As the leaves turn shades of fiery orange and the chill of autumn fills the air, it's time to embrace all things spooky and sip on some chilling concoctions. Enter Spooky Sips – a...",
    },
    {
      imgUrl: require("../../../assets/images/Blog_cover_Pumpkin_Patch_Party.png"),
      comments: "0 comments",
      blogDate: "Oct 23, 2023",
      mainTitle: "Pumpkin Patch Party: The Ultimate Autumn Cocktail Mixlist",
      description:
        "Estimated Reading Time: 5 minutes Introduction As the leaves change their colors and the air grows crisp, it's time to embrace the cozy vibes of autumn. And what better way to do that than with a Pumpkin Patch Party and...",
    },
    {
      imgUrl: require("../../../assets/images/Blog_Cover_Haunted_Spirits.png"),
      comments: "0 comments",
      blogDate: "Oct 23, 2023",
      mainTitle: "Haunted Spirits: Eerie Elixirs for a Spooky Soirée",
      description:
        "Estimated Reading Time: 5 minutes Introduction As the moon rises and the shadows lengthen, it's time to summon the spirits and indulge in some chilling concoctions. Welcome to Haunted Spirits, where we've conjured up a collection of spine-tingling cocktails that...",
    },
    {
      imgUrl: require("../../../assets/images/Blog_Cover_Haunted_Spirits.png"),
      comments: "0 comments",
      blogDate: "Oct 23, 2023",
      mainTitle: "Haunted Happy Hour: Mystical Mixes to Elevate Your Spirits",
      description:
        "Estimated Reading Time: 5 minutes Introduction As the sun dips below the horizon and darkness envelops the land, it's time to summon the spirits and create an eerie atmosphere for your happy hour. Welcome to Haunted Happy Hour, where we've...",
    },
    {
      imgUrl: require("../../../assets/images/Blog_Cover_Harvest_Hues.png"),
      comments: "0 comments",
      blogDate: "Oct 23, 2023",
      mainTitle: "Harvest Moon Mixlist: Sip the Essence of the Season!",
      description:
        "Estimated Reading Time: 5 minutes Introduction Welcome to our Harvest Moon Mixlist, where the flavors of autumn take center stage. As the moon graces the night sky, these cocktails capture the essence of the season. Whether you're gathered by the...",
    },
    {
      imgUrl: require("../../../assets/images/Blog_Cover_Harvest_Moon_Mixlist.png"),
      comments: "0 comments",
      blogDate: "Oct 23, 2023",
      mainTitle: "Harvest Hues: Elixirs to Warm Your Autumn Spirits",
      description:
        "Estimated Reading Time: 5 minutes Introduction As the leaves fall and the air turns crisp, it's time to embrace the cozy comforts of the season with our Harvest Hues mixlist. These heartwarming elixirs from thebarsys.com are designed to envelop your...",
    },
    {
      imgUrl: require("../../../assets/images/Blog_cover_Dia_de_los_Muertos_Fiesta_Mixlist.png"),
      comments: "0 comments",
      blogDate: "Oct 23, 2023",
      mainTitle:
        "Dia de los Muertos Fiesta Mixlist: Celebrate with Flavor and Tradition!",
      description:
        "Estimated Reading Time: 5 minutes Introduction Welcome to our Dia de los Muertos Fiesta Mixlist, where we honor the vibrant spirit of this Mexican tradition with cocktails that pay homage to the departed. These drinks combine the rich flavors of...",
    },
  ];

  return (
    <div class="page-container" id="PageContainer">
      <main class="main-content relative" id="MainContent" role="main">
        <div
          id="shopify-section-template--17436070379766__main-blog"
          class="shopify-section"
        >
          <div class="section section--padding">
            <div class="page-width relative">
              <div class="title-wrapper text-center justify-center grid gap-4">
                <h1 class="heading font-bold title-xl tracking-heading">
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
                        Blogs
                      </animate-element>
                    </div>
                  </split-words>
                </h1>
              </div>

              <div class="blog flex flex-col gap-12">
                <motion-list class="blog-grid blog-collage card-grid card-grid--3 mobile:card-grid--1 grid">
                  {BlogListData?.map((data, index) => {
                    return (
                      <div
                        key={index}
                        class="card article-card relative flex flex-col gap-5 md:gap-8 leading-none"
                        // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                      >
                        <div class="article-card__media relative overflow-hidden">
                          <div class="badges z-2 absolute grid gap-3">
                            {data?.subMenu?.map((items, id) => {
                              return (
                                <>
                                  <Link
                                    href="#"
                                    class="badge font-medium leading-none rounded-full"
                                  >
                                    {items.title}
                                  </Link>
                                </>
                              );
                            })}
                          </div>
                          <Link
                            href="#"
                            class="article-card__link block relative media media--landscape"
                            aria-label="Bathtub Gin"
                            tabindex="-1"
                          >
                            <Image
                              src={data.imgUrl}
                              alt={data.mainTitle}
                              loading="lazy"
                              is="lazy-image"
                              class="article-card__image loaded"
                            />
                          </Link>
                        </div>
                        <div class="article-card__content flex flex-col gap-5 md:gap-8">
                          <div class="grid gap-4 md:gap-5">
                            <ul class="article-card__top flex flex-wrap gap-4">
                              <li class="inline-flex gap-2 text-xs relative">
                                <svg
                                  class="icon icon-calendar icon-xs stroke-1"
                                  viewBox="0 0 16 16"
                                  stroke="currentColor"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5.33325 0.666668V3.40544M10.6666 0.666668V3.40544M14.4999 6.33333H1.49994M6.93325 14.6667H9.06659C11.0268 14.6667 12.0069 14.6667 12.7556 14.2852C13.4141 13.9496 13.9496 13.4142 14.2851 12.7556C14.6666 12.0069 14.6666 11.0269 14.6666 9.06667V7.93334C14.6666 5.97315 14.6666 4.99306 14.2851 4.24437C13.9496 3.5858 13.4141 3.05037 12.7556 2.71481C12.0069 2.33333 11.0268 2.33333 9.06659 2.33333H6.93325C4.97307 2.33333 3.99298 2.33333 3.24429 2.71481C2.58572 3.05037 2.05029 3.5858 1.71473 4.24437C1.33325 4.99306 1.33325 5.97315 1.33325 7.93333V9.06667C1.33325 11.0269 1.33325 12.0069 1.71473 12.7556C2.05029 13.4142 2.58572 13.9496 3.24429 14.2852C3.99298 14.6667 4.97307 14.6667 6.93325 14.6667Z"
                                  ></path>
                                </svg>
                                <time datetime="2024-05-13T19:08:33Z">
                                  {data.blogDate}
                                </time>
                              </li>
                              <li class="inline-flex gap-2 text-xs relative">
                                <svg
                                  class="icon icon-comment icon-xs stroke-1"
                                  viewBox="0 0 16 16"
                                  stroke="currentColor"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5.33325 6.66665H10.6666M5.33325 9.33331H7.99992M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C7.24034 14.6666 6.58895 14.5585 5.9841 14.3421C5.41245 14.1376 5.12661 14.0354 5.01693 14.0096C4.00499 13.7716 3.58519 14.4651 2.71302 14.6105C2.28464 14.6818 1.90348 14.3311 1.93903 13.8983C1.97011 13.5198 2.23184 13.1619 2.33628 12.7985C2.5534 12.0429 2.25878 11.4701 1.94752 10.7982C1.55335 9.94729 1.33325 8.99931 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z"
                                  ></path>
                                </svg>
                                <a class="reversed-link" href="#">
                                  {data.comments}
                                </a>
                              </li>
                            </ul>
                            <p>
                              <a
                                class="article-card__title reversed-link text-lg-2xl font-bold leading-tight tracking-tight"
                                href="#"
                              >
                                {data.mainTitle}
                              </a>
                            </p>
                            <div class="article-card__bottom rte leading-normal">
                              {data.description}
                            </div>
                          </div>

                          <p>
                            <a
                              class="link text-sm font-medium leading-tight"
                              href="#"
                            >
                              Read more
                            </a>
                          </p>
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
                    aria-label="25"
                  >
                    <span class="btn-text" data-text="">
                      25
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
      </main>
    </div>
  );
};

export default BlogContent;
