import React from 'react'
import './contactform.css'
const ContactForm = () => {
  return (
    <>
      <div class="page-container" id="PageContainer">
        <main class="main-content relative" id="MainContent" role="main">
            <div id="shopify-section-template--17436070084854__rich-text" class="shopify-section">
                <div class="section section--padding">
                    <div class="page-width relative">
                        <div class="rich-text md:text-left text-left relative z-1">
                            <h2 class="heading font-bold leading-none title-xl tracking-heading"><split-words
                                    class="split-words flex flex-wrap" data-animate="fade-up-large"
                                    data-animate-delay="250">
                                    <div class="single-word"
                                    style={{display:"inline-block"}}
                                    ><animate-element
                                            class="block animate" data-animate="fade-up-large" data-animate-delay="250"
                                            style={{ transform: 'translateY(0px)', opacity: 1 }}
                                            >Contact</animate-element>
                                    </div>
                                    <div class="single-word" style={{display:"inline-block"}}><animate-element
                                            class="block animate" data-animate="fade-up-large" data-animate-delay="280"
                                            style={{ transform: 'translateY(0px)', opacity: 1 }}>Us</animate-element></div>
                                </split-words></h2>
                            <div class="rte leading-normal body subtext-lg">
                                <p>We'd love to hear from you. Our team is here to help. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="shopify-section-template--17436070084854__empty-space"
                class="shopify-section section spacing-section">
            </div>
            <div id="shopify-section-template--17436070084854__contact-form" class="shopify-section">
                <div class="section section--padding">
                    <div class="page-width relative">
                        <div class="contact flex flex-col lg:flex-row">
                            <form method="post" action="/contact#ContactForm-template--17436070084854__contact-form"
                                id="ContactForm-template--17436070084854__contact-form" accept-charset="UTF-8"
                                class="grow"><input type="hidden" name="form_type" value="contact" /><input type="hidden"
                                    name="utf8" value="✓" />
                                <div class="contact__fields flex flex-wrap gap-4d5 md:gap-6">
                                    <div class="field">
                                        <input class="input is-floating" autocomplete="name" type="text"
                                            id="ContactFormName-template--17436070084854__contact-form"
                                            name="contact[Name]" value="" placeholder="Name" />
                                        <label class="label is-floating"
                                            for="ContactFormName-template--17436070084854__contact-form">Name</label>
                                    </div>
                                    <div class="field">
                                        <input class="input is-floating" autocomplete="email" type="email"
                                            id="ContactFormEmail-template--17436070084854__contact-form"
                                            name="contact[email]" spellcheck="false" autocapitalize="off" value=""
                                            placeholder="Email" required="" />
                                        <label class="label is-floating"
                                            for="ContactFormEmail-template--17436070084854__contact-form">Email</label>
                                    </div>
                                    <div class="field"><input class="input is-floating" type="text"
                                            id="ContactFormInput-template--17436070084854__contact-form-custom_field-1"
                                            name="contact[Phone number]" placeholder="Phone number" />
                                        <label class="label is-floating"
                                            for="ContactFormInput-template--17436070084854__contact-form-custom_field-1">Phone
                                            number</label>
                                    </div>
                                    <div class="field"><select class="select is-floating"
                                            id="ContactFormInput-template--17436070084854__contact-form-custom_field-2"
                                            name="contact[Subject]" is="custom-select">
                                            <option value="" disabled="" selected=""></option>
                                            <option value="Product">Product</option>
                                            <option value="Order">Order</option>
                                            <option value="Press">Press</option>
                                            <option value="Other">Other</option>
                                        </select><svg class="icon icon-chevron-up icon-sm absolute" viewBox="0 0 24 24"
                                            stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 15L12 9L18 15">
                                            </path>
                                        </svg><label class="label is-floating"
                                            for="ContactFormInput-template--17436070084854__contact-form-custom_field-2">Subject</label>
                                    </div>
                                    <div class="field field--full">
                                        <textarea class="textarea is-floating" rows="5"
                                            id="ContactFormMessage-template--17436070084854__contact-form"
                                            name="contact[Message]" placeholder=" "></textarea>
                                        <label class="label is-floating"
                                            for="ContactFormMessage-template--17436070084854__contact-form">Message</label>
                                    </div>
                                    <div class="field field--full">
                                        <label for="ContactSubmit-template--17436070084854__contact-form"
                                            class="sr-only">Send message</label>
                                        <button type="submit" id="ContactSubmit-template--17436070084854__contact-form"
                                            class="button button--primary button--fixed" is="hover-button">
                                            <span class="btn-fill" data-fill=""></span>
                                            <span class="btn-text">Send message</span>
                                            <span class="btn-loader">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span></button>
                                    </div>
                                    <div class="field field--full rte text-sm">
                                        <p data-spam-detection-disclaimer="">This site is protected by reCAPTCHA and the
                                            Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                                            <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                                    </div>
                                </div>
                            </form>
                            <div class="grow-0">
                                <ul class="contact__sidebar grid gap-10">
                                    <li class="flex flex-col gap-3">
                                        <p class="subtitle block text-xs uppercase leading-tight tracking-widest">USA
                                        </p>
                                        <div class="rte leading-normal">
                                            <p>44 West 37th Street, New York,&nbsp;10018</p>
                                            <p><a href="tel:+13153043820" title="tel:+13153043820">+1 315-304-3820</a><a
                                                    href="#" title="tel:+33 (0) 31-305-210"><br></br></a>Mon – Fri: 09:00 –
                                                17:00</p>
                                        </div>
                                    </li>
                                    <li class="flex flex-col gap-3">
                                        <p class="subtitle block text-xs uppercase leading-tight tracking-widest">INDIA
                                        </p>
                                        <div class="rte leading-normal">
                                            <p>A244, First Floor Road No. 6, NH 8, Mahipalpur Extension, New Delhi,
                                                Delhi 110037</p>
                                            <p><a href="tel:+91 84483 99200" title="tel:+91 84483 99200">+91 84483
                                                    99200</a><a href="#" title="tel:+33 (0) 31-305-210"><br></br></a>Mon –
                                                Fri: 09:00 – 17:00</p>
                                        </div>
                                    </li>
                                    <li class="flex flex-col gap-3">
                                        <p class="subtitle block text-xs uppercase leading-tight tracking-widest">Email
                                        </p>
                                        <div class="rte leading-normal">
                                            <p><a href="mailto:support@thebarsys.com"
                                                    title="mailto:support@thebarsys.com">support@thebarsys.com</a></p>
                                        </div>
                                    </li>
                                    <li class="flex flex-col gap-5">
                                        <p class="subtitle block text-xs uppercase leading-tight tracking-widest">Follow
                                            us</p>
                                        <div class="social-icons flex items-center">
                                            <ul class="flex flex-wrap items-center gap-7">
                                                <li><a href="https://www.facebook.com/thebarsys/"
                                                        class="social_platform block relative" is="magnet-link"
                                                        title="Barsys  on Facebook"><svg
                                                            class="icon icon-facebook icon-lg" viewBox="0 0 24 24"
                                                            stroke="none" fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.03153 23L9 13H5V9H9V6.5C9 2.7886 11.2983 1 14.6091 1C16.1951 1 17.5581 1.11807 17.9553 1.17085V5.04948L15.6591 5.05052C13.8584 5.05052 13.5098 5.90614 13.5098 7.16171V9H18.75L16.75 13H13.5098V23H9.03153Z">
                                                            </path>
                                                        </svg><span class="sr-only">Facebook</span>
                                                    </a>
                                                </li>
                                                <li><a href="https://twitter.com/barsyscocktail"
                                                        class="social_platform block relative" is="magnet-link"
                                                        title="Barsys  on Twitter"><svg
                                                            class="icon icon-twitter icon-lg" viewBox="0 0 24 24"
                                                            stroke="none" fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M13.8984 10.4679L21.3339 2H19.5687L13.1074 9.35221L7.95337 2H2L9.80183 13.1157L2 22H3.7652L10.5845 14.2315L16.03 22H21.9833M4.398 3.29892H7.10408L19.5687 20.7594H16.8626">
                                                            </path>
                                                        </svg><span class="sr-only">Twitter</span>
                                                    </a>
                                                </li>
                                                <li><a href="https://www.instagram.com/barsys.inc/"
                                                        class="social_platform block relative" is="magnet-link"
                                                        title="Barsys  on Instagram"><svg
                                                            class="icon icon-instagram icon-lg" viewBox="0 0 24 24"
                                                            stroke="none" fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M12 2.98C14.94 2.98 15.28 2.99 16.44 3.04C17.14 3.04 17.83 3.18 18.48 3.42C18.96 3.6 19.39 3.88 19.75 4.24C20.12 4.59 20.4 5.03 20.57 5.51C20.81 6.16 20.94 6.85 20.95 7.55C21 8.71 21.01 9.06 21.01 12C21.01 14.94 21 15.28 20.95 16.44C20.95 17.14 20.81 17.83 20.57 18.48C20.39 18.95 20.11 19.39 19.75 19.75C19.39 20.11 18.96 20.39 18.48 20.57C17.83 20.81 17.14 20.94 16.44 20.95C15.28 21 14.93 21.01 12 21.01C9.07 21.01 8.72 21 7.55 20.95C6.85 20.95 6.16 20.81 5.51 20.57C5.03 20.39 4.6 20.11 4.24 19.75C3.87 19.4 3.59 18.96 3.42 18.48C3.18 17.83 3.05 17.14 3.04 16.44C2.99 15.28 2.98 14.93 2.98 12C2.98 9.07 2.99 8.72 3.04 7.55C3.04 6.85 3.18 6.16 3.42 5.51C3.6 5.03 3.88 4.6 4.24 4.24C4.59 3.87 5.03 3.59 5.51 3.42C6.16 3.18 6.85 3.05 7.55 3.04C8.71 2.99 9.06 2.98 12 2.98ZM12 1C9.01 1 8.64 1.01 7.47 1.07C6.56 1.09 5.65 1.26 4.8 1.58C4.07 1.86 3.4 2.3 2.85 2.85C2.3 3.41 1.86 4.07 1.58 4.8C1.26 5.65 1.09 6.56 1.07 7.47C1.02 8.64 1 9.01 1 12C1 14.99 1.01 15.36 1.07 16.53C1.09 17.44 1.26 18.35 1.58 19.2C1.86 19.93 2.3 20.6 2.85 21.15C3.41 21.7 4.07 22.14 4.8 22.42C5.65 22.74 6.56 22.91 7.47 22.93C8.64 22.98 9.01 23 12 23C14.99 23 15.36 22.99 16.53 22.93C17.44 22.91 18.35 22.74 19.2 22.42C19.93 22.14 20.6 21.7 21.15 21.15C21.7 20.59 22.14 19.93 22.42 19.2C22.74 18.35 22.91 17.44 22.93 16.53C22.98 15.36 23 14.99 23 12C23 9.01 22.99 8.64 22.93 7.47C22.91 6.56 22.74 5.65 22.42 4.8C22.14 4.07 21.7 3.4 21.15 2.85C20.59 2.3 19.93 1.86 19.2 1.58C18.35 1.26 17.44 1.09 16.53 1.07C15.36 1.02 14.99 1 12 1ZM12 6.35C10.88 6.35 9.79 6.68 8.86 7.3C7.93 7.92 7.21 8.8 6.78 9.84C6.35 10.87 6.24 12.01 6.46 13.1C6.68 14.2 7.22 15.2 8.01 15.99C8.8 16.78 9.81 17.32 10.9 17.54C12 17.76 13.13 17.65 14.16 17.22C15.19 16.79 16.07 16.07 16.7 15.14C17.32 14.21 17.65 13.12 17.65 12C17.65 10.5 17.05 9.06 16 8.01C14.94 6.95 13.5 6.36 12.01 6.36L12 6.35ZM12 15.67C11.27 15.67 10.57 15.45 9.96 15.05C9.36 14.65 8.89 14.07 8.61 13.4C8.33 12.73 8.26 11.99 8.4 11.28C8.54 10.57 8.89 9.92 9.4 9.4C9.91 8.88 10.57 8.54 11.28 8.4C11.99 8.26 12.73 8.33 13.4 8.61C14.07 8.89 14.64 9.36 15.05 9.96C15.45 10.56 15.67 11.27 15.67 12C15.67 12.97 15.28 13.91 14.6 14.59C13.91 15.28 12.98 15.66 12.01 15.66L12 15.67ZM17.87 7.45C18.6 7.45 19.19 6.86 19.19 6.13C19.19 5.4 18.6 4.81 17.87 4.81C17.14 4.81 16.55 5.4 16.55 6.13C16.55 6.86 17.14 7.45 17.87 7.45Z">
                                                            </path>
                                                        </svg><span class="sr-only">Instagram</span>
                                                    </a>
                                                </li>
                                                <li><a href="https://www.youtube.com/@TheBarsys"
                                                        class="social_platform block relative" is="magnet-link"
                                                        title="Barsys  on YouTube"><svg
                                                            class="icon icon-youtube icon-lg" viewBox="0 0 24 24"
                                                            stroke="none" fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M23.8 7.6C23.8 7.6 23.6 5.9 22.8 5.2C21.9 4.2 20.9 4.2 20.4 4.2C17 4 12 4 12 4C12 4 7 4 3.6 4.2C3.1 4.3 2.1 4.3 1.2 5.2C0.5 5.9 0.2 7.6 0.2 7.6C0.2 7.6 0 9.5 0 11.5V13.3C0 15.2 0.2 17.2 0.2 17.2C0.2 17.2 0.4 18.9 1.2 19.6C2.1 20.6 3.3 20.5 3.8 20.6C5.7 20.8 12 20.8 12 20.8C12 20.8 17 20.8 20.4 20.5C20.9 20.4 21.9 20.4 22.8 19.5C23.5 18.8 23.8 17.1 23.8 17.1C23.8 17.1 24 15.2 24 13.2V11.4C24 9.5 23.8 7.6 23.8 7.6ZM9.5 15.5V8.8L16 12.2L9.5 15.5Z">
                                                            </path>
                                                        </svg><span class="sr-only">YouTube</span>
                                                    </a>
                                                </li>
                                                <li>

                                                    <a href="https://www.tiktok.com/@thebarsys"
                                                        class="social_platform block relative" is="magnet-link"
                                                        title="Barsys  on TikTok"><svg class="icon icon-tiktok icon-lg"
                                                            viewBox="0 0 24 24" stroke="none" fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.6315 8.937V13.059C10.1123 12.9221 9.56911 12.9034 9.0418 13.0044C8.5145 13.1054 8.01657 13.3234 7.58473 13.6424C7.15288 13.9613 6.79813 14.3732 6.54661 14.8475C6.2951 15.3218 6.15324 15.8466 6.13148 16.383C6.10175 16.8449 6.17125 17.3078 6.33531 17.7405C6.49938 18.1733 6.7542 18.5659 7.08266 18.892C7.41111 19.2181 7.80557 19.4701 8.23952 19.631C8.67346 19.7919 9.13684 19.8581 9.59848 19.825C10.0648 19.8608 10.5333 19.7949 10.9717 19.6319C11.41 19.4689 11.8078 19.2126 12.1374 18.8809C12.4671 18.5491 12.7208 18.1498 12.881 17.7104C13.0413 17.271 13.1042 16.8021 13.0655 16.336V0H17.1425C17.8355 4.315 19.9935 5.316 22.8825 5.778V9.913C20.8804 9.74881 18.9491 9.09645 17.2575 8.013V16.18C17.2575 19.88 15.0675 24 9.63048 24C8.61045 23.9955 7.60156 23.7875 6.66297 23.3881C5.72437 22.9886 4.87496 22.4059 4.16451 21.6739C3.45407 20.942 2.89689 20.0755 2.52563 19.1254C2.15438 18.1754 1.97652 17.1607 2.00248 16.141C2.03479 15.0794 2.29174 14.0366 2.75639 13.0815C3.22105 12.1265 3.88285 11.2807 4.69819 10.6C5.51352 9.9193 6.46387 9.41915 7.48658 9.1325C8.50929 8.84586 9.58114 8.77923 10.6315 8.937Z">
                                                            </path>
                                                        </svg><span class="sr-only">TikTok</span>
                                                    </a>
                                                </li>
                                                <li><a href="https://www.pinterest.com/barsyscoaster/"
                                                        class="social_platform block relative" is="magnet-link"
                                                        title="Barsys  on Pinterest"><svg
                                                            class="icon icon-pinterest icon-lg" viewBox="0 0 24 24"
                                                            stroke="none" fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M12 1C5.95 1 1 5.95 1 12C1 16.675 3.93333 20.6167 7.96667 22.2667C7.875 21.4417 7.78333 20.0667 7.96667 19.15C8.15 18.325 9.25 13.65 9.25 13.65C9.25 13.65 8.975 12.9167 8.975 12C8.975 10.4417 9.89167 9.34167 10.9917 9.34167C11.9083 9.34167 12.3667 10.075 12.3667 10.9C12.3667 11.8167 11.725 13.2833 11.45 14.5667C11.175 15.6667 12 16.5833 13.1 16.5833C15.025 16.5833 16.5833 14.5667 16.5833 11.5417C16.5833 8.88333 14.6583 7.05 12 7.05C8.88333 7.05 7.05 9.43333 7.05 11.8167C7.05 12.7333 7.41667 13.7417 7.875 14.2917C7.96667 14.3833 7.96667 14.475 7.96667 14.5667C7.875 14.9333 7.69167 15.6667 7.69167 15.85C7.6 16.0333 7.50833 16.125 7.325 16.0333C5.95 15.3917 5.125 13.375 5.125 11.8167C5.125 8.33333 7.69167 5.125 12.3667 5.125C16.2167 5.125 19.15 7.875 19.15 11.45C19.15 15.2083 16.7667 18.325 13.4667 18.325C12.3667 18.325 11.2667 17.775 10.9 17.0417C10.9 17.0417 10.35 19.15 10.2583 19.7C9.98333 20.6167 9.34167 21.8083 8.88333 22.5417C9.8 22.8167 10.9 23 12 23C18.05 23 23 18.05 23 12C23 5.95 18.05 1 12 1Z">
                                                            </path>
                                                        </svg><span class="sr-only">Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="flex flex-col gap-3">
                                        <p class="subtitle block text-xs uppercase leading-tight tracking-widest"></p>
                                        <div class="rte leading-normal">
                                            <p>Barsys India Pvt. Ltd.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    </>
  )
}

export default ContactForm