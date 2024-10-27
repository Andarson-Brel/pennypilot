import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Toaster } from "sonner";
import { persistor, store } from "./app/store";
import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 * 5, gcTime: 60 * 1000 * 30 },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Toaster richColors position="top-right" duration={1000} />
            <App />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
