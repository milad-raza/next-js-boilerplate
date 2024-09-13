"use client"

import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";

const CustomInput = (props) => {
  const {
    label,
    name,
    placeholder = `Enter ${label ?? ""}`,
    type = "text",
    labelPlacement = "outside",
    variant = "bordered",
    classNames,
    endContent,
    errorMessage,
    register,
    disabled,
    rules,
    formatType,
    isRequired,
    setValue,
  } = props;

  const [formattedValue, setFormattedValue] = useState("");
  const field = register(name, rules);

  const handleChange = (e) => {
    const value = e.target.value;
    if (formatType === "AMOUNT") {
      const rawValue = value?.replace(/,/g, "");
      const formatted = rawValue?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setValue(name, formatted, { shouldValidate: true });
      setFormattedValue(formatted);
    } else {
      field.onChange(e);
      setFormattedValue(value);
    }
  };

  return (
    <Input
      {...field}
      value={formattedValue}
      onChange={handleChange}
      label={label}
      type={type}
      variant={variant}
      disabled={Boolean(disabled)}
      placeholder={placeholder}
      labelPlacement={labelPlacement}
      endContent={endContent}
      classNames={classNames}
      isRequired={Boolean(isRequired)}
      isInvalid={Boolean(errorMessage)}
      errorMessage={errorMessage}
    />
  );
};
export default CustomInput;
