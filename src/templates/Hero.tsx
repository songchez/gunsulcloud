import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background>
    <Section yPadding="pt-1 pb-32">
      <HeroOneButton
        title={
          <>
            {'신규건설업등록,'}
            <br></br>
            <span>이제 고민하지마세요</span>
            <br></br>
            <span className="text-primary-400">건설왕에게 맡기세요</span>
          </>
        }
        description={`신규건설업 등록, 아직도 고민 중이신가요? 여러분도 할 수 있습니다.`}
        button={
          <Link href="/">
            <a>
              <Button xl>건설업등록신청</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
