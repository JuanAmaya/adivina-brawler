import { motion } from "framer-motion";

type mainCardProps = {
  bgColor: string;
  topText: string;
  bottomText: string | React.ReactElement;
};

export default function DescCard(props: mainCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="p-2 border-2 border-softGray text-2xl rounded-md bg-softWhite w-36 flex justify-center capitalize">
        {props.topText}
      </div>
      <motion.div
        className={`px-8 py-4 border-2 border-softGray text-2xl rounded-md w-36 flex justify-center text-center capitalize ${props.bgColor}`}
        initial={{ y: -60 }}
        animate={{ y: 0 }}
      >
        {props.bottomText}
      </motion.div>
    </motion.div>
  );
}
