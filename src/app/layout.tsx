import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Type system (assumption — the Figma source wasn't accessible, sampled from
 * the provided screenshots): Poppins for display/headings, Inter for body.
 */
const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chai Reader — Read, Chat & Discover Books",
  description:
    "Chai Reader is an AI-powered book commerce platform designed to transform how people discover and experience books — through reading, chatting with books, and more.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Room for iOS notches / Android status bars when wrapped with Capacitor.
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
