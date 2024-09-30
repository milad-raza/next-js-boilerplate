"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { clearRedirectPath } from "@/redux/services/appSlice";

const RedirectHandler = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const redirectTo = useSelector((state) => state.app.redirectTo);

  useEffect(() => {
    if (redirectTo) {
      router.push(redirectTo);
      dispatch(clearRedirectPath());
    }
  }, [redirectTo, router, dispatch]);

  return null;
};

export default RedirectHandler;
