import { Component } from 'react';
import Form from 'react-bootstrap/Form';


  class BeastForm extends Component {
    filter = (event) => {
      let inputValue = (event.target.value);
      let beastList = this.props.list;
      if (inputValue) {
        beastList = this.props.list.filter(beast => beast.title.includes(inputValue) )
      }
      this.props.updateBeastList(beastList)
    }
    render() {
      return (
        <form id = "form">
          <label>
            Search Horned Animals
            <input
              name="isGoing"
              type="text"
              onChange={this.filter} />
          </label>
        </form>
      );
    }
  }


  export default BeastForm;