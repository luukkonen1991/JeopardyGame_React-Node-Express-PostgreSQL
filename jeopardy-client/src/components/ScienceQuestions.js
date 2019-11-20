import React, { Component } from 'react';

class ScienceQuestions extends Component {
    componentDidMount(){
        fetch("api/questions/tiede")
        .then(res => res.json())
        .then(res => this.setState({scienceQuestions: res}))
        .then(console.log(this.state.scienceQuestions))
        .catch(()=> this.setState({hasErrors: true}));
    }
    render() {
        const scienceQuestionItems = this.state.scienceQuestions
        .map((question) =>{
            return <scienceQuestionItems data = {question}/>
        } )
        return (
            <div>
                
            </div>
        );
    }
}

export default ScienceQuestions;