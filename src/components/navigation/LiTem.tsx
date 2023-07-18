"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  url: string;
  label: string;
}

export default function LiTem({ url, label }: Props) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={url}
        className={
          pathname === url
            ? "text-primary-focus"
            : "hover:-skew-y-2 hover:text-primary-focus"
        }
      >
        {label}
      </Link>
    </li>
  );
}
