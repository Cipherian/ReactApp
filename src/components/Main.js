import { Component } from 'react';
import list from '../components/data.json';
import HornedBeast from './HornedBeast.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentClicks: 0,
      beastList: list,
    }
  }

  
  beastClicks = () => {
    this.setState((state) => {
      return {currentClicks: state.currentClicks + 1}
    })
  }

  render(){
    console.log(this.state.currentBeast);
    return(
      <div id='main'>
        <HornedBeast 
        beasts={this.state.beastList} 
        clickBeast={this.beastClicks} 
        />
      </div>
    )
  }
}
export default Main;

