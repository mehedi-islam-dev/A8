// components/LottieAnimation.tsx
"use client";
import { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottieAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  if (!isMounted) {
    return (
      <div className="w-full flex items-center justify-center p-4">
        <div className="w-full max-w-2xl h-100 bg-orange-50/50 animate-pulse rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center p-4 transform transition-transform hover:scale-105 duration-700">
      <DotLottieReact
        src="https://lottie.host/801a61b8-6a56-4c31-97b7-66a9ba86bc51/J30V0v9nJw.lottie"
        loop={true}
        autoplay={true}
        className="w-full max-w-2xl h-auto drop-shadow-2xl" 
      />
    </div>
  );
}