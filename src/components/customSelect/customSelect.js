"use client"

import { Select, SelectItem } from "@nextui-org/react";
import { Controller } from "react-hook-form";

const CustomSelect = (props) => {
  const {
    label,
    name,
    placeholder = `Enter ${label ?? ""}`,
    labelPlacement = "outside",
    variant = "bordered",
    disabledKeys = [],
    selectionMode = "single",
    classNames,
    items,
    startContent,
    endContent,
    errorMessage,
    disabled,
    isRequired,
    control,
  } = props;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            label={label}
            className={field?.value == "" && "text-gray-400"}
            selectedKeys={[field?.value]}
            placeholder={placeholder}
            errorMessage={errorMessage}
            isInvalid={Boolean(errorMessage)}
            variant={variant}
            startContent={startContent}
            endContent={endContent}
            labelPlacement={labelPlacement}
            classNames={classNames}
            isRequired={Boolean(isRequired)}
            disabled={Boolean(disabled)}
            disabledKeys={disabledKeys}
            selectionMode={selectionMode}
          >
            {items.map((item) => (
              <SelectItem key={item.key} value={item.key}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </>
  );
};

export default CustomSelect;