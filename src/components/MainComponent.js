import React, { Component } from "react";
import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import Home from './HomeComponent';
// import About from './AboutComponent';
// import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          {/* <Route path='/aboutus' component={AboutUs} />
          <Route path='/contactus' component={ContactUs} /> */}
          <Redirect to='/home' />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;
