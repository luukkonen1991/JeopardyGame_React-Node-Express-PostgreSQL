import React, { Component } from 'react';

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
        const historyQuestionItems = this.state.historyQuestions
        .map((question) =>{
            return <historyQuestionItems data = {question}/>
        } )
        return (
            <div>
                 {historyQuestionItems}
            </div>
        );
    }
}

export default HistoryQuestions;