"use client";
import About from "@/components/About";
import AdvancedBanner from "@/components/AdvancedBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
      <ParallaxProvider>
        <AdvancedBanner />
      </ParallaxProvider>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
