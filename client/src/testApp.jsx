import React, { useState } from "react";
import PaymentDetails from "./test-components/PaymentDetails";
import PaymentHeader from "./test-components/PaymentHeader";
import Products from "./test-components/ProductInput";

const AppTest = () => {
  const [selectedMethod, setSelectedMethod] = useState("Credit Card");
  const [product, setProduct] = useState([]);

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const getData = (ProductData) => {
    setProduct([...product, ProductData]);
  };

  console.log(product);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Payment Checkout</h2>
      <Products ToSend={getData} />
      <PaymentHeader
        onMethodChange={handleMethodChange}
        selectedMethod={selectedMethod}
      />
      <PaymentDetails selectedMethod={selectedMethod} />
    </div>
  );
};

export default AppTest;
