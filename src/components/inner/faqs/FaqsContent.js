import React from 'react'
import "./faqs.css"
const FaqsContent = () => {
  return (
    <div class="page-container" id="PageContainer">

    <main class="main-content relative" id="MainContent" role="main">
        <div id="shopify-section-template--17436070478070__rich-text" class="shopify-section">
            {/* <style>
                #shopify-section-template--17436070478070__rich-text {
                    --section-padding-top: 72px;
                    --section-padding-bottom: 0px;
                }
            </style> */}

            <div class="section section--padding">
                <div class="page-width relative">
                    <div class="rich-text md:text-left text-left relative z-1">
                        <h2 class="heading font-bold leading-none title-xl tracking-heading"><split-words
                                class="split-words flex flex-wrap" data-animate="fade-up-large"
                                data-animate-delay="250">
                                <div class="single-word" style={{display: "inline-block"}}><animate-element
                                        class="block animate" data-animate="fade-up-large" data-animate-delay="250"
                                        style={{transform: "translateY(0px)", opacity: 1}}>FAQ's</animate-element>
                                </div>
                            </split-words></h2>
                        <div class="rte leading-normal body subtext-md">
                            <p>Welcome to our FAQ, we are so happy to have you here and as a client. <br></br>We have
                                tried to answer the most common questions.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div id="shopify-section-template--17436070478070__empty-space"
            class="shopify-section section spacing-section">
            {/* <style>
                #shopify-section-template--17436070478070__empty-space {
                    --spacing-height-desktop: 120px;
                    --spacing-height-mobile: 44px;
                }
            </style> */}


        </div>
        <div id="shopify-section-template--17436070478070__faq" class="shopify-section">
            {/* <style>
                #shopify-section-template--17436070478070__faq {
                    --section-padding-top: 0px;
                    --section-padding-bottom: 120px;
                }
            </style> */}

            <div class="section section--padding">
                <div class="page-width relative">
                    <div class="faqs with-border flex flex-col lg:flex-row relative z-1">
                        <div class="grow grid gap-8 md:gap-12">
                            <div class="faq">
                                <div class="accordion accordion--text">
                                    <div class="grid gap-2d5">
                                        <p
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            Payments &amp; Safety</p>
                                        <div class="text-opacity text-base rte"></div>
                                    </div>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Is my payment data safe with you?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>All direct payment gateways adhere to the standards set by PCI-DSS as
                                                managed by the PCI Security Standards Council, which is a joint
                                                effort of brands like Visa, MasterCard, American Express, and
                                                Discover.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Do you accept online payments?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>Yes, we accept online payments. All payment processing and vital
                                                customer information is quick, easy, and secure.<br></br></p>
                                            <p>Learn more about our store's safe checkout experience (powered by
                                                Shopify)&nbsp;<a
                                                    href="https://www.shopify.com/legal/terms#DataProtection"
                                                    target="_blank"
                                                    title="https://www.shopify.com/legal/terms#DataProtection">here</a>.
                                            </p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Where can I learn more about the payment and processing on your
                                                store?</span><svg class="icon icon-plus-alt icon-xs flex-auto"
                                                viewBox="0 0 14 14" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>For more insight, you may also want to read Shopify’s Terms of
                                                Service&nbsp;<a href="https://www.shopify.com/legal/terms"
                                                    target="_blank"
                                                    title="https://www.shopify.com/legal/terms">here</a>&nbsp;or
                                                Privacy Statement&nbsp;<a
                                                    href="https://www.shopify.com/legal/privacy" target="_blank"
                                                    title="https://www.shopify.com/legal/privacy">here</a>.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                What forms of payment do you accept?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>We accept payments from major credit card companies like Visa,
                                                Mastercard, and American Express.</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            <div class="faq">
                                <div class="accordion accordion--text">
                                    <div class="grid gap-2d5">
                                        <p
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            Shipping &amp; Delivery</p>
                                        <div class="text-opacity text-base rte"></div>
                                    </div>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                How long does it take to get my products?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>Domestic shipping can take up to 5 business days.<br></br>Foreign shipping
                                                could take up to 14 business days.<br></br>Due to global supply chain
                                                challenges, shipping times could be longer than usual.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                How much does it cost?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>Shipping rates can vary depending on your region and are calculated
                                                at checkout.<br></br>Here are the full details of our<a
                                                    href="https://thebarsys.com/policies/shipping-policy"
                                                    title="Shipping Policy">Shipping Policy</a>.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Is there free shipping?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>Yes, we offer free shipping for large domestic orders. Check the cart
                                                to see the current deal on free shipping..</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Do you ship internationally?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>Yes, we ship our products all over the globe.<br></br>Please note that
                                                free shipping is not applicable for international orders and that
                                                shipping rates could vary depending on your region.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Do you ship to my area?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>A full list of all of our shipping areas can be found <a
                                                    href="https://thebarsys.com/policies/shipping-policy"
                                                    title="Shipping Policy">here</a>.<br></br>If your country or region
                                                is not mentioned, please feel free to reach out to see if we can
                                                work out the details.</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            <div class="faq">
                                <div class="accordion accordion--text">
                                    <div class="grid gap-2d5">
                                        <p
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            Warranty &amp; Repair</p>
                                        <div class="text-opacity text-base rte"></div>
                                    </div>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Do you offer warranty for your products?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>All our products are subject to quality control.<br></br>Our warranty
                                                provides a guarantee against manufacturer defects.<br></br>The guarantee
                                                covers any manufacturing, design, or material defect. Please notify
                                                us within 2 months of noticing any defects.<br></br>It does not cover
                                                blows, improper use, or other issues that are not attributable to a
                                                manufacturer defects.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Do you offer extended warranty?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>An extended warranty can be added to your products for an additional
                                                cost.<br></br>Please get in touch for more information about extended
                                                warranties.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                How much does extended warranty cost?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>The extended warranty could come at a different cost depending on the
                                                type of product and extended period.<br></br>Please get in touch for more
                                                information.</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            <div class="faq">
                                <div class="accordion accordion--text">
                                    <div class="grid gap-2d5">
                                        <p
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            Returns &amp; Refunds</p>
                                        <div class="text-opacity text-base rte"></div>
                                    </div>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Do you offer refunds?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>Yes, we offer full and partial refunds.<br></br>Please enquire for more
                                                information about our Refund policy.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                How long after I complete a purchase can I ask for a
                                                refund?</span><svg class="icon icon-plus-alt icon-xs flex-auto"
                                                viewBox="0 0 14 14" stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>A refund request can be submitted within a month after the purchase
                                                is made.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                How much can I get refunded?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>In the case when the <strong>product and packaging are unopened and
                                                    undamaged</strong>, you are <strong>eligible </strong>for a full
                                                refund.<br></br>In the case when <strong>the packaging has been opened
                                                    and the product has been used</strong>, you are <strong>eligible
                                                </strong>for a partial refund.<br></br>In the case when a <strong>product
                                                    has been damaged</strong>, and the damage is not covered by your
                                                warranty, you are <strong>not eligible </strong>for a
                                                refund.<br></br>Please check our <a
                                                    href="https://thebarsys.com/policies/terms-of-service"
                                                    title="Terms of Service">Terms of Service </a>to see if you're
                                                eligible for a refund.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Who pays the shipping costs in the case of a refund when the order
                                                doesn't have free shipping?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>When an order does not include free shipping, all shipping costs
                                                (including the return shipping) are handled by the customer.</p>
                                        </div>
                                    </details>
                                </div>
                                <div class="accordion">
                                    <details class="details" is="accordion-details" aria-expanded="false">
                                        <summary
                                            class="details__summary flex items-center justify-between gap-2 cursor-pointer">
                                            <span class="text-base lg:text-lg xl:text-xl font-medium leading-tight">
                                                Who pays the shipping costs in the case of a refund when the order
                                                has free shipping?</span><svg
                                                class="icon icon-plus-alt icon-xs flex-auto" viewBox="0 0 14 14"
                                                stroke="currentColor" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 1V13M13 7H1"></path>
                                            </svg>
                                        </summary>
                                        <div class="details__content text-base rte">
                                            <p>When an order includes free shipping, only the cost of the return
                                                shipping is handled by the customer.</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <form method="post" action="/contact#ContactForm-template--17436070478070__faq"
                            id="ContactForm-template--17436070478070__faq" accept-charset="UTF-8" class="grow-0">
                            <input type="hidden" name="form_type" value="contact"/><input type="hidden" name="utf8"
                                value="✓" /><sticky-element
                                class="contact__sidebar grid gap-7d5 md:gap-10 sticky top-0"
                                style={{insetBlockStart: "121px", inset: "121px"}}>
                                <div class="flex justify-between gap-6">
                                    <div class="grid gap-2d5">
                                        <p
                                            class="heading lg:text-3xl text-2xl font-bold leading-none tracking-tight">
                                            Didn’t find your answer?</p>
                                        <div class="text-opacity text-base rte">
                                            <p>Don't hestitate to contact us</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid gap-4d5 md:gap-6">
                                    <div class="field">
                                        <input class="input is-floating" autocomplete="name" type="text"
                                            id="ContactFormName-template--17436070478070__faq" name="contact[Name]"
                                            value="" placeholder="Name" />
                                        <label class="label is-floating"
                                            for="ContactFormName-template--17436070478070__faq">Name</label>
                                    </div>
                                    <div class="field">
                                        <input class="input is-floating" autocomplete="email" type="email"
                                            id="ContactFormEmail-template--17436070478070__faq"
                                            name="contact[email]" spellcheck="false" autocapitalize="off" value=""
                                            placeholder="Email" required="" />
                                        <label class="label is-floating"
                                            for="ContactFormEmail-template--17436070478070__faq">Email</label>
                                    </div>
                                    <div class="field">
                                        <textarea class="textarea is-floating" rows="4"
                                            id="ContactFormMessage-template--17436070478070__faq"
                                            name="contact[Message]" placeholder=" "></textarea>
                                        <label class="label is-floating"
                                            for="ContactFormMessage-template--17436070478070__faq">Message</label>
                                    </div>
                                    <div class="field">
                                        <label for="ContactSubmit-template--17436070478070__faq"
                                            class="sr-only">Send message</label>
                                        <button type="submit" id="ContactSubmit-template--17436070478070__faq"
                                            class="button button--primary button--fixed" is="hover-button">
                                            <span class="btn-fill" data-fill=""></span>
                                            <span class="btn-text">Send message</span>
                                            <span class="btn-loader">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span></button>
                                    </div>
                                </div>
                            </sticky-element></form>
                    </div>
                </div>
            </div>
        </div>
    </main></div>
  )
}

export default FaqsContent