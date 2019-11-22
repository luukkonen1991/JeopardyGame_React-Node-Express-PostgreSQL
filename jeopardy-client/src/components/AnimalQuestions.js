import React, { Component } from 'react';
import AnimalQuestionItem from './AnimalQuestionItem';
import './AnimalQuestions.css';

class AnimalQuestions extends Component {

    state = {
        animalQuestions: []

    }

    componentDidMount(){
        fetch("api/questions/elaimet")
        .then(res => res.json())
        .then(res => this.setState({animalQuestions: res}))
        .catch(()=> this.setState({hasErrors: true}));
    }

    render() {
        const animalItem = this.state.animalQuestions
        .map((question) =>{
            return <AnimalQuestionItem data = {question} key = {question.id}/>
        } )

        return (
            <div className="MainDiv">
                {animalItem}
            </div>
        );
    }
}

export default AnimalQuestions;