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
            <a>홈</a>
          </Link>
        </li>
        <li>
          <Link href="/mappin">
            <a>지도보기</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'신규건설업등록, 이제 고민하지마세요\n'}
            <span className="text-primary-500">새한건설정보에게 맡기세요</span>
          </>
        }
        description={`신규건설업 등록, 아직도 고민 중이신가요? \n 여러분도 할 수 있습니다.`}
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
