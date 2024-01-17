import { motion } from "framer-motion";
import NewsSlider from "../components/Adslider/NewsSlider";
import AllExams from "../components/AllExams/AllExams";
import ExamCard from "../components/Examcards/ExamCard";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Exams, Exams2 } from "../ExamData/data";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [totalExams, setTotalExams] = useState("0");
  const carousel = useRef();
  useEffect(() => {
    setTotalExams(Exams.length * 377 - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <Navbar />
      <NewsSlider />
      <motion.div ref={carousel} className="Examcard">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -totalExams }}
          className="inner-examcard"
        >
          {Exams.map((exam, index) => (
            <ExamCard key={index} {...exam} />
          ))}
        </motion.div>
      </motion.div>
      <AllExams />

      <motion.div className="Examcard">
        <motion.div
          drag="x"
          dragConstraints={{ right: "0", left: -totalExams }}
          className="inner-examcard"
        >
          {Exams2.map((exam, index) => (
            <ExamCard key={index} {...exam} />
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
