import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navbar";
import SideBar from "@/Component/SideBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1 flex overflow-y-auto">
        {/* Sidebar */}
        <div className="w-[18%]">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="w-[82%] bg-gray-50">{children}</div>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
