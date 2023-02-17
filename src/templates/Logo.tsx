import Image from 'next/image';
import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const Logo = () => {
  return (
    <div className="flex justify-center">
      <Link href={'/'}>
        <a>
          <Image
            width={512}
            height={167}
            src={AppConfig.logo}
            alt="logo"
          ></Image>
        </a>
      </Link>
    </div>
  );
};

export { Logo };
