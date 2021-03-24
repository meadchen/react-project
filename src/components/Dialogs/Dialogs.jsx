import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./MessageItem/Message";


const Dialogs = (props) => {


    let dialogElements = props.messagesPage.dialogsData.map(dialog => (
        <DialogItem name={dialog.name} id={dialog.id} src={dialog.src}/>));
    let messageElements = props.messagesPage.messages.map(message => (<Message message={message.message}/>));

    let addNewMessage = () =>{
        props.addMessage();
    }
    let onMesChange = (e) => {
        let textMessage = e.target.value;
        props.updateMessage(textMessage);
    }
    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages_block}>
                {messageElements}
                <div className={s.newMessage}>
                    <textarea onChange={onMesChange} value={props.newMesText}></textarea>
                    <button onClick={addNewMessage}>Add message</button>
                </div>
            </div>
        </div>
    )

}
export default Dialogs;