import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import Register from "./pages/Register";
import Stocks from "./pages/Stocks";
import Stock from "./pages/Stock";
import ReadNews from "./pages/ReadNews";
import News from "./pages/News";
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser}></Login>} />
        <Route
          path="/register"
          element={<Register setUser={setUser}></Register>}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home user={user} />} />
          <Route path="stocks">
            <Route index element={<Stocks />} />
            <Route path=":stockId" element={<Stock />} />
          </Route>
          <Route path="news">
            <Route index element={<News />} />
            <Route path=":newsId" element={<ReadNews />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
