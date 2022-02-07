import "./App.css";
import "./assets/Styles/style.css";
import "./assets/Styles/HomePage.css";

import { Fragment } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css"

import ProtectedRouter from "./components/ProtectedRouter";
import HomePage from "./Screens/HomePage";

function App() {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  return (
    <>
      <ToastContainer />
      <Router>
        <Fragment>
          <Route exact path="/">
            {isLogin ? <Redirect to="/Dashboard" /> : <HomePage />}
          </Route>

          <ProtectedRouter path="/Dashboard" exact component={HomePage} />
        </Fragment>
      </Router>
    </>
  );
}

export default App;
