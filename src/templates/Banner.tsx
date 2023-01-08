import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="안녕하세요"
      subtitle="시작하세요 당신의 새로운 삶"
      button={
        <Link href="https://byline.network/wp-content/uploads/2018/05/cat.png">
          <a>
            <Button>시작하기</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
