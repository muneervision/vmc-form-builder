import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth/AuthContext";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "vMc Form Builder — Drafting tools for real data collection",
  description:
    "Build forms the way you'd draft a blueprint: precise fields, live logic, and responses you can trust. Drag, snap, ship.",
  metadataBase: new URL("https://vmc-form-builder.example.com"),
  openGraph: {
    title: "vMc Form Builder",
    description:
      "Drag-and-drop form builder with conditional logic, multi-step flows, and real-time responses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased bg-paper dark:bg-night transition-colors">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
