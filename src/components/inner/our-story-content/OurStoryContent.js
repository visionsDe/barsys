import Image from 'next/image'
import React from 'react'
import "./ourstory.css"
const OurStoryContent = () => {
    const slideMarque=[
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-1.png"),
            url:"https://streaklinks.com/B7LFPGWe3u1kpL1QjQZH2rzy/https%3A%2F%2Fwww.buzzfeed.com%2Fjessicahall2%2Fproducts-make-house-smarter%3Forigin%3Dweb-hf"
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-2.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-6.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-3.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-5.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-4.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-9.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-12.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-10.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-7.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-8.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-18.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-16.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-20.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-15.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-14.png"),
            url:""
        },
        {
            imgSrc:require("../../../assets/images/home-scroll-gray-icon-13.png"),
            url:""
        },
    ]
  return (
    <div class="page-container" id="PageContainer">
    <main class="main-content relative" id="MainContent" role="main">
        <div id="shopify-section-template--17436070117622__image-with-text-overlay" class="shopify-section">
            {/* <style>
                #shopify-section-template--17436070117622__image-with-text-overlay {
                    --section-padding-top: 0px;
                    --section-padding-bottom: 0px;
                    --color-foreground: 255 255 255;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                    --color-highlight: 224 165 128;
                    --color-button-background: 255 255 255;
                    --color-button-border: 255 255 255;
                    --color-button-text: 23 23 23;
                    --color-overlay: 0 0 0;
                    --overlay-opacity: 0.0;
                }
            </style> */}

            <div class="section section--padding" allow-transparent-header="">
                <div class="relative">
                    <div class="banner media--750px mobile:media--auto relative">
                        <media-element class="banner__media block w-full h-full overflow-hidden" data-parallax="0.3"
                            data-parallax-dir="vertical">
                            <animate-element data-animate="zoom-out"
                                class="media media--height block w-full h-full relative overflow-hidden animate"
                                // style="transform: scale(1);"
                                style={{transform:" scale(1)"}}
                                >
                                <picture class="media media--height block w-full h-full relative overflow-hidden">
                                    <source media="(max-width: 767px)" />
                                    <Image
                                                    src={require("../../../assets/images/story_desktop_banner.jpg")}
                                                    alt=""
                                                    loading="lazy" 
                                                    is="lazy-image" 
                                                    class="banner__image"
                                                    />
                                    {/* <img src="assets/images/story_desktop_banner.jpg" alt="" loading="lazy" is="lazy-image" class="banner__image"> */}
                                </picture>
                            </animate-element>
                        </media-element>
                        <span class="banner__overlay absolute top-0 left-0 w-full h-full pointer-events-none"></span>
                        <div class="banner__content overflow-hidden absolute z-1 top-0 left-0 w-full h-full">
                            <div
                                class="page-width w-full h-full flex md:items-end md:justify-start items-end justify-start">
                                <div class="banner__box banner__box--large md:text-left text-left">
                                    <h2 class="banner__title heading font-bold leading-none title-lg tracking-heading">
                                        <split-words class="split-words flex flex-wrap" data-animate="fade-up-large"
                                            data-animate-delay="250">
                                            <div class="single-word" style={{display:"inline-block"}}>
                                                <animate-element class="block animate" data-animate="fade-up-large" data-animate-delay="250" style={{transform: "translateY(0px)", opacity: 1}}>Elevating</animate-element>
                                            </div>
                                            <div class="single-word" style={{display:"inline-block"}}>
                                                <animate-element class="block animate" data-animate="fade-up-large" data-animate-delay="280" style={{transform: "translateY(0px)", opacity: 1}}>the</animate-element>
                                            </div>
                                            <div class="single-word" style={{display:"inline-block"}}>
                                                <animate-element class="block animate" data-animate="fade-up-large" data-animate-delay="310" style={{transform: "translateY(0px)", opacity: 1}}>cocktail</animate-element>
                                            </div>
                                            <div class="single-word" style={{display:"inline-block"}}>
                                                <animate-element class="block animate" data-animate="fade-up-large" data-animate-delay="340" style={{transform: "translateY(0px)", opacity: 1}}>experience,</animate-element>
                                            </div>
                                            <div class="single-word" style={{display:"inline-block"}}>
                                                <animate-element class="block animate" data-animate="fade-up-large" data-animate-delay="370" style={{transform: "translateY(0px)", opacity: 1}}>sip</animate-element>
                                            </div>
                                            <div class="single-word" style={{display:"inline-block"}}>
                                                <animate-element class="block animate" data-animate="fade-up-large" data-animate-delay="400" style={{transform: "translateY(0px)", opacity: 1}}>by</animate-element>
                                            </div>
                                            <div class="single-word" style={{display:"inline-block"}}>
                                                <animate-element class="block animate" data-animate="fade-up-large" data-animate-delay="430" style={{transform: "translateY(0px)", opacity: 1}}>sip.</animate-element>
                                            </div>
                                        </split-words>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="shopify-section-template--17436070117622__images-with-text" class="shopify-section">
            {/* <style>
                #shopify-section-template--17436070117622__images-with-text {
                    --section-padding-top: 120px;
                    --section-padding-bottom: 100px;
                }
            </style> */}

            <div class="section section--padding section--rounded relative">
                <div class="page-width relative">
                    <div class="image-with-text flex gap-8 flex-col lg:flex-row">
                        <div class="image-with-text__item grow shrink-0 relative">
                            <div class="image-with-text__media">
                                <media-element class="image-with-text__image-first block media media--adapt overflow-hidden">
                                <Image
                                                    src={require("../../../assets/images/Akshit.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                    {/* <img src="assets/images/Akshit.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                </media-element>
                            </div>
                        </div>
                        <div class="image-with-text__item grow shrink-0 align-self-center">
                            <div class="rich-text lg:text-left text-left relative z-1">
                                <h2 class="heading font-bold leading-none title-md">
                                    Our <em class="highlighted-text inline-block not-italic relative animate"
                                        is="highlighted-text" data-style="scribble">Journey<svg
                                            class="icon icon-basic-underline" viewBox="-400 -55 730 60"
                                            stroke="currentColor" fill="none" role="presentation"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-width="30" pathLength="1"
                                                d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15">
                                            </path>
                                        </svg></em></h2>
                                <div class="rte leading-normal body subtext-md">
                                    <p>Barsys embarked on its journey in 2016 with a bold vision, to revolutionize
                                        the drinking experience through the seamless integration of innovation,
                                        technology, and design. From its inception, Barsys has been committed to
                                        creating products that not only transform how we enjoy cocktails but also
                                        enhance our lifestyles around the world. Our journey began with a dedication
                                        to inspire the global community of cocktail enthusiasts through constant
                                        pursuit of groundbreaking innovations and value creation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div id="shopify-section-template--17436070117622__video_pNRHAD" class="shopify-section">
            {/* <style>
                #shopify-section-template--17436070117622__video_pNRHAD {
                    --section-padding-top: 0px;
                    --section-padding-bottom: 0px;
                    --ratio-percent: 56.25%;
                }

                @media screen and (max-width: 767px) {
                    #shopify-section-template--17436070117622__video_pNRHAD {
                        --ratio-percent: 177.77777777777777%;
                    }
                }
            </style> */}

            <div class="section section--padding section--rounded relative">
                <div class="page-width relative">
                    <div class="video-hero banner media--adapt mobile:media--adapt relative">
                        <video-media class="media deferred-media mobile:deferred-media block banner__media media--height w-full h-full relative loading">
                        <Image
                                                    src={require("../../../assets/images/journey-video-banner-mobile.jpg")}
                                                    alt="Load video: " 
                                                    loading="lazy" 
                                                    fetchpriority="auto" 
                                                    is="lazy-image"
                                                     
                                                    />
                            {/* <img src="assets/images/journey-video-banner-mobile.jpg" alt="Load video: " loading="lazy" fetchpriority="auto" is="lazy-image"> */}
                            <template>
                                <video playsinline="true" autoplay="autoplay" preload="none" poster="assets/images/journey-video-banner-mobile.jpg">
                                    <source src="assets/images/journey-video-mobile.mp4" type="video/mp4" />
                                    <Image
                                                    src={require("../../../assets/images/journey-video-banner-mobile.jpg")}
                                                     
                                                    />
                                    {/* <img src="assets/images/journey-video-banner-mobile.jpg"> */}
                                </video>
                            </template>
                            <button type="button" id="DeferredPoster-32931620290806"
                                class="deferred-poster absolute top-0 left-0 w-full h-full" aria-label="Play video">
                                <span
                                    class="play-button absolute flex items-center justify-center rounded-full pointer-events-auto z-10"><svg
                                        class="icon icon-play icon-md" viewBox="0 0 36 36" stroke="none"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M34 17.5006C34 18.3302 33.5707 19.0963 32.8683 19.5206L9.535 33.6629C9.164 33.8869 8.74867 34 8.33333 34C7.93667 34 7.54 33.8986 7.183 33.6936C6.45267 33.274 6 32.4915 6 31.6429V3.35817C6 2.50962 6.45267 1.72708 7.183 1.30752C7.91333 0.885606 8.814 0.899749 9.535 1.33816L32.8683 15.4805C33.5707 15.9048 34 16.6709 34 17.5006">
                                        </path>
                                    </svg><svg class="icon icon-pause icon-md" viewBox="0 0 36 36"
                                        stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-width="6" d="M9 4V32"></path>
                                        <path stroke-linecap="round" stroke-width="6" d="M27 4V32"></path>
                                    </svg></span>
                            </button>
                        </video-media>
                        <video-media class="media deferred-media block banner__media media media--height w-full h-full relative">
                        <Image
                                                    src={require("../../../assets/images/journey-video-banner-desktop.jpg")}
                                                    alt="Load video: " 
                                                    loading="lazy" 
                                                    fetchpriority="auto" 
                                                    is="lazy-image"
                                                     
                                                    />
                            {/* <img src="assets/images/journey-video-banner-desktop.jpg" alt="Load video: " loading="lazy" fetchpriority="auto" is="lazy-image"> */}
                            <template>
                                <video playsinline="true" autoplay="autoplay" preload="none" poster="assets/images/journey-video-banner-desktop.jpg">
                                    <source src="assets/images/journey-video-desktop.mp4" type="video/mp4" />
                                    <Image
                                                    src={require("../../../assets/images/journey-video-banner-desktop.jpg")}
                                                     
                                                    />
                                    {/* <img src="assets/images/journey-video-banner-desktop.jpg"> */}
                                </video></template><button type="button" id="DeferredPoster-32921432719606"
                                class="deferred-poster absolute top-0 left-0 w-full h-full" aria-label="Play video">
                                <span
                                    class="play-button absolute flex items-center justify-center rounded-full pointer-events-auto z-10"><svg
                                        class="icon icon-play icon-md" viewBox="0 0 36 36" stroke="none"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M34 17.5006C34 18.3302 33.5707 19.0963 32.8683 19.5206L9.535 33.6629C9.164 33.8869 8.74867 34 8.33333 34C7.93667 34 7.54 33.8986 7.183 33.6936C6.45267 33.274 6 32.4915 6 31.6429V3.35817C6 2.50962 6.45267 1.72708 7.183 1.30752C7.91333 0.885606 8.814 0.899749 9.535 1.33816L32.8683 15.4805C33.5707 15.9048 34 16.6709 34 17.5006">
                                        </path>
                                    </svg><svg class="icon icon-pause icon-md" viewBox="0 0 36 36"
                                        stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-width="6" d="M9 4V32"></path>
                                        <path stroke-linecap="round" stroke-width="6" d="M27 4V32"></path>
                                    </svg></span>
                            </button></video-media></div>
                </div>
            </div>
        </div>
        <div id="shopify-section-template--17436070117622__portfolio" class="shopify-section">
            {/* <style>
                #shopify-section-template--17436070117622__portfolio {
                    --section-padding-top: 72px;
                    --section-padding-bottom: 72px;
                    --color-highlight: 204 216 181;
                    --section-blocks-count: 3;
                }

                #shopify-block-profile-1 {
                    --color-background: 0 0 0;
                    --color-foreground: 255 255 255;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                }

                #shopify-block-profile-2 {
                    --color-background: 0 0 0;
                    --color-foreground: 255 255 255;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                }

                #shopify-block-profile-3 {
                    --color-background: 0 0 0;
                    --color-foreground: 255 255 255;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                }
            </style> */}
            <div class="section section--padding">
                <div class="page-width relative">
                    <div
                        class="title-wrapper leading-none text-left justify-start grid gap-4 xl:hidden relative z-1">
                        <h2 class="heading font-bold title-md">
                            Core Values</h2>
                        <div class="page-width--narrow rte leading-normal subtext-md">
                            <p>At Barsys, our core values are woven into the fabric of our company. We innovate to
                                push the boundaries of the cocktail experience, striving for excellence in every
                                product and service we deliver.</p>
                        </div>
                    </div><slider-element class="grid slider slider--tablet" selector=".card-grid>.card">
                        <motion-list class="portfolio card-grid card-grid--4 mobile:card-grid--1 grid">
                            <div class="profile slide hidden xl:grid items-end">
                                <div
                                    class="title-wrapper leading-none text-left justify-start grid gap-4 xl:hidden relative z-1">
                                    <h2 class="heading font-bold title-md">
                                        Core Values</h2>
                                    <div class="page-width--narrow rte leading-normal subtext-md">
                                        <p>At Barsys, our core values are woven into the fabric of our company. We
                                            innovate to push the boundaries of the cocktail experience, striving for
                                            excellence in every product and service we deliver.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="profile card relative" id="shopify-block-profile-1"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <picture class="media media--portrait mobile:media--portrait block relative overflow-hidden">
                                <Image
                                                    src={require("../../../assets/images/Story_Innovation.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                    {/* <img src="assets/images/Story_Innovation.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                </picture>
                                <div
                                    class="profile__content absolute left-0 bottom-0 w-full flex items-center justify-between gap-8">
                                    <p class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                        Innovation</p>
                                    <button type="button"
                                        class="profile__button flex items-center justify-center rounded-full flex-auto"
                                        aria-controls="Profile-profile-1" aria-expanded="false"><svg
                                            class="icon icon-plus-alt icon-md" viewBox="0 0 14 14"
                                            stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 1V13M13 7H1">
                                            </path>
                                        </svg></button>
                                </div>
                                <x-modal id="Profile-profile-1"
                                    class="profile-modal x-modal drawer z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
                                    role="dialog" aria-modal="true" aria-label="Innovation" hidden="">
                                    <overlay-element
                                        class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
                                        aria-controls="Profile-profile-1" aria-expanded="false"></overlay-element>
                                    <div
                                        class="drawer__inner z-10 absolute top-0 flex flex-col w-full h-full overflow-hidden">
                                        <gesture-element
                                            class="drawer__header flex items-center justify-between opacity-0 invisible relative">
                                            <span class="drawer__title heading font-bold title-md">Innovation</span>
                                            <button
                                                class="button button--secondary button--close drawer__close hidden sm:flex items-center justify-center"
                                                type="button" is="hover-button" aria-controls="Profile-profile-1"
                                                aria-expanded="false" aria-label="Close">
                                                <span class="btn-fill" data-fill=""></span>
                                                <span class="btn-text"><svg class="icon icon-close icon-sm"
                                                        viewBox="0 0 20 20" stroke="currentColor" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M5 15L15 5M5 5L15 15"></path>
                                                    </svg></span>
                                                <span class="btn-loader">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span></button>
                                        </gesture-element>
                                        <div
                                            class="drawer__content opacity-0 invisible flex flex-col h-full grow shrink">
                                            <div
                                                class="drawer__scrollable relative flex flex-col gap-5 md:gap-7 grow shrink">
                                                <div class="rte text-base md:text-lg">
                                                    <p>We are pioneers in cocktail creation technology, constantly
                                                        pushing the boundaries to enhance the way cocktails are
                                                        crafted and enjoyed. Our relentless pursuit of innovation
                                                        drives us to develop cutting-edge solutions that
                                                        revolutionize mixology.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </x-modal>
                            </div>
                            <div class="profile card relative" id="shopify-block-profile-2"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <picture class="media media--portrait mobile:media--portrait block relative overflow-hidden">
                                <Image
                                                    src={require("../../../assets/images/Story_Quality.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                    {/* <img src="assets/images/Story_Quality.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                </picture>
                                <div
                                    class="profile__content absolute left-0 bottom-0 w-full flex items-center justify-between gap-8">
                                    <p class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                        Design</p>
                                    <button type="button"
                                        class="profile__button flex items-center justify-center rounded-full flex-auto"
                                        aria-controls="Profile-profile-2" aria-expanded="false"><svg
                                            class="icon icon-plus-alt icon-md" viewBox="0 0 14 14"
                                            stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 1V13M13 7H1">
                                            </path>
                                        </svg></button>
                                </div>
                                <x-modal id="Profile-profile-2"
                                    class="profile-modal x-modal drawer z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
                                    role="dialog" aria-modal="true" aria-label="Design" hidden="">
                                    <overlay-element
                                        class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
                                        aria-controls="Profile-profile-2" aria-expanded="false"></overlay-element>
                                    <div
                                        class="drawer__inner z-10 absolute top-0 flex flex-col w-full h-full overflow-hidden">
                                        <gesture-element
                                            class="drawer__header flex items-center justify-between opacity-0 invisible relative">
                                            <span class="drawer__title heading font-bold title-md">Design</span>
                                            <button
                                                class="button button--secondary button--close drawer__close hidden sm:flex items-center justify-center"
                                                type="button" is="hover-button" aria-controls="Profile-profile-2"
                                                aria-expanded="false" aria-label="Close">
                                                <span class="btn-fill" data-fill=""></span>
                                                <span class="btn-text"><svg class="icon icon-close icon-sm"
                                                        viewBox="0 0 20 20" stroke="currentColor" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M5 15L15 5M5 5L15 15"></path>
                                                    </svg></span>
                                                <span class="btn-loader">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span></button>
                                        </gesture-element>
                                        <div
                                            class="drawer__content opacity-0 invisible flex flex-col h-full grow shrink">
                                            <div
                                                class="drawer__scrollable relative flex flex-col gap-5 md:gap-7 grow shrink">
                                                <div class="rte text-base md:text-lg">
                                                    <p>Barsys products embody elegance and sophistication in both
                                                        form and function. Our sleek designs seamlessly integrate
                                                        into any setting, enhancing the ambiance of any space while
                                                        elevating the cocktail-making experience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </x-modal>
                            </div>
                            <div class="profile card relative" id="shopify-block-profile-3"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <picture class="media media--portrait mobile:media--portrait block relative overflow-hidden">
                                <Image
                                                    src={require("../../../assets/images/Story_Robotics.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                    {/* <img src="assets/images/Story_Robotics.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                </picture>
                                <div
                                    class="profile__content absolute left-0 bottom-0 w-full flex items-center justify-between gap-8">
                                    <p class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                        Robotics</p>
                                    <button type="button"
                                        class="profile__button flex items-center justify-center rounded-full flex-auto"
                                        aria-controls="Profile-profile-3" aria-expanded="false"><svg
                                            class="icon icon-plus-alt icon-md" viewBox="0 0 14 14"
                                            stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 1V13M13 7H1">
                                            </path>
                                        </svg></button>
                                </div>
                                <x-modal id="Profile-profile-3"
                                    class="profile-modal x-modal drawer z-30 fixed bottom-0 left-0 h-full w-full pointer-events-none"
                                    role="dialog" aria-modal="true" aria-label="Robotics" hidden="">
                                    <overlay-element
                                        class="overlay fixed-modal invisible opacity-0 fixed bottom-0 left-0 w-full h-screen pointer-events-none"
                                        aria-controls="Profile-profile-3" aria-expanded="false"></overlay-element>
                                    <div
                                        class="drawer__inner z-10 absolute top-0 flex flex-col w-full h-full overflow-hidden">
                                        <gesture-element
                                            class="drawer__header flex items-center justify-between opacity-0 invisible relative">
                                            <span class="drawer__title heading font-bold title-md">Robotics</span>
                                            <button
                                                class="button button--secondary button--close drawer__close hidden sm:flex items-center justify-center"
                                                type="button" is="hover-button" aria-controls="Profile-profile-3"
                                                aria-expanded="false" aria-label="Close">
                                                <span class="btn-fill" data-fill=""></span>
                                                <span class="btn-text"><svg class="icon icon-close icon-sm"
                                                        viewBox="0 0 20 20" stroke="currentColor" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M5 15L15 5M5 5L15 15"></path>
                                                    </svg></span>
                                                <span class="btn-loader">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span></button>
                                        </gesture-element>
                                        <div
                                            class="drawer__content opacity-0 invisible flex flex-col h-full grow shrink">
                                            <div
                                                class="drawer__scrollable relative flex flex-col gap-5 md:gap-7 grow shrink">
                                                <div class="rte text-base md:text-lg">
                                                    <p>Behind every pour lies the precision of our advanced
                                                        robotics. We have engineered our systems to deliver
                                                        consistent and accurate measurements, ensuring that every
                                                        cocktail is crafted to perfection. Our robotic technology
                                                        streamlines the mixing process, allowing you to enjoy
                                                        flawlessly blended cocktails with ease.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </x-modal>
                            </div>
                        </motion-list>
                    </slider-element>
                </div>
            </div>
        </div>
        <div id="shopify-section-template--17436070117622__scrolling-text"
            class="shopify-section scrolling-text-section">
            {/* <style>
                #shopify-section-template--17436070117622__scrolling-text {
                    --section-padding-top: 72px;
                    --section-padding-bottom: 72px;
                    --section-grid-gap: 70px;
                }
            </style> */}

            <div class="section section--padding overflow-hidden">
                <div class="relative z-1"><marquee-element
                        class="scrolling-text scrolling-text--left flex items-center" data-speed="1"
                        data-direction="left" data-parallax="1.5">
                        <div class="marquee flex items-center flex-auto whitespace-nowrap">
                            <div class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                                // style="--font-size: 160px;"
                                style={{fontSize:"160px"}}
                                ><strong>Innovate</strong></div>
                            <div class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                                 style={{fontSize:"160px"}}
                                // style="--font-size: 160px;"
                                ><strong>Collaborate</strong></div>
                            <div class="scrolling-text__item with-text with-stencil flex items-center flex-auto body tracking-heading"
                                // style="--font-size: 160px;"
                                style={{fontSize:"160px"}}
                                ><strong>Excel</strong></div>
                        </div>
                    </marquee-element></div>
            </div>


        </div>
        <div id="shopify-section-template--17436070117622__testimonials" class="shopify-section">
            {/* <style>
                #shopify-section-template--17436070117622__testimonials {
                    --section-padding-top: 84px;
                    --section-padding-bottom: 120px;
                }
            </style> */}

            <div class="section section--padding">
                <div class="page-width page-width--narrow relative"><testimonials-element
                        class="testimonials block rte relative z-1" initial-index="0" watch-css="">
                        <div class="testimonial with-quote">
                            <blockquote>
                                <p>At Barsys we aim to transform the way customers experience mixology at home. We
                                    are excited to bring that concept into the heart of your home bar! We are
                                    committed to pushing the boundaries of mixology in pursuit of the perfect
                                    cocktail poured by anyone.</p><cite>— Akshet Tewari (Founder &amp; CEO)</cite>
                            </blockquote>
                        </div>
                    </testimonials-element></div>
            </div>


        </div>
        <div id="shopify-section-template--17436070117622__timeline" class="shopify-section">
            {/* <style>
                #shopify-section-template--17436070117622__timeline {
                    --section-padding-top: 72px;
                    --section-padding-bottom: 72px;
                    --color-background: 23 23 23;
                    --color-foreground: 255 255 255;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                    --section-blocks-count: 9;
                }
            </style> */}

            <div class="section section--padding section--rounded relative">
                <div class="page-width relative overflow-hidden md:overflow-visible">
                    <div
                        class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
                        <div class="grid gap-4">
                            <h2 class="heading font-bold title-md"><split-words class="split-words flex flex-wrap"
                                    data-animate="fade-up-large">
                                    <div class="single-word"
                                    style={{display:"inline-block"}}
                                    // style={{display:"inline-block"}}
                                    ><animate-element
                                            class="block" data-animate="fade-up-large" data-animate-delay="0"
                                            style={{transform:" translateY(90%)", opacity: 0}}
                                            //  style={{transform:" translateY(90%)", opacity: 0}}
                                            >Our</animate-element>
                                    </div>
                                    <div class="single-word"
                                    style={{display:"inline-block"}}
                                    // style="display: inline-block;"
                                    ><animate-element
                                            class="block" data-animate="fade-up-large" data-animate-delay="30"
                                            //  style={{transform:" translateY(90%)", opacity: 0}}
                                            style={{transform:" translateY(90%)", opacity: 0}}

                                            >History</animate-element>
                                    </div>
                                </split-words></h2>
                        </div>
                        <div class="indicators hidden lg:flex gap-2d5">
                            <button class="button button--secondary" type="button" is="previous-button"
                                aria-controls="Slider-template--17436070117622__timeline" aria-label="Previous"
                                disabled="">
                                <span class="btn-fill" data-fill=""></span>
                                <span class="btn-text"><svg class="icon icon-chevron-left icon-md transform"
                                        viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 6L8 12L14 18">
                                        </path>
                                    </svg></span>
                                <span class="btn-loader">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span></button>
                            <button class="button button--secondary" type="button" is="next-button"
                                aria-controls="Slider-template--17436070117622__timeline" aria-label="Next">
                                <span class="btn-fill" data-fill=""></span>
                                <span class="btn-text"><svg class="icon icon-chevron-right icon-md transform"
                                        viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6L16 12L10 18">
                                        </path>
                                    </svg></span>
                                <span class="btn-loader">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span></button>
                        </div>
                    </div><slider-element id="Slider-template--17436070117622__timeline"
                        class="grid slider slider--desktop slider--tablet" selector=".card-grid>.card">
                        <motion-list class="timeline card-grid grid">
                            <div class="timeline__item card selected"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                                    <picture class="media media--portrait mobile:media--wide block relative overflow-hidden">
                                    <Image
                                                    src={require("../../../assets/images/Story_History_2016.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                        {/* <img src="assets/images/Story_History_2016.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                    </picture>
                                    <div class="timeline__item-content flex flex-col gap-4">
                                        <p class="text-opacity text-base lg:text-lg font-bold tracking-tight">2016
                                        </p>
                                        <h2
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            <split-words class="split-words flex flex-wrap"
                                                data-animate="fade-up-large">
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="0"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Dreamt</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="30"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>It,</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="60"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Drank</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="90"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>It</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte text-opacity text-base lg:text-lg">
                                            <p>Barsys was founded in 2016 with a bold vision to revolutionize the
                                                drinking experience through innovation, technology, and design. The
                                                company's inception marked the beginning of a journey towards
                                                redefining mixology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline__item card"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                                    <picture class="media media--portrait mobile:media--wide block relative overflow-hidden">
                                    <Image
                                                    src={require("../../../assets/images/Story_History_2017.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                        {/* <img src="assets/images/Story_History_2017.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                    </picture>
                                    <div class="timeline__item-content flex flex-col gap-4">
                                        <p class="text-opacity text-base lg:text-lg font-bold tracking-tight">2017
                                        </p>
                                        <h2
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            <split-words class="split-words flex flex-wrap"
                                                data-animate="fade-up-large">
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="0"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>The</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="30"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Future</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="60"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>of</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="90"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Home</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="120"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Bartending</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte text-opacity text-base lg:text-lg">
                                            <p>Barsys focused on laying the groundwork for growth and development.
                                                The company invested in research and development to refine its
                                                products and enhance user experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline__item card"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                                    <picture class="media media--portrait mobile:media--wide block relative overflow-hidden">
                                    <Image
                                                    src={require("../../../assets/images/Story_History_2018.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                        {/* <img src="assets/images/Story_History_2018.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                    </picture>
                                    <div class="timeline__item-content flex flex-col gap-4">
                                        <p class="text-opacity text-base lg:text-lg font-bold tracking-tight">2018
                                        </p>
                                        <h2
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            <split-words class="split-words flex flex-wrap"
                                                data-animate="fade-up-large">
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="0"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Flavor</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="30"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Fusion</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte text-opacity text-base lg:text-lg">
                                            <p>Barsys expanded its reach into new markets, establishing itself as a
                                                leading innovator in the industry. The company's products gained
                                                popularity among mixology enthusiasts worldwide.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline__item card"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                                    <picture class="media media--portrait mobile:media--wide block relative overflow-hidden">
                                    <Image
                                                    src={require("../../../assets/images/Story_History_2019.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                        {/* <img src="assets/images/Story_History_2019.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                    </picture>
                                    <div class="timeline__item-content flex flex-col gap-4">
                                        <p class="text-opacity text-base lg:text-lg font-bold tracking-tight">2019
                                        </p>
                                        <h2
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            <split-words class="split-words flex flex-wrap"
                                                data-animate="fade-up-large">
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="0"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Beyond</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="30"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>the</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="60"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Bot</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte text-opacity text-base lg:text-lg">
                                            <p>The Barsys ecosystem transcends robotic bartending, offering an
                                                immersive platform where users connect, share insights, and
                                                participate in ongoing learning. This nurtures a lively and
                                                passionate community, enhancing the Barsys experience for everyone
                                                involved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline__item card"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                                    <picture
                                        class="media media--portrait mobile:media--wide block relative overflow-hidden loading">
                                        {/* <img src="assets/images/Story_History_2020.jpg"alt="" loading="lazy" is="lazy-image"> */}
                                        <Image
                                                    src={require("../../../assets/images/Story_History_2020.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                        </picture>
                                    <div class="timeline__item-content flex flex-col gap-4">
                                        <p class="text-opacity text-base lg:text-lg font-bold tracking-tight">2020
                                        </p>
                                        <h2
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            <split-words class="split-words flex flex-wrap"
                                                data-animate="fade-up-large">
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="0"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Innovation</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="30"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>on</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="60"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Tap</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte text-opacity text-base lg:text-lg">
                                            <p>Barsys prioritized innovation by dedicating resources to research and
                                                development, resulting in the introduction of captivating new
                                                features and enhancements across its product line. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline__item card"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                                    <picture
                                        class="media media--portrait mobile:media--wide block relative overflow-hidden loading">
                                             <Image
                                                    src={require("../../../assets/images/Story_History_2021.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                        {/* <img src="assets/images/Story_History_2021.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                    </picture>
                                    <div class="timeline__item-content flex flex-col gap-4">
                                        <p class="text-opacity text-base lg:text-lg font-bold tracking-tight">2021
                                        </p>
                                        <h2
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            <split-words class="split-words flex flex-wrap"
                                                data-animate="fade-up-large">
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="0"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Cheers</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="30"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>to</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="60"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Community</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte text-opacity text-base lg:text-lg">
                                            <p>Barsys concentrated on cultivating a dynamic community of cocktail
                                                enthusiasts. Through interactive initiatives, digital platforms, and
                                                social media interaction, Barsys successfully fostered strong
                                                connections with its expanding network of loyal customers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline__item card"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                                    <picture
                                        class="media media--portrait mobile:media--wide block relative overflow-hidden loading">
                                             <Image
                                                    src={require("../../../assets/images/Story_History_2022.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                        {/* <img src="assets/images/Story_History_2022.jpg" alt="" loading="lazy" is="lazy-image"> */}

                                        </picture>
                                    <div class="timeline__item-content flex flex-col gap-4">
                                        <p class="text-opacity text-base lg:text-lg font-bold tracking-tight">2022
                                        </p>
                                        <h2
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            <split-words class="split-words flex flex-wrap"
                                                data-animate="fade-up-large">
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="0"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Crafting</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="30"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Cocktails</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="60"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>for</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="90"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Everyone</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte text-opacity text-base lg:text-lg">
                                            <p>Barsys set its sights on a future where crafting cocktails becomes
                                                easier and more enjoyable for everyone. Through innovative
                                                initiatives and strategic planning, Barsys aimed to democratize the
                                                art of mixology, making it accessible to enthusiasts of all levels.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline__item card"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                                    <picture class="media media--portrait mobile:media--wide block relative overflow-hidden loading">
                                    <Image
                                                    src={require("../../../assets/images/Story_History_2023.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                        {/* <img src="assets/images/Story_History_2023.jpg" alt="" is="lazy-image"> */}
                                    </picture>
                                    <div class="timeline__item-content flex flex-col gap-4">
                                        <p class="text-opacity text-base lg:text-lg font-bold tracking-tight">2023
                                        </p>
                                        <h2
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            <split-words class="split-words flex flex-wrap"
                                                data-animate="fade-up-large">
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="0"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Mixology</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="30"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Movement</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte text-opacity text-base lg:text-lg">
                                            <p>The Barsys community flourishes, embracing enthusiastic individuals
                                                keen to delve into the realm of cocktails. We team up with
                                                influential figures in the industry, fostering innovation and
                                                expansion.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline__item card"
                                // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                                >
                                <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                                    <picture class="media media--portrait mobile:media--wide block relative overflow-hidden loading">
                                    <Image
                                                    src={require("../../../assets/images/Story_History_2024.jpg")}
                                                    alt="" 
                                                    loading="lazy" 
                                                    is="lazy-image"
                                                    />
                                        {/* <img src="assets/images/Story_History_2024.jpg" alt="" loading="lazy" is="lazy-image"> */}
                                    </picture>
                                    <div class="timeline__item-content flex flex-col gap-4">
                                        <p class="text-opacity text-base lg:text-lg font-bold tracking-tight">2024
                                        </p>
                                        <h2
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            <split-words class="split-words flex flex-wrap"
                                                data-animate="fade-up-large">
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="0"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Crafting</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="30"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>the</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="60"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Future</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="90"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>of</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="120"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Cocktail</animate-element>
                                                </div>
                                                <div class="single-word" style={{display:"inline-block"}}>
                                                    <animate-element class="block" data-animate="fade-up-large"
                                                        data-animate-delay="150"
                                                         style={{transform:" translateY(90%)", opacity: 0}}>Culture</animate-element>
                                                </div>
                                            </split-words></h2>
                                        <div class="rte text-opacity text-base lg:text-lg">
                                            <p>As Barsys looks to the future, the company remains committed to
                                                shaping the future of mixology. With a focus on innovation, customer
                                                satisfaction, and sustainability, Barsys continues to lead the way
                                                in redefining the drinking experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion-list>
                    </slider-element>
                    <div class="scroll-area">
                        <slider-dots class="timeline-dots grid gap-2d5"
                            aria-controls="Slider-template--17436070117622__timeline"><button type="button"
                                class="text-lg text-left font-bold flex items-center gap-2d5" data-index="1"
                                aria-current="true">
                                <span class="sr-only">Page 1</span>2016</button><button type="button"
                                class="text-lg text-left font-bold flex items-center gap-2d5" data-index="2"
                                aria-current="false">
                                <span class="sr-only">Page 2</span>2017</button><button type="button"
                                class="text-lg text-left font-bold flex items-center gap-2d5" data-index="3"
                                aria-current="false">
                                <span class="sr-only">Page 3</span>2018</button><button type="button"
                                class="text-lg text-left font-bold flex items-center gap-2d5" data-index="4"
                                aria-current="false">
                                <span class="sr-only">Page 4</span>2019</button><button type="button"
                                class="text-lg text-left font-bold flex items-center gap-2d5" data-index="5"
                                aria-current="false">
                                <span class="sr-only">Page 5</span>2020</button><button type="button"
                                class="text-lg text-left font-bold flex items-center gap-2d5" data-index="6"
                                aria-current="false">
                                <span class="sr-only">Page 6</span>2021</button><button type="button"
                                class="text-lg text-left font-bold flex items-center gap-2d5" data-index="7"
                                aria-current="false">
                                <span class="sr-only">Page 7</span>2022</button><button type="button"
                                class="text-lg text-left font-bold flex items-center gap-2d5" data-index="8"
                                aria-current="false">
                                <span class="sr-only">Page 8</span>2023</button><button type="button"
                                class="text-lg text-left font-bold flex items-center gap-2d5" data-index="9"
                                aria-current="false">
                                <span class="sr-only">Page 9</span>2024</button></slider-dots>
                    </div>
                </div>
            </div>


        </div>
        <div id="shopify-section-template--17436070117622__empty_space_WgKnCw"
            class="shopify-section section spacing-section">
            {/* <style>
                #shopify-section-template--17436070117622__empty_space_WgKnCw {
                    --spacing-height-desktop: 60px;
                    --spacing-height-mobile: 32px;
                    --color-background: 250 250 250;
                }
            </style> */}


        </div>
        <div id="shopify-section-template--17436070117622__rich-text" class="shopify-section">
            {/* <style>
                #shopify-section-template--17436070117622__rich-text {
                    --section-padding-top: 32px;
                    --section-padding-bottom: 20px;
                    --color-background: 250 250 250;
                    --color-foreground: 23 23 23;
                    --color-border: var(--color-foreground)/ 0.1;
                    --color-border-dark: var(--color-foreground)/ 0.4;
                    --color-border-light: var(--color-foreground)/ 0.06;
                    --color-highlight: 197 232 184;
                }
            </style> */}

            <div class="section section--padding section--rounded relative">
                <div class="page-width page-width--narrow relative">
                    <div class="rich-text md:text-center text-center relative z-1">
                        <div class="rte leading-normal body subtext-md">
                            <p>Recognized and Celebrated</p>
                        </div>
                        <h2 class="heading font-bold leading-none title-md">
                            Discover Where We've&nbsp;Been&nbsp;Showcased</h2>
                    </div>
                </div>
            </div>


        </div>
        <div id="shopify-section-template--17436070117622__scrolling_text_xHxbNE"
            class="shopify-section scrolling-text-section">
            {/* <style>
                #shopify-section-template--17436070117622__scrolling_text_xHxbNE {
                    --section-padding-top: 36px;
                    --section-padding-bottom: 36px;
                    --color-background: 250 250 250;
                    --section-grid-gap: 140px;
                }
            </style> */}

            <div class="section section--padding overflow-hidden">
                <div class="relative z-1">
                    <marquee-element class="scrolling-text scrolling-text--right flex items-center" data-speed="1.6" data-direction="right" data-parallax="1.5">
                        <div class="marquee flex items-center flex-auto whitespace-nowrap">
                            {
                                slideMarque.map((data,id)=>{
                                    return(
                                        <div key={id} class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative"
                                        //  style="--image-height: 60px;"
                                        >
                                        <a class="scrolling-text__item__link" href={data.url}>
                                        <Image
                                                            src={data.imgSrc}
                                                            alt="" 
                                                            loading="lazy" 
                                                            is="lazy-image"
                                                            />
                                            {/* <img src="assets/images/home-scroll-gray-icon-1.png" alt="" loading="lazy" is="lazy-image"> */}
                                        </a>
                                    </div> 
                                    )
                                })
                            }
                            {/* <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFPGWe3u1kpL1QjQZH2rzy/https%3A%2F%2Fwww.buzzfeed.com%2Fjessicahall2%2Fproducts-make-house-smarter%3Forigin%3Dweb-hf">
                                    <img src="assets/images/home-scroll-gray-icon-1.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative" style="--image-height: 80px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9Bp6QyX1WVjZwU_nUZz/https%3A%2F%2Fwww.cbsnews.com%2Fessentials%2Fx-christmas-gifts-that-mom-is-guaranteed-to-love%2F">
                                    <img src="assets/images/home-scroll-gray-icon-2.png" alt="" loading="lazy" is="lazy-image">
                                  
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9FU1BKXrz2ucgUqJdJg/https%3A%2F%2Fwww.gadgetany.com%2Fnews%2Fbarsys-360-the-smart-cocktail-maker-can-make-your-weekend-party-more-lively%2F">
                                    <img src="assets/images/home-scroll-gray-icon-6.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9FUVN-3veyxwAL2gJzT/https%3A%2F%2Fcoolmaterial.com%2Ffood-drink%2Fbarsys-360-smart-cocktail-maker%2F">
                                    <img src="assets/images/home-scroll-gray-icon-3.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9JjY77zkDL11whdzxCW/https%3A%2F%2Fwww.foodbeast.com%2Fnews%2Fbarsys-360%2F">
                                    <img src="assets/images/home-scroll-gray-icon-5.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO8o9Pcm4UxrQdAyu5VqN/https%3A%2F%2Ffhm.nl%2Fbarsys-360%2F">
                                    <img src="assets/images/home-scroll-gray-icon-4.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9J4eBT5Rr2PqAimd3cl/https%3A%2F%2Fgadgetuser.com%2Fai-gadgets%2Fbarsys-360-your-personal-mixologist%2F">
                                    <img src="assets/images/home-scroll-gray-icon-9.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9B1tbNw0CaGbgdoxB9H/https%3A%2F%2Fthespoon.tech%2Fbarsys-makes-case-for-adding-style-to-bartender-robot-category-with-the-barsys-360%2F">
                                    <img src="assets/images/home-scroll-gray-icon-12.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9JfXy6Qpgxk9A8_XZOI/https%3A%2F%2Fwww.trendhunter.com%2Ftrends%2Fcocktail-maker">
                                    <img src="assets/images/home-scroll-gray-icon-10.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO84BgRRat_5pdQs812Dz/https%3A%2F%2Fwww.gearpatrol.com%2Fhome%2Fa42626707%2Fnew-home-releases-2023%2F">
                                    <img src="assets/images/home-scroll-gray-icon-7.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO88lJULpD0HpPQfItQq5/https%3A%2F%2Fdesigntaxi.com%2Fnews%2F424588%2FMeet-The-Smart-Cocktail-Mixer-That-Can-Turn-Anyone-Into-A-Mixologist%2F">
                                    <img src="assets/images/home-scroll-gray-icon-8.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="">
                                    <img src="assets/images/home-scroll-gray-icon-18.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9BHh_vrOKfNyg2YWOPx/https%3A%2F%2Frobbreport.com%2Flifestyle%2Fproduct-recommendations%2Fgallery%2Fbest-boss-gifts-1234858015%2F">
                                    <img src="assets/images/home-scroll-gray-icon-16.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9NV1UuwOllYKAD0gydn/https%3A%2F%2Fwww.thespruce.com%2Fbest-hostess-gifts-5225860">
                                    <img src="assets/images/home-scroll-gray-icon-20.png" alt="" loading="lazy" is="lazy-image">
                                </a></div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9B-_hGzBx2oNQE1PCxj/https%3A%2F%2Fmensgear.net%2Fbarsys-360%2F">
                                    <img src="assets/images/home-scroll-gray-icon-15.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO9NcHLRhV_FKZgPAF5Nw/https%3A%2F%2Fwww.insidehook.com%2Ffood%2Fbest-food-drink-gifts">
                                    <img src="assets/images/home-scroll-gray-icon-14.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div>
                            <div class="scrolling-text__item with-media flex items-center flex-auto media media--transparent relative loading" style="--image-height: 60px;">
                                <a class="scrolling-text__item__link" href="https://streaklinks.com/B7LFO888PEubam1pQQmrfwuz/https%3A%2F%2Fhiconsumption.com%2Ffood-drink%2Fbarsys-360-smart-cocktail-maker%2F">
                                    <img src="assets/images/home-scroll-gray-icon-13.png" alt="" loading="lazy" is="lazy-image">
                                </a>
                            </div> */}
                        </div>
                    </marquee-element>
                </div>
            </div>


        </div>
    </main>
    </div>
  )
}

export default OurStoryContent