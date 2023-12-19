import "./App.scss";
import * as React from "react";
import SideMenu from "./components/SideMenu/SideMenu";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello</h2>
      </header>
      <SideMenu />
    </div>
  );
};

export default App;
