import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from "./components/Navbar";
import ToDoList from "./components/Lists";
//import "./App.css";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopNavBar />
        <ToDoList />
      </div>
    );
  }
}

export default App;
