import Combobox from "@/components/UI/Combobox";
import brawlers from "../../../data/brawlersData.json";
import MainCard from "../../UI/MainCard";
import { useEffect, useState } from "react";
import Counter from "@/components/UI/Counter";

type selectedBrawlerType = {
  ano: number;
  humano: boolean;
  id: string;
  imgPin: string;
  nombre: string;
  rareza: string;
  tipo: string;
};

type gamePageProps = {
  setShowGame: Function;
  setShowEndGame: Function;
  setEndData: Function;
};

const TRIES = 8;

export default function GamePage(props: gamePageProps) {
  const [answerBrawler, setAnswerBrawler] = useState<selectedBrawlerType>();
  const [selectedBrawler, setSelectedBrawler] = useState<selectedBrawlerType>();
  const [selectedBrawlerArr, setSelectedBrawlerArr] = useState<
    selectedBrawlerType[]
  >([]);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * (brawlers.length - 0 + 1)) + 0;
    setAnswerBrawler(brawlers[randomNum]);
  }, []);

  const handleBrawlerSelected = (brawlerName: string) => {
    const chosenBrawler = brawlers.find(
      (brawler) => brawler.nombre === brawlerName
    );
    setSelectedBrawler(chosenBrawler);

    const newArray = selectedBrawlerArr;
    newArray?.unshift(chosenBrawler!);
    setSelectedBrawlerArr(newArray);
    console.log("res", answerBrawler);

    if (chosenBrawler?.nombre === answerBrawler?.nombre) {
      props.setEndData({
        winner: true,
        countNum: selectedBrawlerArr.length,
        answerImg: answerBrawler?.imgPin,
        answerName: answerBrawler?.nombre,
        answerRarity: answerBrawler?.rareza,
        counterNum: TRIES,
      });
      props.setShowGame(false);
      props.setShowEndGame(true);
    }

    if (selectedBrawlerArr.length === TRIES) {
      props.setEndData({
        winner: false,
        countNum: selectedBrawlerArr.length,
        answerImg: answerBrawler?.imgPin,
        answerName: answerBrawler?.nombre,
        answerRarity: answerBrawler?.rareza,
        counterNum: TRIES,
      });
      props.setShowGame(false);
      props.setShowEndGame(true);
    }
  };

  return (
    <main>
      <Counter
        countNum={selectedBrawlerArr.length}
        limitNum={TRIES}
        bgColor={"bg-softWhite"}
      />

      <Combobox
        brawlers={brawlers}
        handleBrawlerSelected={handleBrawlerSelected}
      />

      {selectedBrawlerArr.length > 0 && (
        <div className="flex flex-wrap gap-6 mb-8">
          {selectedBrawlerArr.map((selected, index) => (
            <MainCard
              key={index}
              selectedBrawler={selected}
              answerRareza={answerBrawler?.rareza!}
              answerAno={answerBrawler?.ano!}
              answerTipo={answerBrawler?.tipo!}
              answerHumano={answerBrawler?.humano!}
            />
          ))}
        </div>
      )}
    </main>
  );
}
