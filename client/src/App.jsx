import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDataProvider } from "./contexts/UserDataContext.jsx";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

function App() {
  return (
    <div className="App">
      <UserDataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </UserDataProvider>
    </div>
  );
}

export default App;
