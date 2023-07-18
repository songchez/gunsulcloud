type PhoneBannerProps = {
  title: string;
  subtitle: string;
};

const PhoneBanner = (props: PhoneBannerProps) => (
  <div className="text-center flex flex-col p-4 ss:text-left ss:flex-row ss:items-center ss:justify-between ss:p-12 bg-gray-100 rounded-xl">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>
    <div className="ss:text-lg mt-2 ss:mt-0">
      <div className="text-primary-800">TEL. 031-941-5592</div>
      <div className="text-primary-700">FAX. 031-942-4911</div>
      <div className="text-primary-500">E-mail. sunjinju72@naver.com</div>
    </div>
  </div>
);

export { PhoneBanner };
