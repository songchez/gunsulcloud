import { setDoc, collection, doc } from 'firebase/firestore/lite';

import db from '../utils/firebase';

// 건설 데이터 추가
interface DiagDataProps {
  회사명: string;
  자본금: string;
  기술인력: {
    기능사: number;
    초급: number;
    중급: number;
    고급: number;
  };
  사무실: string;
  종합보유면허: string[];
  전문보유면허: string[];
  등록하고싶은면허: string;
}
export default function diagData(diagDataProps: DiagDataProps) {
  const diagdataRef = doc(collection(db, 'User'));
  setDoc(diagdataRef, diagDataProps);

  console.log(diagDataProps, '전송완료'); // data확인
}
