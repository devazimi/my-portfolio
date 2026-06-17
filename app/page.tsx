"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <div className="max-w-full">
      <div className="w-full md:w-[900px] lg:w-[1200px] max-w-screen m-auto p-3 md:p-5 overflow-x-hidden">
        {/* header */}
        <Header />

        <hr className="w-full h-3 border-none my-5 rounded-full bg-line" />

        <Skills />

        {/* main / projects */}
        <Main />
      </div>
    </div>
  );
}
