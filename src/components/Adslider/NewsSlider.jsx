import "./newsslider.css";
import GateResults from "../../assets/img/Gateresults.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

// I can make the images slide front and back but as the assignment demo image shows only one ill leave it to that

const NewsSlider = () => {
  return (
    <div>
      <div>
        <div className="image-container">
          <button className="sliders" style={{ left: 0 }}>
            <IoIosArrowBack />
          </button>
          <img src={GateResults} alt="" className="image" />
          <button className="sliders" style={{ right: 0 }}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="title">
        <h4>Recommended Exams</h4>
        <h4>See All</h4>
      </div>
    </div>
  );
};

export default NewsSlider;
