import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_ORDER,
  ROUTE_SHOP, ROUTE_TERMS,
} from "../../utils/constants";

//Lazy load routes
const HomeContainer = React.lazy(() => import("../Home/Home"));
const LoginContainer = React.lazy(() => import("../Login/Login"));
const ShopContainer = React.lazy(() => import("../Shop/Shop"));
const ProductDetailContainer = React.lazy(() =>
  import("../ProductDetails/ProductDetails")
);
const OrderContainer = React.lazy(() => import("../Order/Order"));

const Routes = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route
          exact={true}
          path={ROUTE_HOME}
          component={() => <HomeContainer />}
        />

        <Route
          exact={true}
          path={ROUTE_LOGIN}
          component={() => <LoginContainer />}
        />
        <Route
          exact={true}
          path={`${ROUTE_SHOP}`}
          component={() => <ShopContainer />}
        />
        <Route
          exact={true}
          path={`${ROUTE_SHOP}/:id`}
          component={() => <ProductDetailContainer />}
        />
        <Route
          exact={true}
          path={`${ROUTE_ORDER}`}
          component={() => <OrderContainer />}
        />
      </Switch>
    </Suspense>
  );
};

export default Routes;
