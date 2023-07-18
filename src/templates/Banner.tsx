import { Button } from '../components/button/Button';
import { CTABanner } from '../components/cta/CTABanner';
import { PhoneBanner } from '../components/cta/PhoneBanner';
import { Section } from '../components/layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="잠깐!"
      subtitle="전문가에게 더 상세한 진단을 받아보세요"
      button={
        <a href="http://pf.kakao.com/_xnxkBexj/chat">
          <Button text="신청하기" />
        </a>
      }
    />
    <br></br>
    <PhoneBanner title="고객상담센터" subtitle="Customer Service" />
  </Section>
);

export { Banner };
