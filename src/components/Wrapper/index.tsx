import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { pageEffect } from "@styles/animation";

interface WrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

const Wrapper = ({ children, ...rest }: WrapperProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageEffect}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
