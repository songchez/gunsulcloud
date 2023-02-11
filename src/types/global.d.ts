export {};

declare global {
  interface DiagData {
    전화번호?: string;
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
  interface InputChangeEvent {
    target: {
      value: string | any;
      name: string;
    };
  }
  interface Window {
    Kakao: any;
  }
  type SetTheCompany = Dispatch<
    SetStateAction<{
      전화번호: string;
      회사명: string;
      자본금: string;
      기술인력: { 기능사: number; 초급: number; 중급: number; 고급: number };
      사무실: string;
      종합보유면허: never[];
      전문보유면허: never[];
      등록하고싶은면허: string;
    }>
  >;
}
