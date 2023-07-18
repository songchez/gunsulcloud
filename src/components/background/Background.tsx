import { ReactNode } from "react";

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div className="bg-[url('/assets/images/background.jpg')] bg-cover bg-center md:bg-fixed bg-no-repeat">
    {props.children}
  </div>
);

export { Background };
