import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, menu_dark, close_dark } from "../assets";
import {
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobileToggle, setMobileToggle] = useState(false);
  const [desktopToggle, setDesktopToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const mainNavLinks = navLinks.filter(
    (link) => link.id === "about" || link.id === "project" || link.id === "contact"
  );
  const dropdownLinks = navLinks.filter(
    (link) => link.id !== "about" && link.id !== "project" && link.id !== "contact"
  );

  const menuIcon = darkMode ? menu : menu_dark;
  const closeIcon = darkMode ? close : close_dark;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[rgba(232,234,251,0.7)] dark:bg-[rgba(5,8,22,0.9)] shadow-md backdrop-blur-md transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-gray-900 dark:text-white text-[18px] font-bold cursor-pointer flex">
            Saksham Satnalika
          </p>
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="list-none flex flex-row gap-10">
              {mainNavLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-gray-900 dark:text-white"
                      : "text-secondary dark:text-secondary-light"
                  } hover:text-gray-800 dark:hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

            <div className="relative">
              <img
                src={desktopToggle ? closeIcon : menuIcon}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setDesktopToggle(!desktopToggle)}
              />

              {desktopToggle && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  {dropdownLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`block px-4 py-2 text-sm ${
                        active === link.title
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => {
                        setActive(link.title);
                        setDesktopToggle(false);
                      }}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Theme Toggle */}
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-300 dark:bg-gray-700 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                <span
                  className={`inline-block w-4 h-4 transform transition-transform duration-200 rounded-full bg-white ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
                <span className="absolute left-1 text-xs">☀️</span>
                <span className="absolute right-1 text-xs">🌙</span>
              </button>
            </div>

            {/* Hamburger */}
            <div className="flex justify-end items-center">
              <img
                src={mobileToggle ? closeIcon : menuIcon}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setMobileToggle(!mobileToggle)}
              />

              <div
                className={`${
                  !mobileToggle ? "hidden" : "flex"
                } p-6 black-gradient dark:light-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl flex-col gap-4`}
              >
                <ul className="list-none flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title
                          ? "text-gray-900 dark:text-white"
                          : "text-secondary dark:text-secondary-light"
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setMobileToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>

                {/* Social Icons - Mobile */}
                <div className="flex gap-4 mt-4 justify-center">
                  <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-lg text-red-600 hover:text-red-700" />
                  </a>
                  <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-lg text-pink-500 hover:text-pink-600" />
                  </a>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-lg text-gray-800 dark:text-white hover:text-gray-600" />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-lg text-blue-600 hover:text-blue-700" />
                  </a>
                  <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="text-lg text-black dark:text-white hover:text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons + Theme Toggle - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://youtube.com/@sakshusat" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-xl text-red-600 hover:text-red-700 transition-colors" />
            </a>
            <a href="https://instagram.com/sakshusat" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl text-pink-500 hover:text-pink-600 transition-colors" />
            </a>
            <a href="https://github.com/Saks34" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl text-gray-800 dark:text-white hover:text-gray-600 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/sakshamsatnalika" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl text-blue-600 hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://x.com/sakshusat" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-xl text-black dark:text-white hover:text-gray-700 transition-colors" />
            </a>

            <button
              onClick={toggleTheme}
              className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-300 dark:bg-gray-700 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <span
                className={`inline-block w-4 h-4 transform transition-transform duration-200 rounded-full bg-white ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
              <span className="absolute left-1 text-xs">☀️</span>
              <span className="absolute right-1 text-xs">🌙</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
