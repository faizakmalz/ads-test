import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Case - ADS",
  description: "TESTCASE - ADS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className="flex justify-center items-start min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
