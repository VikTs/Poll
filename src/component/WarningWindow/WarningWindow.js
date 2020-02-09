import React from 'react';
import { setIsVisibleCreator, countAnswersCreator } from '../redux/warning-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class WarningWindow extends React.Component {
    state = { redirect: false }

    setRedirect = () => {
        this.setState({ redirect: true })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/result' />
        }
    }
    render() {
        return (
            this.props.isVisible &&
            <div>
                {this.renderRedirect()}
                {this.props.warningMessage}
                <button onClick={this.setRedirect}>Yes</button>
                <button onClick={() => this.props.setIsVisible(false)}>No</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isVisible: state.warning.isVisible,
    warningMessage: state.warning.warningMessage
})


let mapDispatchToProps = (dispatch) => {
    return {
        setIsVisible: (isVisible) => {
            dispatch(setIsVisibleCreator(isVisible));
        },
        countAnswers: () => {
            dispatch(countAnswersCreator());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WarningWindow)

