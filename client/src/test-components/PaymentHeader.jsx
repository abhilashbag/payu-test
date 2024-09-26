import React from "react";

const PaymentHeader = ({ onMethodChange, selectedMethod }) => {
  const methods = ["Credit Card", "Net Banking", "Debit Card", "UPI"];

  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="btn-group">
        {methods.map((method, index) => (
          <button
            key={index}
            className={`btn ${
              selectedMethod === method ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => onMethodChange(method)}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentHeader;
