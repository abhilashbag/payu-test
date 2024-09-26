import React from "react";

const PaymentIndex = () => {
  const [selectedMethod, setSelectedMethod] = useState("Credit Card");

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Payment Checkout</h2>
      <PaymentHeader
        onMethodChange={handleMethodChange}
        selectedMethod={selectedMethod}
      />
      <PaymentDetails selectedMethod={selectedMethod} />
    </div>
  );
};
export default PaymentIndex;
