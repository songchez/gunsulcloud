import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div className="bg-cover bg-center bg-fixed bg-no-repeat">
    {props.children}
    <style jsx>{`
      div {
        background-image: url('./assets/images/background.jpg');
        background-color: rgba(25, 25, 25, 0.5);
        background-blend-mode: darken;
      }
    `}</style>
  </div>
);

export { Background };
