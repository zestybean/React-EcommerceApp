import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$5",
    image:
      "https://www.rei.com/dam/content_team_010818_52427_htc_running_shoes_hero2_lg.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook.",
    price: "$100",
    image:
      "https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
