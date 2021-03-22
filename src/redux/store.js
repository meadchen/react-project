
import { dialogsReducer } from './messages-reducer';
import profileReducer from "./profile-reducer.js";
import likesReducer from "./likeReducer";

const store = {
    _state: {
        profilePage:{
            postsData: [
                {message: "Hi, how are you? :)", id: 1, likeCount: "2"},
                {message: "Viva la JS!", id: 2, likeCount: "11"},
                {message: "No pasaran!", id: 3, likeCount: "8"},
                {message: "Omnia mea mecum porto", id: 4, likeCount: "33"}
            ],
            newPostText: ""
        },
        messagesPage:{
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

        },
        sidebar:{
            friends: [
                {id: 1, name: "Vova", src: "https://telegram.im/img/m_p_k_live"},
                {id: 2, name: "Mama", src: "https://cs13.pikabu.ru/avatars/2800/x2800367-539925528.png"},
                {id: 3, name: "Bogdana", src: "https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"},
                {id: 4, name: "Johni", src: "https://telegram.im/img/m_p_k_live"},
                {id: 5, name: "Terminator", src: "https://cs13.pikabu.ru/avatars/2800/x2800367-539925528.png"},
                {id: 6, name: "Anya", src: "https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"}
            ]
        }

    },
    _callSubscriber() {
    },
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.profilePage.postsData.likeCount = likesReducer(this._state.profilePage.postsData.likeCount, action);
        this._callSubscriber(this._state);
    }
}



window.store = store;
export default store;
