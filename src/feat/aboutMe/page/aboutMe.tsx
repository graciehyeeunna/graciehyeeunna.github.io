"use client";

import React, { useState } from 'react';
import Container from '@/components/layout/container';
import { ABOUT_ME_DATA } from '../constants/aboutMeData';
import { getVideoThumbnail, getEmbedUrl } from '@/feat/archive/utils/video-utils';

/**
 * 이미지 클릭 시 하단 내용이 변경되는 About Me 섹션 컴포넌트입니다.
 */
const AboutMe = () => {
  const [selectedId, setSelectedId] = useState<string>(ABOUT_ME_DATA[0].id);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const selectedItem = ABOUT_ME_DATA.find(item => item.id === selectedId) || ABOUT_ME_DATA[0];

  const handleItemClick = (itemId: string) => {
    setSelectedId(itemId);
    // 비디오가 있는 아이템이면서 아직 재생 중이 아닌 경우에만 재생 시작
    const item = ABOUT_ME_DATA.find(item => item.id === itemId);
    if (item?.videoUrl && playingVideo !== itemId) {
      setPlayingVideo(itemId);
    }
  };

  return (
    <section className="w-full py-24 bg-white">
      <Container>
        <h2 className="text-center font-cormorant text-2xl italic mb-12 text-gray-800">
          About me
        </h2>

        {/* Image/Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {ABOUT_ME_DATA.map((item) => {
            // 비디오 URL이 있는 경우 유틸 함수를 사용해서 썸네일과 임베드 URL 가져오기
            const videoLinks = item.videoUrl ? [item.videoUrl] : [];
            const thumbnailUrl = getVideoThumbnail(videoLinks);
            const embedUrl = getEmbedUrl(videoLinks);

            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative aspect-[16/9] bg-gray-100 overflow-hidden cursor-pointer transition-all duration-500 group ${selectedId === item.id ? 'ring-2 ring-black ring-offset-4' : 'opacity-70 hover:opacity-100'
                  }`}
              >
                {item.videoUrl ? (
                  playingVideo === item.id ? (
                    // 비디오 재생 중일 때 YouTube/Vimeo 임베드
                    <iframe
                      src={`${embedUrl}?autoplay=1`}
                      title={item.title}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    // 비디오 썸네일 이미지
                    <div className="relative w-full h-full bg-gray-200">
                      {thumbnailUrl ? (
                        <img
                          src={thumbnailUrl}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            console.log('Thumbnail failed to load:', thumbnailUrl);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log('Thumbnail loaded successfully:', thumbnailUrl)}
                        />
                      ) : null}
                      
                      {/* 플레이스홀더 텍스트 (썸네일이 없거나 로드 실패 시) */}
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-400 italic">
                        [ Video: {item.id} ]
                      </div>
                      
                      {/* 재생 버튼 오버레이 */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
                          <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <>
                    {/* 이미지 플레이스홀더 (이미지 준비 시 <Image> 태그로 교체 가능) */}
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-400 italic bg-gray-200">
                      [ Image: {item.id} ]
                    </div>
                    {/* 
                    <Image 
                      src={item.imageSrc} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    /> 
                    */}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Content Box */}
        <div className="bg-[#f8f8f8] py-[80px] px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 min-h-[400px] flex flex-col justify-center">
          <div className="inline-flex w-fit max-w-full items-center justify-center bg-black text-white px-[20px] py-[10px] mb-8 mx-auto">
            <h3 className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase font-inter leading-tight m-0 whitespace-normal text-center">
              {selectedItem.title}
            </h3>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col">
            {selectedItem.description.map((line, index) => (
              <p
                key={index}
                className="text-gray-800 font-normal leading-[1.6] font-cormorant text-lg md:text-xl break-keep"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
