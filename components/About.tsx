"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, Grid } from "@mui/material";

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: 16, position: "relative" }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 6,
              lineHeight: 1.2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            We are a research lab dedicated to solving intelligence to advance science and benefit humanity.
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                At Deepersensor, we believe that artificial general intelligence (AGI) has the potential to be the most important technological advancement in human history. Our mission is to build safe and beneficial AGI systems.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Our interdisciplinary team of scientists and engineers is pushing the boundaries of deep learning, reinforcement learning, and systems neuroscience to create agents that can learn, reason, and adapt in complex environments.
              </Typography>
            </Grid>
          </Grid>
        </motion.div>

        <Box
          sx={{
            mt: 12,
            pt: 6,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Grid container spacing={4}>
            {[
              { label: "Founded", value: "2024" },
              { label: "Researchers", value: "50+" },
              { label: "Papers", value: "120+" },
              { label: "Patents", value: "15" },
            ].map((stat, i) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {stat.label}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
