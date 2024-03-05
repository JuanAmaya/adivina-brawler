import { useState } from "react";
import MenuPage from "./components/Pages/menu/MenuPage";
import GamePage from "./components/Pages/juego/GamePage";
import EndGamePage from "./components/Pages/endGame/EndGamePage";
import CollectionPage from "./components/Pages/coleccion/CollectionPage";

type brawlerData = {
  winner: boolean;
  countNum: number;
  answerImg: string;
  answerName: string;
  answerRarity: string;
  counterNum: number;
};

function App() {
  const [showGame, setShowGame] = useState(false);
  const [showEndGame, setShowEndGame] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [endData, setEndData] = useState<brawlerData>();

  return (
    <div className="max-w-screen-lg mx-auto">
      {!showGame && !showEndGame && !showCollection && (
        <MenuPage
          setShowGame={setShowGame}
          setShowCollection={setShowCollection}
        />
      )}
      {showGame && (
        <GamePage
          setShowGame={setShowGame}
          setShowEndGame={setShowEndGame}
          setEndData={setEndData}
        />
      )}
      {showEndGame && (
        <EndGamePage
          setShowGame={setShowGame}
          setShowEndGame={setShowEndGame}
          brawlerData={endData!}
        />
      )}
      {showCollection && (
        <CollectionPage setShowCollection={setShowCollection} />
      )}
    </div>
  );
}

export default App;
