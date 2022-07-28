import { Component } from "react";
import Form from "react-bootstrap/Form";

class BeastForm extends Component {
  filterTitle = (event) => {
    let inputValue = event.target.value;
    let beastList = this.props.list;
    if (inputValue) {
      beastList = this.props.list.filter((beast) =>
        beast.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      this.props.updateBeastList(beastList);
    }
  }

  filterHorns = (event) => {
    let inputValue = event.target.value;
    let beastList = this.props.list;
    if (inputValue) {
      beastList = this.props.list.filter((beast) =>
        beast.horns.toString().includes(inputValue)
      );
      this.props.updateBeastList(beastList);
    }
  };
    
  render() {
    return (
      <Form id="form">
        <Form.Group>
          <Form.Label>
            Filter by Title
          </Form.Label>
          <Form.Control
            name="isGoing"
            type="text"
            onChange={this.filterTitle}
            className="inputfield"
          />
          <Form.Label>
            Filter by Horns
          </Form.Label>
          <Form.Control
            name="isGoing"
            type="number"
            onChange={this.filterHorns}
            className="inputfield"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default BeastForm;
