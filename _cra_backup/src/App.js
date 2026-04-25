import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home";
import Infos from "./Pages/Infos";

import "./App.css";
import Impressum from "./Pages/Impressum";

const theme = {
  colors: {
    primary: "#1976d2",
    secundary: "#eff0f4",
    third: "#0074d4",
    navFontColor: "#424242",
    navDropdownFontColor: "#424242",
    navChevronColor: "#424242",
    navDropdownBGColor: "#eff0f4",
    burgerFontColor: "#424242",
    burgerDropdownFontColor: "#ffffff",
    burgerChevronColor: "#ffffff",
    burgerBGColor: "#eff0f4",
    burgerDropdownBGColor: "#ededed",
    lngFontColor: "#ffffff",
    lngLineFontColor: "#424242",
    lngDropdownColor: "#ffffff",
    lngChevronColor: "#ffffff",
    lngDropdownBGColor: "#f9f9f9",
    inputBorderColor: "#c9c9c9",
    backgroundColor: "#eff0f4",
    grey: "#787878",
    darkgrey: "#424242",
    middlegrey: "#cccccc",
    lightgrey: "#eff0f4",
    titlegrey: "#565656",
    white: "#ffffff",
    red: "#f22e2e",
    black: "#353535",
  },
  typography: {
    fontFamiliy: "Arial",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.typography.fontFamiliy};
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/infos" component={Infos} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
