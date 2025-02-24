import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Afia Tiwaa Obeng",
  description:
    "Transforming brands into digital success stories through strategic social media management and creative storytelling",
  openGraph: {
    title: "Afia Tiwaa Obeng",
    description:
      "Transforming brands into digital success stories through strategic social media management and creative storytelling",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/ac6569af-d637-4ddc-ad86-53cd2900c369.jpg?token=4LME-rLlV_bLBxJn6jz9PvNTwV3WJt3xEZLYovQH3sE&height=1079&width=1080&expires=33276433658",
        width: 1200,
        height: 630,
        alt: "Afia Tiwaa Obeng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afia Tiwaa Obeng",
    description:
      "Transforming brands into digital success stories through strategic social media management and creative storytelling",
    images: [
      "https://opengraph.b-cdn.net/production/images/ac6569af-d637-4ddc-ad86-53cd2900c369.jpg?token=4LME-rLlV_bLBxJn6jz9PvNTwV3WJt3xEZLYovQH3sE&height=1079&width=1080&expires=33276433658",
    ],
    creator: "@yourusername",
  },
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
