"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Mail, MapPin, Phone } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to your server
  };

  return (
    <section id="contact" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Send Message</Button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <FaFacebook className="text-2xl hover:text-primary cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-primary cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-primary cursor-pointer" />
            <FaLinkedin className="text-2xl hover:text-primary cursor-pointer" />
          </div>
        </div>
        <div className="lg:w-1/2">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <div className="space-y-8 px-10 mt-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Contact Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Mail className="h-5 w-5 mr-3" />
            <span>contact@lensstudio.com</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Phone className="h-5 w-5 mr-3" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="h-5 w-5 mr-3" />
            <span>123 Photography Lane, Creative City, ST 12345</span>
          </div>
        </div>
      </div>
    </section>
  );
};
