export interface IStartAdornmentProps {
  className?: string;
}

export const StartAdornment = ({
  className,
  ...props
}: IStartAdornmentProps): JSX.Element => {
  return (
    <img
      className={"shrink-0 w-4 h-4 relative overflow-visible " + className}
      src="start-adornment.svg"
    />
  );
};
