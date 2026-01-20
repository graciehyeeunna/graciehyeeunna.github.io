"use client";

import React, { useState } from 'react';
import Container from '@/components/layout/container';
import { ABOUT_ME_DATA } from '../constants/aboutMeData';

/**
 * 이미지 클릭 시 하단 내용이 변경되는 About Me 섹션 컴포넌트입니다.
 */
const AboutMe = () => {
  const [selectedId, setSelectedId] = useState<string>(ABOUT_ME_DATA[0].id);

  const selectedItem = ABOUT_ME_DATA.find(item => item.id === selectedId) || ABOUT_ME_DATA[0];

  return (
    <section className="w-full py-24 bg-white">
      <Container>
        <h2 className="text-center font-cormorant text-2xl italic mb-12 text-gray-800">
          About me
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {ABOUT_ME_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`relative aspect-[16/9] bg-gray-100 overflow-hidden cursor-pointer transition-all duration-500 group ${selectedId === item.id ? 'ring-2 ring-black ring-offset-4' : 'opacity-70 hover:opacity-100'
                }`}
            >
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
            </div>
          ))}
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
