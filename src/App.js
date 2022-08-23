import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { AuthSharedLayout, NoAuthSharedLayout } from "./pages/SharedLayout";
import Login from "./pages/Login";
import { AuthRoute, NoAuthRoute } from "./pages/ProtectedRoute";
import Register from "./pages/Register";
import Stocks from "./pages/Stocks";
import Organization from "./pages/Organization";
import ReadNews from "./pages/ReadNews";
import News from "./pages/News";
const App = () => {
  const [user, setUser] = useState(
    JSON.parse(window.sessionStorage.getItem("user"))
  );
  useEffect(() => {
    setUser(JSON.parse(window.sessionStorage.getItem("user")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            <NoAuthRoute user={user}>
              <NoAuthSharedLayout />
            </NoAuthRoute>
          }
        >
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="register" element={<Register setUser={setUser} />} />
        </Route>
        <Route
          path="/"
          element={
            <AuthRoute user={user}>
              <AuthSharedLayout setUser={setUser} />
            </AuthRoute>
          }
        >
          <Route index element={<Home user={user} />} />
          <Route path="organizations">
            <Route index element={<Stocks orgId={user?._id} />} />
            <Route path=":orgId" element={<Organization user={user} />} />
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
};

export default App;
