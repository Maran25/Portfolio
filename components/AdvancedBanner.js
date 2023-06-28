"use client";
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";

function AdvancedBanner() {

  const background = {
    image: "/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mt-[-100px] md:mt-[-150px] items-center flex flex-col">
          <p className="mb-3 text-white/80 font-bold bg-slate-800 p-2">
            <span className="text-blue-500">{`<p>`}</span>
            HELLO, WORLD
            <span className="text-blue-500">{`<p>`}</span>
          </p>
          <h1 className="text-4xl md:text-6xl text-white font-semibold">
            I'm Manimaran
          </h1>
          <p className="mt-4 text-xs text-center md:text-base tracking-widest text-white">
            FRONT END DEVELOPER - BACK END DEVELOPER
          </p>
        </div>
      </div>
    ),
  };

  const foreground = {
    image:
      "/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
        <div className="absolute inset-0 flex items-end justify-center">
        <h1 className="text-white text-xs md:text-base mb-20 cursor-pointer">Scroll Down</h1>
        </div>
    )
  };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="h-screen"
    />
  );
}

export default AdvancedBanner
