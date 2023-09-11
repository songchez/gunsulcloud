import { ReactNode } from "react";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="w-full">
    <div className="w-full flex flex-col md:flex-row md:justify-between justify-center items-center md:mx-3">
      <div className="w-32 sm:w-40 md:w-44 m-2 md:m-2">{props.logo}</div>
      <nav className="container md:flex md:justify-end">
        <ul className="navbar flex items-center justify-evenly max-w-prose font-medium md:text-lg">
          {props.children}
        </ul>
      </nav>
    </div>
  </div>
);

export { NavbarTwoColumns };
