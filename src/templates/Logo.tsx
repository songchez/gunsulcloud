import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

// 로고프롭스의 타입을 설정해 줄 수 있다. 맨마지막에 빈공간 있으면 오류뜬다. 주석은 무조건 한칸 띄어야 써진다. 뭐지 여긴또아니네

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
