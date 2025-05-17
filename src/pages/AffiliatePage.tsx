
import Navbar from '@/components/Navbar';
import Affiliate from '@/components/Affiliate';
import Footer from '@/components/Footer';

const AffiliatePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="py-16 bg-hustler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-hustler-black">Affiliate Program</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-hustler-darkgray">
              Join our partner network and earn commissions by referring students to our courses.
            </p>
          </div>
        </div>
      </div>
      <Affiliate />
      <Footer />
    </div>
  );
};

export default AffiliatePage;
