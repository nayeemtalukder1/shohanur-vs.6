import React from "react";

export default function AnimatedDotsLoader() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Dot color="from-orange-400 to-orange-500" delay="0ms" />
      <Dot color="from-green-400 to-green-500" delay="150ms" />
      <Dot color="from-blue-400 to-blue-500" delay="300ms" />
    </div>
  );
}

// Animated Dot Component
function Dot({ color, delay }: { color: string; delay: string }) {
  return (
    <div
      className={`
        w-2 h-2 
        rounded-full 
        bg-gradient-to-br ${color}
        shadow-lg
        animate-bounce mb-5
      `}
      style={{
        animationDelay: delay,
        animationDuration: '1.2s',
      }}
    />
  );
}