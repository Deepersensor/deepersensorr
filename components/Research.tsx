"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Brain, Cpu, Globe, Network } from "lucide-react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { MouseEvent } from "react";

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

function ResearchCard({ area, index }: { area: typeof areas[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group relative"
    >
      <Paper
        sx={{
          p: 4,
          height: "100%",
          bgcolor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.3s ease-out",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        <Box
          sx={{
            mb: 3,
            p: 2,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.05)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            transition: "all 0.3s",
            ".group:hover &": {
              bgcolor: "primary.main",
              color: "white",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            },
          }}
        >
          <area.icon size={24} />
        </Box>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            transition: "color 0.3s",
            ".group:hover &": {
              color: "primary.light",
            },
          }}
        >
          {area.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, position: "relative", zIndex: 10 }}>
          {area.description}
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default function Research() {
  return (
    <Box component="section" id="research" sx={{ py: 20, position: "relative" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            Research Areas
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "sm" }}>
            Our work spans the entire spectrum of AI research, from fundamental theory to large-scale application.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {areas.map((area, i) => (
            <Grid item xs={12} md={6} lg={3} key={area.title}>
              <ResearchCard area={area} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
