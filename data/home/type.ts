/**
 * Home 페이지 관련 타입 정의
 */

// ==================== I'm a 섹션 (Role) 타입 ====================

export type TRole = "live-sound" | "av-tech" | "music-producer";

export interface IRoleData {
  id: TRole;
  label: string;
  title: string;
  videoUrl: string;
  thumbnail?: string;
  description?: string;
}

// ==================== About Me 섹션 타입 ====================

export interface IAboutMeItem {
  id: string;
  imageSrc?: string;
  videoUrl?: string;
  title: string;
  description: string[];
}
