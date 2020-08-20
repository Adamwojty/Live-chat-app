import React from "react";
import { Switch, Route } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import { Routes } from "./routes";
const Routing: React.FC = () => {
  return (
    <Switch>
      <Route exact path={Routes.APP}></Route>
      <Route path={Routes.ROOM}>
        <Chat />
      </Route>
      <Route path={Routes.LOGIN}></Route>
    </Switch>
  );
};
export default Routing;
