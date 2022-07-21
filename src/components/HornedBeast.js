import { Component } from "react";
import Card from 'react-bootstrap/Card';


class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks:0,
    }
  }

  handleClick = () => {
    this.setState({clicks: this.state.clicks+1});
    console.log(this.state.clicks);
  }

  render() {
    return (
      <Card id= 'beasts' style={{ width: '20rem' }}>
      <Card.Body class='cardbody'>
        <Card.Title class='cardtitle'>{this.props.title}</Card.Title>
        <Card.Img
            class='cardimage'
            alt={this.props.title}
            height="200"
            width="250"
            src={this.props.image_url}
            onClick={this.handleClick}
            />
             <Card.Text class='card-text'>{this.props.description} </Card.Text>
             <Card.Text class='card-text'>&hearts; ={this.state.clicks} </Card.Text>
            </Card.Body>
            </Card>
    );
  }
}


export default HornedBeast;

