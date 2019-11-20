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
                <AnimalQuestions />
                <HistoryQuestions />
                <ScienceQuestions />
            </div>
        );
    }
}

export default MainContainer;

/* <div className="animal">
</div>
                <div className="history"></div>
                <div className="science"></div> */