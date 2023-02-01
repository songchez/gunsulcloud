import { ReactNode } from 'react';

import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const router = useRouter();
  return (
    <header className="text-center">
      <div className="flex justify-center">
        <img
          src={`${router.basePath}${AppConfig.logo}`}
          alt="bannerlogo"
          className="w-full max-w-xl px-5"
        ></img>
      </div>

      <h1 className="text-3xl sx:text-4xl ss:text-5xl mg:text-9xl text-gray-900 font-bold ">
        {props.title}
      </h1>
      <div className="text-2xl mt-4 mb-16">{props.description}</div>

      {props.button}
    </header>
  );
};

export { HeroOneButton };
