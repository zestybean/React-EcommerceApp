import React from "react";

import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Cart = ({ cart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart! :(
    </Typography>
  );

  const FilledCart = () => (
    <div>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid items xs={12} sm={4} key={item.id}>
            <Typography variant="body2">{item.name}</Typography>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkout}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar}></div>
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
