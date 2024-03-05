import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type comboProps = {
  brawlers: Array<{
    id: string;
    nombre: string;
    imgPin: string;
  }>;
  handleBrawlerSelected: Function;
};

const variantsCombo = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

type resultsType = {
  ano: number;
  humano: boolean;
  id: string;
  imgPin: string;
  nombre: string;
  rareza: string;
  tipo: string;
};

export default function Combobox(props: comboProps) {
  // const [intendedBrawler, setIntendedBrawler] = useState("shelly");
  const [inputTyped, setInputTyped] = useState("");
  const [results, setResults] = useState<resultsType[]>();
  const [inputFocus, setInputFocus] = useState(false);

  // const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setIntendedBrawler(e.target.value);
  // };

  const handleTypeChange = (value: string) => {
    setInputTyped(value);
    const brawlersSearched: any = props.brawlers.filter((brawler) => {
      return (
        brawler.nombre &&
        brawler.nombre.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(brawlersSearched);
  };

  const handleBtnClicked = () => {
    const brawlerExists: any = props.brawlers.filter((brawler) => {
      return brawler.nombre.toLocaleLowerCase() === inputTyped.toLowerCase();
    });
    if (brawlerExists.length === 1) {
      props.handleBrawlerSelected(brawlerExists[0].nombre);
    }
  };

  const handleFocusInput = () => {
    setTimeout(() => {
      setInputFocus(false);
    }, 100);
  };

  return (
    <motion.div
      className="flex flex-col w-96 mx-auto mb-8 gap-2"
      variants={variantsCombo}
      initial="hidden"
      animate="visible"
    >
      <label
        htmlFor="brawler-list"
        className="text-xl border-4 border-softGray rounded-md p-2 bg-softWhite text-softGray select-none"
      >
        Selecciona un Brawler
      </label>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Brawler..."
          value={inputTyped}
          onChange={(e) => handleTypeChange(e.target.value)}
          onFocus={() => setInputFocus(true)}
          onBlur={handleFocusInput}
          className="rounded-md p-2 text-xl border-4 border-softGray bg-softCream text-softGray capitalize"
        />
        {/* <select
          name="brawlers-list"
          id="brawlers"
          className="w-full bg-secondaryBlue text-primaryBlue text-xl rounded-md focus:ring-primaryBlue focus:border-primaryBlue p-2 capitalize"
          onChange={handleSelectChange}
        >
          {props.brawlers.map((brawler) => (
            <option key={brawler.id} value={brawler.nombre}>
              {brawler.nombre}
            </option>
          ))}
        </select> */}
        <button
          className="flex justify-center items-center border-4 border-softGray rounded-md p-2 w-40 transition-colors hover:bg-secondaryBlue hover:text-primaryBlue"
          onClick={handleBtnClicked}
        >
          <CheckIcon />
        </button>
      </div>
      {results !== undefined && inputFocus && (
        <div className="flex flex-col gap-2 text-xl border-4 p-2 rounded-md border-softGray max-h-64 overflow-y-scroll">
          {results.length === 0 && <span>No existe</span>}
          {results?.map((result, index) => {
            return (
              <div
                key={index}
                className="hover:bg-softWhite capitalize p-2 rounded-md"
                onClick={() => handleTypeChange(result.nombre)}
              >
                {result.nombre}
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
