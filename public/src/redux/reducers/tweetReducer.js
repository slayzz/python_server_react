function getId(todos) {
    return todos.reduce((maxId, todo) =>{
        return Math.max(todo.id, maxId);
    }, -1) + 1;
}

export default function reducer(todos = [], action){
    switch (action.type){

        case 'ADD_TWEET':
            return [{
                text:action.text,
                liked: false,
                id: getId(todos)
            }, ...todos];
        case 'LIKE_TWEET':
            return todos.map((todo) => {
                return todo.id === action.id ?
                    Object.assign({}, todo, {
                        liked: !todo.liked
                    }) : todo;
            });
        case 'DELETE_TWEET':
            return todos.filter((todo) => {
                return todo.id !== action.id;
            });
        default:
            return todos;
    }
}
