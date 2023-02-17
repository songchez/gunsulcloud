import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div className="bg-cover bg-center mm:bg-fixed bg-no-repeat">
    {props.children}
    <style jsx>{`
      div {
        background-image: url('./assets/images/background.jpg');
        background-color: rgba(255, 255, 255, 0.5);
        background-blend-mode: color;
      }
    `}</style>
  </div>
);

export { Background };
