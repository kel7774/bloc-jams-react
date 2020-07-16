import React from "react";
import { Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import { Header } from "./styles/App";

function App() {
  return (
    <div className="App">
      <Header>
        <img
          src="/assets/bloc_jams_logo.png"
          alt="Bloc Jams Logo"
          width="100"
          height="100"
        />
        <nav>
          <Link to="/">Landing</Link>
          <Link to="/library">Library</Link>
        </nav>
      </Header>
      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
      </main>
    </div>
  );
}

export default App;
