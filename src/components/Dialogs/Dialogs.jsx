import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./MessageItem/Message";
import { CreateMessageContainer} from './NewMessage/NewMessageContainer'

const Dialogs = (props) => {
    debugger

    let dialogElements = props.store.getState().messagesPage.dialogsData.map(dialog => (
        <DialogItem name={dialog.name} id={dialog.id} src={dialog.src}/>));
    let messageElements = props.store.getState().messagesPage.messages.map(message => (<Message message={message.message}/>));


    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages_block}>
                {messageElements}
                <CreateMessageContainer store={props.store}/>
            </div>
        </div>
    )

}
export default Dialogs;