import { CircularProgress } from '@mui/material';

import PhoneNumberInput from '../components/onsubmit/phonenumber';

export default function OnSubmit() {
  // const router = useRouter();
  // const { theCompany } = router.query;
  // const deserializedTheCompany = JSON.parse(theCompany as string);
  return (
    <div className="mt-20 mx-10">
      <PhoneNumberInput></PhoneNumberInput>
      <h1 className="text-7xl"></h1>
      <CircularProgress />
    </div>
  );
}
