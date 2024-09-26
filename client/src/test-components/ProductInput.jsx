import React, { useState } from "react";

const Products = ({ ToSend }) => {
  const [data, setData] = useState([]);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = {};
    for (let pair of formData.entries()) {
      entries[pair[0]] = pair[1];
    }
    console.log(entries);
    // You can set data here if needed
    setData([...data, entries]);
    console.log(data);

    ToSend(entries);
  };

  return (
    <>
      <h1>Products</h1>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="amount">Amount</label>
        <input type="text" name="amount" /> <br />
        <label htmlFor="productinfo">Product Info</label>
        <input type="text" name="productinfo" /> <br />
        <button type="submit" role="button">
          Pay
        </button>
      </form>
    </>
  );
};

export default Products;
