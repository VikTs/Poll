import { setIsVisibleCreator, countAnswersCreator } from '../redux/warning-reducer';
import { saveAllAnswersCreator, setAgreeCreator } from '../redux/question-reducer';
import { connect } from 'react-redux';
import WarningWindow from './WarningWindow';

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

