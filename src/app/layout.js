import { Oswald, Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import { PlanProvider } from "@/context/PlanContext";
import { ToastContainer } from "react-toastify";

const oswald = Oswald({
  weight: ["400", "700"],
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "FITLOG",
  description: "Track and manage your workouts with FITLOG.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-[#0c0d10]">
        <PlanProvider>
          <NavBar />

          {children}

          <Footer />

          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
          />
        </PlanProvider>
      </body>
    </html>
  );
}
