import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image src="/logo1234.png" alt="logo" width={75} height={28}></Image>
    </div>
  );
};

export { Logo };
