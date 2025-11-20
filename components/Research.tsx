"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Globe, Network } from "lucide-react";

const areas = [
  {
    title: "Neural Architectures",
    description: "Designing the next generation of sparse, efficient, and scalable neural networks.",
    icon: Network,
  },
  {
    title: "Reinforcement Learning",
    description: "Creating agents that learn complex strategies through interaction with their environment.",
    icon: Brain,
  },
  {
    title: "Generative Models",
    description: "Pushing the boundaries of creativity and synthesis in text, image, and audio.",
    icon: Cpu,
  },
  {
    title: "Global Scale Compute",
    description: "Optimizing distributed systems to train the world's largest AI models.",
    icon: Globe,
  },
];

export default function Research() {
  return (
    <section id="research" className="py-32 px-6 md:px-12 bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Research Areas</h2>
          <p className="text-gray-400 max-w-2xl">
            Our work spans the entire spectrum of AI research, from fundamental theory to large-scale application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 cursor-pointer border border-white/5 hover:border-blue-500/30"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-blue-500/20 transition-colors">
                <area.icon className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{area.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
