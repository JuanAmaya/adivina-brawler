import DescCard from "./DescCard";
import { motion } from "framer-motion";

type mainCardProps = {
  selectedBrawler: {
    ano: number;
    humano: boolean;
    id: string;
    imgPin: string;
    nombre: string;
    rareza: string;
    tipo: string;
  };

  answerAno: number;
  answerHumano: boolean;
  answerRareza: string;
  answerTipo: string;
};

const variantsBrawler = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export default function MainCard(props: mainCardProps) {
  return (
    <motion.div
      className="border-4 rounded-md border-softGray bg-softCream p-4 w-96 mx-auto select-none"
      key={props.selectedBrawler.id}
      variants={variantsBrawler}
      initial="hidden"
      animate="visible"
    >
      <div className="flex mx-5 mb-4 gap-2">
        <div className="bg-secondaryBlue rounded-md p-4 flex justify-center items-center w-full">
          <span className="text-4xl text-primaryBlue capitalize">
            {props.selectedBrawler.nombre}
          </span>
        </div>
        <img
          src={props.selectedBrawler.imgPin}
          alt="Test"
          className="w-20 object-contain"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        <DescCard
          bgColor={
            props.selectedBrawler.rareza === props.answerRareza
              ? "bg-softGreen"
              : "bg-softRed"
          }
          topText="Rareza"
          bottomText={props.selectedBrawler.rareza}
        />
        <DescCard
          bgColor={
            props.selectedBrawler.ano === props.answerAno
              ? "bg-softGreen"
              : "bg-softRed"
          }
          topText="Año"
          bottomText={props.selectedBrawler.ano.toString()}
        />
        <DescCard
          bgColor={
            props.selectedBrawler.tipo === props.answerTipo
              ? "bg-softGreen"
              : "bg-softRed"
          }
          topText="Tipo"
          bottomText={props.selectedBrawler.tipo}
        />
        <DescCard
          bgColor={
            props.selectedBrawler.humano === props.answerHumano
              ? "bg-softGreen"
              : "bg-softRed"
          }
          topText="Humano"
          bottomText={props.selectedBrawler.humano ? "Si" : "No"}
        />
      </div>
    </motion.div>
  );
}
