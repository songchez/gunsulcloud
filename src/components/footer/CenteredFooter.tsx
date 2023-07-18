import { ReactNode } from "react";

import { FooterCopyright } from "./FooterCopyright";
import { FooterIconList } from "./FooterIconList";

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
  navlink: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="max-w-2xl flex flex-col items-center text-center">
    <div className="w-full flex justify-center">
      <div className="w-36 sm:w-44 md:w-52 m-2">{props.logo}</div>
    </div>
    <nav className="w-full">
      <ul className="navbar mt-5 flex justify-evenly font-medium text-xl text-gray-800">
        {props.navlink}
      </ul>
    </nav>

    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>
    <div className="mt-8 flex justify-center">{props.children}</div>

    <div className="mt-8 text-ss">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
