import { BrowserRouter, Routes, Route } from "react-router-dom";
import EncoderDecoderPage from "./pages/EncoderDecoderPage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route element={<Layout />}>
          <Route path="encoder" element={<EncoderDecoderPage />} />
          <Route path="decoder" element={<EncoderDecoderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
