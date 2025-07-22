import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeGate() {
  const [isVerified, setIsVerified] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const verifyAge = () => {
    if (selectedDate) {
      const birthDate = new Date(selectedDate);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      
      if (age < 19) {
        alert("Access Denied: You must be 19 or older");
        return;
      }
      
      setIsExiting(true);
      setTimeout(() => setIsVerified(true), 1000);
    } else {
      alert("Please select your birth date");
    }
  };

  if (isVerified) return null;

  return (
    <AnimatePresence>
      {!isVerified && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-screen fixed top-0 left-0 z-50 overflow-hidden bg-gradient-to-br from-gray-900 to-black"
        >
          {/* Animated Background Layers */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-[url('/images/cannabis-pattern.png')] opacity-20"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video/Cannabis_Temple_Cinematic_Video - Trim1.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>

          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-green-600 opacity-20"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Main Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: { delay: 0.3 }
            }}
            exit={{ y: -50, opacity: 0 }}
            className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <img 
                src="/images/bhanga_logo1.png" 
                alt="Brand Logo" 
                className="mx-auto w-40 md:w-56 h-auto"
              />
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Welcome to <span className="text-green-400">Green Haven</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              To enter our website, please verify you are 19 years or older
            </motion.p>

            <motion.div 
              className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-green-900 max-w-md w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="mb-6">
                <label htmlFor="birthdate" className="block text-green-300 text-lg mb-2">
                  Enter your birth date
                </label>
                <input
                  type="date"
                  id="birthdate"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={verifyAge}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-green-900/30"
                >
                  Enter Site
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = "https://google.com"}
                  className="flex-1 bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium border border-gray-700 hover:bg-gray-700"
                >
                  I'm Under 19
                </motion.button>
              </div>
            </motion.div>

            <motion.p 
              className="mt-8 text-gray-400 text-sm max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              By entering this site, you agree to our Terms of Service and acknowledge that cannabis products are intended for adults 19+.
            </motion.p>
          </motion.div>

          {/* Animated Leaves */}
          <motion.img
            src="/images/leaf_1.png"
            className="absolute w-24 top-20 left-10 opacity-80"
            initial={{ rotate: -15 }}
            animate={{ 
              y: [0, 20, 0],
              rotate: [-15, 0, -15]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.img
            src="/images/leaf_1.png"
            className="absolute w-28 bottom-20 right-10 opacity-80"
            initial={{ rotate: 15 }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [15, 0, 15]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}