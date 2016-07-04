export default function reducer(modal={
	displayModal: {
		display : 'none'
	},
    which: 'none',
    topic: 'register'
} , action){

    switch (action.type){
        case 'MODAL_REGISTER':
            return Object.assign({},modal,{
                displayModal: {
                    display: action.style
                },
                which: action.which,
                topic: action.topic
            });
        case 'MODAL_LOGIN':
            return { displayLogin: { display: action.style } };
        default:
            return modal;
    }
}
