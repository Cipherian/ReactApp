import { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import Card from "react-bootstrap/Card";
import SelectedBeast from "./components/SelectedBeast.js";
import list from "./data.json";
import Container from 'react-bootstrap/Container';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      selectedBeast: {},
      showModal: false,
    };
  }

  handleExitModal = () => {
    this.setState({ showModal: false });
  };

  handleShowModal = (beastName) => {
    const selectedBeast = list.find(beast => beast.title === beastName);
    this.setState({ showModal: true, selectedBeast });
  };

  render() {
    return (
      <Container className="App">
        <Header />
        <Main handleShowModal={this.handleShowModal} />
        <SelectedBeast 
        showModal = {this.state.showModal} 
        handleExitModal = {this.handleExitModal}
        selectedBeast = {this.state.selectedBeast}
        />
        <Footer />
        </Container>
    );
  }
}

export default App;
