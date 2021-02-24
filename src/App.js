import React, { useState, useEffect } from "react";

import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  //Fetch the response form the server async
  const fetchProducts = async () => {
    //Returns a promise
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Products products={products} />
      <Navbar />
    </div>
  );
};

export default App;
