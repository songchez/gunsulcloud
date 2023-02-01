import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div className="dee bg-cover bg-center bg-no-repeat bg-black">
    {props.children}
    <style global jsx>{`
      .dee {
        background-image: url('./assets/images/background.jpg');
      }
    `}</style>
  </div>
);

export { Background };
