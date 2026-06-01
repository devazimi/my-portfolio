import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: "500",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body className={`bg-background text-baseTextColor`}>{children}</body>
    </html>
  );
}
