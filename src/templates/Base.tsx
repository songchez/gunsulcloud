import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';

function Base({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {children}
      <Footer />
    </div>
  );
}

export { Base };
