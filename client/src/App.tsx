import React from "react";

import StatisticsView from "./views/StatisticsView";
import PIDView from "./views/PIDView";
import ActionsView from "./views/ActionsView";
import CountdownView from "./views/CountdownView";

import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LiveStreamView from "./views/LiveStreamView";

function NavbarItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "block",
        marginLeft: "1rem",
        marginRight: "1rem",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </div>
  );
}

function Navbar() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      id="nav"
    >
      <NavbarItem>
        <b style={{ fontSize: "1.5rem" }}>Ground Software</b>
      </NavbarItem>
      <NavbarItem>
        <Link to="/">Dashboard</Link>
      </NavbarItem>
      <NavbarItem>
        <b><Link to="/pid">P&ID</Link></b>
      </NavbarItem>
      <NavbarItem>
        <Link to="/actions">Actions</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to="/countdown">Countdown</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to="/livestream">Livestream</Link>
      </NavbarItem>
    </div>
  );
}

const App = () => {
  return (
    <div className="App font-sans bg-light-1 text-dark-1">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/pid" exact>
            <PIDView />
          </Route>
          <Route path="/actions" exact>
            <ActionsView />
          </Route>
          <Route path="/countdown" exact>
            <CountdownView />
          </Route>
          <Route path="/" exact>
            <StatisticsView />
          </Route>
          <Route>
            <LiveStreamView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
