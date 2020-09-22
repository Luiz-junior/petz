import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "#00A0E4",
    secondColor: '#FFD400',
    firstText: "#555",
    secondText: '#262626',
    thirdText: "#6E6E6E",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;