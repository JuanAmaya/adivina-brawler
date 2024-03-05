import MainCard from "./DescCard";

type buttonProps = {
  bgColor: string;
  topText: string;
  bottomText: string;
  clickFnc: Function;
};

export default function Button(props: buttonProps) {
  return (
    <button
      onClick={() => props.clickFnc()}
      className="hover:-translate-y-2 hover:drop-shadow-xl transition-all"
    >
      <MainCard
        bgColor={props.bgColor}
        topText={props.topText}
        bottomText={props.bottomText}
      />
    </button>
  );
}
