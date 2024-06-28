import React from 'react'

const AboutUs = () => {
  return (
    <div class="dropdown opacity-0 invisible absolute max-w-full pointer-events-none"  style={{opacity: 1, visibility: "visible"}} open>
                      <div class="dropdown__container relative" style={{transform: "translateY(0px)"}}>
                        <span class="dropdown__corner corner left top flex absolute pointer-events-none">
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
                            <path
                              d="M1 101C1 45.7715 45.7715 1 101 1"
                              fill="none"
                            ></path>
                          </svg>
                        </span>
                        <span class="dropdown__corner corner right top flex absolute pointer-events-none">
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
                            <path
                              d="M1 101C1 45.7715 45.7715 1 101 1"
                              fill="none"
                            ></path>
                          </svg>
                        </span>
                        <ul
                          class="dropdown__nav grid gap-1d5 xl:gap-2"
                          role="list"
                        >
                          <li class="opacity-0">
                            <p>
                              <a
                                href="our-story.html"
                                class="reversed-link text-sm-base"
                              >
                                Our Story
                              </a>
                            </p>
                          </li>
                          <li class="opacity-0">
                            <p>
                              <a
                                href="technology.html"
                                class="reversed-link text-sm-base"
                              >
                                Our Technology
                              </a>
                            </p>
                          </li>
                          <li class="opacity-0">
                            <p>
                              <a
                                href="faqs.html"
                                class="reversed-link text-sm-base"
                              >
                                FAQ's
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
  )
}

export default AboutUs