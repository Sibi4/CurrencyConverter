import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { MyProvider } from "./components/my-context";

function App() {
  return (
    <div className="box">
      <MainPage />
    </div>
  );
}

export default App;
