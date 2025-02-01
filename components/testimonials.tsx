"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "The wedding photos exceeded our expectations. Every moment was captured beautifully!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "Professional product photography that helped increase our online sales significantly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Emily Williams",
    role: "Event Planner",
    content:
      "Exceptional service and attention to detail. The best photographer I've worked with!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
];

const TestimonialCard = ({
  image,
  name,
  role,
  rating,
  content,
}: {
  image: string;
  name: string;
  role: string;
  rating: number;
  content: string;
}) => {
  return (
    <div
      id="testimonial"
      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {name}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
};

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section className="py-16 px-4 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="flex items-center justify-center">
        <Button variant="ghost" onClick={prevTestimonial} className="mr-4">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <TestimonialCard
          image={testimonials[currentIndex].image}
          name={testimonials[currentIndex].name}
          content={testimonials[currentIndex].content}
          role={testimonials[currentIndex].role}
          rating={testimonials[currentIndex].rating}
        />
        <Button variant="ghost" onClick={nextTestimonial} className="ml-4">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};
