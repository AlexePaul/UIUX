export interface ISelectarrowProps {
  className?: string;
}

export const Selectarrow = ({
  className,
  ...props
}: ISelectarrowProps): JSX.Element => {
  return (
    <img
      className={"shrink-0 w-4 h-4 relative overflow-visible " + className}
      src="selectarrow.svg"
    />
  );
};
