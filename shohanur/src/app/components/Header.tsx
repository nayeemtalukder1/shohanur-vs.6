"use client";

import Link from "next/link";
import { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = ["About", "Portfolio", "Services", "Contact"];

  return (
    <>
      {/* WHATSAPP */}
      <FloatingWhatsApp
        phoneNumber="+8801315740274"
        accountName="Shohanur Rahman"
        avatar="/shohanur.jpg"
        statusMessage="Available 24 / 7"
        chatboxHeight={420}
        chatMessage={`Hi there,

Myself Md Shohanur Rahman Shuvo, 
Social Media & Search Engine Marketer

How may I help you?`}
        className="fixed bottom-6 right-6 z-50"
      />

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center space-x-4">
            <div className="w-18 h-18 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={84}
                height={84}
                className="object-cover"
              />
            </div>

            <span className="text-xl md:text-3xl font-semibold">
              Let's Get Going with Shohan
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex space-x-10 text-lg font-medium">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={item === "About" ? "/" : `/#${item.toLowerCase()}`}
                  className="group relative inline-block hover:text-purple-600 transition-colors duration-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-6px] h-[3px] w-0 bg-[#ff004f] transition-[width] duration-500 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* HIRE ME BUTTON (DESKTOP) */}
            <Link href="/#contact">
              <button className="glow-btn relative px-10 py-3.5 text-lg font-semibold text-white rounded-full bg-[#9333EA]">
                Hire Me!
              </button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-7 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`h-0.5 w-7 bg-black transition-all duration-300 ${open ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-0.5 w-7 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col items-center gap-8 py-10 text-xl font-medium">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="group relative inline-block hover:text-purple-600 transition-colors duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-3 h-1 w-0 bg-[#ff004f] transition-[width] duration-500 ease-out group-hover:w-full" />
                </Link>
              ))}

              {/* HIRE ME BUTTON (MOBILE) */}
              <Link href="/#contact" onClick={() => setOpen(false)}>
                <button className="glow-btn relative px-10 py-3.5 text-lg font-semibold text-white rounded-full bg-purple-700">
                  Hire Me!
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
