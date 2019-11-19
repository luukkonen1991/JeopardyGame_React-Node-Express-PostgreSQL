import React, { Component } from 'react';
import QuestionCard from './QuestionCard';
import './AllQuestions.css';

class AllQuestions extends Component {

  state = {
    questions: []
  };

  componentDidMount() {
    fetch('api/questions/all')
    .then(res => res.json())
    .then(res => this.setState({ questions: res }))
    .then(console.log(this.state.questions))
    .catch(() => this.setState({ hasErrors: true }));
  }

  render() {

    const questionItems = this.state.questions
    .map((question) => {
      return <QuestionCard question={question} />
    })

    return (
      <div className="main-container">
        {questionItems}
      </div>
    );
  }
}

export default AllQuestions;