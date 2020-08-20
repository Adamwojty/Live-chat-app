import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./config/GlobalStyle/GlobalStyle";
import Sidebar from "./components/Sidebar/Sidebar";
import Routing from "./config/routes/Routing";
import Login from "./components/Auth/Login";
import { Wrapper, AppWrapper } from "./App.styles";
import { store } from "./config/Store/store";

const App: React.FC = () => {
  const data = React.useContext(store);
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        {!data.user ? (
          <Login />
        ) : (
          <AppWrapper>
            <Routing />
            <Sidebar />
          </AppWrapper>
        )}
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
