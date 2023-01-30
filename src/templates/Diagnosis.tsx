import { Fragment } from 'react';

import { Button, TextField } from '@mui/material';

import { BtngropCustom } from '../components/buttongrop';
import MultipleSelectChip from '../components/multipleSelectChip';
import SelectTextFields from '../components/selecttext';
import GroupedSelect2 from '../components/selecttext_2';

export default function Diagnosis() {
  return (
    <div className="flex justify-center p-4 bg-primary-100 m-4 rounded-lg">
      <div className="flex flex-col justify-center gap-10 w-screen max-w-xl">
        <div className="text-2xl font-semibold">
          <div className="text-primary-500 text-left m-3 text-3xl font-bold ">
            AI건설업 기업진단
          </div>
          <div className="bg-primary-500 w-full h-px mx-2"></div>
        </div>
        <div>
          다음 사항들을 빠짐없이 입력해주세요. 정확히 입력하실수록 더 확실한
          분석이 가능해집니다.
        </div>
        <div className="mx-3 w-full">
          <TextField id="bname" label="회사명" variant="outlined"></TextField>
        </div>
        <div className="flex justify-left">
          <GroupedSelect2
            subject="자본금"
            devalue="1억5천"
            menuitem={['5천', '1억5천', '3억5천', '5억', '7억', '7억 이상']}
          />

          <GroupedSelect2
            subject="사무실"
            devalue="미보유"
            menuitem={['미보유', '5평', '10평', '10평 이상']}
          />
        </div>

        <div className="mx-3 flex flex-col justify-left gap-4">
          <Fragment>기술인력 (해당 위치를 누르면 숫자가 증가합니다.)</Fragment>
          <BtngropCustom />
        </div>

        <div className="mx-2 mt-2">
          보유하고 있는 면허
          <div className="flex justify-left ">
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
        </div>

        <div className="flex justify-center border-2 border-primary-400 shadow-lg">
          <div>
            <h2 className="mx-2 mb-2 text-3xl text-center text-primary-400">
              등록하고 싶은 면허
            </h2>
            <div className="flex justify-center">
              <SelectTextFields />
            </div>
          </div>
        </div>

        <div className="flex justify-center m-5">
          <Button variant="outlined" size="large">
            제출
          </Button>
        </div>
      </div>
    </div>
  );
}
