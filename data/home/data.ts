/**
 * Home 페이지 관련 상수 데이터
 */
import type { IRoleData, IAboutMeItem } from "./type";
export type { TRole, IRoleData, IAboutMeItem } from "./type";

// ==================== I'm a 섹션 (Role) 데이터 ====================
// 혜은 : iam 의 카테고리별로 label, 카드 이미지, 클릭시 노출되는 영상 및 카드 하단의 description(설명추가) 부분 데이터 가공 위치 입니다.

export const ROLE_DATA: IRoleData[] = [
  {
    id: "live-sound",
    label: "Live Sound Engineer",
    title: "Upsidedown Live Performance",
    videoUrl: "https://vimeo.com/1060116537",
    thumbnail: "/images/home/iam/live-sound/UpsidedownUniverse.png",
    description: "Upside Down Universe reimagines artistic performance through innovation and collaboration. Combining original music, evocative visuals, and cutting-edge technology, the production explores the interconnectedness of humanity and the environment while addressing the pressing issue of climate change. Imagined by Berklee Music Business/Management student Ana Suligoj, the program features eight student-composed pieces performed by an orchestra under the direction of Joshua Tan. Visual and video elements, developed collaboratively with students from Emerson College, MassArt, and Berklee, enhance the multidisciplinary nature of the experience.\n\nWith guidance from Berklee faculty member Maria Finkelmeier, Upside Down Universe transforms the Berklee Performance Center into a fully-immersive environment, incorporating innovative layouts, projection surfaces, and audience engagement tools such as LED wristbands. Sponsored by the Music Business/Management Department, the production offers both an inspiring artistic experience and a platform for reflecting on creativity's role in shaping a more sustainable future.",
  },
  {
    id: "av-tech",
    label: "Audio-Visual Technician",
    title: "Lady Gaga Live Performance",
    videoUrl: "https://vimeo.com/manage/videos/1156782343",
    thumbnail: "/images/home/iam/av-tech/ladygaga.jpg",
  },
  {
    id: "music-producer",
    label: "Music Producer & Engineer",
    title: "Moonchild - Recording & Mix",
    videoUrl: "https://www.youtube.com/watch?v=pjiqxhwYpZ0",
    thumbnail: "/images/home/iam/music-producer/Sleepwalk.jpg",
  },
];

// ==================== About Me 섹션 데이터 ====================

export const ABOUT_ME_DATA: IAboutMeItem[] = [
  {
    id: "focus",
    videoUrl: "https://vimeo.com/1157249297",
    title: "FOCUS & RESPONSIBILITY",
    description: [
      "I tend to stay calm and focused during shows, even under pressure.",
      "Preparing thoroughly and paying attention to small details help me respond quickly to unexpected situations.",
      "I believe that being responsible and consistent is just as important as technical skill in live production.",
    ],
  },
  {
    id: "reflection",
    videoUrl: "https://www.youtube.com/watch?v=s0sWmK7SYnI",
    title: "REFLECTION & GROWTH",
    description: [
      "Outside of work, I enjoy quietly reviewing live recordings and taking notes on what could be improved.",
      "Spending time walking around the city after shows helps me reset and reflect on each performance.",
      "I see every show as a learning experience and try to grow a little with each one.",
    ],
  },
  {
    id: "collaboration",
    videoUrl: "https://vimeo.com/1157084622",
    title: "COLLABORATION & COMMUNICATION",
    description: [
      "Successful productions are built on effective teamwork and clear communication.",
      "I value collaboration and work closely with artists and technicians to ensure every detail is perfect.",
      "My goal is to create a seamless and professional environment for everyone involved.",
    ],
  },
];
