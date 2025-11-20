"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass-panel border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full blur-[2px] opacity-80 animate-pulse" />
        <span className="text-xl font-bold tracking-tighter font-mono">
          DEEPERSENSOR
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        {["Research", "Platform", "About", "Careers"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {["Research", "Platform", "About", "Careers"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
