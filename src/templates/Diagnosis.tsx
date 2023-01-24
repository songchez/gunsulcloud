import { Button, TextField } from '@mui/material';

import MultipleSelectChip from '../components/multipleSelectChip';

export default function Diagnosis() {
  return (
    <div className="flex justify-center p-4 bg-primary-100 m-4 rounded-lg">
      <div className="flex flex-col justify-center gap-4 w-screen max-w-xl">
        <div className="text-2xl font-semibold">
          <div className="text-primary-500">기업진단</div>
        </div>
        <TextField id="sangho" label="회사명" variant="outlined"></TextField>

        <h1>보유하고 있는 면허</h1>
        <div className="flex justify-left">
          <MultipleSelectChip
            kind="종합건설업"
            names={['토목', '건축', '토목건축', '산업설비', '조경']}
          ></MultipleSelectChip>
          <MultipleSelectChip
            kind="전문건설업"
            names={[
              '지반조성포장',
              '실내건축',
              '금속창호지붕조립',
              '도장습식방수석공',
              '조경식재시설물',
              '철근콘크리트',
              '구조물해체비계',
              '상하수도설비',
              '철도궤도',
              '철강구조물',
              '수중준설',
              '승강기삭도',
              '기계가스설비',
              '가스난방',
            ]}
          ></MultipleSelectChip>
        </div>

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
