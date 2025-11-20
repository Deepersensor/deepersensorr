"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      }}
    >
      {/* Background Elements */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: 384,
            height: 384,
            bgcolor: "rgba(59, 130, 246, 0.2)",
            borderRadius: "50%",
            filter: "blur(120px)",
            animation: "pulse 4s infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "25%",
            right: "25%",
            width: 384,
            height: 384,
            bgcolor: "rgba(147, 51, 234, 0.1)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/grid.svg')",
            opacity: 0.1,
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <motion.div style={{ y, opacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Box
              sx={{
                mb: 3,
                display: "inline-block",
                px: 2,
                py: 0.75,
                borderRadius: 50,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(4px)",
                typography: "caption",
                fontFamily: "monospace",
                color: "primary.light",
              }}
            >
              PIONEERING THE NEXT FRONTIER
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3.5rem", md: "6rem" },
                fontWeight: 700,
                letterSpacing: "-0.02em",
                mb: 3,
                background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255,255,255,0.4))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DECODING <br />
              <Box
                component="span"
                sx={{
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  WebkitTextFillColor: "white", // Reset fill for glow effect visibility if needed, or keep transparent
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
          >
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: "sm",
                mx: "auto",
                lineHeight: 1.6,
                mb: 5,
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
          >
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  "&:hover": { bgcolor: "grey.200" },
                  px: 4,
                  py: 1.5,
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
                  backdropFilter: "blur(4px)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)", borderColor: "white" },
                  px: 4,
                  py: 1.5,
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
        <Box
          sx={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, gray, transparent)",
          }}
        />
      </motion.div>
    </Box>
  );
}
