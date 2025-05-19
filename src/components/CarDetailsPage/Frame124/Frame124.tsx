export interface IFrame124Props {
  className?: string;
}

export const Frame124 = ({
  className,
  ...props
}: IFrame124Props): JSX.Element => {
  return (
    <img
      className={
        "rounded-[50px] flex flex-col items-center justify-between shrink-0 w-6 h-6 relative overflow-visible " +
        className
      }
      src="check-purple.svg"
    />
  );
};
