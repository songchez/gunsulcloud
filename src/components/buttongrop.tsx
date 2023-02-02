import { useState } from 'react';

import { ButtonGroup, Button } from '@mui/material';

export const BtngropCustom = () => {
  const [Wnumber, setWnumber] = useState({
    기능사: 0,
    초급: 0,
    중급: 0,
    고급: 0,
  });
  type Subject = '기능사' | '초급' | '중급' | '고급';

  const Addnumber = (subject: Subject) => {
    setWnumber((prevState) => {
      return {
        ...prevState,
        [subject]: prevState[subject] + 1,
      };
    });
  };
  interface Props {
    subject: Subject;
    wnumber: number;
  }

  const BtnCustom = (props: Props) => {
    return (
      <Button
        onClick={() => {
          Addnumber(props.subject);
        }}
        size="large"
      >
        <div className="flex flex-col items-center">
          <p className="p-1 whitespace-nowrap text-center font-bold text-xs sm:text-base">
            {props.subject}
          </p>
          <div className="border-2 border-primary-500 w-7 h-7 text-primary-500 font-bold">
            {props.wnumber}
          </div>
        </div>
      </Button>
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
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <BtnCustom subject="기능사" wnumber={Wnumber.기능사} />
      <BtnCustom subject="초급" wnumber={Wnumber.초급} />
      <BtnCustom subject="중급" wnumber={Wnumber.중급} />
      <BtnCustom subject="고급" wnumber={Wnumber.고급} />
      <Button
        variant="outlined"
        onClick={() => {
          ResetNumber();
        }}
      >
        <span className="whitespace-nowrap">초기화</span>
      </Button>
    </ButtonGroup>
  );
};
