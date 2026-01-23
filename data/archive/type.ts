/**
 * Archive 관련 타입 및 인터페이스 정의
 */

export interface IArchiveItem {
  id: string;
  date: string | null;
  venue: string | null;
  room: string | null;
  role: string;
  badge: 'star' | 'green' | null;
  title: string;
  thumbnail?: string | null;
  description: string | null;
  links: string[];
  notes: string | null;
  rawText: string;
}

export interface IArchiveCategory {
  categoryName: string;
  items: IArchiveItem[];
}

export interface IArchiveData {
  categories: IArchiveCategory[];
}
