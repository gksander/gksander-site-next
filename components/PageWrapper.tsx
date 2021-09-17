import { motion } from "framer-motion";
import * as React from "react";

export const PageWrapper: React.FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      exit={{ opacity: 0.7, y: 10, transition: { duration: 0.15 } }}
    >
      {children}
    </motion.div>
  );
};
