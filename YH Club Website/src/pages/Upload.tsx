
import Navbar from '@/components/Navbar';
import UploadLesson from '@/components/UploadLesson';
import Footer from '@/components/Footer';

const Upload = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <UploadLesson />
      <Footer />
    </div>
  );
};

export default Upload;
