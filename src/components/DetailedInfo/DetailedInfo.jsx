import "./detailedinfo.css";
import { FaRegBookmark } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { FaArrowLeftLong, FaCalendarDays } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { MoreInfo } from "../../ExamData/detailedData";

const DetailedInfo = () => {
  const { examID } = useParams();
  const thisExam = MoreInfo.find((exam) => exam.id === examID);

  return (
    <div className="detailedInfo">
      <div className="back">
        <FaArrowLeftLong />
        <h4>Back</h4>
      </div>
      <div className="grid">
        <div className="first-grid">
          <div className="top-div">
            <div className="inner-div">
              <img src={thisExam.src} alt={thisExam.altText} />
              <div>
                <h5>{thisExam.examName}</h5>
                <p style={{ color: "#246bfd" }}>{thisExam.examOrganisation}</p>
              </div>
            </div>
            <div className="icons">
              <FaRegBookmark style={{ fill: "rgba(0, 50, 215, 0.749)" }} />
              <IoMdShare style={{ fill: "#030302" }} />
            </div>
          </div>
          <div className="scheduled">
            <FaCalendarDays className="schedule-icons" />
            <p>{thisExam.examDate}</p>
          </div>
          <div className="scheduled">
            <IoMdPeople className="schedule-icons" />
            <p>{thisExam.totalApplicants}</p>
          </div>

          <hr />
          <div className="bottom-div">
            <p style={{ color: "#adadad", fontSize: "14px" }}>
              {thisExam.deadLine}
            </p>
            <button>Apply now</button>
          </div>
        </div>
        <div className="second-grid">
          <h3>Exams you might be interested in</h3>
        </div>
        <div className="third-grid">
          <div className="description">
            <h4>Exam Description</h4>
            <ul>
              {thisExam.description.map(function (desc, index) {
                <li key={index}>{desc}</li>;
              })}
            </ul>
          </div>
          <div className="eligibility">
            <h4>Eligibility</h4>
            <ul>
              {thisExam.eligibility.map(function (eligible, index) {
                <li key={index}>{eligible}</li>;
              })}
            </ul>
          </div>
          <div className="importantDetails">
            <h4>Important Details</h4>
            <ul>
              {thisExam.importantDetails.map(function (details, index) {
                <li key={index}>{details}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailedInfo.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  altText: PropTypes.string,
  examName: PropTypes.string,
  examOrganisation: PropTypes.string,
  deadLine: PropTypes.string,
  examDate: PropTypes.string,
  totalApplicants: PropTypes.string,
};
export default DetailedInfo;
