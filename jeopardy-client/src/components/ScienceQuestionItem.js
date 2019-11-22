import React, { Component } from 'react';
import './ScienceQuestionItem.css';
import ReactCardFlip from 'react-card-flip';


class ScienceQuestionItem extends Component {


    constructor() {
        super();
        this.state = {
            isFlipped: false,
            answer: '',
            color: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    }

    check(data) {
        if (data === true) {
            this.setState({ answer: 'Correct' })
            this.setState({color: 'BackCorrect'})
        } else {
            this.setState({ answer: 'Incorrect' })
            this.setState({color: 'BackWrong'})
        }
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
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" key={id}>
                <div className="Front1" id={id}>
                    <h3>{title}</h3>
                    <p onClick={() => this.check(result1)}>{title1} <button value={result1} onClick={this.handleClick}>Select</button></p>
                    <p onClick={() => this.check(result2)}>{title2} <button value={result2} onClick={this.handleClick}>Select</button></p>
                    <p onClick={() => this.check(result3)}>{title3} <button value={result3} onClick={this.handleClick}>Select</button></p>
                </div>
                <div className={this.state.color} id={id}>
                    <p>Your answer was:</p>
                    <h2>{this.state.answer}</h2>
                    <p>The correct answer is:</p>
                    {check()}
                    <p><button onClick={this.handleClick}>Back</button></p>
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