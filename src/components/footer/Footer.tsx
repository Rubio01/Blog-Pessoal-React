import React from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';

function Footer() {
  let data = new Date().getFullYear();
  return (
    <>
      <footer className="text-white bg-[#5b80a0] py-[10px] px-[10px]">
        <div className="container mx-auto px-2 max-w-[95%] w-full">
          <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center mb-4 mt-2">
            <div className="md:ml-2">
              <a href="/" className="text-xl font-bold flex items-center gap-2">
                <span className="font-bold hover:text-gray-300 text-[#FFFFFF]">
                  Blog Pessoal Rubio
                </span>
              </a>
            </div>

            <div className="flex gap-6 mt-4 lg:mt-0 md:mr-2">
              <a href="https://www.linkedin.com/in/rubiodainton/" className="hover:transform hover:scale-150 transition-all duration-300" aria-label="LinkedIn">
                <LinkedinIcon className="h-6 w-6 text-white stroke-[2.5]" />
              </a>
              <a href="https://github.com/Rubio01" className="hover:transform hover:scale-150 transition-all duration-300" aria-label="GitHub">
                <GithubIcon className="h-6 w-6 text-white stroke-[2.5]" />
              </a>
              <a href="https://www.instagram.com/rubiodainton/" className="hover:transform hover:scale-150 transition-all duration-300" aria-label="Instagram">
                <InstagramIcon className="h-6 w-6 text-white stroke-[2.5]" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-10 pb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-sm">
            <p className="mb-4 sm:mb-0 md:ml-2">Copyright © {data} Blog Pessoal Rubio. All rights reserved</p>
            <div className="flex gap-4 md:mr-2">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms & condition</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;