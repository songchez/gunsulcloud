import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "양도양수",
    template: "건설클라우드 | %s",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
