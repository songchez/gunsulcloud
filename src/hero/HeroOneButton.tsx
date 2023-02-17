import { ReactNode } from 'react';

import { useRouter } from 'next/router';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const router = useRouter();
  return (
    <header className="text-center">
      <h1 className="text-3xl sx:text-4xl ss:text-5xl mg:text-9xl text-gray-800 font-bold my-5">
        {props.title}
      </h1>
      <div className="flex justify-center">
        <img
          src={`${router.basePath}/assets/images/hero_img.png`}
          alt="herologo"
          className="w-full max-w-xl px-5"
        ></img>
      </div>
      <div className="text-2xl mt-4 mb-16 text-gray-800">
        {props.description}
      </div>

      {props.button}
    </header>
  );
};

export { HeroOneButton };
