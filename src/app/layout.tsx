import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const description =
  "Computer engineer (B.Sc., Sharif University of Technology) working on computer vision, deep learning, and speech synthesis.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: profile.name, template: `%s · ${profile.name}` },
  description,
  authors: [{ name: profile.name, url: profile.site }],
  openGraph: {
    title: profile.name,
    description,
    url: profile.site,
    siteName: profile.name,
    type: "profile",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} antialiased`}>
      <body className="min-h-screen font-sans text-[15px] leading-relaxed">{children}</body>
    </html>
  );
}
