

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";

// Image URLs (Unused background images removed)
const bhanga_logo = "/images/bhanga_logo1.png";
const leaf_1 = "/images/leaf_1.png";

export default function Loading() {
  const navigate = useNavigate();

  // Refs for animated elements (Unused refs removed)
  const welcomeRef = useRef(null);
  const logoRef = useRef(null);
  const paragraphRef = useRef(null);
  const leafSeparatorRef = useRef(null);
  const ageGateRef = useRef(null);
  const lowerContentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Timeline for animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });

    // Updated animation sequence (Side image animations removed)
    tl.to(welcomeRef.current, { y: 0, opacity: 1 }, "-=0.6")
      .to(logoRef.current, { y: 0, opacity: 1, scale: 1 }, "-=0.8")
      .to(paragraphRef.current, { y: 0, opacity: 1 }, "-=0.8")
      .to(leafSeparatorRef.current, { y: 0, opacity: 1 }, "-=0.8")
      .to(ageGateRef.current, { y: 0, opacity: 1 }, "-=0.8")
      .to(lowerContentRef.current, { y: 0, opacity: 1 }, "-=0.8");
  }, []);

  const handleYes = () => navigate("/home");
  const handleNo = () =>
    toast.error("You are not eligible!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

  return (
    // Main container - bg-cover and bg-center classes removed
    <div className="relative min-h-screen w-full flex items-center justify-center font-sans overflow-hidden">
      {/* --- Video Background Added --- */}
  <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
>
  <source src="/video/bg-4.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      <Helmet>
        <title>Bhanga Cannabis | Age Verification</title>
        <meta
          name="description"
          content="Please verify your age to enter Bhanga Cannabis. 19+ only."
        />
        <link rel="canonical" href="https://yourdomain.com/" />
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
              100% { transform: translateY(0) rotate(0deg); }
            }
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-fade-in { animation: fade-in 1s ease-out; }
            .animate-bounce-slow { animation: bounce-slow 3s infinite; }
            .animate-spin-slow { animation: spin-slow 20s linear infinite; }
          `}
        </style>
      </Helmet>
      <ToastContainer />

      {/* Floating leaves background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              backgroundImage: `url(${leaf_1})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* --- Left, Right, and Top images REMOVED from here --- */}

      <main className="relative z-10 flex flex-col items-center justify-center text-center p-6 space-y-2 w-full max-w-lg bg-opacity-90 rounded-xl border-opacity-30 mx-4 pb-4">
        <h1
          ref={welcomeRef}
          className="text-4xl md:text-5xl font-extrabold text-green-900 opacity-0 -translate-y-10"
        >
          Welcome to
        </h1>
        <img
          ref={logoRef}
          src={bhanga_logo}
          alt="Bhanga Cannabis Logo"
          className="w-40 md:w-56 transform transition-transform duration-500 hover:scale-105 opacity-0 -translate-y-10 scale-90"
        />
        {/* <p
          ref={paragraphRef}
          className="text-base md:text-lg font-semibold text-white max-w-md leading-relaxed opacity-0 -translate-y-10"
        >
          To access our content, please confirm you're at least 19 years of age
        </p> */}
        <div
          ref={leafSeparatorRef}
          className="flex items-center w-full my-1 opacity-0 -translate-y-10"
        >
          <div className="h-1 flex-grow bg-gradient-to-l from-green-600"></div>
          <div className="px-4">
            <img
              src={leaf_1}
              alt="leaf"
              className="w-16 h-16 animate-bounce-slow"
            />
          </div>
          <div className="h-1 flex-grow bg-gradient-to-r from-green-600"></div>
        </div>
        <div
          ref={ageGateRef}
          className="flex flex-col items-center space-y-4 w-full opacity-0 -translate-y-10"
        >
          <p className="font-extrabold text-xl md:text-2xl text-green-900">
            Are you 19 or older?
          </p>
          <div className="flex w-full flex-col items-center gap-3 md:flex-row">
            <button
              onClick={handleYes}
              className="w-4/5 cursor-pointer rounded-full border-2 border-white/20 bg-gradient-to-br from-emerald-500 to-teal-600 py-1 px-4 font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-white/40 hover:shadow-lg md:w-auto md:flex-1 text-sm md:text-base"
            >
              Yes, I'm 19+
            </button>
            <button
              onClick={handleNo}
              className="w-4/5 cursor-pointer rounded-full border-2 border-white/20 bg-gradient-to-br from-amber-500 to-rose-600 py-1 px-4 font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-white/40 hover:shadow-lg md:w-auto md:flex-1 text-sm md:text-base"
            >
              No, I'm under 19
            </button>
          </div>
        </div>
        <div className="flex items-center w-full my-1 ">
          <div className="h-1 flex-grow bg-gradient-to-l from-green-600"></div>
          <div className="px-4">
            <img
              src={leaf_1}
              alt="leaf"
              className="w-12 h-12 animate-spin-slow"
            />
          </div>
          <div className="h-1 flex-grow bg-gradient-to-r from-green-600"></div>
        </div>

        <div
          ref={lowerContentRef}
          className="flex flex-col items-center space-y-2 pt-1 opacity-0 -translate-y-10"
        >
          <h2 className="font-extrabold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-red-600">
            Cannabis Made Clear
          </h2>
          <p className="text-sm md:text-base font-medium text-white">
            Get the facts about cannabis consumption, health effects and harm
            reduction.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            <button className="font-bold cursor-pointer text-white py-2 px-5 rounded-full shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-emerald-500 to-teal-600 border-2 border-white/20 hover:border-white/40 text-sm">
              EXPLORE NOW
            </button>
            <button className="font-bold cursor-pointer text-white py-2 px-5 rounded-full shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-amber-500 to-rose-600 border-2 border-white/20 hover:border-white/40 text-sm">
              WHY BUY LEGAL
            </button>
          </div>
        </div>
      </main>

      {/* --- Bottom images REMOVED from here --- */}
    </div>
  );
}
