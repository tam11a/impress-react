import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

//Dependencies
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme";
import { QueryClientProvider, QueryClient } from "react-query";

//Components
import { GlobalStyles } from "@mui/material";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*": {
            // Disable Blue Highlight when Touch/Press object with cursor: 'pointer' in Android
            WebkitTapHighlightColor: "transparent",
            // scrollbar
            scrollbarWidth: "5px",
            scrollbarColor: `${theme.palette.primary.light} #00000033`,
          },
          "*::-webkit-scrollbar": {
            width: "5px",
          },
          "*::-webkit-scrollbar-track": {
            background: "#00000033",
          },
          "*::-webkit-scrollbar-thumb": {
            background: theme.palette.primary.light,
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: theme.palette.primary.main,
          },
          // App Body Scrollbar
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#00000033",
          },
          "&::-webkit-scrollbar-thumb": {
            background: theme.palette.primary.light,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: theme.palette.primary.main,
          },
        }}
      />
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();