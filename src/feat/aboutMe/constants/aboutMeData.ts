export interface IAboutMeItem {
  id: string;
  imageSrc?: string;
  videoUrl?: string;
  title: string;
  description: string[];
}

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
