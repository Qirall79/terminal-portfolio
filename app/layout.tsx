import type { Metadata } from "next";
import {Source_Code_Pro} from "next/font/google"
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Walid Belfatmi | Portfolio",
  description: "Walid Belfatmi's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.className} bg-[#1A1F2C] w-screen flex flex-col items-center overflow-x-hidden`}
      >
        <div className="max-w-[1450px] w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
