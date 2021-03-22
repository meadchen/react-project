const ADD_LIKE='ADD-LIKE';


let initionalState = {
    postsData: [
        {message: "Hi, how are you? :)", id: 1, likeCount: "2"},
        {message: "Viva la JS!", id: 2, likeCount: "11"},
        {message: "No pasaran!", id: 3, likeCount: "8"},
        {message: "Omnia mea mecum porto", id: 4, likeCount: "33"}
    ],
    newPostText: ""
}

let likesReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_LIKE:
            state.postsData.likeCount = action.like;
            return state;
        default:
            return state;
    }

};

export const addLikeActionCreator = (likes) =>
    ({type: ADD_LIKE, like: likes });

export default likesReducer;