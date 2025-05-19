export interface IG1593Props {
  className?: string;
}

export const G1593 = ({ className, ...props }: IG1593Props): JSX.Element => {
  return (
    <div
      className={"w-6 h-6 relative " + className}
      style={{ transformOrigin: "0 0", transform: "rotate(0deg)" }}
    >
      <img
        className="h-[auto] absolute left-0 top-0 overflow-visible"
        src="g-15950.svg"
      />
      <img
        className="w-[12.3%] h-[12.3%] absolute right-[61.13%] left-[26.56%] bottom-[61.13%] top-[26.56%] overflow-visible"
        src="g-16350.svg"
      />
      <img
        className="w-[12.3%] h-[12.3%] absolute right-[26.56%] left-[61.13%] bottom-[26.56%] top-[61.13%] overflow-visible"
        src="g-16390.svg"
      />
      <img
        className="w-[12.4%] h-[12.4%] absolute right-[61.04%] left-[26.56%] bottom-[26.56%] top-[61.04%] overflow-visible"
        src="g-16430.svg"
      />
      <img
        className="w-[12.3%] h-[12.3%] absolute right-[26.56%] left-[61.13%] bottom-[61.13%] top-[26.56%] overflow-visible"
        src="g-16470.svg"
      />
      <img
        className="h-[auto] absolute left-0 top-0 overflow-visible"
        src="g-16510.svg"
      />
    </div>
  );
};
