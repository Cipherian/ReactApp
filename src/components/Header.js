import { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Beastly Animals with Horns'
    }
  }

  clickHander = () => {
    let mini = this.state.header === 'Beastly Animals with Horns'? <p id = 'bigHeader'>Beastly Animals with Horns</p>: 'Beastly Animals with Horns'; 
    this.setState({header: mini}); 
  }

  render() {
    return (
      <div>
      <h1 
      onClick={this.clickHander}> 
      {this.state.header}
      </h1>
      </div>
    )
  }
}

export default Header;