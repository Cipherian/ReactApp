import { Component } from "react";
import list from "../components/data.json";
import HornedBeast from "./HornedBeast.js";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hornedBeastList: list,
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  openModal = (beastName) => {
    const selectedBeast = list.find(beast => beast.title === beastName);
    this.setState({showModal: true, selectedBeast});
  };

  render() {
    return(
      <div id='main'>
        {this.state.hornedBeastList.map(beast =>
          <HornedBeast
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description} />
          )};
      </div>
    )
  }
}

export default Main;
