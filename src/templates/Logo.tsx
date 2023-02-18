import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const Logo = () => {
  return (
    <div className="flex justify-center">
      <Link href={'/'}>
        <a>
          <img src={AppConfig.logo} alt="logo"></img>
        </a>
      </Link>
    </div>
  );
};

export { Logo };
