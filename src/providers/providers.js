"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import RedirectHandler from "@/components/redirectHandler/redirectHandler";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <RedirectHandler />
      <NextUIProvider disableBaseline="true">
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
}
