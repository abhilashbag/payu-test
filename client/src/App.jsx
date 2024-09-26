import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import PaymentGateWay from "./components/paymentGateWay";
import PaymentMethods from "./components/PaymentMethods";
import PaymentOptions from "./components/PaymentOptions";
import Products from "./components/products";
import Layout from "./Layout";
function App() {
  const [count, setCount] = useState(0);

  // return (
  //   <>
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Layout />}>
  //           <Route path="/products" element={<Products />}></Route>
  //           <Route path="/gateway" element={<PaymentGateWay />}></Route>
  //           <Route path="/options" element={<PaymentOptions />}></Route>
  //           <Route path="/methods" element={<PaymentMethods />}></Route>
  //         </Route>
  //       </Routes>
  //     </Router>
  //   </>
  // );
}

export default App;
