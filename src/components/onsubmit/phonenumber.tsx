import { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const onChangeHandler = (phone: string) => {
    setPhoneNumber(phone);
  };

  return (
    <div className="text-black">
      <h1 className="text-xl sx:text-2xl ss:text-3xl text-gray-100 mb-2">
        결과를 확인하기 위해<br></br>전화번호를 입력해주세요
      </h1>
      <PhoneInput
        disableCountryCode={true}
        disableDropdown={true}
        placeholder="010-1234-5678"
        country={'kr'}
        value={phoneNumber}
        onChange={onChangeHandler}
      />
    </div>
  );
}
