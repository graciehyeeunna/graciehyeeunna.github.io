"use client";

import Container from "@/components/layout/container";
import { Download, Maximize2, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
/**
 * ResumePage 컴포넌트
 * 이력서와 자격증을 나란히 양문형으로 보여주는 페이지입니다.
 * 2개의 이미지를 동시에 표시하며, 각각 크게 보기 기능을 포함합니다.
 */
const ResumePage = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  // 혜은 : 각 이미지 경로를 아래에 수정해주면 됩니다.
  const images = [
    { src: "/images/resume/Resume.jpg", alt: "Resume", title: "Resume" },
    { src: "/images/resume/Cert.jpg", alt: "Certificate", title: "Certificate" }
  ];

  const handleDownload = async (imageData: { src: string; title: string }) => {
    try {
      const response = await fetch(imageData.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${imageData.title.toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the object URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleZoom = (imageData: { src: string; alt: string; title: string }) => {
    setZoomedImage(imageData);
    setIsZoomed(true);
  };

  // Handle keyboard events for zoomed modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isZoomed && event.key === 'Escape') {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  return (
    <section className="w-full">
      <Container>
        <div className="flex flex-col items-center mx-auto">
          {/* Page Header */}
          <div className="w-full relative flex items-center justify-center animate-slide-up">
            {/* <h1 className="font-cormorant font-bold text-gray-900 text-[30px] leading-tight">
              Resume & Certificate
            </h1> */}

            {/* <a
              href="https://docs.google.com/document/d/1iRwJZToPGYATuPRKJul0h4LZGKXBO9PXOiSI8OlJHWY/edit?pli=1&tab=t.0#heading=h.3yeygrk6rlc7"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute italic right-0 font-inter font-normal text-sm text-gray-400 hover:text-black transition-all flex items-center gap-0.5 group"
              title="view Capstone Journal"
            >
              view Capstone Journal
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
            </a> */}
          </div>

          {/* Resume & Certificate Section */}
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            
            {/* Documents Container */}
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
              
              {/* Resume Section */}
              <div className="flex flex-col gap-4 flex-1 max-w-lg">
                {/* Resume Header & Controls */}
                <div className="flex items-center justify-between">
                  <h2 className="font-cormorant font-semibold text-gray-800 text-xl">Resume</h2>
                  <div className="flex items-center gap-4 text-xs font-inter text-gray-400">
                    <button
                      onClick={() => handleZoom(images[0])}
                      className="flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors"
                      title="View Larger"
                    >
                      <Maximize2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>View Larger</span>
                    </button>
                    <button
                      onClick={() => handleDownload(images[0])}
                      className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
                      title="Download Resume"
                    >
                      <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>

                {/* Resume Image */}
                <div className="h-[660px] aspect-[1/1.414] bg-gray-50 border border-gray-100 rounded-sm shadow-sm flex items-center justify-center overflow-hidden transition-all duration-300 relative cursor-pointer hover:shadow-md"
                     onClick={() => handleZoom(images[0])}>
                  <Image 
                    src={images[0].src} 
                    alt={images[0].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Certificate Section */}
              <div className="flex flex-col gap-4 flex-1 max-w-lg">
                {/* Certificate Header & Controls */}
                <div className="flex items-center justify-between">
                  <h2 className="font-cormorant font-semibold text-gray-800 text-xl">Certificate</h2>
                  <div className="flex items-center gap-4 text-xs font-inter text-gray-400">
                    <button
                      onClick={() => handleZoom(images[1])}
                      className="flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors"
                      title="View Larger"
                    >
                      <Maximize2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>View Larger</span>
                    </button>
                    <button
                      onClick={() => handleDownload(images[1])}
                      className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
                      title="Download Certificate"
                    >
                      <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="h-[660px] aspect-[1/1.414] bg-gray-50 border border-gray-100 rounded-sm shadow-sm flex items-center justify-center overflow-hidden transition-all duration-300 relative cursor-pointer hover:shadow-md"
                     onClick={() => handleZoom(images[1])}>
                  <Image 
                    src={images[1].src} 
                    alt={images[1].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>

      {/* Zoomed Modal Overlay */}
      {isZoomed && zoomedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-10 backdrop-blur-sm animate-fade-in cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2"
            aria-label="Close zoomed view"
          >
            <X className="w-8 h-8" strokeWidth={1.2} />
          </button>

          {/* Zoomed Content Container */}
          <div
            className="relative h-full aspect-[1/1.414] bg-white shadow-2xl overflow-hidden flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={zoomedImage.src} 
              alt={`${zoomedImage.title} Full View`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumePage;
