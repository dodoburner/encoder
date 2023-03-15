import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route path="encoder" element={<div>encoder</div>} />
          <Route path="decoder" element={<div>decoder</div>} />
          <Route path="*" element={<div>You messed up</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
