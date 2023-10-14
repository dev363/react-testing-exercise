import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/Skill";
import { Counter } from "./components/counter/Counter";
import { AppProviders } from "./components/Provider/AppProvider";
import { MuiMode } from "./components/mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application />
      <Skills skills={["Html", "Reactjs"]} /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
