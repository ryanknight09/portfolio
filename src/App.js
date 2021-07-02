import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { IndexPage, PageNotFound, Blog } from "./pages";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
