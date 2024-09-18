"use client";

import {
  Autocomplete,
  AutocompleteItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Controller } from "react-hook-form";

const CustomSelectTypeable = (props) => {
  const {
    label,
    name,
    placeholder = `Enter ${label ?? ""}`,
    labelPlacement = "outside",
    variant = "bordered",
    disabledKeys = [],
    classNames,
    items,
    startContent,
    endContent,
    errorMessage,
    isDisabled,
    isRequired,
    control,
  } = props;

  return (
    <>
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
            className={`block ${field?.value === "" && "text-default-500"}`}
            classNames={{
              selectorButton: Boolean(errorMessage)
                ? "text-danger"
                : field?.value === "" && "text-default-500",
              ...classNames,
            }}
            selectedKeys={field?.value}
            placeholder={placeholder}
            errorMessage={errorMessage}
            isInvalid={Boolean(errorMessage)}
            variant={variant}
            startContent={startContent}
            endContent={endContent}
            labelPlacement={labelPlacement}
            isDisabled={Boolean(isDisabled)}
            disabledKeys={disabledKeys}
            onInputChange={(e) => field.onChange(e)}
          >
            {items.map((item) => (
              <AutocompleteItem key={item.key} value={item.key}>
                {item.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        )}
      />
    </>
  );
};

export default CustomSelectTypeable;
