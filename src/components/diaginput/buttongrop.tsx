import { useState } from 'react';

interface Item {
  onchange: (event: InputChangeEvent) => void;
  // props로 전달할때 객체 파라미터를 받아야 할때 타입을 이런식으로 하면 된다. 구조형타입을 만들어 줄수도 있다.
}
export default function BtngropCustom(items: Item) {
  const [Wnumber, setWnumber] = useState({
    기능사: 0,
    초급: 0,
    중급: 0,
    고급: 0,
  });
  // TODO: Wnumber 데이터 전달!
  type Subject = '기능사' | '초급' | '중급' | '고급';

  const Addnumber = (subject: Subject) => {
    setWnumber((prevState) => {
      // for useState asynchronous issue. 해결
      const updatedState = {
        ...prevState,
        [subject]: prevState[subject] + 1,
      };

      items.onchange({
        target: { value: updatedState, name: '기술인력' },
      });

      return updatedState;
    });
  };

  interface Props {
    subject: Subject;
    wnumber: number;
  }

  const BtnCustom = (props: Props) => {
    return (
      <button
        onClick={() => {
          Addnumber(props.subject);
        }}
        className='btn'
      >
        <div className="flex flex-col items-center">
          <p className="p-1 whitespace-nowrap text-center font-bold text-xs sx:text-base">
            {props.subject}
          </p>
          <div className="border-2 border-primary-500 w-7 h-7 text-primary-500 font-bold">
            {props.wnumber}
          </div>
        </div>
      </button>
    );
  };

  const ResetNumber = () => {
    setWnumber({
      기능사: 0,
      초급: 0,
      중급: 0,
      고급: 0,
    });
  };

  return (
    <div>
      <BtnCustom subject="기능사" wnumber={Wnumber.기능사} />
      <BtnCustom subject="초급" wnumber={Wnumber.초급} />
      <BtnCustom subject="중급" wnumber={Wnumber.중급} />
      <BtnCustom subject="고급" wnumber={Wnumber.고급} />
      <div
        className='btn'
        onClick={() => {
          ResetNumber();
        }}
      >
        <span className="whitespace-nowrap font-bold">초기화</span>
      </div>
    </div>
  );
}
