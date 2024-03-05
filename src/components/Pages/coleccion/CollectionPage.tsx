import BrawlerCard from "@/components/UI/BrawlerCard";
import Button from "@/components/UI/Button";
import Counter from "@/components/UI/Counter";
import BRAWLERS from "@/data/brawlersData.json";
import { useLocalStorage } from "@/hooks/useStorage";
import CollectionHeader from "./CollectionHeader";

type collectionPageProps = {
  setShowCollection: Function;
};

export default function CollectionPage(props: collectionPageProps) {
  const [brawlersSaved] = useLocalStorage("brawlers", []);

  const handleShowMenu = () => {
    props.setShowCollection(false);
  };

  return (
    <div className="max-w-screen-md mx-auto my-8">
      <CollectionHeader />
      <Counter
        countNum={brawlersSaved.length}
        limitNum={BRAWLERS.length}
        bgColor={
          brawlersSaved.length === BRAWLERS.length
            ? "bg-gradient-to-r from-violet-200 to-cyan-100"
            : "bg-softWhite"
        }
      />
      <ul className="flex flex-wrap gap-4 justify-center">
        <Button
          bgColor="bg-softBlue"
          topText="BTN-1"
          bottomText="Menu"
          clickFnc={handleShowMenu}
        />
        {BRAWLERS.map((brawler, index) => (
          <BrawlerCard
            key={index}
            index={index}
            founded={
              brawlersSaved.find((saved: string) => brawler.nombre === saved)
                ? true
                : false
            }
            name={brawler.nombre}
            rarity={brawler.rareza}
            imgIcon={brawler.imgPin}
          />
        ))}
      </ul>
    </div>
  );
}
