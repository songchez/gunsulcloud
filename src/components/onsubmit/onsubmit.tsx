import { CircularProgress } from '@mui/material';

interface Props {
  theCompany: DiagData;
}
export default function OnSubmit(theCompany: Props) {
  console.log(theCompany);
  return (
    <div className="mt-20 mx-10">
      <CircularProgress />
    </div>
  );
}
