import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { PhoneBanner } from '../cta/PhoneBanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="잠깐!"
      subtitle="전문가에게 더 상세한 진단을 받아보세요"
      button={
        <Link href="http://pf.kakao.com/_atExexj/chat">
          <a>
            <Button text="신청하기" />
          </a>
        </Link>
      }
    />
    <br></br>
    <PhoneBanner title="고객상담센터" subtitle="Customer Service" />
  </Section>
);

export { Banner };
