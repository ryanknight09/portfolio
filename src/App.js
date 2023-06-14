import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalProvider } from "./GlobalStateContext";
import { IndexPage } from "./pages";
import { GlobalStyles, theme } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="*" element={<IndexPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
