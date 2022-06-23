import React, { Suspense, useState,useEffect } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Layout from "../Layout/Layout";
import Home from '../Home/Home';
import Startups from '../Startups/Startups';
import routes from '../../routes';
// const Unauthorized = React.lazy(()=>import("../Unauthorized/Unauthorized"));

function withLayout(WrappedComponent,topBar) {
  return class extends React.PureComponent {
    render() {
      return (
        <Layout topBar={topBar}>
          <WrappedComponent />
        </Layout>
      );
    }
  };
}

const Loader = () => (
  <div id="preloader">
    <div id="status">
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  </div>
);

function App(props) {

    
  return (
    <>
      <Router>
          <Layout/>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/startups" element={<Startups />}></Route>
          </Routes>
      </Router>
    </>
  );
}
export default App;
