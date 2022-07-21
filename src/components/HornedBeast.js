import { Component } from "react";



class HornedBeast extends Component {
  render() {
    return (
      <div class="beast-list">
        {this.props.beasts.map((beast) => (
          <img
            alt=""
            src={beast.image_url}
            onClick={this.beastClicks}
          />
        ))}
      </div>
    );
  }
}

export default HornedBeast;
