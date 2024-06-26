import Image from 'next/image'
import React from 'react'
import "./mixlist.css"
import Link from 'next/link'
const MixListContent = () => {
    const mixListData=[
        {
            title:"New Year's Sparkle",
            mixListImg: require("../../../assets/images/NewYears.png"),
           count:"3"
          },
          {
            title:"Gingerbread Dreams",
            mixListImg: require("../../../assets/images/Gingerbread_Dreams.png"),
            count:"3"
          },
          {
            title:"Candy Cane Crush",
            mixListImg: require("../../../assets/images/CnadyCane.png"),
            count:"2"
          },
          {
            title:"Winter Spice Wonderland",
            mixListImg: require("../../../assets/images/WinterWonderland.png"),
            count:"3"
          },
          {
            title:"Mimosa Series",
            mixListImg: require("../../../assets/images/Mimosa_Series.jpg"),
            count:"9"
          },
          {
            title:"Ice Cube Series",
            mixListImg: require("../../../assets/images/Cover_Ice_Cube.jpg"),
            count:"9"
          },
          {
            title:"Earth Day",
            mixListImg: require("../../../assets/images/Cover_Earth_Day.jpg"),
            count:"10"
          },
          {
            title:"Mother's Day",
            mixListImg: require("../../../assets/images/Cover_Mothers_Day.jpg"),
            count:"6"
          },
          {
            title:"Memorial Day",
            mixListImg: require("../../../assets/images/Cover_Memorial.jpg"),
            count:"9"
          },
    ]
  return (
    <>
     <div class="page-container" id="PageContainer">
        <main class="main-content relative" id="MainContent" role="main">
            <div id="shopify-section-template--17613559333110__images_with_text_overlay_UEk37U" class="shopify-section">
                {/* <style>
                    #shopify-section-template--17613559333110__images_with_text_overlay_UEk37U {
                        --section-padding-top: 0px;
                        --section-padding-bottom: 0px;
                        --color-background: 23 23 23;
                        --color-foreground: 255 255 255;
                        --color-border: var(--color-foreground)/ 0.1;
                        --color-border-dark: var(--color-foreground)/ 0.4;
                        --color-border-light: var(--color-foreground)/ 0.06;
                        --color-highlight: 224 165 128;
                        --color-button-background: 255 255 255;
                        --color-button-border: 255 255 255;
                        --color-button-text: 23 23 23;
                    }
                </style> */}

                <div class="section section--padding section--rounded relative">
                    <div class="relative">
                        <div class="banner media--650px mobile:media--auto relative">
                            <span
                                class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span><scrolled-images
                                class="scrolled-images block absolute top-0 left-0 w-full h-full overflow-hidden"
                                data-parallax="1.5">
                                <div class="scrolled-images__main absolute top-0 left-0 w-full h-full"></div>
                                <template>
                                    <lazy-background class="scrolled-images__item"
                                    style={{backgroundImage:'url(' + require('../../../assets/images/Sex_on_the_Beach.jpg') + ')'}}
                                    //  style="background-image:url(assets/images/Sex_on_the_Beach.jpg)"
                                    ></lazy-background>
                                    <lazy-background class="scrolled-images__item"
                                    style={{backgroundImage:'url(' + require('../../../assets/images/Manhattan.jpg') + ')'}}

                                    //  style="background-image:url(assets/images/Manhattan.jpg)"
                                     ></lazy-background>
                                    <lazy-background class="scrolled-images__item"
                                     style={{backgroundImage:'url(' + require('../../../assets/images/Long_Island_Iced_Tea.jpg') + ')'}}
                                    //  style="background-image:url(assets/images/Long_Island_Iced_Tea.jpg)"
                                     ></lazy-background>
                                    <lazy-background class="scrolled-images__item"
                                     style={{backgroundImage:'url(' + require('../../../assets/images/Lemon_Drop.jpg') + ')'}}
                                    //  style="background-image:url(assets/images/Lemon_Drop.jpg)"
                                     ></lazy-background>
                                    <lazy-background class="scrolled-images__item" 
                                     style={{backgroundImage:'url(' + require('../../../assets/images/Blue_Hawaiian.jpg') + ')'}}
                                    // style="background-image:url(assets/images/Blue_Hawaiian.jpg)"
                                    ></lazy-background>
                                </template>
                            </scrolled-images>
                            <div class="banner__content overflow-hidden absolute z-1 top-0 left-0 w-full h-full">
                                <div
                                    class="page-width w-full h-full flex md:items-end md:justify-start items-end justify-start">
                                    <div class="banner__box banner__box--small md:text-left text-left">
                                        <p
                                            class="banner__subheading heading uppercase leading-none tracking-widest subtitle-md banner__text--colored">
                                            EXPLORE COCKTAIL RECIPES</p>
                                        <h2 class="banner__title heading font-bold leading-none title-md"><split-words
                                                class="split-words flex flex-wrap" data-animate="fade-up-large"
                                                data-animate-delay="250">
                                                <div class="single-word"
                                                   style={{display:"inline-block"}}
                                                //  style="display: inline-block;"
                                                ><animate-element
                                                        class="block animate" data-animate="fade-up-large"
                                                        data-animate-delay="250"
                                                        style={{transform:"translateY(0px)",opacity:1}}
                                                        // style="transform: translateY(0px); opacity: 1;"
                                                        >Mixlists</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte leading-normal body subtext-md">
                                            <div class="metafield-rich_text_field">
                                                <p>Explore our curated Mixlists, thoughtfully crafted to inspire your
                                                    cocktail journey. From classic to innovative blends, our Mixlists
                                                    offer a diverse selection of recipes designed to suit every taste
                                                    and occasion. Whether you're seeking a refreshing summer sipper or a
                                                    cozy winter warmer, our Mixlists provide the perfect starting point
                                                    for your next cocktail adventure. Cheers to discovering new
                                                    favorites and creating memorable moments with&nbsp;every&nbsp;pour!
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
            <div id="shopify-section-template--17613559333110__collection_list_TPrQKw" class="shopify-section">
                <div class="section section--padding">
                    <div class="page-width relative">
                        <div
                            class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
                            <div class="grid gap-4">
                                <h2 class="heading font-bold title-lg tracking-heading"><split-words
                                        class="split-words flex flex-wrap" data-animate="fade-up-large">
                                        <div class="single-word"
                                        style={{display:"inline-block"}}
                                        ><animate-element
                                                class="block animate" data-animate="fade-up-large"
                                                data-animate-delay="0"
                                        style={{transform:"translateY(0px)",opacity:1}}
                                                >Mixlist</animate-element>
                                        </div>
                                    </split-words></h2>
                            </div>
                            <p></p>
                        </div>
                        <slider-element id="Slider-template--17613559333110__collection_list_TPrQKw" class="grid slider slider--tablet" selector=".card-grid>.card">
                            <motion-list class="card-grid card-grid--4 mobile:card-grid--1 grid">
                                {
                                    mixListData?.map((items,id)=>{
                                        return(
                                            <div key={id} class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                            style={{transform:"translateY(var(--motion-translateY))",opacity:1,visibility:"visible"}}
                                            // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                                            >
                                                <Link href="/mixlist-detail" 
                                                class="media-card__link flex flex-col w-full h-full relative"
                                                >
                                                <div class="media media--square relative overflow-hidden">
                                                    <Image 
                                                    src={items.mixListImg}
                                                    alt="New Year's Sparkle"
                                                     loading="lazy" is="lazy-image"
                                                     class="loaded"
                                                    />
                                                </div>
                                                <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                                    <div class="media-card__text shrink-1 relative">
                                                        <span
                                                            class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">{items.title}</span><small
                                                            class="count font-medium absolute text-xs tracking-none whitespace-nowrap">{items.count}</small>
                                                    </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                        viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                                    </svg>
                                                </div>
                                                </Link>
                                        </div>
                                        )
                                    })
                                }
                                {/* <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/NewYears.png" alt="New Year's Sparkle" loading="lazy" is="lazy-image" class="loaded" />
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">New
                                                    Year's Sparkle</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">3</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/Gingerbread_Dreams.png" alt="Gingerbread Dreams" loading="lazy" is="lazy-image" class="loaded">
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">Gingerbread
                                                    Dreams</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">3</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/CnadyCane.png" alt="Candy Cane Crush" loading="lazy" is="lazy-image" class="loaded">
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">Candy
                                                    Cane Crush</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">2</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/WinterWonderland.png" alt="Winter Spice Wonderland" loading="lazy" is="lazy-image" class="loaded">
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">
                                                        Winter Spice Wonderland</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">3</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/Mimosa_Series.jpg" alt="Mimosa Series" loading="lazy" is="lazy-image">
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">Mimosa
                                                    Series</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">9</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>

                                </div>
                                <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/Cover_Ice_Cube.jpg" alt="Ice Cube Series" loading="lazy" is="lazy-image">
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">Ice
                                                    Cube Series</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">9</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/Cover_MBL.jpg" alt="Pitch Perfect Mixology" loading="lazy" is="lazy-image">
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">Pitch
                                                    Perfect Mixology</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">10</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/Cover_Earth_Day.jpg" alt="Earth Day" loading="lazy" is="lazy-image">
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">Earth
                                                    Day</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">10</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/Cover_Mothers_Day.jpg" alt="Mother’s Day" loading="lazy" is="lazy-image" class="loaded">
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">Mother’s
                                                    Day</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">6</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                    style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;">
                                    <a href="mixlist-details.html"
                                        class="media-card__link flex flex-col w-full h-full relative">
                                        <div class="media media--square relative overflow-hidden">
                                            <img src="assets/images/Cover_Memorial.jpg" alt="Memorial Day" loading="lazy" is="lazy-image" class="loaded">
                                        </div>
                                        <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                            <div class="media-card__text shrink-1 relative">
                                                <span
                                                    class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">Memorial
                                                    Day</span><small
                                                    class="count font-medium absolute text-xs tracking-none whitespace-nowrap">9</small>
                                            </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div> */}
                            </motion-list>
                        </slider-element>
                    </div>
                </div>


            </div>
        </main>
        </div>
    </>
  )
}

export default MixListContent