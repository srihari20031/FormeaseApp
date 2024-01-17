import DetailedInfo from "../components/DetailedInfo/DetailedInfo";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const ExamDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="examInfo">
        <DetailedInfo />
      </div>

      <Footer />
    </div>
  );
};

export default ExamDetails;
