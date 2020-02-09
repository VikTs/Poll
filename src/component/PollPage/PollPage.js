import React from 'react';
import WarningWindow from '../WarningWindow/WarningWindow';
import Poll from '../PollForm/PollForm';

const PollPage = (props) => {
    return (
        <>
            <h1>Poll</h1>
            <Poll />
            <WarningWindow />
        </>
    )
}

export default PollPage