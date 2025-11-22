"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle system
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = "rgba(3, 3, 5, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  const x1 = useTransform(mouseX, [0, 1], [-100, 100]);
  const y1 = useTransform(mouseY, [0, 1], [-100, 100]);
  const x2 = useTransform(mouseX, [0, 1], [100, -100]);
  const y2 = useTransform(mouseY, [0, 1], [100, -100]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        background: "radial-gradient(ellipse at center, #0a0a1a 0%, #030305 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "80vw",
          height: "80vw",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(147,51,234,0.15) 40%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
          x: x1,
          y: y1,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "90vw",
          height: "90vw",
          background: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(59,130,246,0.1) 50%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          filter: "blur(120px)",
          x: x2,
          y: y2,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1.5, 1],
          opacity: [0.2, 0.4, 0.2, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
          height: "100vw",
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(0,0,0,0) 60%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
    </Box>
  );
}
