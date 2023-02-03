import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="잠깐!"
      subtitle="전문가에게 더 상세한 진단을 받아보세요"
      button={
        <Link href="/">
          <a>
            <Button text="신청하기" />
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
