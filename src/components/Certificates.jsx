import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { Download, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const CertificateCard = ({ name, date, download_link, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    className="bg-gray-100 dark:bg-tertiary p-5 rounded-2xl w-full shadow-md transition-colors duration-300 flex flex-col justify-between"
  >
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{date}</p>
    </div>
    <div className="mt-6">
      <a
        href={download_link}
        download={`${name}.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
      >
        <Download className="w-4 h-4 mr-1" /> Download Certificate
      </a>
    </div>
  </motion.div>
);

const Certificate = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(certificates.length);
  };

  const visibleCertificates = certificates.slice(0, visibleCount);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-800 dark:text-gray-300`}>
          My Achievements
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-gray-900 dark:text-white`}>
          Certificates
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col items-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center w-full">
          {visibleCertificates.map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`} {...certificate} index={index} />
          ))}
        </div>

        {visibleCount < certificates.length && (
          <button
            type="button"
            onClick={showMore}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-colors"
            aria-label="Show all certificates"
          >
            <MoreHorizontal className="w-5 h-5" />
            Show all
          </button>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Certificate, "certificate");
