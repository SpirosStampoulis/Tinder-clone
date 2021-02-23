import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:userId">
            <Header backButton="/chat" profilePic />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" profilePic />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
