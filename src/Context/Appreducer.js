export const Appreducer=(state,action)=>{

    switch (action.type) {
        case "Add_to_cart": return {...state,cart:[...state.cart,{...action.payload ,qty:1}]}
        case "Remove_from_cart": return {...state,cart:state.cart.filter((el)=>el._id != action.payload._id)}
            
        //     break;
    
        // default:
            // break;
    }
    
}