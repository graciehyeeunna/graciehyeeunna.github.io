"use client";

import Container from "@/components/layout/container";
import { X } from "lucide-react";
import {
  ARCHIVE_DATA,
  IArchiveItem,
} from "@/feat/archive/constants/realdata";
import { useMemo, useState } from "react";

// 카테고리 타입 정의 (realdata.ts의 카테고리 기반)
type TArchiveCategory = "Full" | string;

const ArchivePage = () => {
  // 카테고리 목록 추출
  const categories = useMemo<TArchiveCategory[]>(
    () => ["Full", ...ARCHIVE_DATA.categories.map(c => c.categoryName)],
    []
  );

  const [activeCategory, setActiveCategory] = useState<TArchiveCategory>("Full");
  const [selectedItem, setSelectedItem] = useState<IArchiveItem | null>(null);

  // 정렬 및 필터링 로직
  const filteredItems = useMemo(() => {
    let items: IArchiveItem[] = [];

    if (activeCategory === "Full") {
      items = ARCHIVE_DATA.categories.flatMap(c => c.items);
    } else {
      const category = ARCHIVE_DATA.categories.find(c => c.categoryName === activeCategory);
      items = category ? [...category.items] : [];
    }

    // 우선순위 정렬: Yellow(0) > Green(1) > null(2)
    return items.sort((a, b) => {
      const priority = { yellow: 0, green: 1, null: 2 };
      const aPriority = priority[a.color || "null"];
      const bPriority = priority[b.color || "null"];
      return aPriority - bPriority;
    });
  }, [activeCategory]);

  // 비디오 링크 임베드용 변환 함수
  const getEmbedUrl = (links: string[]) => {
    const videoLink = links.find(l => l.includes("vimeo.com") || l.includes("youtube.com") || l.includes("youtu.be"));
    if (!videoLink) return null;

    if (videoLink.includes("vimeo.com")) {
      const videoId = videoLink.split("video=")[1] || videoLink.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    if (videoLink.includes("youtube.com") || videoLink.includes("youtu.be")) {
      const videoId = videoLink.includes("watch?v=")
        ? videoLink.split("v=")[1].split("&")[0]
        : videoLink.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return null;
  };

  return (
    <section className="w-full py-12 bg-white">
      <Container>
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-gray-500 font-cormorant italic mb-12 border-b border-gray-100 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`pb-2 transition-all text-base md:text-lg whitespace-nowrap ${activeCategory === category
                ? "text-gray-900 border-b-2 border-gray-900 font-bold"
                : "border-b-2 border-transparent hover:text-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group w-full flex flex-col md:flex-row items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors px-4"
              >
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 w-full">
                  <span className="text-[10px] text-gray-300 font-mono tracking-tighter min-w-[30px] hidden md:block">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold md:w-[160px] shrink-0">
                    {item.role}
                  </span>

                  <div className="flex flex-col text-center md:text-left flex-1">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <span className="text-sm md:text-base font-medium text-gray-800 group-hover:text-black transition-colors">
                        {item.title}
                      </span>
                      {/* Badge - 나중에 삭제하기 쉽도록 분리 유지 */}
                      {item.color && (
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shrink-0 ${item.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                          }`}>
                          {item.color}
                        </span>
                      )}
                    </div>
                    {item.venue && (
                      <span className="text-[11px] text-gray-400 mt-0.5">
                        {item.venue} {item.room ? `(${item.room})` : ''}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] text-gray-400 md:ml-auto font-mono">
                    {item.date || "N/A"}
                  </span>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <div className="py-20 text-center text-gray-400 font-cormorant italic">
                No records in this category yet.
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl md:max-w-4xl bg-black border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh] flex flex-col custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Content Area (Title & Info) */}
            <div className="relative p-4 md:p-6 bg-[#0a0a0a] text-white shrink-0">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-3 top-3 z-20 text-white hover:text-black hover:bg-white transition-colors cursor-pointer p-1 rounded-sm"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
              </button>

              <h3 className="text-lg md:text-xl font-medium mb-1 pr-10">{selectedItem.title}</h3>
              <p className="text-xs md:text-sm text-white/60 leading-normal font-light whitespace-pre-line">
                {selectedItem.description || selectedItem.rawText}
              </p>
              {selectedItem.notes && (
                <p className="text-[10px] md:text-[11px] text-yellow-500/80 mt-1 italic">
                  Note: {selectedItem.notes}
                </p>
              )}
            </div>

            {/* Video Area */}
            <div className="w-full aspect-video flex items-center justify-center bg-black shrink-0">
              {getEmbedUrl(selectedItem.links) ? (
                <iframe
                  src={getEmbedUrl(selectedItem.links)!}
                  title={selectedItem.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="text-white/50 font-cormorant italic text-lg px-4 text-center">
                  No preview video available for this item.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArchivePage;