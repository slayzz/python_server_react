
export default function reducer(users = [], action){
    switch (action.type){

        //case 'CREATE_USER_ID':
            //return Object.assign({}, {
                //// user: {
                    //username: user.username,
                    //id: action.id
                //// }
            //});
        case 'GET_ALL_USERS':
            return [...action.data];
        default:
            return users;
    }
}
