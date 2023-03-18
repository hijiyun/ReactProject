import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import PrivateRoute from "./Route/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import AdminProduct from "./page/AdminProduct";
import { useLocation } from "react-router-dom";

import { userActions } from "./action/userAction";
import ProductDetail from "./page/ProductDetail";
function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(userActions.loginWithToken());
  }, []);
  return (
    <div>
      {!location.pathname.includes("admin") && <Navbar user={user} />}
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/admin/product"
          element={
            <PrivateRoute>
              <AdminProduct />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
