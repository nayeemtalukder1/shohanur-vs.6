"use client";

import { useEffect, useState } from "react";

interface Stat {
  title: string;
  value: string;
  color_bg: string;
  color_text: string;
}

export default function Stats() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("https://backend-shohanur-1.onrender.com/stats/");
        if (!res.ok) throw new Error("Failed to fetch stats");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return null;

  return (
    <section className="py-10 bg-white/60">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-4 
            gap-6 
            text-center
          "
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={`${stat.color_bg} p-6 rounded-lg`}>
              <h3 className={`text-4xl font-bold ${stat.color_text}`}>{stat.value}</h3>
              <p className="mt-2 text-gray-700">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
