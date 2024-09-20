"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Switch } from "@nextui-org/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import CustomInput from "@/components/customInput/customInput";
import CustomSelect from "@/components/customSelect/customSelect";
import CustomSelectTypeable from "@/components/customSelectTypeable/customSelectTypeable";
import CustomDatePicker from "@/components/customDatePicker/customDatePicker";
import { useTheme } from "next-themes";
import ClientOnly from "@/components/clientOnly/clientOnly";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  animal: yup.string().required(),
  amount: yup.string().required(),
  city: yup.string().required(),
  birthDate: yup?.date().required(),
});

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      animal: "",
      amount: "",
      city: "",
      birthDate: null,
    },
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  const { setTheme, resolvedTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleThemeChange = (e) => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const items = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];

  return (
    <ClientOnly>
      <div className="w-full flex justify-between items-center h-screen">
        <div className="w-1/2 bg-primary h-scr"></div>
        <div className="w-1/2 flex justify-center">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="w-7/12">
            <h2>Lets sign you in.</h2>

            <div className="mt-10">
              <Switch
                isSelected={Boolean(resolvedTheme === "dark")}
                onChange={handleThemeChange}
                size="md"
              >
                Dark Mode
              </Switch>
            </div>
            <div className="mt-10">
              <CustomInput
                name="email"
                label="Email"
                control={control}
                isRequired={true}
                errorMessage={errors.email?.message}
              />
            </div>
            <div className="mt-10">
              <CustomInput
                name="password"
                type={isVisible ? "text" : "password"}
                label="Password"
                control={control}
                isRequired={true}
                errorMessage={errors.password?.message}
                endContent={
                  isVisible ? (
                    <FaRegEye
                      className="cursor-pointer"
                      onClick={toggleVisibility}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="cursor-pointer"
                      onClick={toggleVisibility}
                    />
                  )
                }
              />
            </div>
            <div className="mt-10">
              <CustomInput
                name="amount"
                label="Amount"
                formatType="AMOUNT"
                control={control}
                isRequired={true}
                errorMessage={errors.amount?.message}
              />
            </div>
            <div className="mt-10">
              <CustomSelect
                name="animal"
                label="Animal"
                isRequired={true}
                items={items}
                control={control}
                errorMessage={errors.animal?.message}
              />
            </div>
            <div className="mt-10">
              <CustomSelectTypeable
                name="city"
                label="City"
                isRequired={true}
                items={items}
                control={control}
                errorMessage={errors.city?.message}
              />
            </div>
            <div className="mt-5">
              <CustomDatePicker
                name="birthDate"
                label="Birth Date"
                isRequired={true}
                control={control}
                errorMessage={errors.birthDate?.message}
              />
            </div>
            <Button type="submit" className="mt-5">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </ClientOnly>
  );
}
