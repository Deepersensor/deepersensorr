"use client";

import { motion } from "framer-motion";
import { Box } from "@mui/material";

export default function AnimatedBackground() {
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
        bgcolor: "#030305",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "70vw",
          height: "70vw",
          background: "radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "40%",
          left: "30%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/grid.svg')",
          opacity: 0.05,
          maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
        }}
      />
    </Box>
  );
}
