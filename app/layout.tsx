import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Deepersensor | Decoding Intelligence",
  description: "A research lab dedicated to solving intelligence to advance science and benefit humanity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AnimatedBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
