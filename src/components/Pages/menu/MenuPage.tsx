import Button from "../../UI/Button";
import MenuHeader from "./MenuHeader";

type menuProps = {
  setShowGame: Function;
  setShowCollection: Function;
};

export default function MenuPage(props: menuProps) {
  const handleShowGame = () => {
    props.setShowGame(true);
  };

  const handleShowCollection = () => {
    props.setShowCollection(true);
  };

  return (
    <>
      <MenuHeader />

      <main>
        <div className="flex justify-center gap-4 mt-12">
          <Button
            bgColor="bg-softPurple"
            topText="BTN-1"
            bottomText="Jugar"
            clickFnc={handleShowGame}
          />
          <Button
            bgColor="bg-softYellow"
            topText="BTN-2"
            bottomText="Colección"
            clickFnc={handleShowCollection}
          />
        </div>
      </main>
    </>
  );
}
