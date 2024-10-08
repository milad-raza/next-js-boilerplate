"use client";

import { Input } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

const CustomInput = (props) => {
  const {
    label,
    name,
    placeholder = `Enter ${label ?? ""}`,
    type = "text",
    labelPlacement = "outside",
    variant = "bordered",
    className,
    classNames,
    startContent,
    endContent,
    isDisabled,
    formatType,
    isRequired,
  } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const formatNumber = (value) => {
    if (formatType === "AMOUNT") {
      return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return value;
    }
  };

  const parseNumber = (value) => {
    if (formatType === "AMOUNT") {
      return value.replace(/\$\s?|(,*)/g, "");
    } else {
      return value;
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          type={type}
          label={label}
          variant={variant}
          className={className}
          classNames={{ ...classNames, input: "!ps-0" }}
          labelPlacement={labelPlacement}
          placeholder={placeholder}
          value={formatNumber(field?.value)}
          onChange={(e) => {
            const parsedValue = parseNumber(e.target.value);
            field?.onChange(parsedValue);
          }}
          isRequired={Boolean(isRequired)}
          isDisabled={Boolean(isDisabled)}
          isInvalid={Boolean(errors[name])}
          errorMessage={errors[name]?.message}
          startContent={
            <div
              className={Boolean(errors[name]) ? "text-danger" : "text-primary"}
            >
              {startContent}
            </div>
          }
          endContent={
            <div
              className={Boolean(errors[name]) ? "text-danger" : "text-primary"}
            >
              {endContent}
            </div>
          }
        />
      )}
    />
  );
};
export default CustomInput;
