import React, { Component } from "react";
import Contacts from "./component/contact/Contacts";
import Header from "./component/layout/Header";
import AddContact from "./component/contact/AddContacts";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manger" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
