"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = ["Research", "Platform", "About", "Careers"];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: isScrolled ? "rgba(3, 3, 5, 0.7)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
        transition: "all 0.3s ease-in-out",
        py: isScrolled ? 1 : 2,
      }}
      component={motion.div}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              bgcolor: "primary.main",
              borderRadius: "50%",
              filter: "blur(0px)",
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)",
              animation: "pulse 3s infinite",
              "@keyframes pulse": {
                "0%": { boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)" },
                "50%": { boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)" },
                "100%": { boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)" },
              },
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              letterSpacing: "-0.05em",
              fontFamily: "monospace",
              textShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
          >
            DEEPERSENSOR
          </Typography>
        </Box>

        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: "text.secondary",
                  borderRadius: 50,
                  px: 3,
                  "&:hover": {
                    color: "text.primary",
                    bgcolor: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        ) : (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor="top"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          PaperProps={{
            sx: {
              bgcolor: "rgba(3, 3, 5, 0.95)",
              backdropFilter: "blur(20px)",
              backgroundImage: "none",
              height: "100vh",
            },
          }}
        >
          <Box sx={{ p: 3, display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setIsOpen(false)} color="inherit" size="large">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80%" }}>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding sx={{ mb: 2 }}>
                  <ListItemButton
                    component="a"
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    sx={{
                      textAlign: "center",
                      borderRadius: 4,
                      "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: "h4",
                        fontWeight: "bold",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
