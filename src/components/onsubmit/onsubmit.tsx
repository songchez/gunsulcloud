import { Button } from '../../button/Button';

interface Props {
  theCompany: DiagData;
}
export default function OnSubmit({ theCompany }: Props) {
  return (
    <div className=" mx-10 max-w-screen-mm">
      {/* <CircularProgress /> */}
      <div>
        <span className="text-2xl sx:text-3xl ss:text-4xl">
          분석결과.......
          <br />
          <span className="text-primary-200">{theCompany.회사명}</span>의<br />
          <span className="text-primary-200">
            {theCompany.등록하고싶은면허}면허
          </span>
          등록은
          <br />
          <span className="text-red-400">89%</span>확률로 진행가능합니다.
        </span>
        <div className="mt-4">
          <Button text="더알아보기"></Button>
        </div>
      </div>
    </div>
  );
}
