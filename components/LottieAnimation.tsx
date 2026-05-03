// components/LottieAnimation.tsx
"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottieAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <DotLottieReact
        src="/Vacation mode.lottie"
        loop={true}
        autoplay={true}
        className="w-full h-full object-contain"
      />
    </div>
  );
}