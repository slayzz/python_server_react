
export default function reducer(user = {}, action){
    switch (action.type){

        case 'CREATE_USER_ID':
            return Object.assign({}, {
                // user: {
                    username: user.username,
                    id: action.id
                // }
            });
        default:
            return user;
    }
}
