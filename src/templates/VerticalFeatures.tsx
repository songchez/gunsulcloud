import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="건설왕"
    description="전문가에게 맡기는 건설업 등록, 여러분의 고민을 해결해 드립니다."
  >
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="알고리즘 기업진단"
      description="'지금 우리 회사의 상태가 어떨까? 자본금, 기술인력, 공제조합 출자금, 사무실 등등......... 면허등록할 때 확인해야 할 항목이 너무 많다. 한눈에 볼 수 없을까?' 알고리즘 기업진단으로 한 번에 확인해보세요! "
      image="/assets/images/feature2.svg"
      imageAlt="두번째 feature alt text"
      reverse={true}
    />
  </Section>
);

export { VerticalFeatures };
