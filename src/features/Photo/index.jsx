import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import NotFound from "../../components/NotFound";

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage}></Route>

      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;
