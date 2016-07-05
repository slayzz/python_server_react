import $ from 'jquery';



let actions = {
    modalShow: (decor) => {
        return {
            type: 'MODAL_REGISTER',
            style : decor.style,
            which: decor.which,
            topic: decor.topic
        };
    },

    addTodo: (text) => {
        return {
            type: 'ADD_TWEET',
            text: text
        };
    },

    likeTweet: (id) => {
        return {
            type: 'LIKE_TWEET',
            id: id
        };
    },

    deleteTweet: (id) => {
        return {
            type: 'DELETE_TWEET',
            id: id
        };
    },

    createNewUserId: () => {
        return {
            type: 'CREATE_USER_ID',
            id: Math.round(Math.random() * 100)
        };
    },
    setAllUsers: (data) => {
        return {
            type: 'SET_ALL_USERS',
            data
        };
    }

};

export default actions;
