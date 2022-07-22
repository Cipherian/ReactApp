import { Component } from 'react';


class Footer extends Component{
  constructor(props){
    super(props)
    this.state = {
      footer: 'created by Daniel Brott'
    }
  }

  clickHander = () => {
    let enlarge = this.state.footer === 'created by Daniel Brott'? <p id = 'bigfooter'>created by Daniel Brott</p>: 'created by Daniel Brott'; 
    this.setState({footer: enlarge}); 
  }

  render (){
    return (
      <div>
      <h2 
      onClick={this.clickHander}> 
      {this.state.footer}
      </h2>
      </div>
    )
  }
}

export default Footer; 