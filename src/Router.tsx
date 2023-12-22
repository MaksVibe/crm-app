import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "./pages/Customers/Customers";
import Dashboard from "./pages/Dashboard/Dashboard";
import Help from "./pages/Help/Help";
import Income from "./pages/Income/Income";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile/Profile";
import Promote from "./pages/Promote/Promote";

export const DefaultRoutes = {
  dashboard: <Dashboard />,
  product: <Product />,
  customers: <Customers />,
  income: <Income />,
  promote: <Promote />,
  help: <Help />,
  profile: <Profile />,
};

const Router = () => (
  <Routes>
    {Object.keys(DefaultRoutes).map((route, index) =>
      route === "customers" ? (
        <Route path={route} element={DefaultRoutes[route]} key={index}>
          <Route path=":page" element={DefaultRoutes[route]} />
        </Route>
      ) : (
        <Route path={route} element={DefaultRoutes[route]} key={index} />
      )
    )}
  </Routes>
);

export default Router;
