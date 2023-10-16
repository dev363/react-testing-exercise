import React from "react";
import "./App.css";
// import { Application } from "./components/application/Application";
// import { Skills } from "./components/skills/Skill";
// import { Counter } from "./components/counter/Counter";
import { AppProviders } from "./components/Provider/AppProvider";
import { MuiMode } from "./components/mui/MuiMode";
import { Users } from "./components/users/Users";
import UsersListing from "./components/users/UsersListing";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application />
      <Skills skills={["Html", "Reactjs"]} /> */}
        {/* <Counter /> */}
        {/* <MuiMode />
         */}
        <UsersListing />
      </div>
    </AppProviders>
  );
}

export default App;
