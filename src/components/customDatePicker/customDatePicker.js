"use client";

import { DatePicker } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { useTheme } from "next-themes";

const CustomDatePicker = (props) => {
  const {
    label,
    name,
    placeholderValue,
    labelPlacement = "outside",
    variant = "bordered",
    className,
    classNames,
    startContent,
    endContent,
    errorMessage,
    isDisabled,
    isRequired,
    control,
    minDate,
    maxDate,
  } = props;
  const { theme } = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          label={label}
          variant={variant}
          className={className}
          classNames={{
            ...classNames,
            selectorIcon: Boolean(errorMessage)
              ? "text-danger"
              : "text-primary",
          }}
          dateInputClassNames={{
            segment:
              field?.value === null
                ? theme === "dark"
                  ? "!text-default-500"
                  : "!text-default-400"
                : "!text-primary",
          }}
          labelPlacement={labelPlacement}
          placeholderValue={placeholderValue}
          isRequired={Boolean(isRequired)}
          isDisabled={Boolean(isDisabled)}
          isInvalid={Boolean(errorMessage)}
          errorMessage={errorMessage}
          startContent={startContent}
          endContent={endContent}
          minValue={minDate}
          maxValue={maxDate}
        />
      )}
    />
  );
};
export default CustomDatePicker;
