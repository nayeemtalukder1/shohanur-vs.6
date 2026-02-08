"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  images: { image: string }[];
  bg: string;
  details: string;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/portfolio/");

        if (!res.ok) throw new Error(`HTTP ${res.status} – Failed to fetch projects`);

        const data = await res.json();

        const formatted: Project[] = data.map((p: any) => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          description: p.description || "",
          heroImage: p.heroImage
            ? `http://127.0.0.1:8000${p.heroImage}`
            : "/placeholder.png",
          images: (p.images || []).map((img: any) => ({
            image: `http://127.0.0.1:8000${img.image}`,
          })),
          bg: p.bg || "from-purple-500 to-indigo-600",
          details: p.details || "",
        }));

        setProjects(formatted);
      } catch (err) {
        console.error(err);
        setError((err as Error).message || "Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 text-center">
        <p className="text-xl text-gray-600">Loading portfolio projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-6 text-center">
        <p className="text-xl text-red-600">{error}</p>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="py-20 px-6 text-center">
        <p className="text-xl text-gray-600">No portfolio projects available yet.</p>
      </section>
    );
  }

  const featured = projects.slice(0, 4);
  const currentProject = featured[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % featured.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  const goTo = (index: number) => setCurrentIndex(index);

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Campaign Results & <span className="text-purple-600">Case Studies</span>
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 text-center">
        Real results from paid advertising campaigns across Facebook, Google,
        TikTok, LinkedIn, YouTube & more.
      </p>

      <div className={`relative bg-gradient-to-br ${currentProject.bg} rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto transition-all duration-700`}>
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[620px] bg-white/80 backdrop-blur-sm">
          <Link href={`/portfolio/${currentProject.slug}`}>
            <Image
              src={currentProject.heroImage}
              alt={currentProject.title}
              fill
              className="object-contain p-6 sm:p-10 transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              priority={currentIndex === 0}
            />
          </Link>

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white pointer-events-none">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentProject.title}</h3>
            <p className="text-base md:text-lg opacity-95">{currentProject.description}</p>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 sm:p-4 rounded-full shadow-lg z-10"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 sm:p-4 rounded-full shadow-lg z-10"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>

      {featured.length > 1 && (
        <div className="flex justify-center gap-3 mt-10">
          {featured.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                ? "bg-purple-600 w-10"
                : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
