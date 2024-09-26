"use client";

import { deleteCookie } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleRemoveToken = () => {
    deleteCookie("access-token");
    router.push("/login");
  };

  return (
    <div>
      Dashboard <br /> <Button onClick={handleRemoveToken}>Logout</Button>
    </div>
  );
}
