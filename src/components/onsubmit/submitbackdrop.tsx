import React from 'react';

import { Backdrop } from '@mui/material';

import { Button } from '../../button/Button';
import OnSubmit from './onsubmit';
import PhoneNumberInput from './phonenumber';

interface Props {
  theCompany: DiagData;
}
export default function SubmitBackdrop({ theCompany }: Props) {
  const [open, setOpen] = React.useState(false);
  const [Submit, setSubmit] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    setSubmit(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const OnSubmithandler = () => {
    setSubmit(!Submit);
  };
  const onSubmit = () => {
    OnSubmithandler();
    // diagData(theCompany); // firebase에 전송 TODO:나중에 다시활성화
  };

  return (
    <div>
      <Button text="제출" onClick={handleToggle} />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onDoubleClick={handleClose}
      >
        {Submit ? (
          <OnSubmit theCompany={theCompany}></OnSubmit>
        ) : (
          <div className="container p-7 flex flex-col gap-20 items-center">
            <PhoneNumberInput />
            <Button text="결과보기" onClick={onSubmit} />
          </div>
        )}
      </Backdrop>
    </div>
  );
}
