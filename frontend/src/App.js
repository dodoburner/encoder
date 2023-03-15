import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Layout}>
          <Route path="login" element={Login} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
