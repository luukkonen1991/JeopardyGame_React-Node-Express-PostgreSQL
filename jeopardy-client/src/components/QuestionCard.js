import React, { Component } from 'react';
import './QuestionCard.css';
import Popup from 'reactjs-popup';
import OptionCard from './OptionCard';

class QuestionCard extends Component {

  state = { answered: false }

  render() {

    const { id, ctitle, summary, title, difficulty, category, title1, result1, title2, result2, title3, result3 } = this.props.question
    let naytettavaKomponentti;
    if (this.state.answered) {
      naytettavaKomponentti = <p>Vastattu jo</p>
      // naytettavaKomponentti = 
      // <div className="options">
      //   <h3>{title}</h3>
      //   <p>{title1}</p>
      //   <p>{title2}</p>
      //   <p>{title3}</p>
      // </div>
    }
    else {
      naytettavaKomponentti = <div>
        <h3>Category: {ctitle}</h3>
        <p>Difficulty {difficulty}</p>
        <OptionCard data={this.props.question} />
      </div>
    }
    return (
      <div className="question-card" key={id} onClick={() => { this.setState({ answered: !this.state.answered }) }}>
        {naytettavaKomponentti}
        <Popup
          modal
          trigger={<button className="card-btn"> Try!</button>} position="center">
          <div className="popup">
            <h3>{title}</h3>
            <p>{title1}</p>
            <p>{title2}</p>
            <p>{title3}</p>
          </div>
        </Popup>
      </div>
    );
  }
}

export default QuestionCard;

        // <button className="card-btn" type="button">Try your luck!</button>











// <OptionCard data={this.props.question} />
