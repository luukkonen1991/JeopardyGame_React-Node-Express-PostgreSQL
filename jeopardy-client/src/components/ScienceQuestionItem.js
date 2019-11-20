import React, { Component } from 'react';
import './ScienceQuestionItem.css';

class ScienceQuestionItem extends Component {
    render() {

        const {id, title, difficulty} = this.props.data

        return (
            <div className="ItemCard" id={id}>
                <h3>{title}</h3>
                <p>{difficulty}</p>
            </div>
        );
    }
}

export default ScienceQuestionItem;