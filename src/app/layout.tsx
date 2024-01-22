import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <header className="bg-white h-[88px] flex">
              <p>This is header</p>
            </header>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
