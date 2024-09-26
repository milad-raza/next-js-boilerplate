"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@nextui-org/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import CustomInput from "@/components/ui/customInput";
import { useRouter } from "next/navigation";
import { setCookie } from "@/lib/utils";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export default function Login() {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit, reset } = methods;
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter()

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
    setCookie("access-token", "token", 3)
    router.push("/dashboard")
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex justify-between items-center h-screen max-w-7xl px-6">
        <div className="w-1/2 bg-primary h-scr hidden md:block"></div>
        <div className="w-full md:w-1/2 flex justify-center">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="w-full">
              <h2>Sign in</h2>
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

              <Button type="submit" className="mt-5">
                Sign in
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
