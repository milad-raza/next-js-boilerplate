"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl">Login</h1>
      <button
        className="bg-black text-white p-3 mt-3 rounded-md"
        onClick={() => router.push("/")}
      >
        Home
      </button>
    </div>
  );
}
