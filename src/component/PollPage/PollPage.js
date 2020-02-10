import React from 'react';
import WarningWindowContainer from '../WarningWindow/WarningWindowContainer';
import PollFormContainer from '../PollForm/PollFormContainer';
import style from './PollPage.module.css'

const PollPage = (props) => {
    return (
        <div className={style.pollBody}>
            <h1>Poll</h1>
            <PollFormContainer />
            <WarningWindowContainer />
        </div>
    )
}

export default PollPage