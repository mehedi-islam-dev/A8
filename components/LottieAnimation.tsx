// components/LottieAnimation.tsx
"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottieAnimation() {
  return (
    <div className="w-full flex items-center justify-center p-4 transform transition-transform hover:scale-105 duration-700">
      <DotLottieReact
       src="/Vacation mode.lottie"
        loop={true}
        autoplay={true}
        className="w-full max-w-2xl h-auto drop-shadow-2xl" 
      />
    </div>
  );
}