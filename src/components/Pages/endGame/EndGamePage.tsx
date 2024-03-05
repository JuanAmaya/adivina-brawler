import Button from "@/components/UI/Button";
import Counter from "@/components/UI/Counter";
import DescCard from "@/components/UI/DescCard";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useStorage";
import { motion } from "framer-motion";

type endGameProps = {
  setShowGame: Function;
  setShowEndGame: Function;
  brawlerData: {
    winner: boolean;
    countNum: number;
    answerImg: string;
    answerName: string;
    answerRarity: string;
    counterNum: number;
  };
};

const variantsBrawler = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const variantsHeader = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function EndGamePage(props: endGameProps) {
  const [bgColor, setBgColor] = useState("bg-rareInitial");
  const [brawlersSaved, setBrawlersSaved, removeBrawlers] = useLocalStorage(
    "brawlers",
    []
  );

  const handlePlayAgain = () => {
    props.setShowEndGame(false);
    props.setShowGame(true);
  };

  const handleMenu = () => {
    props.setShowEndGame(false);
    props.setShowGame(false);
  };

  useEffect(() => {
    switch (props.brawlerData.answerRarity) {
      case "inicial":
        setBgColor("bg-rareInitial");
        break;

      case "especial":
        setBgColor("bg-rareRare");
        break;

      case "super especial":
        setBgColor("bg-rareSuper");
        break;

      case "epico":
        setBgColor("bg-rareEpic");
        break;

      case "mitico":
        setBgColor("bg-rareMythic");
        break;

      case "legendario":
        setBgColor("bg-rareLegend");
        break;
    }
  }, [props.brawlerData.answerRarity]);

  useEffect(() => {
    const alreadySaved = brawlersSaved.find(
      (saved: string) => props.brawlerData.answerName === saved
    );
    if (props.brawlerData.winner && alreadySaved === undefined) {
      const savedArr = [...brawlersSaved];
      savedArr.push(props.brawlerData.answerName);
      setBrawlersSaved(savedArr);
    }
  }, []);

  return (
    <div>
      <motion.div
        className="bg-secondaryBlue rounded-md flex justify-center items-center mt-8 p-2 mx-8 select-none"
        variants={variantsHeader}
        initial="hidden"
        animate="visible"
      >
        <span className="text-primaryBlue text-4xl">
          {props.brawlerData.winner ? "Adivinaste" : "Perdiste"}
        </span>
      </motion.div>

      <Counter
        countNum={props.brawlerData.countNum}
        limitNum={props.brawlerData.counterNum}
        bgColor="bg-softWhite"
      />

      <motion.div
        className={`border-4 rounded-md border-softGray p-4 w-96 mx-auto flex flex-col justify-center items-center gap-4 select-none ${
          props.brawlerData.winner ? "bg-softGreen" : "bg-softRed"
        }`}
        variants={variantsBrawler}
        initial="hidden"
        animate="visible"
      >
        <img
          src={props.brawlerData.answerImg}
          alt={props.brawlerData.answerName}
          className="w-28"
        />
        <DescCard
          bgColor={bgColor}
          topText="Respuesta"
          bottomText={props.brawlerData.answerName}
        />
      </motion.div>

      <div className="flex justify-center gap-4 mx-4 mt-6">
        <Button
          bgColor="bg-softPurple"
          topText="BTN-1"
          bottomText="Jugar"
          clickFnc={handlePlayAgain}
        />
        <Button
          bgColor="bg-softBlue"
          topText="BTN-2"
          bottomText="Menu"
          clickFnc={handleMenu}
        />
      </div>
    </div>
  );
}
