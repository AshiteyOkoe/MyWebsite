import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { AppRoutes } from "./routes";
import './index.css';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
}