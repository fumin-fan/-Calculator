function deletes(state={
    total:[]
}, action){
    switch(action.type){
        case 'ADD_iTEM':
            return {
                total:state.total.concat([action.data])
            }
        case 'DELETE_iTEM':
           return {
            total:state.total.filter( item =>{
                return item.id !== action.id
            } )
           }
        case 'ADD_NUMBER':
            return {
                total:state.total.map( item =>{
                    if(item.id === action.id){
                        item.number++;
                    }
                    return item;
                } )
            }
        case 'ADD_ALL_NUMBER':
            return {
                total:state.total.map( item =>{
                    item.number++;
                    return item;
                } )
            }
        default:
            return state;
    }

}

export default deletes;