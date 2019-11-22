import React, { Component } from 'react';
import AnimalQuestions from './AnimalQuestions';
import './AnimalQuestions.css';
import HistoryQuestions from './HistoryQuestions';
import './HistoryQuestions.css';
import NavBar from './NavBar';
import ScienceQuestions from './ScienceQuestions';


class MainContainer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ScienceQuestions />
                <HistoryQuestions />
                <AnimalQuestions />
            </div>
        );
    }
}

export default MainContainer;

