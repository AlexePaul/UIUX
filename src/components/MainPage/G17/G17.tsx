export interface IG17Props {
  className?: string;
}

export const G17 = ({ className, ...props }: IG17Props): JSX.Element => {
  return (
    <div className={"w-6 h-6 relative " + className}>
      <img
        className="h-full w-full object-contain"
        src="/clip-path-group0.svg"
      />
    </div>
  );
};
