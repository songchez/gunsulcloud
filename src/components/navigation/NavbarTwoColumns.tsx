import { ReactNode } from "react";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="w-full flex flex-col md:flex-row md:justify-between justify-center items-center md:mx-3">
    <div className="w-40 sm:w-44 md:w-52 m-3 md:m-4 ">{props.logo}</div>
    <nav className="container md:flex md:justify-end">
      <ul className="navbar flex items-center justify-evenly max-w-prose font-medium text-xl text-gray-600">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
