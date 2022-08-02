import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/index";
import Questions from "./components/Questions/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/questions" element={<Questions />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
