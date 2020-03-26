function save(state={
    total:[]
}, action){
    switch(action.type){
       case 'KEEP_STATUS':
           return {
            total:action.data
           }
        default:
            return state;
    }

}

export default save;