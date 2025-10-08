import { motion } from "framer-motion"

const transition = {
  duration: 0.45,
  ease: [0.4, 0, 0.2, 1],
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={transition}
      style={{ minHeight: "100%" }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
