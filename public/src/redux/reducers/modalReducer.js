

export default function reducer(modal = {}, action){
    switch (action.type){

        case 'MODAL_REGISTER':
            return { displayStyle: { display : action.decor } };
        default:
            return modal;
    }
}
