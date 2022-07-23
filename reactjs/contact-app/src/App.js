import React from "react";
import "./App.css";

import Header from './components/Header';
import AddContact from './components/AddContact';

function App() {
  return (
      <div className="ui container">
        <Header></Header>
        <AddContact></AddContact>
      </div>
  );
}

export default App;
