import React from "react";
import "./technology.css";
import Image from "next/image";
import img1 from "../../../assets/images/Company_Vision_and_History.jpg";
import img2 from "../../../assets/images/Technological_Innovation.jpg";
import img3 from "../../../assets/images/Precision_and_Performance.jpg";
import img4 from "../../../assets/images/Sustainability.jpg";
import img5 from "../../../assets/images/User_Experience.jpg"
const TechnologyContent = () => {
  return (
    <div class="page-container" id="PageContainer">
      <main class="main-content relative" id="MainContent" role="main">
        <div
          id="shopify-section-template--17773897777398__image_with_text_overlay_T3aDaf"
          class="shopify-section"
        >

          <div class="section section--padding" allow-transparent-header="">
            <div class="relative">
              <div class="banner media--750px mobile:media--auto relative">
                <media-element
                  class="banner__media block w-full h-full overflow-hidden"
                  data-parallax="0.3"
                  data-parallax-dir="vertical"
                >
                  <animate-element
                    data-animate="zoom-out"
                    class="media media--height block w-full h-full relative overflow-hidden animate"
                    style={{transform: "scale(1)"}}
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
                  <div class="page-width w-full h-full flex md:items-end md:justify-start items-end justify-start">
                    <div class="banner__box banner__box--large md:text-left text-left">
                      <h2 class="banner__title heading font-bold leading-none title-lg tracking-heading">
                        <split-words
                          class="split-words flex flex-wrap"
                          data-animate="fade-up-large"
                          data-animate-delay="250"
                        >
                          <div
                            class="single-word"
                            style={{display: "inline-block"}}
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="250"
                              style={{transform: "translateY(0px)", opacity: 1}}
                            >
                              Our
                            </animate-element>
                          </div>
                          <div
                            class="single-word"
                            style={{display: "inline-block"}}
                          >
                            <animate-element
                              class="block animate"
                              data-animate="fade-up-large"
                              data-animate-delay="280"
                              style={{transform: "translateY(0px)", opacity: 1}}
                            >
                              Technology
                            </animate-element>
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
        <div
          id="shopify-section-template--17773897777398__empty_space_iXJnTb"
          class="shopify-section section spacing-section"
        >
        </div>
        <div
          id="shopify-section-template--17773897777398__video_Q49KCh"
          class="shopify-section"
        >

          <div class="section section--padding section--rounded relative">
            <div class="page-width relative">
              <div class="video-hero banner media--adapt mobile:media--auto relative">
                <video-media class="media deferred-media block banner__media media--height w-full h-full relative">
                  <Image
                    src={require("../../../assets/images/technology-image.png")}
                    alt="Load video: "
                    loading="lazy"
                    fetchpriority="auto"
                    is="lazy-image"
                    class="loaded"
                  />
                  {/* <img src="assets/images/technology-image.png" alt="Load video: " loading="lazy" fetchpriority="auto" is="lazy-image" class="loaded"> */}
                  <template>
                    <video
                      playsinline="true"
                      autoplay="autoplay"
                      preload="none"
                      poster="assets/images/techonology-video-banner.png"
                    >
                      <source
                        src="assets/images/technology-video.mp4"
                        type="video/mp4"
                      />
                      <Image
                        src={require("../../../assets/images/techonology-video-banner.png")}
                      />
                      {/* <img
                                            src="assets/images/techonology-video-banner.png" > */}
                    </video>
                  </template>
                  <button
                    type="button"
                    id="DeferredPoster-33008827924726"
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
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--17773897777398__rich_text_KJj8ec"
          class="shopify-section"
        >

          <div class="section section--padding">
            <div class="page-width page-width--narrow relative">
              <div class="rich-text md:text-left text-left relative z-1">
                <div class="rte leading-normal body subtext-md">
                  <p>
                    Barsys embarked on its journey in 2016 with a bold vision:
                    to revolutionize the drinking experience through the
                    seamless integration of innovation, technology, design, and
                    mechatronics. Over the course of the first five years, we
                    dedicated ourselves to developing and perfecting mechatronic
                    robotic systems specifically tailored for the consumer
                    market.
                  </p>
                  <p>
                    During this crucial period of research and development, we
                    invested countless hours into refining our mechatronics
                    expertise to create products that would redefine cocktail
                    crafting at home. Our team of engineers and designers worked
                    tirelessly to pioneer features that seamlessly blend
                    mechanical and electrical engineering with robotics, setting
                    Barsys apart as a leader in the industry.
                  </p>
                  <p>
                    This intensive focus on mechatronics laid the groundwork for
                    the groundbreaking technology that powers Barsys products
                    today. Our exclusive wireless mixer, protected by patents,
                    exemplifies this dedication. Integrated with mechatronic
                    components, it ensures unparalleled performance,
                    reliability, and precision in every pour.
                  </p>
                  <p>
                    At the heart of Barsys' innovation lies our unique pumping
                    mechanism. Meticulously engineered in-house, this
                    mechatronic marvel delivers liquids with pinpoint accuracy,
                    eliminating wastage entirely and ensuring consistent,
                    high-quality cocktails with every use. Advanced technology
                    such as weight sensors and induction technology, honed over
                    years of development, enables us to measure liquids with
                    unmatched precision, down to a mere 2 ml.
                  </p>
                  <p>
                    Furthermore, our commitment to sustainability is reflected
                    in our eco-friendly design ethos. From our aluminum coaster
                    to our energy-efficient systems, we prioritize minimizing
                    our environmental footprint while maximizing the user
                    experience.
                  </p>
                  <p>
                    But Barsys doesn't just stop at technological innovation.
                    We've used our research in mechatronics to bring the art,
                    theatrics, methodology, and the entire cocktail-making
                    experience into one seamless form factor through our
                    ecosystem. Lighting elements add a touch of theatrics, while
                    our mechatronics systems ensure precision and consistency in
                    every pour. The entire process culminates in the creation of
                    the perfect cocktail, which we see as an art form in itself.
                  </p>
                  <p>
                    As a result of this relentless dedication to innovation and
                    artistry, Barsys has emerged as a trailblazer in the field
                    of cocktail crafting, offering consumers unparalleled
                    performance, reliability, and precision in every pour.
                    Experience the culmination of five years of mechatronics
                    mastery with Barsys Technology – where cutting-edge robotics
                    meets the art of mixology in a truly professional manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--17773897777398__timeline_jNbPUy"
          class="shopify-section"
        >

          <div class="section section--padding">
            <div class="page-width relative overflow-hidden md:overflow-visible">
              <div class="title-wrapper leading-none gap-4 lg:gap-8 flex flex-col text-left md:items-end md:flex-row md:justify-between relative z-1">
                <div class="grid gap-4">
                  <h2 class="heading font-bold title-md">
                    <split-words
                      class="split-words flex flex-wrap"
                      data-animate="fade-up-large"
                    >
                      <div class="single-word" style={{display: "inline-block"}}>
                        <animate-element
                          class="block"
                          data-animate="fade-up-large"
                          data-animate-delay="0"
                          // style={{transform: "translateY(90%)", opacity: 0}}
                        >
                          Our
                        </animate-element>
                      </div>
                      <div class="single-word" style={{display: "inline-block"}}>
                        <animate-element
                          class="block"
                          data-animate="fade-up-large"
                          data-animate-delay="30"
                          // style={{transform: "translateY(90%)", opacity: 0}}
                        >
                          Technology
                        </animate-element>
                      </div>
                    </split-words>
                  </h2>
                </div>
                <div class="indicators hidden lg:flex gap-2d5">
                  <button
                    class="button button--secondary"
                    type="button"
                    is="previous-button"
                    aria-controls="Slider-template--17773897777398__timeline_jNbPUy"
                    aria-label="Previous"
                    disabled=""
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
                    class="button button--secondary"
                    type="button"
                    is="next-button"
                    aria-controls="Slider-template--17773897777398__timeline_jNbPUy"
                    aria-label="Next"
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
              <slider-element
                id="Slider-template--17773897777398__timeline_jNbPUy"
                class="grid slider slider--desktop slider--tablet"
                selector=".card-grid>.card"
              >
                <motion-list class="timeline card-grid grid">
                  <div
                    class="timeline__item card selected"
                    style={{ 
                        transform: 'translateY(var(--motion-translateY))', 
                        '--motion-translateY': '50px',
                        // opacity: 0,
                        // visibility: 'hidden'
                      }}
                    // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                  >
                    <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                      <picture 
                      class={`media media--portrait mobile:media--wide block relative overflow-hidden ${img1 ? '' : 'loading'}`}
>
                        <Image
                          src={img1}
                          alt=""
                          loading="lazy"
                          is="lazy-image"
                        />
                        {/* <img src="assets/images/Company_Vision_and_History.jpg" alt="" loading="lazy" is="lazy-image"> */}
                      </picture>
                      <div class="timeline__item-content flex flex-col gap-4">
                        <h2 class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                          <split-words
                            class="split-words flex flex-wrap"
                            data-animate="fade-up-large"
                          >
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="0"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                Company
                              </animate-element>
                            </div>
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="30"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                Vision
                              </animate-element>
                            </div>
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="60"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                and
                              </animate-element>
                            </div>
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="90"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                History
                              </animate-element>
                            </div>
                          </split-words>
                        </h2>
                        <div class="rte text-opacity text-base lg:text-lg">
                          <p>
                            Barsys was founded in 2016 with an ambitious vision
                            to revolutionize the home cocktail experience.
                            Emphasizing a blend of innovation, technology,
                            design, and mechatronics, Barsys has quickly
                            established itself as a pioneer in the consumer
                            robotics market. Over its first five years, the
                            company focused on rigorous research and development
                            to create advanced mechatronic systems tailored for
                            home use, demonstrating a robust commitment to
                            redefining home entertainment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="timeline__item card"
                    style={{ 
                        transform: 'translateY(var(--motion-translateY))', 
                        '--motion-translateY': '50px',
                        // opacity: 0,
                        // visibility: 'hidden'
                      }}
                    // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                  >
                    <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                      <picture class={`media media--portrait mobile:media--wide block relative overflow-hidden ${img2?"":"loading"}`}>
                        <Image
                          src={img2}
                          alt=""
                          loading="lazy"
                          sizes="(max-width: 767px) 100vw, 50vw"
                          is="lazy-image"
                        />
                        {/* <img src="assets/images/Technological_Innovation.jpg" alt="" loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" is="lazy-image"> */}
                      </picture>
                      <div class="timeline__item-content flex flex-col gap-4">
                        <h2 class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                          <split-words
                            class="split-words flex flex-wrap"
                            data-animate="fade-up-large"
                          >
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="0"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                Technological
                              </animate-element>
                            </div>
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="30"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                Innovation
                              </animate-element>
                            </div>
                          </split-words>
                        </h2>
                        <div class="rte text-opacity text-base lg:text-lg">
                          <p>
                            Barsys stands out in the smart home appliance sector
                            through its patented wireless mixer and
                            sophisticated mechatronic components that ensure
                            unparalleled performance and reliability. The use of
                            cutting-edge technology like weight sensors and
                            induction technology enhances the precision of
                            liquid measurements, facilitating the crafting of
                            perfect cocktails every time. This focus on
                            innovative product features helps maintain Barsys'
                            status as an industry leader, appealing to
                            tech-savvy consumers interested in home mixology
                            solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="timeline__item card"
                    style={{ 
                        transform: 'translateY(var(--motion-translateY))', 
                        '--motion-translateY': '50px',
                        // opacity: 0,
                        // visibility: 'hidden'
                      }}
                    // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                  >
                    <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                      <picture class={`media media--portrait mobile:media--wide block relative overflow-hidden ${img3?"":"loading"}`}>
                        <Image
                          src={img3}
                          alt=""
                          loading="lazy"
                          sizes="(max-width: 767px) 100vw, 50vw"
                          is="lazy-image"
                        />
                        {/* <img src="assets/images/Precision_and_Performance.jpg" alt="" loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" is="lazy-image"> */}
                      </picture>
                      <div class="timeline__item-content flex flex-col gap-4">
                        <h2 class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                          <split-words
                            class="split-words flex flex-wrap"
                            data-animate="fade-up-large"
                          >
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="0"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                Precision
                              </animate-element>
                            </div>
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="30"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                and
                              </animate-element>
                            </div>
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="60"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                Performance
                              </animate-element>
                            </div>
                          </split-words>
                        </h2>
                        <div class="rte text-opacity text-base lg:text-lg">
                          <p>
                            At the core of Barsys' success is its unique
                            in-house developed pumping mechanism, a mechatronic
                            marvel that delivers liquids with pinpoint
                            accuracy—up to a mere 2 ml. This precision
                            eliminates waste and guarantees consistent,
                            high-quality cocktails, enhancing the user
                            experience significantly. Such high-performance
                            standards set Barsys apart, making its products
                            essential for anyone passionate about precision
                            cocktail crafting at home. The brand's commitment to
                            excellence ensures that each pour is both an art and
                            a science, meeting professional standards.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="timeline__item card"
                    style={{ 
                        transform: 'translateY(var(--motion-translateY))', 
                        '--motion-translateY': '50px',
                        // opacity: 0,
                        // visibility: 'hidden'
                      }}
                    // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                  >
                    <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                      <picture class={`media media--portrait mobile:media--wide block relative overflow-hidden ${img4?"":"loading"}`}>
                        <Image
                          src={img4}
                          alt=""
                          loading="lazy"
                          sizes="(max-width: 767px) 100vw, 50vw"
                          is="lazy-image"
                        />
                        {/* <img src="assets/images/Sustainability.jpg" alt="" loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" is="lazy-image"> */}
                      </picture>
                      <div class="timeline__item-content flex flex-col gap-4">
                        <h2 class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                          <split-words
                            class="split-words flex flex-wrap"
                            data-animate="fade-up-large"
                          >
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="0"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                Sustainability
                              </animate-element>
                            </div>
                          </split-words>
                        </h2>
                        <div class="rte text-opacity text-base lg:text-lg">
                          <p>
                            Barsys also emphasizes eco-friendly practices in its
                            design ethos. By utilizing aluminum coasters and
                            energy-efficient systems, the company highlights its
                            commitment to reducing its environmental footprint
                            while maximizing functionality and style. This
                            sustainable approach not only aligns with modern
                            consumer expectations but also enhances Barsys'
                            reputation as a responsible manufacturer in the
                            sustainable technology market.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="timeline__item card"
                    style={{ 
                        transform: 'translateY(var(--motion-translateY))', 
                        '--motion-translateY': '50px',
                        // opacity: 0,
                        // visibility: 'hidden'
                      }}
                    // style="transform: translateY(var(--motion-translateY)); --motion-translateY: 50px; opacity: 0; visibility: hidden;"
                  >
                    <div class="flex flex-col md:grid grid-cols-2 overflow-hidden">
                      <picture class={`media media--portrait mobile:media--wide block relative overflow-hidden ${img5?"":"loading"}`}>
                        <Image
                          src={img5}
                          alt=""
                          loading="lazy"
                          sizes="(max-width: 767px) 100vw, 50vw"
                          is="lazy-image"
                        />
                        {/* <img src="assets/images/User_Experience.jpg" alt="" loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" is="lazy-image"> */}
                      </picture>
                      <div class="timeline__item-content flex flex-col gap-4">
                        <h2 class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                          <split-words
                            class="split-words flex flex-wrap"
                            data-animate="fade-up-large"
                          >
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="0"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                User
                              </animate-element>
                            </div>
                            <div
                              class="single-word"
                              style={{display: "inline-block"}}
                            >
                              <animate-element
                                class="block"
                                data-animate="fade-up-large"
                                data-animate-delay="30"
                                // style={{transform: "translateY(90%)", opacity: 0}}
                              >
                                Experience
                              </animate-element>
                            </div>
                          </split-words>
                        </h2>
                        <div class="rte text-opacity text-base lg:text-lg">
                          <p>
                            Beyond just technological innovation, Barsys
                            enriches the cocktail-making process with elements
                            of art and theatrics, integrating lighting and
                            precise mechanics to create a captivating
                            experience. This seamless form factor, combined with
                            the ecosystem's precision, transforms cocktail
                            crafting into a sophisticated art form,
                            significantly enhancing the home entertainment
                            experience. Barsys products are designed not just to
                            perform but to delight, making each cocktail
                            preparation an event in itself.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion-list>
              </slider-element>
              <div class="scroll-area">
                <slider-dots
                  class="timeline-dots grid gap-2d5"
                  aria-controls="Slider-template--17773897777398__timeline_jNbPUy"
                >
                  <button
                    type="button"
                    class="text-lg text-left font-bold flex items-center gap-2d5"
                    data-index="1"
                    aria-current="true"
                  >
                    <span class="sr-only">Page 1</span>1
                  </button>
                  <button
                    type="button"
                    class="text-lg text-left font-bold flex items-center gap-2d5"
                    data-index="2"
                    aria-current="false"
                  >
                    <span class="sr-only">Page 2</span>2
                  </button>
                  <button
                    type="button"
                    class="text-lg text-left font-bold flex items-center gap-2d5"
                    data-index="3"
                    aria-current="false"
                  >
                    <span class="sr-only">Page 3</span>3
                  </button>
                  <button
                    type="button"
                    class="text-lg text-left font-bold flex items-center gap-2d5"
                    data-index="4"
                    aria-current="false"
                  >
                    <span class="sr-only">Page 4</span>4
                  </button>
                  <button
                    type="button"
                    class="text-lg text-left font-bold flex items-center gap-2d5"
                    data-index="5"
                    aria-current="false"
                  >
                    <span class="sr-only">Page 5</span>5
                  </button>
                </slider-dots>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnologyContent;
