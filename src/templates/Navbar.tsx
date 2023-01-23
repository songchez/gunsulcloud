import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

export default function Navbar() {
  return (
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>홈</a>
          </Link>
        </li>
        <li>
          <Link href="/mappin">
            <a>로그인</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  );
}
