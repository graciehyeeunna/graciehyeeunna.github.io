import React from 'react';

export interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 프로젝트 전역에서 사용하는 레이아웃 컨테이너 컴포넌트입니다.
 * 좌우 패딩 120px, 상하 패딩 60px을 가집니다.
 */
const Container = ({ children, className = "" }: IContainerProps) => {
  return (
    <div className={`px-6 md:px-[120px] py-[60px] w-full max-w-[1920px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
