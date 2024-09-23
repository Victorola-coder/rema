import "./globals.css";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/NeueMontreal-Bold.otf",
  variable: "--font-neuemontreal-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/ChampionGothic-Middleweight.ttf",
  variable: "--font-champion-gothic-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://rema.victorola.me"),
  title: "Rema - Portfolio",
  description:
    "Explore the portfolio of Rema, showcasing creative works and projects. Discover a collection of Music, new albums, tours and creative endeavors.",
  applicationName: "Rema Portfolio",
  authors: [{ name: "VickyJay", url: "https://victorla.me" }],
  keywords: ["Rema", "HeisRema", "Bad boy Rema"],
  referrer: "origin",
  openGraph: {
    type: "website",
    url: "https://rema.victorola.me",
    title: "Divine Ikubor - Portfolio",
    description: "Explore Rema, showcasing creative works and projects.",
    siteName: "Divine Ikubor",
    locale: "en_US",
    emails: ["rema@gmail.com", "heisrema@gmail.com", "badboyrema@gmail.com"],
  },
  twitter: {
    site: "@heisrema",
    creator: "@heisrema",
    title: "Divine Ikubor - Portfolio",
    description:
      "Explore the portfolio of SDivine Ikubor, showcasing creative works and projects.",
  },
  appleWebApp: {
    capable: true,
    title: "Divine Ikubor Portfolio",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "Explore the portfolio of Rema, showcasing creative works and projects. Discover a collection of Music, new albums, tours and creative endeavors.",
  category: "Portfolio",
  classification: "Personal Portfolio",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}