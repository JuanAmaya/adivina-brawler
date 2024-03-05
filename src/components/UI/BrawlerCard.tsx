import DescCard from "./DescCard";
import { motion } from "framer-motion";

type brawlerCardProps = {
  founded: boolean;
  name: string;
  rarity: string;
  imgIcon: string;
  index: number;
};

const variants = {
  visible: (i: number) => ({ opacity: 1, transition: { delay: i * 0.03 } }),
  hidden: { opacity: 0 },
};

export default function BrawlerCard(props: brawlerCardProps) {
  let bgColor = "bg-rareInitial";

  switch (props.rarity) {
    case "inicial":
      bgColor = "bg-rareInitial";
      break;

    case "especial":
      bgColor = "bg-rareRare";
      break;

    case "super especial":
      bgColor = "bg-rareSuper";
      break;

    case "epico":
      bgColor = "bg-rareEpic";
      break;

    case "mitico":
      bgColor = "bg-rareMythic";
      break;

    case "legendario":
      bgColor = "bg-rareLegend";
      break;
  }

  return (
    <motion.li
      className="select-none"
      initial="hidden"
      animate="visible"
      variants={variants}
      custom={props.index}
    >
      <DescCard
        bgColor={bgColor}
        topText={props.founded ? props.name : "???"}
        bottomText={
          <img
            src={props.imgIcon}
            alt={props.name}
            className={props.founded ? "brightness-100" : "brightness-0"}
            loading="lazy"
          />
        }
      />
    </motion.li>
  );
}
