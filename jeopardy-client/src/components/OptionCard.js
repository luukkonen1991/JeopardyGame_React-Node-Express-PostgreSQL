import React, { Component } from 'react';
import './OptionCard.css';


class OptionCard extends Component {

  state = { showOptionCard: false }

  toggleCloseCard(){
    this.setState({
      showOptionCard: !this.state.showOptionCard
    });
  }
  
  render()
  
  { const {title, title1, title2, title3, result1, result2, result3} = this.props.data
    return (
      <div className="opiton-card">
        <h3>{title}</h3>
        <p>A: {title1}</p>
        <p>B: {title2}</p>
        <p>C: {title3}</p>
        <button className="card-btn" type="button" onClick={this.toggleCloseCard.bind(this)}>Try your luck!</button>
      </div>
    );
  }
}

export default OptionCard;