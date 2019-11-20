import React, { Component } from 'react';
import './ScienceQuestions.css';
import ScienceQuestionItem from './ScienceQuestionItem';



class ScienceQuestions extends Component {

    state = {
        scienceQuestions: []
    }

    componentDidMount(){
        fetch("api/questions/tiede")
        .then(res => res.json())
        .then(res => this.setState({scienceQuestions: res}))
        .then(console.log(this.state.scienceQuestions))
        .catch(()=> this.setState({hasErrors: true}));
    }
    render() {
        const scienceItem = this.state.scienceQuestions
        .map((question) =>{
            return <ScienceQuestionItem data = {question}/>
        } )
        return (
            <div className="MainDiv">
                {scienceItem}
            </div>
        );
    }
}

export default ScienceQuestions;