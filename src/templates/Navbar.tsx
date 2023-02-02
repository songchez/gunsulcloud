import Link from 'next/link';
import { useRouter } from 'next/router';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

export default function Navbar() {
  const router = useRouter();
  return (
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a
              className={
                router.pathname === '/' ? 'text-xl text-orange-500' : ''
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
                router.pathname === '/about' ? 'text-xl text-orange-500' : ''
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
