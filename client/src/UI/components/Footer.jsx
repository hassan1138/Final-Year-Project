import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-[rgba(17,24,39)] bg-opacity-90 font-light pt-12 text-gray-300">
      <div class="container mx-auto px-4 relative">
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="mr-auto px-4 py-2 w-full md:w-9/12 lg:w-8/12 xl:w-6/12">
            <a
              href="#"
              class="font-bold font-serif hover:text-gray-300 inline-flex items-center leading-none space-x-2 text-3xl text-white uppercase"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                viewBox="0 0 100 100"
                width="2.5em"
                height="2.5em"
                fill="currentColor"
                class="mr-1 text-primary-500"
              >
                <path d="M90 42.301 76.666 19.209l-13.334 7.699V10H36.667v16.908l-13.335-7.699L10 42.301 23.332 50 10 57.698l13.331 23.093 13.335-7.698V90h26.666V73.093l13.334 7.698L90 57.698 76.666 50 90 42.301zm-9.107 17.84-6.666 11.543-17.561-10.138v21.787H43.332V61.546L25.774 71.684l-6.666-11.543L36.667 50 19.108 39.863l6.666-11.549 17.558 10.14V16.667h13.334v21.787l17.561-10.14 6.666 11.549L63.332 50l17.561 10.141z" />
              </svg>
              <span>SEHAT E AAM</span>
            </a>
          </div>
          <div class="px-4 py-2 w-full md:w-auto">
            <div class="flex-wrap inline-flex leading-none space-x-2">
              <a
                href="#"
                class="bg-[rgba(244,67,54)] border-white hover:bg-primary-600 p-2 rounded text-white"
                aria-label="facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>
              <a
                href="#"
                class="bg-[rgba(244,67,54)] border-white hover:bg-primary-600 p-2 rounded text-white"
                aria-label="twitter"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>
              </a>
              <a
                href="#"
                class="bg-[rgba(244,67,54)] border-white hover:bg-primary-600 p-2 rounded text-white"
                aria-label="instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </a>
              <a
                href="#"
                class="bg-[rgba(244,67,54)] border-white hover:bg-primary-600 p-2 rounded text-white"
                aria-label="linkedin"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>
              </a>
              <a
                href="#"
                class="bg-[rgba(244,67,54)] border-white hover:bg-primary-600 p-2 rounded text-white"
                aria-label="youtube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
