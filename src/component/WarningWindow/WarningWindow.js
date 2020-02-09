import React from 'react';
import { Redirect } from 'react-router-dom'


///ЕСЛИ ПОЛЕ ПУСТОЕ, ТО ПОКАЗАТЬ ВАРНИНГ

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
export default WarningWindow

