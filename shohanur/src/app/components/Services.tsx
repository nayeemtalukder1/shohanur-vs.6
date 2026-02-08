"use client";

import { useEffect, useState } from "react";
import {
  Megaphone,
  Settings,
  ShieldCheck,
  BarChart3,
  Headphones,
  Users,
  Check,
} from "lucide-react";

interface ServiceItem {
  text: string;
}

interface Service {
  id: number;
  title: string;
  gradient: string;
  icon: string;
  items: ServiceItem[];
}

const iconMap: Record<string, any> = {
  Megaphone,
  Settings,
  ShieldCheck,
  BarChart3,
  Headphones,
  Users,
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/services/")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Service fetch error:", err));
  }, []);

  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          One Stop Service – Everything You Need for Digital Growth
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete digital marketing solutions for your success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || Megaphone;

          return (
            <div
              key={service.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/80 overflow-hidden flex flex-col h-full"
            >
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
              </div>

              <div className="p-8 flex flex-col h-full">
                <ul className="space-y-4 mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

                    setTimeout(() => {
                      const input = document.getElementById("contact-subject") as HTMLInputElement;
                      if (input) {
                        input.value = service.title;
                        input.focus();
                      }
                    }, 600);
                  }}
                  className="group mt-auto w-full font-semibold rounded-full px-6 py-3 bg-purple-700 text-white border-2 border-purple-600 hover:bg-white hover:text-purple-700 hover:border-purple-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Get Consultation{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
        >
          📩 Let’s Grow Together – Your Growth is My Goal!
        </button>
      </div>
    </section>
  );
}
