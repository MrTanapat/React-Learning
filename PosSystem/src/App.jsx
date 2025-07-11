import { BrowserRouter, Routes, Route } from "react-router-dom"; //เพื่อใช้งานการเปลี่ยนหน้าแบบ Single Page Application(SPA)

import { Home, Auth, Orders } from "./pages";
import Header from "./components/shared/Header";
import BottomNav from "./components/shared/BottomNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
