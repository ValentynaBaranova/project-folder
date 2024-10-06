// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Убедитесь, что путь к store правильный
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LessonPage from "./components/LessonPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
