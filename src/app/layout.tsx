"use client";

import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <CssBaseline />
          <body className={inter.className}>{children}</body>
        </CssVarsProvider>
      </StyledEngineProvider>
    </html>
  );
}
