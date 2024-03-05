import { motion } from "framer-motion";

type counterProps = {
  countNum: number;
  limitNum: number;
  bgColor: string;
};

const variantsCCircle = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const variantsCounting = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -30 },
};

export default function Counter(props: counterProps) {
  return (
    <motion.div
      className={`border-4 border-softGray rounded-full w-40 mx-auto px-2 py-5 flex items-center justify-center my-8 bg-softWhite select-none ${props.bgColor}`}
      variants={variantsCounting}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-center items-center">
        <motion.span
          className="text-3xl text-softGray"
          key={props.countNum}
          variants={variantsCounting}
        >
          {props.countNum}
        </motion.span>
        <motion.span
          className="text-3xl text-softGray"
          variants={variantsCounting}
        >
          /
        </motion.span>
        <motion.span
          className="text-3xl text-softGray"
          variants={variantsCounting}
        >
          {props.limitNum}
        </motion.span>
      </div>
    </motion.div>
  );
}
