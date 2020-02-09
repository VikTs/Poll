import React from 'react';
import { setIsVisibleCreator, countAnswersCreator } from '../redux/warning-reducer';
import { saveAllAnswersCreator, setAgreeCreator } from '../redux/question-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class WarningWindow extends React.Component {
    state = { redirect: false }

    setRedirect = () => {        
        this.props.setAgree();
        this.props.saveAllAnswersCreator(JSON.parse(localStorage.getItem('formData')))
        this.setState({ redirect: true });
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
        },
        saveAllAnswersCreator: (formData) =>{
            dispatch(saveAllAnswersCreator(formData))
        },
        setAgree: ()=>{dispatch(setAgreeCreator())}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WarningWindow)

