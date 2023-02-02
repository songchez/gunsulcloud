import { Button } from '@mui/material';
import Link from 'next/link';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="잠깐!"
      subtitle="전문가에게 더 상세한 진단을 받아보세요"
      button={
        <Link href="https://byline.network/wp-content/uploads/2018/05/cat.png">
          <a>
            <Button>신청하기</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
