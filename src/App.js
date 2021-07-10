import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { IndexPage, PageNotFound, Blog } from "./pages";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import { GlobalProvider } from "./GlobalStateContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
