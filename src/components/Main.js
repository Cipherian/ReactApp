import { Component } from "react";
import HornedBeast from "./HornedBeast.js";
import list from "../components/data.json";
import {Container} from 'react-bootstrap';

class Main extends Component {

  render() {
    return(
      <Container fluid id = 'main'>
        {list.map(beast =>
          <HornedBeast
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description} 
            handleShowModal = {this.props.handleShowModal}
            />
          )};
              </Container>
    )
  }
}

export default Main;
