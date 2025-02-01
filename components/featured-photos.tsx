"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import PhotoAlbum from "react-photo-album";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    width: 1600,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    width: 1600,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    width: 900,
    height: 1600,
  },
  //   { src: "/photo4.jpg", width: 1600, height: 900 },
  //   { src: "/photo5.jpg", width: 900, height: 1600 },
  //   { src: "/photo6.jpg", width: 1600, height: 900 },
];
export const FeaturedPhotos = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Work</h2>
      <PhotoAlbum
        photos={photos}
        layout="masonry"
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          return 3;
        }}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </section>
  );
};
