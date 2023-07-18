import { Footer } from './Footer';
import Navbar from './Navbar';
import { Meta } from '../components/layout/Meta';
import { AppConfig } from '../utils/AppConfig';

function Base({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased text-gray-800 overflow-x-hidden">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export { Base };
