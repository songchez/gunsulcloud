import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>드가자</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>나가자</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'랜딩페이지 샘플\n'}
            <span className="text-primary-500">넥스트+테일윈드</span>
          </>
        }
        description="설명맨"
        button={
          <Link href="/">
            <a>
              <Button xl>버튼</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
