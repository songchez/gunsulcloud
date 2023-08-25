import Navbar from "./Navbar";
import Footer from "./Footer";

function Base({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased text-gray-800 overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export { Base };
