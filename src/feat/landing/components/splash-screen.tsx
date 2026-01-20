"use client";

import { useEffect, useState } from "react";

/**
 * @interface IProps
 * @description 스플래시 스크린 컴포넌트의 Props 인터페이스
 */
interface IProps {
  onComplete: () => void;
}

/**
 * @function SplashScreen
 * @description 초기 진입 시 나타나는 검은색 배경의 타이포그래피 애니메이션 컴포넌트
 */
export default function SplashScreen({ onComplete }: IProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // 스플래시가 활성화된 동안 스크롤 방지
    document.body.style.overflow = "hidden";

    // 1. 텍스트 페이드 인 시작 (0.5초 대기 후)
    const textInTimer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    // 2. 텍스트 페이드 아웃 시작 (2.5초 후)
    const textOutTimer = setTimeout(() => {
      setTextVisible(false);
    }, 2500);

    // 3. 전체 배경 페이드 아웃 및 종료 (3.5초 후)
    const splashOutTimer = setTimeout(() => {
      setIsVisible(false);
      // 배경이 완전히 사라지는 애니메이션 시간(500ms) 대기 후 완료 처리
      const finalTimer = setTimeout(() => {
        document.body.style.overflow = "unset";
        onComplete();
      }, 500);
      return () => clearTimeout(finalTimer);
    }, 3500);

    return () => {
      clearTimeout(textInTimer);
      clearTimeout(textOutTimer);
      clearTimeout(splashOutTimer);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <h1
        className={`font-cormorant text-white text-2xl md:text-4xl font-light transition-opacity duration-1000 ease-in-out ${textVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        Hyeeun Gracie Na
      </h1>
    </div>
  );
}
