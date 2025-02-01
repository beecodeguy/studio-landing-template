"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
    category: "Wedding",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1469504512102-900f29606341?auto=format&fit=crop&q=80",
    category: "Nature",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
    category: "Portrait",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&q=80",
    category: "Event",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
    category: "Landscape",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    category: "Wedding",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(photo.url)}
            >
              <Image
                src={photo.url}
                alt={photo.category}
                width={100}
                height={100}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative h-[90vh] w-[90vw] rounded-lg">
            <Image
              fill
              src={selectedImage}
              alt="Selected"
              className=" object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
