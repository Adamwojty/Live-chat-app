import React from "react";
import { Switch, Route } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import { Routes } from "./routes";
const Routing: React.FC = () => {
  return (
    <Switch>
      <Route exact path={Routes.ROOM}>
        <Chat empty={false} />
      </Route>
      <Route path={Routes.BASE}>
        <Chat empty={true} />
      </Route>
    </Switch>
  );
};
export default Routing;
