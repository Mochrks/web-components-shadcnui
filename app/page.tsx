"use client";

import { SnackbarProvider } from "notistack";
import App from "@/App";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Page() {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  );
}