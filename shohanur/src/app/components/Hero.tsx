// components/Hero.tsx
"use client";
import React from "react";
import Image from "next/image";
import {
  Download,
  ExternalLink,
} from "lucide-react";

export default function Hero() {


  return (
    <section className="pt-32 md:pt-52 pb-20 px-4 md:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">

        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hello, I'm <br />
          <span className="bg-gradient-to-r from-purple-600 to-[#ff004f] bg-[length_200%_200%] animation-gradient text-transparent bg-clip-text">
            Shohanur Rahman
          </span>
        </h1>

        <p className="hero-text text-base sm:text-lg mb-8 text-gray-600 max-w-xl mx-auto md:mx-0">
          I am a Freelance Digital Marketer specializing in Social Media and Search Engine Marketing. I help businesses grow through strategic campaign planning, precise audience targeting, and data-driven optimization.
        </p>

        <p className="hero-text mb-5">
          I focus on building sustainable growth, not short-term results. By staying continuously updated with the latest digital marketing trends, ad policies, and tracking technologies, I ensure my clients receive reliable, scalable, and future-ready solutions.
        </p>

        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hero-btn group relative overflow-hidden bg-purple-700
    text-white border-2 border-purple-600 hover:border-purple-600 hover:text-purple-700 hover:bg-white
    px-7 py-3.5 rounded-lg font-medium
    transition-all duration-300
    shadow-md hover:shadow-lg
    active:scale-95 mt-5 cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-2">
            Say Hello{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </span>
        </button>

      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col items-center md:items-end gap-6 md:gap-8">

        {/* IMAGE */}
        <div className="hero-image relative w-64 h-80 sm:w-80 sm:h-[26rem] md:w-96 md:h-[30rem] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/shohanur.jpg"
            alt="Shohanur Rahman"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />

          {/* Active Badge */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
            Active now
          </div>
        </div>

        {/* BUTTONS */}
        <div className="hero-actions flex flex-col sm:flex-row gap-4 justify-center md:justify-end w-full">

          <a
            href="/Portfolio.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-purple-700 border-2 border-purple-600 hover:bg-purple-700 hover:text-white rounded-xl transition"
          >
            <Download size={18} />
            Download CV
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-purple-600 rounded-xl hover:bg-white hover:text-purple-600 transition shadow-md"
          >
            <ExternalLink size={18} />
            View My Campaigns
          </a>

        </div>
      </div>
    </section>
  );
}
