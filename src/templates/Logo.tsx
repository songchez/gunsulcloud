import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <img
        src={`${router.basePath}${AppConfig.logo}`}
        alt="navlogo"
        className="px-2 w-28"
      ></img>
    </div>
  );
};

export { Logo };
