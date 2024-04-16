"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../Context/Darkmode";
import LanguageSwitcher from "./LanguageSwicther";
const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <header>
        <nav className=" dark:bg-[#052646] container flex items-center justify-between space-x-10 py-6">
          <Link href="/">
            <Image
              src="https://i.postimg.cc/4dpLX8zT/logo.png"
              width="139"
              height="26"
              alt=""
            />
          </Link>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <Image
                  src="https://i.postimg.cc/Xq32qw8B/ring.png
"
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <button
                className="px-1 md:px-0 text-3xl "
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                {darkMode ? (
                  <CiLight className="w-10 h-10 md:w-12 md:h-14" />
                ) : (
                  <CiDark className="w-8 h-8 md:w-12 md:h-14" />
                )}
              </button>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <Image
                  src="https://i.postimg.cc/CxKQbsVj/shopping-cart.png
                  "
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <LanguageSwitcher />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
