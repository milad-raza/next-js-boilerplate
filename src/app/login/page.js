"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div>
      Login
      <br />
      <button className="bg-black text-white" onClick={() => router.push("/")}>
        Home
      </button>
    </div>
  );
}
