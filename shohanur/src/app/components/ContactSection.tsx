'use client'; // Add this to make it a client component for state management

import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  X
} from 'lucide-react';
import { FaThreads } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa6";
import AnimatedDotsLoader from './AnimatedDotsLoader';
import SparkleProgress from './SparkleProgress';



export default function ContactSection() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [customSubject, setCustomSubject] = useState('');

  const serviceOptions = [
    "Social Media Ads Services",
    "Technical Setup & Tracking",
    "Business Manager & Ad Accounts",
    "Strategy & Funnel Development",
    "Consulting & Support",
    "Page & Profile Optimization",
    "Other"  // Added "Other" option here
  ];

  // The effective subject value for submission
  const effectiveSubject = selectedSubject === 'Other' ? customSubject : selectedSubject;

  return (
    <section className="bg-white py-24 px-4">
      <SparkleProgress />

      {/* TITLE */}
      <div className="contact-title text-center text-4xl font-bold pb-7">
        Contact{" "}
        <span
          className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500
          bg-[length:200%_200%]
          animate-gradient
          text-transparent bg-clip-text"
        >
          Information
        </span>
      </div>

      {/* LOADER */}
      <div className="contact-loader">
        <AnimatedDotsLoader />
      </div>

      {/* CARD */}
      <div className="contact-card max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 grid md:grid-cols-2 gap-10 border border-orange-200/50">

        {/* LEFT */}
        <div className="contact-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let’s discuss your Project
          </h2>

          <p className="text-gray-700 mb-8 max-w-md">
            I’m available for freelance work. Drop me a line if you have a project
            you think I’d be a good fit for.
          </p>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="p-3 bg-orange-100 rounded-xl text-orange-600">
                <MapPin size={20} />
              </span>
              <p className="font-medium text-gray-900">
                Mymensingh, Bangladesh
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 bg-orange-100 rounded-xl text-orange-600">
                <Mail size={20} />
              </span>
              <a
                className="font-medium text-gray-900 hover:text-orange-600 transition"
                href="mailto:shohan316212@gmail.com"
              >
                shohan316212@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 bg-orange-100 rounded-xl text-orange-600">
                <Phone size={20} />
              </span>
              <div className="flex flex-col">
                <a
                  className="font-medium text-gray-900 hover:text-orange-600 transition"
                  href="tel:+8801315740274"
                >
                  +880 131 574 0274
                </a>
                <a
                  className="font-medium text-gray-900 hover:text-orange-600 transition"
                  href="tel:+8801969894784"
                >
                  +880 196 989 4784
                </a>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS – expanded with all platforms */}
          <div className="mt-10">
            <p className="text-gray-700 font-medium mb-4">Connect with me:</p>
            <div className="flex flex-wrap gap-6 text-orange-600">
              {/* Facebook */}
              <a href="https://www.facebook.com/shohan316212" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-7 h-7 hover:text-orange-700 transition" />
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/shohan316212/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-7 h-7 hover:text-orange-700 transition" />
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/shohan316212" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-7 h-7 hover:text-orange-700 transition" />
              </a>

              {/* WhatsApp (using MessageCircle as icon) */}
              <a href="https://wa.me/8801315740274" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-7 h-7 hover:text-orange-700 transition" />
              </a>

              {/* TikTok – update if different */}
              <a href="https://www.tiktok.com/@shohan316212" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="w-7 h-7 hover:text-orange-700 transition" />
              </a>

              {/* Threads – update if different */}
              <a href="https://www.threads.net/@shohan316212" target="_blank" rel="noopener noreferrer">
                <FaThreads className="w-7 h-7 hover:text-orange-700 transition" />
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/shohan316212" target="_blank" rel="noopener noreferrer">
                <X className="w-7 h-7 hover:text-orange-700 transition" />
              </a>

              {/* Pinterest */}
              <a href="https://www.pinterest.com/shohan316212/" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="w-7 h-7 hover:text-orange-700 transition" />
              </a>

              {/* Snapchat */}
              <a href="https://www.snapchat.com/add/shohan316212" target="_blank" rel="noopener noreferrer">
                <BsSnapchat className="w-7 h-7 hover:text-orange-700 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="contact-right">
          <p className="text-gray-700 mb-8">
            I’m always open to discussing product design work or partnership
            opportunities.
          </p>

          <form
            className="space-y-6"
            action="https://formspree.io/f/mdaaojrr"
            method="POST"
          >
            {/* Hidden fields – your contact info sent with every message */}
            <input type="hidden" name="from_name" value="Shohanur Rahman" />
            <input type="hidden" name="my_email" value="shohan316212@gmail.com" />
            <input type="hidden" name="my_phone_primary" value="+880 131 574 0274" />
            <input type="hidden" name="my_phone_secondary" value="+880 196 989 4784" />
            <input type="hidden" name="my_location" value="Mymensingh, Bangladesh" />
            <input type="hidden" name="source" value="Contact Section – shohan316212 site" />

            {/* Hidden input for the effective subject */}
            <input type="hidden" name="subject" value={effectiveSubject} />

            <input
              name="name"
              required
              type="text"
              placeholder="Your Name*"
              className="w-full border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Your Email*"
              className="w-full border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />

            <input
              name="location"
              required
              type="text"
              placeholder="Your Location*"
              className="w-full border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                name="budget"
                required
                type="text"
                placeholder="Budget*"
                className="w-full border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              />

              <select
                id="contact-subject"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
                className="w-full border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              >
                <option value="">Select Subject*</option>
                {serviceOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Conditional custom subject input (assuming "input field" was meant, not "file") */}
            {selectedSubject === 'Other' && (
              <input
                type="text"
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                placeholder="Specify your custom service*"
                required
                className="w-full border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              />
            )}

            <textarea
              name="message"
              required
              placeholder="Your Message*"
              rows={4}
              className="w-full border border-orange-200 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-orange-500 transition"
            />

            <button
              type="submit"
              className="group inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg 
              border border-transparent 
              hover:text-orange-600 hover:bg-white hover:border-orange-600 
              transition-colors font-medium shadow-lg shadow-orange-500/30 cursor-pointer w-full md:w-auto"
            >
              Submit <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}