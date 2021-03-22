const ADD_POST='ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
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

let profileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: (state.postsData.length) + 1,
                message: state.newPostText,
                likeCount: 0
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST:
            state.newPostText = action.newText;
            return state;
        case ADD_LIKE:
            state.postsData.likeCount = action.like;
            return state;
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostActionCreator = (text) =>
    ({type: UPDATE_POST, newText: text});

export const addLikeActionCreator = (likes) =>
    ({type: ADD_LIKE, like: likes });

export default profileReducer;