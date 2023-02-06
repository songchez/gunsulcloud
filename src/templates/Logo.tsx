import Image from 'next/image';

import logo from '../../public/logo1234.png';

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" width={75} height={28}></Image>
    </div>
  );
};

export { Logo };
