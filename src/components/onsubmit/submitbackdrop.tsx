'use client';

import { useState } from 'react';

import Script from 'next/script';

import OnSubmit from './onsubmit';
import diagData from '../../templates/DiagData';
import { Button } from '../button/Button';

interface Props {
  theCompany: DiagData;
  setTheCompany: SetTheCompany;
}

// 나가면 전화번호 없이 전송. 입력하면 카톡으로 전송
export default function SubmitBackdrop({ theCompany, setTheCompany }: Props) {
  const [open, setOpen] = useState(false);
  const [Submit, setSubmit] = useState(false);
  const [Prograss, setPrograss] = useState(true);

  function Kakao() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  }

  const handleClose = () => {
    // 닫으면 초기화
    setOpen(false);
    setTimeout(() => setSubmit(false), 250);
    setPrograss(true);
    // diagData(theCompany); // 전화번호없이전송 TODO:나중에 다시활성화
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const OnSubmithandler = () => {
    setSubmit(!Submit);
  };
  const onSubmit = () => {
    OnSubmithandler();
    diagData(theCompany); // 전화번호넣고 전송
    setTimeout(() => setPrograss(!Prograss), 500);
    setTimeout(() => handleClose(), 3000);
    // kakao channel 추가
    window.Kakao.Channel.addChannel({
      channelPublicId: '_xnxkBexj',
    });
  };

  return (
    <div>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
        integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
        crossOrigin="anonymous"
        onLoad={Kakao}
      ></Script>
      <Button text="제출" onClick={handleToggle} />
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onDoubleClick={handleClose}
      > */}
        {Submit ? (
          <OnSubmit Prograss={Prograss}></OnSubmit>
        ) : (
          <div className="container p-7 flex flex-col gap-7 items-center">
            <div className="sx:mx-1 sm:mx-2">
              <span className="text-xl sx:text-2xl ss:text-3xl text-gray-100 mb-2">
                <span className="text-primary-400">{theCompany.회사명}</span>의
                <br />
                <span className="text-primary-400">
                  {theCompany.등록하고싶은면허}면허
                </span>
                등록의 <br />
                분석결과를 확인하기 위해
                <br />
                연락처를 입력해주세요
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <Button
                text="카카오 채널추가하고 분석결과보기"
                onClick={onSubmit}
              />
              <p className="text-center">결과는 카톡으로 전송됩니다.</p>
            </div>
          </div>
        )}
      {/* </Backdrop> */}
    </div>
  );
}
