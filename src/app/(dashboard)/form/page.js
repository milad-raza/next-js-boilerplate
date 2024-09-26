"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Switch } from "@nextui-org/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import CustomInput from "@/components/ui/customInput";
import CustomSelect from "@/components/ui/customSelect";
import CustomSelectTypeable from "@/components/ui/customSelectTypeable";
import CustomDatePicker from "@/components/ui/customDatePicker";
import { useTheme } from "next-themes";
import ClientOnly from "@/components/ui/clientOnly";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  amount: yup.string().required(),
  animal: yup.string().required(),
  hobby: yup.array().min(1).required(),
  city: yup.string().required(),
  birthDate: yup?.date().required(),
});

export default function Form() {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      animal: "",
      hobby: [],
      amount: "",
      city: "",
      birthDate: null,
    },
  });

  const { handleSubmit, reset } = methods;

  const { setTheme, resolvedTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleThemeChange = (e) => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const animals = [
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

  const hobbies = [
    { key: "gaming", label: "Gaming" },
    { key: "cricket", label: "Cricket" },
    { key: "movies", label: "Movies" },
  ];

  const cities = [
    { key: "karachi", label: "Karachi" },
    { key: "lahore", label: "Lahore" },
    { key: "islamabad", label: "Islamabad" },
  ];

  return (
    <ClientOnly>
      <div className="w-full flex justify-between items-center h-screen">
        <div className="w-1/2 bg-primary h-scr"></div>
        <div className="w-1/2 flex justify-center">
          <FormProvider {...methods}>
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
                <CustomInput name="email" label="Email" isRequired={true} />
              </div>
              <div className="mt-10">
                <CustomInput
                  name="password"
                  type={isVisible ? "text" : "password"}
                  label="Password"
                  isRequired={true}
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
                  isRequired={true}
                />
              </div>
              <div className="mt-10">
                <CustomSelect
                  name="animal"
                  label="Animal"
                  isRequired={true}
                  items={animals}
                />
              </div>
              <div className="mt-10">
                <CustomSelect
                  name="hobby"
                  label="Hobby"
                  isRequired={true}
                  items={hobbies}
                  selectionMode="multiple"
                />
              </div>
              <div className="mt-10">
                <CustomSelectTypeable
                  name="city"
                  label="City"
                  isRequired={true}
                  items={cities}
                />
              </div>
              <div className="mt-5">
                <CustomDatePicker
                  name="birthDate"
                  label="Birth Date"
                  isRequired={true}
                />
              </div>
              <Button type="submit" className="mt-5">
                Sign in
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </ClientOnly>
  );
}