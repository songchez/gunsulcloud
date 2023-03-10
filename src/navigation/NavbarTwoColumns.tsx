import { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-col justify-center items-center mm:mx-3">
    <div className="w-36 ss:w-44 mm:w-52 m-2">{props.logo}</div>
    <nav>
      <ul className="navbar flex items-center font-medium text-xl text-gray-500">
        {props.children}
      </ul>
    </nav>
    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
