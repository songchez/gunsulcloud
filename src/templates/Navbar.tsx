import Link from 'next/link';
import { useRouter } from 'next/router';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

export default function Navbar() {
  const router = useRouter();
  return (
    <Section yPadding="py-3">
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="/">
            <a
              className={
                router.pathname === '/' ? 'text-xl text-orange-400' : ''
              }
            >
              홈
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={
                router.pathname === '/about' ? 'text-xl text-orange-400' : ''
              }
            >
              About
            </a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  );
}
