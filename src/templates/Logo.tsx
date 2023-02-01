import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

// 로고프롭스의 타입을 설정해 줄 수 있다. 맨마지막에 빈공간 있으면 오류뜬다.

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-primary-600 inline-flex items-center ${fontStyle}`}>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
