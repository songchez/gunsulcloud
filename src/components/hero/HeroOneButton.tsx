import { ReactNode } from "react";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  return (
    <div className="w-full text-center backdrop-brightness-50 h-screen">
      <h1 className="text-5xl sm:text-5xl md:text-6xl text-neutral-content font-bold pt-32">
        {props.title}
      </h1>
      <div className="text-neutral-content text-lg md:text-2xl mt-4 mb-16">
        {props.description}
      </div>
      {props.button}
    </div>
  );
};

export { HeroOneButton };
