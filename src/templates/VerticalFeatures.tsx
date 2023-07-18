import Image from "next/image";

import { Section } from "../components/layout/Section";
import VerticalFeatureRow from "@/components/feature/VerticalFeatureRow";

const VerticalFeatures = () => {
  return (
    <Section
      title="건설클라우드"
      description="전문가에게 맡기는 건설업무, 여러분의 고민을 해결해 드립니다."
    >
      <div className="flex justify-center">
        <Image
          src="/assets/images/hero_img.png"
          alt="herologo"
          className="max-w-xl px-5"
          width={576}
          height={400}
        />
      </div>
      <VerticalFeatureRow
        title="AI 기업진단"
        description="'지금 우리 회사의 상태가 어떨까? 자본금, 기술인력, 공제조합 출자금, 사무실 등등......... 면허등록할 때 확인해야 할 항목이 너무 많다. 한눈에 볼 수 없을까?' AI 기업진단으로 한 번에 확인해보세요! "
        image="/assets/images/feature2.svg"
        imageAlt="두번째 feature alt text"
        reverse="flex-row"
      />
      <VerticalFeatureRow
        title="고객맞춤서비스"
        description="법인설립, 기업진단, 양수양도... 건설회사를 운영하기 위해 해야하는 많은 것들, 건설클라우드에서는 더 이상 어렵지 않습니다. 빠르게 변화하는 세상에서 살아남기란 어렵습니다. 건설클라우드에서는 귀사에게 필요한 요소를 맞춤형으로 제공합니다."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
        reverse="flex-row-reverse"
      />
    </Section>
  );
};

export { VerticalFeatures };
