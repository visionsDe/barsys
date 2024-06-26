import Image from 'next/image'
import React from 'react'
import "./bars.css"
const BarsContent = () => {
    const barsList=[
        {imgSrc:require("../../../assets/images/BTGMain.png"),title:"Bathtub Gin",count:"2" },
        {imgSrc:require("../../../assets/images/DeadRabbitCover.png"),title:"Dead Rabbit",count:"5" },
        {imgSrc:require("../../../assets/images/Ciel_Social_Club.jpg"),title:"Ciel Social Club"  },
        {imgSrc:require("../../../assets/images/Casta_s_Rum_Bar.png"),title:"Casta's Rum Bar"  },
        {imgSrc:require("../../../assets/images/Morris_American_Bar.jpg"),title:"Morris American Bar" },
    ]
  return (
    <div class="page-container" id="PageContainer">
    <main class="main-content relative" id="MainContent" role="main">
        <div id="shopify-section-template--17613559333110__images_with_text_overlay_UEk37U" class="shopify-section">
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
                                // style="background-image:url(assets/images/Sex_on_the_Beach.jpg)"
                                
                                ></lazy-background>
                                <lazy-background class="scrolled-images__item" 
                                // style="background-image:url(assets/images/Manhattan.jpg)"
                                ></lazy-background>
                                <lazy-background class="scrolled-images__item" 
                                // style="background-image:url(assets/images/Long_Island_Iced_Tea.jpg)"
                                ></lazy-background>
                                <lazy-background class="scrolled-images__item" 
                                // style="background-image:url(assets/images/Lemon_Drop.jpg)"
                                ></lazy-background>
                                <lazy-background class="scrolled-images__item" 
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
                                            <div class="single-word" style={{display: "inline-block"}}><animate-element
                                                    class="block animate" data-animate="fade-up-large"
                                                    data-animate-delay="250"
                                                    style={{transform: "translateY(0px)", opacity: 1}}
                                                    >Bars</animate-element>
                                            </div>
                                        </split-words></h2>
                                    <div class="rte leading-normal body subtext-md">
                                        <div class="metafield-rich_text_field">
                                            <p>Our collection of tantalizing cocktail recipes from top bars around
                                                the globe. Each recipe is crafted with precision and passion,
                                                offering a taste of the bar experience from the comfort of your own
                                                home. Whether you're hosting a gathering with friends or simply
                                                craving a delicious libation, our curated selection of cocktail
                                                recipes has something to suit every palate and occasion. Shake,
                                                stir, and sip your way through a world of flavors as you explore our
                                                expertly crafted cocktails, guaranteed to elevate your home
                                                bartending game to new heights. Cheers to creativity, camaraderie,
                                                and unforgettable cocktail&nbsp;moments!</p>
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
                                    <div class="single-word" style={{display: "inline-block"}}><animate-element
                                            class="block animate" data-animate="fade-up-large"
                                            data-animate-delay="0"
                                            style={{transform: "translateY(0px)", opacity: 1}}
                                            >Bars</animate-element>
                                    </div>
                                </split-words></h2>
                        </div>
                        <p></p>
                    </div><slider-element id="Slider-template--17613559333110__collection_list_TPrQKw"
                        class="grid slider slider--tablet" selector=".card-grid>.card">
                        <motion-list class="card-grid card-grid--4 mobile:card-grid--1 grid">
                            {
                                barsList.map((list,id)=>{
                                    return(
                                        <div key={id} class="card media-card media-card--card overflow-hidden" id="shopify-block-"
                                        // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1; visibility: visible;"
                                        >
                                        <a href="bar-details.html"
                                            class={`media-card__link flex flex-col w-full h-full relative ${!list?.count?"collection-coming-soon":""}`}>
                                            <div class="media media--square relative overflow-hidden">
                                                <Image 
                                                src={list.imgSrc}
                                                alt={list.title}
                                                loading="lazy" 
                                                is="lazy-image" 
                                                class="loaded"
                                                />
                                                {
                                                    !list?.count &&<div class="collection-coming-soon-text">
                                                    <h3 class="h2 ">Coming Soon</h3>
                                                </div>
                                                }
                                                  
                                            </div>
                                            <div class="media-card__content flex justify-between items-center gap-4 w-full">
                                                <div class="media-card__text shrink-1 relative">
                                                    <span
                                                        class="heading reversed-link text-xl-3xl font-bold tracking-tighter leading-none relative">{list.title}</span><small
                                                        class="count font-medium absolute text-xs tracking-none whitespace-nowrap">{list?.count}</small>
                                                </div><svg class="icon icon-arrow-right icon-xs transform shrink-0"
                                                    viewBox="0 0 21 20" stroke="currentColor" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3 10H18M18 10L12.1667 4.16675M18 10L12.1667 15.8334"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    )
                                })
                            }
                        </motion-list>
                    </slider-element>
                </div>
            </div>


        </div>
    </main>

    </div>
  )
}

export default BarsContent