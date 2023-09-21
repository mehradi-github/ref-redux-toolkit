import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Product from "./components/product";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Layout>
  );
}

export default App;
