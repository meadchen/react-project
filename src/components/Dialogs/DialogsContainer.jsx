import React from "react";
import {addMessActionCreator, updateMessActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMesText: state.messagesPage.newMesText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: () => {
            dispatch(addMessActionCreator());
        },
        updateMessage: (textMessage) => {
            dispatch(updateMessActionCreator(textMessage));
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

