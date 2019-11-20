import React, { Component } from 'react';
import AnimalQuestions from './AnimalQuestions';
import './AnimalQuestions.css';
import HistoryQuestions from './HistoryQuestions';
import './HistoryQuestions.css';


class MainContainer extends Component {
    render() {
        return (
            <div>

                
                    <AnimalQuestions />
                    <HistoryQuestions />
               


            </div>
        );
    }
}

export default MainContainer;

/* <div className="animal">
</div>
                <div className="history"></div>
                <div className="science"></div> */