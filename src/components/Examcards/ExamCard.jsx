import "./examcard.css";
import { motion } from "framer-motion";
import { FaRegBookmark } from "react-icons/fa6";
import { IoIosPeople, IoIosArrowForward } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const ExamCard = (props) => {

  
  return (
    <motion.div className="exam outer-carousel">
      <motion.div className="item">
        <div className="item-div">
          <div className="exam-name">
            <div className="inner-div">
              <div className="image-div">
                <img src={props.src} alt={props.alt} className="exam-images" />
              </div>
              <div>
                <h5>{props.examName}</h5>
                <p>{props.examOrganisation}</p>
              </div>
            </div>
            <div>
              <FaRegBookmark className="bookmark" />
            </div>
          </div>
          <hr className="line" />
          <div className="exam-fees">
            <div className="details">
              <IoIosPeople className="icons" />
              <p>{props.totalStudents}</p>
            </div>
            <div className="details">
              <IoWallet className="icons" />
              <p>{props.examFees}</p>
            </div>
            <div className="categories">
              {props.categories.map(function (category, index) {
                return <p key={index}> {category} </p>;
              })}
            </div>
            <div className="viewDetails">
              <Link to={`/exam/${props.id}`} className="link">
                View details
              </Link>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

ExamCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  examName: PropTypes.string,
  examOrganisation: PropTypes.string,
  totalStudents: PropTypes.string,
  examFees: PropTypes.string,
  categories: PropTypes.array,
  id: PropTypes.string,
};
export default ExamCard;
