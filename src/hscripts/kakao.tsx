/* eslint-disable no-script-url */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-sync-scripts */

export const KakaoBusiness = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `        function addChannel() {
    Kakao.Channel.addChannel({
      channelPublicId: '_ZeUTxl',
    });
  }`,
        }}
      />
      <script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
        integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
        crossOrigin="anonymous"
      ></script>
      <script>Kakao.init('c089c8172def97eb00c07217cae17495');</script>
      <a id="add-channel-button" href="javascript:addChannel()">
        <img
          src="/tool/resource/static/img/button/channel/add/channel_add_small.png"
          alt="카카오톡 채널 추가하기 버튼"
        />
      </a>
    </>
  );
};
