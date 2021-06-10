import React, { useContext, useState } from "react";
import { withRouter } from "react-router";
import CartList from "../../components/CartList/CartList";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { CartContext } from "../../context/Cart/CartContext";
import { AuthContext } from "../../context/Auth/AuthContext";
import { processOrderPayment } from "./Order.service";
import { showToast } from "../../utils/common";
import{ ROUTE_HOME} from '../../utils/constants';

const OrderContainer = ({history}) => {
  const cartContext = useContext(CartContext);
  const authContext = useContext(AuthContext);
  const [checkoutButtonDisabled,setCheckoutButtonDisabled] = useState(false);

  const removeFromCartHandler = (productId) => {
    cartContext.removeFromCart(productId);
  };

  const updateCardQuantity = (product, quantity) => {
    cartContext.addItemToCart(product, quantity);
  };

  const checkoutHandler = async () => {
    if (authContext.checkAuthentication()) {
      if (cartContext.totalPrice) {
        try {
          setCheckoutButtonDisabled(true);
          showToast("Placing Order...");
          const cardInfo = {
            cc: "4242424242424242",
            cvv: "999",
            expire: "0822",
          };
          const productIds = cartContext.cart.map((item) => item.id);
          const userId = authContext.getCurrentUser().attributes.sub;
          await processOrderPayment(
            cardInfo,
            cartContext.totalPrice,
            productIds,
            userId
          );
          showToast("Order placed succesfully.");
          cartContext.emptyCart();
          history.push(ROUTE_HOME);
        } catch (error) {
          showToast("Error in placing order.");
          setCheckoutButtonDisabled(false);
        }
      }
    } else {
      showToast("Login is required before placing order.");
    }
  };

  return cartContext.cart.length ? (
    <div className={`flex-row`}>
      <CartList
        cartItems={cartContext.cart}
        removeFromCartHandler={removeFromCartHandler}
        updateCardQuantity={updateCardQuantity}
      />
      <OrderSummary
      checkoutButtonDisabled={checkoutButtonDisabled}
        totalPrice={cartContext.totalPrice}
        checkoutHandler={checkoutHandler}
      />
    </div>
  ) : (
    <p>No items in cart.</p>
  );
};

export default withRouter(OrderContainer);
