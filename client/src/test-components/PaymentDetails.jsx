import React from "react";

const PaymentDetails = ({ selectedMethod }) => {
  const renderForm = () => {
    switch (selectedMethod) {
      case "Credit Card":
        return (
          <form className="border p-4">
            <h5 className="mb-4">Credit Card Info</h5>
            <div className="form-group mb-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Name on Card</label>
              <input
                type="text"
                className="form-control"
                placeholder="Card holder name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Card Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="XXXX XXXX XXXX XXXX"
                required
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Expiration</label>
                <input type="month" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>CVV</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </form>
        );
      case "Net Banking":
        return (
          <form className="border p-4">
            <h5 className="mb-4">Net Banking Info</h5>
            <div className="form-group mb-3">
              <label>Select Your Bank</label>
              <select className="form-control">
                <option value="">Select Bank</option>
                <option value="bank1">Bank 1</option>
                <option value="bank2">Bank 2</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Proceed to Bank
            </button>
          </form>
        );

      case "Debit Card":
        return (
          <form className="border p-4">
            <h5 className="mb-4">Debit Card Info</h5>
            {/* Reuse similar to Credit Card */}
          </form>
        );
      case "UPI":
        return (
          <form className="border p-4">
            <h5 className="mb-4">UPI Payment</h5>
            <div className="form-group mb-3">
              <label>Enter UPI ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. yourname@bank"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return <div>{renderForm()}</div>;
};

export default PaymentDetails;
