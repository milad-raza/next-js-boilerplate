"use client";

import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";

const CustomInput = (props) => {
  const {
    label,
    name,
    placeholder = `Enter ${label ?? ""}`,
    type = "text",
    labelPlacement = "outside",
    variant = "bordered",
    classNames,
    startContent,
    endContent,
    errorMessage,
    disabled,
    formatType,
    isRequired,
    control,
  } = props;

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
          className={classNames}
          labelPlacement={labelPlacement}
          placeholder={placeholder}
          value={formatNumber(field?.value)}
          onChange={(e) => {
            const parsedValue = parseNumber(e.target.value);
            field?.onChange(parsedValue);
          }}
          isRequired={Boolean(isRequired)}
          disabled={Boolean(disabled)}
          isInvalid={Boolean(errorMessage)}
          errorMessage={errorMessage}
          startContent={startContent}
          endContent={endContent}
        />
      )}
    />
  );
};
export default CustomInput;
