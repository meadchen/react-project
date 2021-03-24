import s from "./NewMessage.module.css";
import React from "react";
import {addMessActionCreator, updateMessActionCreator} from "../../../redux/messages-reducer";
import {CreateMessage} from "./NewMessage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMesText: state.newMesText
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


export const CreateMessageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage);

