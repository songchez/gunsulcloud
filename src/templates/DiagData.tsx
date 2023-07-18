import { setDoc, collection, doc } from "firebase/firestore/lite";

import db from "../utils/firebase";

// 건설 데이터 추가
export default function diagData(diagDataProps: DiagData) {
  const diagdataRef = doc(collection(db, "User"));
  setDoc(diagdataRef, diagDataProps);

  // eslint-disable-next-line no-console
  console.log(diagDataProps, "전송완료"); // data확인
}
