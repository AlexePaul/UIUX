export interface IG17Props {
  className?: string;
}

export const G17 = ({ className, ...props }: IG17Props): JSX.Element => {
  return (
    <div
      className={"w-6 h-6 relative " + className}
      style={{ transformOrigin: "0 0", transform: "rotate(0deg) scale(1, -1)" }}
    >
      <img
        className="h-[auto] absolute left-0 top-0 overflow-visible"
        src="clip-path-group0.svg"
      />
    </div>
  );
};
