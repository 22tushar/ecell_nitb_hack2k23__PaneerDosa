import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Adminpage from "./components/admin/adminpage";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/authSlice";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Oders";
import Orders1 from "./components/admin/Orders1"
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";
import AllTPO from "./components/company/Orders";
import Algorithm from "./components/admin/Algorithm";
import Dashboardc from "./components/company/Dashboard";
import HRequest from "./components/company/hiringrequest";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="algorithm" element={<Algorithm/>} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/company" element={<Dashboardc />}>
              <Route path="Orders" element={<AllTPO/>} />
              <Route path="hiringrequest" element={<HRequest/>} />
            </Route>
            <Route path="/admin" element={<Dashboard />}>
              <Route path="adminpage" element={<Adminpage />} />
              <Route path="summary" element={<Summary />} />
              <Route path="products" element={<Products />}>
                <Route path="create-product" element={<CreateProduct />} />
              </Route>
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
              <Route path="orders1" element={<AllTPO/>} />
              {/* <Route path="alltpo" element={<TPOlist/>} /> */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
