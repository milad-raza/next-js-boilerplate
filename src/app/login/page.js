"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@nextui-org/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import CustomInput from "@/components/customInput/customInput";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  amount: yup.string().min(1).required(),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      amount: "",
    },
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full flex justify-between items-center h-screen">
      <div className="w-1/2 bg-primary h-scr"></div>
      <div className="w-1/2 flex justify-center">
        <form onSubmit={handleSubmit(onSubmitHandler)} className="w-7/12">
          <h2>Lets sign you in.</h2>
          <br />
          <div>
            <CustomInput
              name="email"
              label="Email"
              register={register}
              isRequired={true}
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="mt-10">
            <CustomInput
              name="password"
              type={isVisible ? "text" : "password"}
              label="Password"
              register={register}
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
          <Button type="submit" className="mt-5">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
