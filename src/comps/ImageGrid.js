import React from "react";
import useFirestore from "../hook/useFireStore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { dosc } = useFirestore("images");
  console.log(dosc);
  return (
    <div className="img-grid">
      {dosc &&
        dosc.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
export default ImageGrid;
