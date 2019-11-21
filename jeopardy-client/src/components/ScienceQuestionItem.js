import React, { Component } from 'react';
import './ScienceQuestionItem.css';
import ReactCardFlip from 'react-card-flip';


class ScienceQuestionItem extends Component {


    constructor() {
        super();
        this.state = {
            isFlipped: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}))
    }

    render() {

        const { id, title, title1, title2, title3, result1, result2, result3 } = this.props.data

        function check() {
            if (result1 === true) {
                return <p>{title1}</p>
            } else if (result2 === true) {
                return <p>{title2}</p>
            } else if (result3 === true) {
                return <p>{title3}</p>
            }
        }

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div className="Front" id={id}>
                    <h1>{title}</h1>
                    <p>{title1} <button onClick={this.handleClick}>Valitse</button></p>
                    <p>{title2} <button onClick={this.handleClick}>Valitse</button></p>
                    <p>{title3} <button onClick={this.handleClick}>Valitse</button></p>
                </div>
                <div className="Back" id={id}>
                    <h1>{title}</h1>
                    <p>Oikea vastaus on:</p>
                    <p>{check()}</p>
                    <p><button onClick={this.handleClick}>Takaisin</button></p>
                </div>

            </ReactCardFlip>
        );
    }
}

export default ScienceQuestionItem;



// <Front data={this.props.data}>
// <button onClick={this.handleClick}>Click to flip</button>
//     </Front>


//     <Back data={this.props.data}>
// <button onClick={this.handleClick}>Click to flip</button>
//     </Back>