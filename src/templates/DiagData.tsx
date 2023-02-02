import { doc, setDoc } from 'firebase/firestore/lite';

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
  보유면허: string[];
  등록하고싶은면허: string;
}
export default function diagData(diagDataProps: DiagDataProps) {
  console.log(diagDataProps);
  const commentRef = doc(db, 'comments', 'asdasdasd');
  setDoc(commentRef, { merge: true });
}
