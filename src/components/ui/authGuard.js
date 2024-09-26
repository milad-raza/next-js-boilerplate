"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthGuard = ({ children }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access-token");

    if (!token) {
      router.push("/login");
    } else {
      setIsChecking(false);
    }
  }, [router]);

  if (isChecking) {
    return <div>Dashboard Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthGuard;
