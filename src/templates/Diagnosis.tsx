import { Button, TextField } from '@mui/material';

import MultipleSelectChip from './tests';

export default function Diagnosis() {
  return (
    <div className="flex justify-center p-4 bg-primary-100 m-4 rounded-lg">
      <div className="flex flex-col justify-center gap-4 w-screen max-w-xl">
        <div className="text-2xl font-semibold">
          <div className="text-primary-500">기업진단</div>
        </div>
        <MultipleSelectChip></MultipleSelectChip>
        <TextField id="sangho" label="상호명" variant="outlined"></TextField>
        <TextField id="jabongum" label="자본금" variant="outlined"></TextField>
        <TextField id="dugazza" label="상태_1" variant="outlined"></TextField>
        <TextField id="dugazza" label="기술인력" variant="outlined"></TextField>
        <TextField id="dugazza" label="상태_2" variant="outlined"></TextField>
        <div className="flex justify-center m-5">
          <Button variant="outlined" size="large">
            기업진단받기
          </Button>
        </div>
      </div>
    </div>
  );
}
