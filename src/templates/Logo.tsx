import { AppConfig } from '../utils/AppConfig';

const Logo = () => {
  return (
    <span className="text-primary-400 inline-flex items-center font-bold text-2xl sm:text-4xl mm:text-6xl">
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
