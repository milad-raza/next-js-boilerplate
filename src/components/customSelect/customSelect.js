"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Controller } from "react-hook-form";

const CustomSelect = (props) => {
  const { theme } = useTheme();

  const {
    label,
    name,
    placeholder = `Enter ${label ?? ""}`,
    labelPlacement = "outside",
    variant = "bordered",
    disabledKeys = [],
    selectionMode = "single",
    className,
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
          <Select
            {...field}
            label={
              <>
                {label}
                {isRequired && <span className="text-danger ml-[2px]">*</span>}
              </>
            }
            className={`${
              field?.value == "" &&
              (theme === "dark" ? "!text-default-500" : "!text-default-400")
            } ${className}`}
            classNames={{
              ...classNames,
              selectorIcon: Boolean(errorMessage)
                ? "text-danger"
                : "text-primary",
            }}
            selectedKeys={
              selectionMode === "multiple" ? field?.value : [field?.value]
            }
            placeholder={placeholder}
            errorMessage={errorMessage}
            isInvalid={Boolean(errorMessage)}
            variant={variant}
            startContent={startContent}
            endContent={endContent}
            labelPlacement={labelPlacement}
            isDisabled={Boolean(isDisabled)}
            disabledKeys={disabledKeys}
            selectionMode={selectionMode}
            onChange={(e) =>
              selectionMode === "multiple"
                ? field.onChange(Array.from(new Set(e.target.value.split(","))))
                : field.onChange(e.target.value)
            }
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
