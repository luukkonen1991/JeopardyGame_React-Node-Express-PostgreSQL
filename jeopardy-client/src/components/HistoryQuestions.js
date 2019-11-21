import React, { Component } from 'react';
import HistoryQuestionItem from './HistoryQuestionItem';
import './HistoryQuestions.css';

class HistoryQuestions extends Component {

    state = {
        historyQuestions: []

    }

    componentDidMount(){
        fetch("api/questions/historia")
        .then(res => res.json())
        .then(res => this.setState({historyQuestions: res}))
        .then(console.log(this.state.historyQuestions))
        .catch(()=> this.setState({hasErrors: true}));
    }

    
    render() {
        const historyItem = this.state.historyQuestions
        .map((question) =>{
            return <HistoryQuestionItem data = {question}/>
        } )
        return (
            <div className="MainDiv">
                 {historyItem}
            </div>
        );
    }
}

export default HistoryQuestions;