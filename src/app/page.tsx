"use client";

import Container from "@/components/layout/container";
import Link from "next/link";
import AboutMe from "@/feat/aboutMe/page/aboutMe";
import { useState } from "react";

type TRole = "live-sound" | "av-tech" | "mixing" | "recording";

interface IRoleInfo {
  id: TRole;
  label: string;
}

const ROLES: IRoleInfo[] = [
  { id: "live-sound", label: "Live Sound Engineer" },
  { id: "av-tech", label: "Audio-Visual Technician" },
  { id: "mixing", label: "Mixing Engineer" },
  { id: "recording", label: "Recording Engineer" },
];

export default function Home() {
  const [activeRole, setActiveRole] = useState<TRole>("live-sound");

  return (
    <main className="min-h-screen bg-white">
      <Container className="flex flex-col items-center">
        {/* Job Roles Selector */}
        <section className="w-full mb-10 md:mb-20">
          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-12 text-xs md:text-sm text-gray-400 font-medium list-none p-0 m-0">
            <li className="text-gray-900 italic">I'm a</li>
            {ROLES.map((role) => (
              <li
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`transition-colors cursor-pointer italic ${activeRole === role.id
                  ? "text-gray-900 font-bold border-b-2 border-gray-900 pb-1"
                  : "hover:text-gray-600"
                  }`}
              >
                {role.label}
              </li>
            ))}
          </ul>
        </section>

        {/* Main Visual Content */}
        <section className="relative w-full max-w-4xl flex flex-col items-center gap-16">
          <div className="relative w-full aspect-[4/5] max-w-md bg-gray-50 flex items-center justify-center overflow-hidden rounded-sm transition-all duration-500">
            {/* 탭 변경에 따른 콘텐츠 노출 영역 */}
            <div className="text-gray-400 text-xs italic text-center px-10">
              {activeRole === "live-sound" && (
                <div className="animate-in fade-in duration-700">
                  <p>[ Live Sound Engineer Video/Image Area ]</p>
                  <p className="text-[10px] opacity-70 mt-2">트롬본 연주 영상이나 이미지가 들어갈 공간입니다.</p>
                </div>
              )}
              {activeRole === "av-tech" && (
                <div className="animate-in fade-in duration-700">
                  <p>[ Audio-Visual Technician Content ]</p>
                  <p className="text-[10px] opacity-70 mt-2">AV 테크니션 관련 영상/iframe 공간입니다.</p>
                </div>
              )}
              {activeRole === "mixing" && (
                <div className="animate-in fade-in duration-700">
                  <p>[ Mixing Engineer Content ]</p>
                </div>
              )}
              {activeRole === "recording" && (
                <div className="animate-in fade-in duration-700">
                  <p>[ Recording Engineer Content ]</p>
                </div>
              )}
            </div>

            {/* 실제 비디오/iframe 삽입 예시 */}
            {/* 
            {activeRole === "live-sound" && (
              <iframe 
                src="https://www.youtube.com/embed/..." 
                className="w-full h-full"
                allowFullScreen
              />
            )}
            */}
          </div>

          {/* Side Link */}
          <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 rotate-0 hidden lg:block">
            <Link
              href="/archive"
              className="group flex items-center gap-2 text-sm text-gray-500 no-underline hover:text-gray-900 transition-colors italic"
            >
              see more Archive
              <span className="text-lg transition-transform group-hover:translate-x-1">›</span>
            </Link>
          </div>
        </section>

        {/* Bottom Slogan */}
        <footer className="mt-32 mb-10 text-center">
          <p className="text-2xl text-gray-700 font-light italic tracking-tight font-cormorant">
            "Sound is more than just noise, it's the art of making the world truly heard."
          </p>
        </footer>
      </Container>

      {/* About Me Section */}
      <AboutMe />
    </main>
  );
}
