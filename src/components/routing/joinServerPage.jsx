import React from "react";
//apparently removing "Router" from import breaks things, even though it's unused
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../layout/login/login.css";
// import Recovery from "../layout/recovery/recovery";
import Join from "../layout/joinServer/index";

const JoinServerPage = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/"
          render={props => {
            return <Join {...props} />;
          }}
        />
      </Switch>
    </React.Fragment>
  );
};

export default JoinServerPage;

// const ResetPage = () => {
//   return <div className="register-form">RESET!</div>;
// };

{
  /* <React.Fragment>
      <Switch>
        <Route
          path="/:name"
          render={props => {
            return <Recovery {...props} />;
          }}
        />
        <Route
          path="/"
          render={props => {
            return <ResetPage {...props} />;
          }}
        />
      </Switch>
    </React.Fragment> */
}