import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const heroImageSrc = `https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80"`;

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen">
      <Image
        src={heroImageSrc}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Capturing Moments, Creating Memories
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Professional Photography & Videography Services
        </p>
        <Button size="lg">Book Now</Button>
      </div>
    </section>
  );
};
