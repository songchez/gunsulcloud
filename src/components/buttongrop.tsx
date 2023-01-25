import { useState } from 'react';

import { ButtonGroup, Button } from '@mui/material';

interface Props {
  addnumber: Function;
  index: number;
  subject: string;
  wnumber: number;
}

const BtnCustom = (props: Props) => {
  return (
    <Button
      onClick={() => {
        props.addnumber(props.index);
      }}
      size="large"
    >
      <div className="flex flex-col items-center">
        <p className="text-center font-bold">{props.subject}</p>
        <div className="mr-1 border-2 border-primary-500 w-7 h-7 text-primary-500 font-bold">
          {props.wnumber}
        </div>
      </div>
    </Button>
  );
};

export const BtngropCustom = () => {
  const [Wnumber1, setWnumber1] = useState(0);
  const [Wnumber2, setWnumber2] = useState(0);
  const [Wnumber3, setWnumber3] = useState(0);
  const [Wnumber4, setWnumber4] = useState(0);

  const Addnumber = (index: number) => {
    switch (index) {
      case 0:
        setWnumber1(Wnumber1 + 1);
        break;
      case 1:
        setWnumber2(Wnumber2 + 1);
        break;
      case 2:
        setWnumber3(Wnumber3 + 1);
        break;
      case 3:
        setWnumber4(Wnumber4 + 1);
        break;
      default:
        break;
    }
  };
  const ResetNumber = () => {
    setWnumber1(0);
    setWnumber2(0);
    setWnumber3(0);
    setWnumber4(0);
  };
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <BtnCustom
        addnumber={Addnumber}
        index={0}
        subject="기능사"
        wnumber={Wnumber1}
      />
      <BtnCustom
        addnumber={Addnumber}
        index={1}
        subject="초급"
        wnumber={Wnumber2}
      />
      <BtnCustom
        addnumber={Addnumber}
        index={2}
        subject="중급"
        wnumber={Wnumber3}
      />
      <BtnCustom
        addnumber={Addnumber}
        index={3}
        subject="고급"
        wnumber={Wnumber4}
      />
      <Button
        variant="outlined"
        onClick={() => {
          ResetNumber();
        }}
      >
        초기화
      </Button>
    </ButtonGroup>
  );
};
