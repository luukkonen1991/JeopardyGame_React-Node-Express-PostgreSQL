import React, { Component } from 'react';
import { ClientRequest } from 'http';

class AnimalQuestions extends Component {

    state = {
        animalQuestions: []

    }

    componentDidMount(){
        fetch("api/questions/elaimet")
        .then(res => res.json())
        .then(res => this.setState({animalQuestions: res}))
        .then(console.log(this.state.animalQuestions))
        .catch(()=> this.setState({hasErrors: true}));
    }

    render() {
        const animalQuestionItems = this.state.animalQuestions
        .map((question) =>{
            return <animalQuestionItems data = {question}/>
        } )

        return (
            <div>
                {animalQuestionItems}
                
            </div>
        );
    }
}

export default AnimalQuestions;