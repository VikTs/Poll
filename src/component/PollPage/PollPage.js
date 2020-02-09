import React from 'react';
import WarningWindowContainer from '../WarningWindow/WarningWindowContainer';
import PollFormContainer from '../PollForm/PollFormContainer';

const PollPage = (props) => {
    return (
        <>
            <h1>Poll</h1>
            <PollFormContainer />
            <WarningWindowContainer />
        </>
    )
}

export default PollPage