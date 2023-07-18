import Link from "next/link";

import { AppConfig } from "../utils/AppConfig";
import Image from "next/image";

export default function Logo({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <div className="flex justify-center">
      <Link href="/">
        <Image
          src={AppConfig.logo}
          alt="logo"
          width={width}
          height={height}
        ></Image>
      </Link>
    </div>
  );
}
