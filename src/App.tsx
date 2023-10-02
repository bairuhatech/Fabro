import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./App/homeScreen";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div>
      <ConfigProvider>
        <Routes>
          <Route index element={<HomeScreen />} />
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
