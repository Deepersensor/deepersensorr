"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pt: 10,
        perspective: "1000px",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <motion.div style={{ y, opacity, rotateX, rotateY, transformStyle: "preserve-3d" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, z: -100 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Box
              sx={{
                mb: 4,
                display: "inline-block",
                px: 3,
                py: 1,
                borderRadius: 50,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                typography: "caption",
                fontFamily: "monospace",
                color: "primary.light",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                transform: "translateZ(50px)",
              }}
            >
              PIONEERING THE NEXT FRONTIER
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3.5rem", md: "7rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                mb: 3,
                background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                transform: "translateZ(80px)",
              }}
            >
              DECODING <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "inherit",
                    filter: "blur(20px)",
                    opacity: 0.5,
                    zIndex: -1,
                  }
                }}
              >
                INTELLIGENCE
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(40px)" }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: "sm",
                mx: "auto",
                lineHeight: 1.6,
                mb: 6,
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              We are building the foundational systems for general artificial intelligence.
              Bridging the gap between biological cognition and silicon efficiency.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(60px)" }}
          >
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  "&:hover": {
                    bgcolor: "white",
                    transform: "scale(1.05)",
                    boxShadow: "0 0 30px rgba(255,255,255,0.3)",
                  },
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                Explore Research
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "white",
                    transform: "scale(1.05)",
                    boxShadow: "0 0 30px rgba(59,130,246,0.2)",
                  },
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                View Platform
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Typography variant="caption" sx={{ letterSpacing: "0.2em", color: "text.secondary" }}>
          SCROLL
        </Typography>
        <motion.div
          animate={{ height: [20, 50, 20], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: 1,
            background: "linear-gradient(to bottom, #3b82f6, transparent)",
          }}
        />
      </motion.div>
    </Box>
  );
}
