import { motion } from "framer-motion";

const variantsHeader = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function MenuHeader() {
  return (
    <motion.header
      variants={variantsHeader}
      initial="hidden"
      animate="visible"
      className="mx-auto"
    >
      <motion.div className="flex flex-col bg-secondaryBlue rounded-md justify-center items-center py-2 mt-8 mx-8 select-none">
        <span className="text-slate-500 text-2xl">Adivina el</span>
        <span className="text-primaryBlue text-5xl">Brawler</span>
      </motion.div>
    </motion.header>
  );
}
