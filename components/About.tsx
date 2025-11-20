"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
            We are a research lab dedicated to solving intelligence to advance science and benefit humanity.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed">
            <p>
              At Deepersensor, we believe that artificial general intelligence (AGI) has the potential to be the most important technological advancement in human history. Our mission is to build safe and beneficial AGI systems.
            </p>
            <p>
              Our interdisciplinary team of scientists and engineers is pushing the boundaries of deep learning, reinforcement learning, and systems neuroscience to create agents that can learn, reason, and adapt in complex environments.
            </p>
          </div>
        </motion.div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            { label: "Founded", value: "2024" },
            { label: "Researchers", value: "50+" },
            { label: "Papers", value: "120+" },
            { label: "Patents", value: "15" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
