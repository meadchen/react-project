import s from "./NewMessage.module.css";
import React from "react";
import {addMessActionCreator, updateMessActionCreator} from "../../../redux/messages-reducer";
import {CreateMessage} from "./NewMessage";

export const CreateMessageContainer = (props) => {
    let addNewMessage = () =>{
        props.store.dispatch(addMessActionCreator());
    }
    let state = props.store.getState().messagesPage;
    let onMesChange = (textMessage) => {
        props.store.dispatch(updateMessActionCreator(textMessage));
    }
    return (
        <CreateMessage addMessage ={ addNewMessage }
                       updateMessage={ onMesChange }
                       newMesText={state.newMesText}/>
    );
}

