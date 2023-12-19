import "./App.scss";
import * as React from "react";
import Layout from "./components/Layout/Layout";
import Router from "./Router";

const App: React.FC = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
