import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Camera, Video, DrillIcon as Drone, Edit, Tv } from "lucide-react";

const services = [
  {
    title: "Photography",
    description: "Portraits, events, weddings, product photography, and more.",
    icon: Camera,
  },
  {
    title: "Videography",
    description:
      "Cinematic wedding films, promotional videos, behind-the-scenes shoots.",
    icon: Video,
  },
  {
    title: "Drone Photography & Videography",
    description: "Breathtaking aerial shots for unique perspectives.",
    icon: Drone,
  },
  {
    title: "Photo Editing & Retouching",
    description: "Professional-quality enhancements to perfect your images.",
    icon: Edit,
  },
  {
    title: "Event Coverage & Live Streaming",
    description:
      "Real-time event coverage and professional live streaming services.",
    icon: Tv,
  },
];

export const ServiceSection = () => {
  return (
    <section id="services" className="py-16 px-4 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="transition-transform hover:scale-105">
            <CardHeader>
              <service.icon className="w-8 h-8 mb-2" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
