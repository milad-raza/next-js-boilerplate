"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl">Login</h1>
      <Button
        className="bg-primary p-3 mt-3 rounded-full"
        onClick={() => router.push("/")}
      >
        Home
      </Button>
    </div>
  );
}
