import { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const onChangeHandler = (phone: string) => {
    setPhoneNumber(phone);
  };

  return (
    <PhoneInput country={'kr'} value={phoneNumber} onChange={onChangeHandler} />
  );
}
