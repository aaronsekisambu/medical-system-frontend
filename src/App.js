import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import CategoriesGrihaSeva from "./screens/CategoriesGrihaSeva";
import CreateAccount from "./screens/CreateAccount";
import Feedback from "./screens/Feedback";
import HamburgerGrihaSeva from "./screens/HamburgerGrihaSeva";
import Login from "./screens/Login";
import Settings from "./screens/Settings";
import SignUp from "./screens/SignUp";
import Timeline from "./screens/Timeline";
import YourOrders from "./screens/YourOrders";
import Filter from "./screens/Filter";
import ScheduleDetails from "./screens/ScheduleDetails";
import OrderConfirmation from "./screens/OrderConfirmation";
import ViewOrderDetails from "./screens/ViewOrderDetails";
import ServiceByCategory from "./screens/ServiceByCategory";
import OrderDetails from "./screens/OrderDetails";
import Description from "./screens/Description";
import AddressDetails from "./screens/AddressDetails";
import VerifyMobile from "./screens/VerifyMobile";
import "./style.css";
import LandingPageNurse from "./screens/LandingPageNurse.js";

function App(props) {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route
        path="/CategoriesGrihaSeva/"
        exact
        component={CategoriesGrihaSeva}
      />
      <Route path="/CreateAccount/" exact component={CreateAccount} />
      <Route path="/Feedback/" exact component={Feedback} />
      <Route path="/HamburgerGrihaSeva/" exact component={HamburgerGrihaSeva} />
      <Route path="/landingPageNurse/" exact component={LandingPageNurse} />
      <Route path="/Login/" exact component={Login} />
      <Route path="/Settings/" exact component={Settings} />
      <Route path="/SignUp/" exact component={SignUp} />
      <Route path="/Timeline/" exact component={Timeline} />
      <Route path="/YourOrders/" exact component={YourOrders} />
      <Route path="/filter/:user_id" exact component={Filter} />
      <Route
        path="/ServiceByCategory/:type/:id/:title/:service_id/confirmAddress/ScheduleDetails/"
        exact
        component={ScheduleDetails}
      />
      <Route
        path="/ServiceByCategory/:type/:id/:title/:service_id/confirmAddress/ScheduleDetails/OrderConfirmation"
        exact
        component={OrderConfirmation}
      />
      <Route
        path="/ServiceByCategory/:type/:id"
        exact
        component={ServiceByCategory}
      />
      <Route path="/YourOrders/OrderDetails/:id" exact component={OrderDetails} />
      <Route path="/YourOrders/ViewOrderDetails/:id/ViewOrderDetails" exact component={ViewOrderDetails} />
      <Route
        path="/ServiceByCategory/:type/:id/:title/:service_id"
        exact
        component={Description}
      />
      <Route
        path="/ServiceByCategory/:type/:id/:title/:service_id/confirmAddress/"
        exact
        component={AddressDetails}
      />
      <Route path="/VerifyMobile/" exact component={VerifyMobile} />
    </Router>
  );
}

export default App;
