let actions = {

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
    }

};

export default actions;
