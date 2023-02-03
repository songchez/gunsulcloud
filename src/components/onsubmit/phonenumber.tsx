import { useState } from 'react';

import PhoneInput from 'react-phone-number-input/input';

export default function PhoneNumberInput() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState();

  const onchangeHandler = (e: any) => {
    if (String(e).length < 15) {
      setValue(e);
    } else {
      console.log(String(e));
      console.log(value);
    }
  };
  return <PhoneInput country="KR" value={value} onChange={onchangeHandler} />;
}
