export interface IGearShift11Props {
  className?: string;
}

export const GearShift11 = ({
  className,
  ...props
}: IGearShift11Props): JSX.Element => {
  return (
    <div className={"w-6 h-6 relative overflow-hidden " + className}>
      <img
        className="w-[83.33%] h-[83.33%] absolute right-[8.33%] left-[8.33%] bottom-[8.33%] top-[8.33%] overflow-visible"
        src="group0.svg"
      />
    </div>
  );
};
