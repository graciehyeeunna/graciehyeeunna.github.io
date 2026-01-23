import ResumePage from "@/feat/resume/page/resume-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Gracie Hyeeun Na",
  description: "Experience and education of Gracie Hyeeun Na",
};

/**
 * /resume 경로에 해당하는 페이지입니다.
 * 도메인 로직은 @/feat/resume/page/resume-page 에 위치합니다.
 */
export default function Page() {
  return <ResumePage />;
}
