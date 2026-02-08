"use client";
import React from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Linkedin,
  Instagram,
  Calendar,
  X
} from 'lucide-react';
import { FaThreads } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa6";


import { useEffect, useState } from "react";

interface Service {
  id: number;
  title: string;
}



export default function Footer() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("https://backend-shohanur-1.onrender.com/services/")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error("Failed to load services", err));
  }, []);
  return (
    <footer className="bg-[#2A374A] text-gray-200 py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">

          {/* BRAND + BIO + SOCIAL ICONS */}
          <div className="footer-brand space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-18 h-18 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={84}
                  height={84}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Shohanur Rahman
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Results-driven Digital Marketer focused on Social Media Growth and Performance Advertising.
              <br /><br />
              Helping brands grow through smart targeting and optimization.
            </p>

            {/* SOCIAL ICONS – replace hrefs with your real profiles */}
            <div className="flex flex-wrap gap-5 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/88019500606055"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-600/70 hover:scale-110 transition"
              >
                <MessageCircle className="w-5 h-5 text-indigo-300" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shohan316212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-600/70 hover:scale-110 transition"
              >
                <Instagram className="w-5 h-5 text-indigo-300" />
              </a>

              {/* TikTok – update username */}
              <a
                href="https://www.tiktok.com/@getgoing316212"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-600/70 hover:scale-110 transition"
              >
                <FaTiktok className="w-5 h-5 text-indigo-300" />
              </a>

              {/* Threads – update username */}
              <a
                href="https://www.threads.com/@shohan316212"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-600/70 hover:scale-110 transition"
              >
                <FaThreads className="w-5 h-5 text-indigo-300" />
              </a>

              {/* X (Twitter) – update handle */}
              <a
                href="https://x.com/shohan3112"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-600/70 hover:scale-110 transition"
              >
                <X className="w-5 h-5 text-indigo-300" />
              </a>

              {/* Pinterest – update username */}
              <a
                href="https://www.pinterest.com/shohan316212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-600/70 hover:scale-110 transition"
              >
                <FaPinterest className="w-5 h-5 text-indigo-300" />
              </a>

              {/* Snapchat – update username */}
              <a
                href="https://www.snapchat.com/@rshuvo20228678"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-600/70 hover:scale-110 transition"
              >
                <BsSnapchat className="w-5 h-5 text-indigo-300" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shohan316212"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-600/70 hover:scale-110 transition"
              >
                <Linkedin className="w-5 h-5 text-indigo-300" />
              </a>
            </div>

            {/* 100-minute Strategy Call – replace with your real booking link */}
            <a
              href="https://calendly.com/shohan316212/100min-meeting?month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition"
            >
              <Calendar className="w-5 h-5" />
              Book a Free 100-Minute Strategy Call
            </a>
          </div>

          {/* CONTACT */}
          <div className="footer-contact space-y-6">
            <h4 className="text-xl font-semibold text-indigo-300">
              Get in Touch
            </h4>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 mt-1" />
                <p>Mymensingh, Bangladesh</p>
              </div>

              <a href="tel:+8801315740274" className="flex gap-3 group">
                <Phone className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
                <span className="group-hover:text-white">+880 131 574 0274</span>
              </a>

              <a href="mailto:shohan316212@gmail.com" className="flex gap-3 group">
                <Mail className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
                <span className="group-hover:text-white">shohan316212@gmail.com</span>
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-services space-y-6">
            <h4 className="text-xl font-semibold text-indigo-300">
              Services
            </h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-indigo-300 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/8801315740274"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              Let's discuss your project →
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-copy mt-12 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Created by{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61585754731210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-200"
          >
            Nayeem Talukder
          </a>{" "}
          • Web Developer • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}