import { StartAdornment } from "../StartAdornment/StartAdornment";

export interface IEndAdornmentProps {
  className?: string;
}

export const EndAdornment = ({
  className,
  ...props
}: IEndAdornmentProps): JSX.Element => {
  return (
    <div className={"w-4 h-4 relative " + className}>
      <StartAdornment className="!w-[100%] !h-[100%] !absolute !right-[0%] !left-[0%] !bottom-[0%] !top-[0%]"></StartAdornment>
    </div>
  );
};
