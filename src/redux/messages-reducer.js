const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_MESSAGE='UPDATE-MESSAGE';


let initionalState={
    dialogsData: [
        {id: 1, name: "Vova", src: "https://telegram.im/img/m_p_k_live"},
        {id: 2, name: "Mama", src: "https://cs13.pikabu.ru/avatars/2800/x2800367-539925528.png"},
        {id: 3, name: "Bogdana", src: "https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"},
        {id: 4, name: "John Snow", src: "https://telegram.im/img/m_p_k_live"},
        {id: 5, name: "Terminator", src: "https://cs13.pikabu.ru/avatars/2800/x2800367-539925528.png"},
        {id: 6, name: "Anya", src: "https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"}
    ],
    newMesText: "",
    messages: [
        {message: "Hi", id: 1},
        {message: "Hello", id: 2},
        {message: "Hasta la vista", id: 3},
        {message: "Hi", id: 4},
        {message: "Hello", id: 5}
    ],
}
export const dialogsReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: (state.messages.length) + 1,
                message: state.newMesText,
            }
            state.messages.push(newMessage);
            state.newMesText = "";
            return state;
        case UPDATE_MESSAGE:
            state.newMesText = action.newMes;
            return state;
        default:
            return state;

    };

}

export const addMessActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessActionCreator = (textMessage) =>
    ({type: UPDATE_MESSAGE, newMes: textMessage});
