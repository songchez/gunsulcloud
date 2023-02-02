import { Fragment, useState } from 'react';

import { TextField } from '@mui/material';

import { Button } from '../button/Button';
import { BtngropCustom } from '../components/buttongrop';
import MultipleSelectChip from '../components/multipleSelectChip';
import SelectTextFields from '../components/selecttext';
import GroupedSelect2 from '../components/selecttext_2';

export default function Diagnosis() {
  const [theCompany, setTheCompany] = useState({
    회사명: 'non',
    자본금: 'non',
    사무실: 'non',
    기술인력: [0, 0, 0, 0],
    보유면허: ['non', 'non'],
    등록하고싶은면허: 'non',
  });

  const inputChangeHandler = (event: { target: { value: string } }) => {
    setTheCompany((prevState) => {
      return { ...prevState, 회사명: event.target.value };
    });
    console.log(theCompany);
  };

  return (
    <div className="flex justify-center p-4 bg-primary-100 sm:m-4 rounded-lg">
      <div className="px-4 flex flex-col justify-center gap-8 w-screen max-w-xl">
        <div className="text-2xl font-semibold">
          <div className="text-primary-500 text-left m-3 text-3xl font-bold">
            AI건설업 기업진단
          </div>
          <div className=" bg-primary-500 w-full h-px "></div>
        </div>
        <div className="mx-3">
          다음 사항들을 빠짐없이 입력해주세요. 정확히 입력하실수록 더 확실한
          분석이 가능해집니다.
        </div>
        {/* 값 받아오기 */}
        <div className=" flex flex-col justify-center ">
          <TextField
            id="bname"
            label="회사명"
            variant="outlined"
            onChange={inputChangeHandler}
          ></TextField>
        </div>

        <GroupedSelect2
          subject="보유하고있는 자본금"
          devalue="1억5천"
          menuitem={[
            '5천 이하',
            '5천',
            '1억5천',
            '3억5천',
            '5억',
            '7억',
            '7억 이상',
          ]}
        />
        <GroupedSelect2
          subject="보유하고있는 사무실"
          devalue="미보유"
          menuitem={['미보유', '5평', '10평', '10평 이상']}
        />

        <div className="flex flex-col justify-left gap-4 text-lg">
          <Fragment>기술인력 (해당 위치를 누르면 숫자가 증가합니다.)</Fragment>
          <BtngropCustom />
        </div>

        <div className=" mt-2 text-lg">
          보유하고 있는 면허
          {/* 반응형 움직임으로 밑으로 들어감 */}
          <div className="mm:flex flex-col">
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
        <div>
          <h2 className="text-lg mm:text-2xl text-primary-400 mb-2">
            등록하고 싶은 면허
          </h2>
          <div className="border-2 border-primary-400 shadow-lg">
            <div className="flex justify-center">
              <SelectTextFields />
            </div>
          </div>
        </div>

        <div className="flex justify-center m-5">
          <Button xl={true}>제출</Button>
        </div>
      </div>
    </div>
  );
}
