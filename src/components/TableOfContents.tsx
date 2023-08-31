"use client";
import React, { useEffect } from "react";
import tocbot from "tocbot";

const TableOfContents: React.FC = () => {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 TOCbot 초기화
    tocbot.init({
      tocSelector: ".toc", // TOC를 삽입할 위치의 CSS 선택자
      contentSelector: ".js-toc-content", // TOC를 생성할 콘텐츠의 CSS 선택자
      headingSelector: "h1, h2, h3", // TOC에 포함할 제목 레벨
    });

    // 컴포넌트가 언마운트될 때 TOCbot 정리
    return () => {
      tocbot.destroy();
    };
  }, []);

  return (
    <div className="mt-40 sticky top-10">
      <nav className="toc"></nav>
      <style jsx global>{`
        .toc {
          background-color: var(--bg-primary);
          border: 1px solid var(--content-border);
          border-radius: 0.25rem;
          padding: 1rem;
          font-size: 0.875rem;
        }
        .toc-list .toc-list {
          padding-left: 1rem;
          padding-top: 0.5rem;
        }
        .toc-list-item {
          padding-bottom: 0.5rem;
        }
        .toc-list-item:last-child {
          padding-bottom: 0;
        }

        .toc-link {
          color: var(--text-secondary);
        }

        .is-active-link {
          --tw-text-opacity: 1;
          color: hsl(var(--p) / var(--tw-text-opacity));
          font-weight: 800;
        }
      `}</style>
    </div>
  );
};

export default TableOfContents;
