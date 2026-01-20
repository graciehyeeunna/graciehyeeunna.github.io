"use client";

import React from "react";
import { IArchiveItem } from "@/feat/archive/constants/realdata";

/**
 * @interface IProps
 * @description ArchiveList 컴포넌트의 Props 인터페이스
 */
interface IProps {
  items: IArchiveItem[];
  onItemClick: (item: IArchiveItem) => void;
}

/**
 * @function ArchiveList
 * @description 아카이브 항목들을 리스트 형태로 렌더링하는 컴포넌트
 */
export default function ArchiveList({ items, onItemClick }: IProps) {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center text-gray-400 font-cormorant italic">
        No records in this category yet.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onItemClick(item)}
            className="group w-full flex flex-col md:flex-row items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors px-4"
          >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 w-full">
              {/* Index Number */}
              <span className="text-[10px] text-gray-300 font-mono tracking-tighter min-w-[30px] hidden md:block">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Role */}
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold md:w-[160px] shrink-0">
                {item.role}
              </span>

              {/* Info Container */}
              <div className="flex flex-col text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-sm md:text-base font-medium text-gray-800 group-hover:text-black transition-colors">
                    {item.title}
                  </span>
                  
                  {/* Badge */}
                  {item.color && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shrink-0 ${
                        item.color === "yellow"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.color}
                    </span>
                  )}
                </div>
                
                {/* Venue & Room */}
                {item.venue && (
                  <span className="text-[11px] text-gray-400 mt-0.5">
                    {item.venue} {item.room ? `(${item.room})` : ""}
                  </span>
                )}
              </div>

              {/* Date */}
              <span className="text-[11px] text-gray-400 md:ml-auto font-mono">
                {item.date || "N/A"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
