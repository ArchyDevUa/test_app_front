import React from "react";
import { Route, Routes ,BrowserRouter as Router} from "react-router-dom";
import { Home, PageNotFound } from "./pages";
import MainLayout from "./components/mainLayout/mainLayout";

function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRoutes;
