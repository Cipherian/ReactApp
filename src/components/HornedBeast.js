import { Component } from "react";


class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks:0,
    }
  }

  handleClick = () => {
    this.setState({clicks: this.state.clicks+1});
    console.log(this, this.state.clicks);
  }

  render() {
    return (
      <div class="beasts">
        <h2>{this.props.title}</h2>
          <img
            alt={this.props.title}
            height="250"
            width="250"
            src={this.props.image_url}
            onClick={this.handleClick}
            />
            <p>{this.props.description}</p>
            <p>&hearts; ={this.state.clicks}</p>
      </div>
    );
  }
}


export default HornedBeast;
