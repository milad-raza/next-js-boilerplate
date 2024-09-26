"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Controller, useFormContext } from "react-hook-form";

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
    isDisabled,
    isRequired,
  } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

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
              selectorIcon: Boolean(errors[name])
                ? "text-danger"
                : "text-primary",
            }}
            selectedKeys={
              selectionMode === "multiple" ? field?.value : [field?.value]
            }
            placeholder={placeholder}
            errorMessage={errors[name]?.message}
            isInvalid={Boolean(errors[name])}
            variant={variant}
            startContent={startContent}
            endContent={endContent}
            labelPlacement={labelPlacement}
            isDisabled={Boolean(isDisabled)}
            disabledKeys={disabledKeys}
            selectionMode={selectionMode}
            onChange={(e) =>
              selectionMode === "multiple"
                ? field.onChange(
                    Array.from(new Set(e.target.value.split(","))).filter(
                      (v) => v !== ""
                    )
                  )
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
