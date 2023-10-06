import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./App/homeScreen";
import { ConfigProvider } from "antd";
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
