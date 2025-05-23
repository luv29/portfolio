import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar"
import TopSocial from "@/components/TopSocial"
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luv Kansal",
  description: "Portfolio website of Luv Kansal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="absolute top-0 left-[17px]  z-[500] hidden md:block">
          <TopSocial />
        </div>

        <NavBar />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
