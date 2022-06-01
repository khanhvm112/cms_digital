import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const ListProvider = lazy(() =>
  import("./components/Provider/Views/ListProvider")
);

const AddProvider = lazy(() =>
  import("./components/Provider/Views/AddProvider")
);
const listProduct = lazy(() =>
  import("./components/list-product/views/productView")
);
const orderManager = lazy(() =>
  import("./components/ordersManager/views/index")
);
const Authenticator = lazy(() =>
  import("./components/Authenticator/controllers/authenticator")
);
const ListService = lazy(() =>
  import("./components/Service/Views/ListService")
);

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/listProvider" component={ListProvider} />
          <Route path="/addProvider" component={AddProvider} />

          <Route path="/listService" component={ListService} />
          <Route path="/listProduct" component={listProduct} />
          <Route path="/orderManager" component={orderManager} />
          <Route exact path="/Authenticator" component={Authenticator} />
          <Redirect to="/Authenticator" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
