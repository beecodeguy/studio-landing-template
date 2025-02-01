import Image from "next/image";
import React from "react";

const aboutImageSrc = `https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80`;

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={aboutImageSrc}
            alt="About Me"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hi, I&apos;m [Your Name], a passionate photographer and videographer
            with over 10 years of experience. My journey began with a simple
            point-and-shoot camera, but it quickly evolved into a lifelong
            passion for capturing the beauty in everyday moments.
          </p>
          <p className="text-lg mb-4">
            What sets my studio apart is our commitment to not just taking
            pictures, but telling stories. Whether it&apos;s a wedding, a
            corporate event, or a personal portrait session, we strive to
            capture the essence of the moment and the personalities involved.
          </p>
          <p className="text-lg">
            Our team uses state-of-the-art equipment and cutting-edge techniques
            to ensure that every shot is perfect. But more than that, we bring
            creativity, passion, and a keen eye for detail to every project we
            undertake.
          </p>
        </div>
      </div>
    </section>
  );
};
