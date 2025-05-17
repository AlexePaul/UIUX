import { StartAdornment } from "../StartAdornment/StartAdornment";
import { EndAdornment } from "../EndAdornment/EndAdornment";
import { Selectarrow } from "../Selectarrow/Selectarrow";

export interface IInputVariantOutlineStateEnabledSizeDefaultProps {
  label?: boolean;
  helpText?: boolean;
  selectArrow?: boolean;
  hasValue?: boolean;
  startAdornment?: boolean;
  endAdornment?: boolean;
  placeholderText?: string;
  labelText?: string;
  variant?: "outline";
  state?: "enabled" | "foucsed" | "error" | "disabled";
  size?: "default" | "lg" | "sm";
  className?: string;
}

export const InputVariantOutlineStateEnabledSizeDefault = ({
  label = false,
  helpText = false,
  selectArrow = false,
  hasValue = true,
  startAdornment = false,
  endAdornment = false,
  placeholderText = "Placeholder",
  labelText = "Label",
  variant = "outline",
  state = "enabled",
  size = "default",
  className,
  ...props
}: IInputVariantOutlineStateEnabledSizeDefaultProps): JSX.Element => {
  const variantsClassName =
    "variant-" + variant + " state-" + state + " size-" + size;

  return (
    <div
      className={
        "flex flex-col gap-1.5 items-start justify-start w-60 relative " +
        className +
        " " +
        variantsClassName
      }
    >
      {label && (
        <>
          <div className="text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-base leading-5 font-normal relative">
            {labelText}{" "}
          </div>
        </>
      )}
      <div className="bg-default-white rounded-md border-solid border-gray-300 border pt-[9px] pr-4 pb-[9px] pl-4 flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
        {startAdornment && (
          <>
            <StartAdornment className="!shrink-0"></StartAdornment>
          </>
        )}
        {hasValue && (
          <>
            <div className="text-gray-500 text-left font-['Inter-Regular',_sans-serif] text-base leading-5 font-normal relative flex-1">
              {placeholderText}{" "}
            </div>
          </>
        )}
        {endAdornment && (
          <>
            <EndAdornment className="!shrink-0"></EndAdornment>
          </>
        )}
        {selectArrow && (
          <>
            <Selectarrow className="!shrink-0"></Selectarrow>
          </>
        )}
      </div>
      {helpText && (
        <>
          <div className="text-gray-500 text-left font-['Inter-Regular',_sans-serif] text-xs leading-3 font-normal relative">
            HelpText{" "}
          </div>
        </>
      )}
    </div>
  );
};
