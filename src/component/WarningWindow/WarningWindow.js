import React from 'react';
import { Redirect } from 'react-router-dom'
import style from './WarningWindow.module.css'

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
            <div className={style.moduleWindow}>
                {this.renderRedirect()}
                <div>{this.props.warningMessage}</div>
                <div>
                    <button className={style.agree} onClick={this.setRedirect}>Yes</button>
                    <button className={style.disagree} onClick={() => this.props.setIsVisible(false)}>No</button>
                </div>
            </div>
        )
    }
}
export default WarningWindow

