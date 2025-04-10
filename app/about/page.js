"use client";

import Image from "next/image";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import { useState } from "react";  // Import useState for component state management



// import Navbar from "@/components/Navbar";
import "./about.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/components/navbar";  // Adjust the relative path if needed


export default function About() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State to toggle profile menu
  const [showCareerModal, setShowCareerModal] = useState(false); // State to toggle the career modal

  return (
    <>
      <Navbar />

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#6d6bd3] via-[#6d6bd3] to-[#6d6bd3] min-h-[600px] overflow-hidden">
  <div className="absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/0f842a5615fc80362a29e48bd4ce0497.jpg')] opacity-20"></div>
  <div className="max-w-7xl mx-auto px-4 py-20 relative">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="text-white z-10">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Design Your Future with
          <span className="block mt-2">AI-Powered Guidance</span>
        </h1>
        <p className="text-xl  text-white mb-8 leading-relaxed">
          Discover your perfect career path, explore top educational
          opportunities, and receive personalized recommendations powered
          by advanced AI technology.
        </p>
        <div className="flex flex-wrap gap-4">
        <Link href="/signup">
          <button
            onClick={() => setShowCareerModal(true)}
            className="!rounded-button bg-white text-[#6d6bd3] px-8 py-4 font-semibold hover:bg-blue-50 transition duration-200 shadow-lg"
          >
            <i className="fas fa-rocket mr-2"></i>
            Start Your Journey
          </button>
       </Link>
       
        </div>
   
              </div>
            </div>
          </div>
        </div>
  
    </>
  );
}
