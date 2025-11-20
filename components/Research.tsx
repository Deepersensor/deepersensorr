"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Globe, Network } from "lucide-react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

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
    <Box component="section" id="research" sx={{ py: 16, bgcolor: "rgba(255,255,255,0.02)" }}>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.05)",
                      borderColor: "primary.main",
                      transform: "translateY(-4px)",
                    },
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
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
                      transition: "colors 0.3s",
                      ".MuiPaper-root:hover &": {
                        bgcolor: "rgba(59, 130, 246, 0.2)",
                        color: "primary.light",
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
                      ".MuiPaper-root:hover &": {
                        color: "primary.light",
                      },
                    }}
                  >
                    {area.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {area.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
