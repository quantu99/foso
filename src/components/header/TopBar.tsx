"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { ArrowUpRight, ChevronUp, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { CSCaretDownSolid, CSStarSolid } from "../iconography";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface MenuType {
  value: string;
  label: string;
  subMenu?: { value: string; label: string }[];
}

export function TopBar() {
  const MENU_OPTIONS: MenuType[] = [
    {
      value: "about",
      label: "Về Chúng Tôi",
    },
    {
      value: "solution",
      label: "Giải pháp",
      subMenu: [
        { value: "solution-1", label: "Giải pháp 1" },
        { value: "solution-2", label: "Giải pháp 2" },
        { value: "solution-3", label: "Giải pháp 3" },
      ],
    },
    {
      value: "resource",
      label: "Tài nguyên",
      subMenu: [
        { value: "resource-1", label: "Tài nguyên 1" },
        { value: "resource-2", label: "Tài nguyên 2" },
        { value: "resource-3", label: "Tài nguyên 3" },
      ],
    },
    {
      value: "contact",
      label: "Liên hệ",
    },
  ];

  const LANGUAGES = [
    { value: "vi", label: "VI", flag: <CSStarSolid /> },
    { value: "en", label: "EN", flag: <CSStarSolid /> },
  ];

  const [selectedOption, setSelectedOption] = useState("about");
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("vi");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<
    string | null
  >(null);
  const [isMobile, setIsMobile] = useState(false);

  // Simulate router for page changes
  const router = {
    events: {
      on: (event: string, callback: () => void) => {
        // In a real app, this would hook into Next.js router events
        // For this simulation, we'll return an empty function
        return () => {};
      },
    },
  };

  useEffect(() => {
    // Set initial mobile state based on screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Close mobile menu on page navigation
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    // Clean up event listeners
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleMenuHover = (menuValue: string) => {
    if (isMobile) return;

    const menu = MENU_OPTIONS.find((item) => item.value === menuValue);
    if (menu?.subMenu) {
      setOpenSubmenu(menuValue);
    }
  };

  const handleMenuLeave = () => {
    if (isMobile) return;
    setOpenSubmenu(null);
  };

  const handleLanguageToggle = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubmenu = (menuValue: string) => {
    if (expandedMobileSubmenu === menuValue) {
      setExpandedMobileSubmenu(null);
    } else {
      setExpandedMobileSubmenu(menuValue);
    }
  };

  const handleMobileMenuSelect = (menuValue: string) => {
    setSelectedOption(menuValue);
    setIsMobileMenuOpen(false);
    setExpandedMobileSubmenu(null);
  };

  return (
    <div className="backdrop-blur-25 shadow-glass fixed left-0 right-0 top-0 z-50 mx-auto my-4 flex items-center justify-between rounded-[50px] bg-white/30 px-4 py-3 font-raleway md:px-8 lg:max-w-[1280px]">
      <Link href="/" className="h-auto w-[100px] md:w-[134px]">
        <Image
          alt="logo"
          src={logo}
          width={100}
          height={100}
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-2 md:flex">
        {MENU_OPTIONS.map((item: MenuType, index: number) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMenuHover(item.value)}
            onMouseLeave={handleMenuLeave}
          >
            <div
              onClick={() => setSelectedOption(item.value)}
              role="button"
              className="flex items-center gap-2 px-2"
            >
              <div className="relative">
                <span
                  className={`${
                    item.value === selectedOption ? "font-bold" : "font-medium"
                  } whitespace-nowrap text-[13px] lg:text-sm`}
                >
                  {item.label}
                </span>
                {item.value === selectedOption && (
                  <div className="absolute -bottom-3 left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-[50%] bg-green-12" />
                )}
              </div>
              {item.subMenu && (
                <div className="flex items-center">
                  <div className="h-3 w-3 [&>svg>path]:fill-[#25272A]">
                    <CSCaretDownSolid />
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Dropdown menu */}
            <AnimatePresence>
              {item.subMenu && openSubmenu === item.value && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 min-w-[180px] rounded-md bg-white py-2 shadow-popup"
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      onClick={() => {
                        setSelectedOption(subItem.value);
                        setOpenSubmenu(null);
                      }}
                      className="cursor-pointer px-4 py-2 text-sm hover:bg-light-grey"
                    >
                      {subItem.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {/* Language Selector - Visible on both mobile and desktop */}
        <div className="relative">
          <motion.div
            onClick={handleLanguageToggle}
            whileHover={{ scale: 1.05 }}
            className="bg-langBox flex cursor-pointer items-center gap-2 rounded-[40px] border border-gray-400 px-2 py-1 md:gap-3 md:px-3 md:py-2"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-[50%] bg-[#D80027] md:h-6 md:w-6">
              {LANGUAGES.find((lang) => lang.value === selectedLanguage)?.flag}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium leading-[150%] md:text-sm">
                {
                  LANGUAGES.find((lang) => lang.value === selectedLanguage)
                    ?.label
                }
              </span>
              <div className="h-2 w-2 md:h-3 md:w-3 [&>svg>path]:fill-[#25272A]">
                <CSCaretDownSolid />
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {isLanguageOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 z-50 mt-2 w-full rounded-md bg-white py-2 shadow-popup"
              >
                {LANGUAGES.map((lang, index) => (
                  <div
                    key={index}
                    onClick={() => handleLanguageSelect(lang.value)}
                    className={`flex cursor-pointer items-center gap-2 px-4 py-2 text-sm hover:bg-light-grey ${
                      selectedLanguage === lang.value ? "font-bold" : ""
                    }`}
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-[50%] bg-[#D80027]">
                      {lang.flag}
                    </div>
                    {lang.label}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Button - Smaller on mobile */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden h-8 cursor-pointer items-center gap-1 rounded-[50px] bg-foso-custom-gradient px-2 py-1 text-xs font-bold sm:flex md:h-10 md:gap-2 md:px-3 md:py-2 md:text-sm"
        >
          Trở thành khách hàng
          <div className="flex h-[18px] w-[18px] items-center justify-center rounded-[50%] bg-black-0 p-1 md:h-[22px] md:w-[22px]">
            <ArrowUpRight className="h-[12px] w-[12px] text-white md:h-[14px] md:w-[14px]" />
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="flex items-center justify-center p-2 md:hidden"
          aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bottom-0 left-0 right-0 top-[80px] z-40 flex flex-col overflow-auto bg-white"
          >
            <div className="flex flex-col p-4">
              {/* Mobile Menu Content */}
              <div className="flex flex-col gap-4">
                {MENU_OPTIONS.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-2">
                    <div
                      className="flex items-center justify-between"
                      onClick={() => {
                        if (item.subMenu) {
                          toggleMobileSubmenu(item.value);
                        } else {
                          handleMobileMenuSelect(item.value);
                        }
                      }}
                    >
                      <span
                        className={`text-lg ${item.value === selectedOption ? "font-bold" : ""}`}
                      >
                        {item.label}
                      </span>
                      {item.subMenu && (
                        <div
                          className={`transition-transform duration-200 ${expandedMobileSubmenu === item.value ? "rotate-180" : ""}`}
                        >
                          <CSCaretDownSolid />
                        </div>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {item.subMenu && expandedMobileSubmenu === item.value && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 flex flex-col gap-2 pl-4">
                            {item.subMenu.map((subItem, subIndex) => (
                              <div
                                key={subIndex}
                                className="py-2 text-base"
                                onClick={() =>
                                  handleMobileMenuSelect(subItem.value)
                                }
                              >
                                {subItem.label}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-6 flex h-12 cursor-pointer items-center justify-center gap-2 rounded-[50px] bg-foso-custom-gradient px-4 py-3 text-base font-bold"
              >
                Trở thành khách hàng
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-[50%] bg-black-0 p-1">
                  <ArrowUpRight className="h-[16px] w-[16px] text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
