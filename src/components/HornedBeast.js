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
  }

  render() {
    return (
      <Card id= 'beasts' style={{ width: '20rem' }}>
      <Card.Body className='cardbody'>
       
        <Card.Title className='cardtitle' onClick={this.handleClick}>{this.props.title}</Card.Title>
        <Card.Img
            className='cardimage'
            alt={this.props.title}
            height="200"
            width="250"
            src={this.props.image_url}
            onClick={this.props.openModal}
            />
             <Card.Text className='card-text'>{this.props.description} </Card.Text>
             <Card.Text className='card-text'>&hearts; ={this.state.clicks} </Card.Text>
            </Card.Body>
            </Card>
    );
  }
}


export default HornedBeast;

