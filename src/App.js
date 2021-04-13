import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Layout/Navbar.js";
import Home from "./Pages/Home/HomePage";
import Personal from "./Pages/Personal/PersonalPage";
import Coaching from "./Pages/Coaching/CoachingPage";
import Companies from "./Pages/Companies/CompaniesPage";
import PublicationsPage from "./Pages/Publications/PublicationsPage";
import { Layout } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout className="root-layout">
        <Router>
          <div>
            <NavBar />
            <Route name="home" exact path="/" component={Home} />
            {/*<Route name="personal" exact path="/personal" component={Personal} />*/}
            <Route name="coaching" exact path="/coaching" component={Coaching} />
            <Route name="companies" exact path="/companies" component={Companies} />
            <Route name="publications" exact path="/publications" component={PublicationsPage} />
          </div>
        </Router>
      </Layout>
    );
  }
}

export default App;
