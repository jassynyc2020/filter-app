import React from "react";
import { Route, Switch} from "react-router-dom";
import "./App.css";
import { BottomPageDecoration } from "./appstyles/appStyles";
import Filter from "./filter/filter";
import Preview from "./preview/preview";
import Landing from "./landing/landing";
function Header() {
  return <></>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/landing" exact component={Landing} />
        <Route path="/preview" component={Preview} />
        <Route path="/filter" component={Filter} />
      </Switch>
      <BottomPageDecoration />
    </div>
  );
}

export default App;
