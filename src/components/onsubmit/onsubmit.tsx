import { Button } from '../../button/Button';

interface Props {
  theCompany: DiagData;
}
export default function OnSubmit({ theCompany }: Props) {
  return (
    <div className="mt-20 mx-10 max-w-screen-mm">
      {/* <CircularProgress /> */}
      <div>
        <span className="text-3xl">{`분석결과 ${theCompany.회사명}의 ${theCompany.등록하고싶은면허}면허등록은 89% 확률로 진행가능합니다.`}</span>
        <div>
          <Button text="더알아보기"></Button>
        </div>
      </div>
    </div>
  );
}
