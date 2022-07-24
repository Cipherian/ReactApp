import { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import Card from 'react-bootstrap/Card';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showModal: false,
  //   };
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
