"use client";


import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full pr-4 md:pr-8 lg:pr-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex flex-col">
            <div className="h-16 w-36 relative">
              <Image
                src={`/bg-remove-horizontal.png`}
                alt="OKBLOG"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link href="/company" className="hover:text-gray-600">
                会社情報
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-600">
                事業内容
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-600">
                ブログ
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-gray-600">
                ニュース
              </Link>
            </li>
            <li>
              <Link href="/example" className="hover:text-gray-600">
                事例
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

             {/* Mobile Navigation - Slide in from right */}
       <AnimatePresence>
         {isMenuOpen && (
          <>
            {/* Backdrop - for closing the menu when clicking outside */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/20 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="md:hidden fixed top-0 right-0 h-auto bg-white z-40 shadow-lg rounded-l-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <nav className="py-20 px-12 min-w-[200px]">
                <ul className="flex flex-col space-y-6">
                  <li>
                    <Link href="/company" className="block py-2 hover:text-gray-600" onClick={toggleMenu}>
                      会社情報
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="block py-2 hover:text-gray-600" onClick={toggleMenu}>
                      事業内容
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="block py-2 hover:text-gray-600" onClick={toggleMenu}>
                      ブログ
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="block py-2 hover:text-gray-600" onClick={toggleMenu}>
                      ニュース
                    </Link>
                  </li>
                  <li>
                    <Link href="/example" className="block py-2 hover:text-gray-600" onClick={toggleMenu}>
                      事例
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="block py-2 hover:text-gray-600" onClick={toggleMenu}>
                      お問い合わせ
                    </Link>
                  </li>
                </ul>
              </nav>
             </motion.div>
           </>
         )}
       </AnimatePresence>
      </header>
  );
}
