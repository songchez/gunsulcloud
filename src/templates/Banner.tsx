import { CTABanner } from "../components/cta/CTABanner";
import { PhoneBanner } from "../components/cta/PhoneBanner";
import { Section } from "../components/layout/Section";

const Banner = () => (
  <Section>
    <CTABanner
      title="잠깐!"
      subtitle="전문가에게 더 상세한 진단을 받아보세요"
      button={
        <button className="btn btn-neutral">신청하기</button>
      }
    />
    <br></br>
    <PhoneBanner title="고객상담센터" subtitle="Customer Service" />
  </Section>
);

export { Banner };
