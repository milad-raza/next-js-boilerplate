"use client";

import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";

const CustomSelectTypeable = (props) => {
  const {
    label,
    name,
    placeholder = `Enter ${label ?? ""}`,
    labelPlacement = "outside",
    variant = "bordered",
    disabledKeys = [],
    className,
    classNames,
    items,
    startContent,
    endContent,
    isDisabled,
    isRequired,
  } = props;

  const {
    control,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const fieldValue = useWatch({ name });

  const [inputValue, setInputValue] = useState("");
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (fieldValue === "" || fieldValue === undefined) {
      setIsResetting(true);
      setInputValue("");
      setTimeout(() => {
        clearErrors(name);
        setIsResetting(false);
      }, 0);
    }
  }, [fieldValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          label={
            <>
              {label}
              {isRequired && <span className="text-danger ml-[2px]">*</span>}
            </>
          }
          className={`block ${className}`}
          classNames={{
            selectorButton: Boolean(!isResetting && errors[name])
              ? "text-danger"
              : "text-primary",
            clearButton: Boolean(!isResetting && errors[name])
              ? "text-danger"
              : "text-primary",
            ...classNames,
          }}
          selectedKeys={field?.value || []}
          placeholder={placeholder}
          errorMessage={!isResetting ? errors[name]?.message : ""}
          isInvalid={Boolean(!isResetting && errors[name])}
          variant={variant}
          startContent={startContent}
          endContent={endContent}
          labelPlacement={labelPlacement}
          isDisabled={Boolean(isDisabled)}
          disabledKeys={disabledKeys}
          onSelectionChange={(e) => {
            field.onChange(e);
          }}
          inputValue={inputValue}
          onInputChange={(e) => setInputValue(e)}
        >
          {items.map((item) => (
            <AutocompleteItem key={item.key} value={item.key}>
              {item.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      )}
    />
  );
};

export default CustomSelectTypeable;
