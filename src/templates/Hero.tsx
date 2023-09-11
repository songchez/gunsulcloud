import { Background } from "../components/background/Background";
import { HeroOneButton } from "../components/hero/HeroOneButton";

const Hero = () => (
  <Background>
    <HeroOneButton
      title={
        <>
          {"건설회사업무,"}
          <br />
          <span>고민하지 말고</span>
          <br />
          <span className="text-primary">건설클라우드</span>
          하세요
          <br />
          <span className="p-10">031-941-5592</span>
        </>
      }
      description={`언제나 건설클라우드를 사랑해 주셔서 감사합니다.`}
      button={
        <a href="http://pf.kakao.com/_xnxkBexj/chat">
          <button className="btn glass">건설업등록신청</button>
        </a>
      }
    />
  </Background>
);

export { Hero };
