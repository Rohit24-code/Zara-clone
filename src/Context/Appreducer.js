export const Appreducer=(state,action)=>{

    switch (action.type) {
        case "Add_to_cart": return {...state,cart:[...state.cart,{...action.payload ,qty:1}]}
        case "Remove_from_cart": return {...state,cart:state.cart.filter((el)=>el._id != action.payload._id)}
        case "Decrease_qty":    return {
          ...state,
          cart: state.cart.filter((el)=> el._id === action.payload._id ? el.qty -= 1 : el )
          ,
        };
        case "Increase_qty":    return {
          ...state,
          cart: state.cart.filter((el) =>
            el._id === action.payload._id ? (el.qty += 1) : el
          ),
        };
    
    
        default: return state
            break;
    }
    
}