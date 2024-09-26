"use client";

import { DatePicker } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
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
    isDisabled,
    isRequired,
    minDate,
    maxDate,
  } = props;
  const { theme } = useTheme();
  const {
    control,
    formState: { errors },
  } = useFormContext();

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
            selectorIcon: Boolean(errors[name])
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
          isInvalid={Boolean(errors[name])}
          errorMessage={errors[name]?.message}
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
