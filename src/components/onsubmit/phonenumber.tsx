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
