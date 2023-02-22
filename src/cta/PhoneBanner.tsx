import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';

type PhoneBannerProps = {
  title: string;
  subtitle: string;
};

const PhoneBanner = (props: PhoneBannerProps) => (
  <div className="text-center flex flex-col p-4 ss:text-left ss:flex-row ss:items-center ss:justify-between ss:p-12 bg-gray-100 rounded-md">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>
    <div className="ss:text-2xl mt-2 ss:mt-0">
      <div className="text-primary-800">
        <CallIcon /> TEL. 031-246-2343
      </div>
      <div className="text-primary-700">
        <FaxIcon /> FAX. 031-246-2343
      </div>
      <div className="text-primary-500">
        <EmailIcon /> E-mail. sunjinju72@naver.com
      </div>
    </div>
  </div>
);

export { PhoneBanner };
