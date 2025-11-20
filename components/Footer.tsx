import { Box, Container, Grid, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 10,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        bgcolor: "black",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  filter: "blur(1px)",
                  opacity: 0.8,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "-0.05em",
                  fontFamily: "monospace",
                }}
              >
                DEEPERSENSOR
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300 }}>
              Advancing the state of the art in artificial intelligence.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2, color: "white" }}>
                  Research
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {["Publications", "Code", "Datasets"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      color="text.secondary"
                      underline="hover"
                      sx={{ "&:hover": { color: "white" } }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2, color: "white" }}>
                  Company
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {["About", "Careers", "Blog", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      color="text.secondary"
                      underline="hover"
                      sx={{ "&:hover": { color: "white" } }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2, color: "white" }}>
                  Social
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {["Twitter", "LinkedIn", "GitHub"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      color="text.secondary"
                      underline="hover"
                      sx={{ "&:hover": { color: "white" } }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 10,
            pt: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            &copy; 2025 Deepersensor Labs. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="#" variant="caption" color="text.secondary" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" variant="caption" color="text.secondary" underline="hover">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
