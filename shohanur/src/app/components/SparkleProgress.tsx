'use client';

export default function SparkleProgress() {
  return (
    <div className="flex items-center justify-center gap-1 py-2 px-0.4">
      {/* Left Sparkle */}
      <SparkleIcon className="w-7 h-7 text-orange-400 animate-pulse hover:animate-bounce transition-all" />

      {/* Progress Bar with Hover Scale */}
      <div className="flex-1 max-w-[200px] group flex justify-center">
        <div className="
  w-full max-w-[600px]   /* Make the bar wider */
  h-2                    /* Taller bar */
  bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500
  rounded-full
  transition-all duration-300 ease-out
  origin-center
  transform scale-x-50
  group-hover:scale-x-150
  group-hover:shadow-orange-500/50 group-hover:shadow-lg
"></div>

      </div>

      {/* Right Sparkle */}
      <SparkleIcon className="w-7 h-7 text-orange-400 animate-pulse hover:animate-bounce transition-all" />
    </div>
  );
}

// Reusable Sparkle SVG Icon
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32 8L36.18 24.18H53.36L39.59 34.64L43.77 50.82L32 40.36L20.23 50.82L24.41 34.64L10.64 24.18H27.82L32 8Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="52" cy="52" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
