import { motion } from "framer-motion";

const variantsHeader = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function CollectionHeader() {
  return (
    <motion.div
      className="bg-secondaryBlue p-2 rounded-md flex justify-center items-center select-none mx-8"
      variants={variantsHeader}
      initial="hidden"
      animate="visible"
    >
      <span className="text-4xl text-primaryBlue">Colecci&oacute;n</span>
    </motion.div>
  );
}
