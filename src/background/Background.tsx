import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div className="bg-cover bg-center bg-no-repeat">
    {props.children}
    <style jsx>{`
      div {
        background-image: url('./assets/images/background.jpg');
        background-color: rgba(255, 255, 255, 0.4);
        background-blend-mode: lighten;
      }
    `}</style>
  </div>
);

export { Background };
