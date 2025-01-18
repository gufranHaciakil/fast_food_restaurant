import { Route, Routes } from "react-router";
import App from "../../App";
import Main from "../main/Main";
import Transaction from "../../pages/transaction/Transaction";
import Booking from "../../pages/booking/Booking";
import { OrderStatus } from "../../pages/order-status/OrderStatus";
import Dashboard from "../../pages/dashboard/Dashboard";
import People from "../../pages/people/People";
import Wallet from "../../pages/wallet/Wallet";
import FoodItems from "../../pages/food-items/FoodItems";
import Reviews from "../../pages/reviews/Reviews";
import Authentication from "../../pages/authentication/Authentication";
import Setting from "../../pages/setting/Setting";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import NotFound from "../../pages/notFound/NotFound";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/orders_status" element={<OrderStatus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/people" element={<People />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/foodItems" element={<FoodItems />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
