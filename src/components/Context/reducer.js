const priceIncrease =(price , qty)=>{
    price = price  / (qty-1);
    price = price *qty
    return price 
}

const priceDecrease = (price, qty)=>{
    price = price/qty;
    
    price= price*(qty-1)
    console.log(price)
    return price
}


export const reducer = (state, action)=> {

// ============================================//
    //selected item's ID:
    let eachItemId = action.payload.id;    

    //selected individual Item:
    let eachItem = {...action.payload}

    // Current state of cart
    let currentCart = state.cart
// ============================================//



    switch(action.type){

        // ============================ ADD TO CART ==========================//
        case 'ADD_TO_CART':
            let alreadyExists = currentCart.find((e)=>e.id === eachItemId)
            if(alreadyExists){
                return {...state, cart: currentCart.map((elm)=> elm.id === eachItemId ? 
                        {...elm, 
                            qty: elm.qty + 1, 
                            price:  priceIncrease(elm.price,  (elm.qty+1))} : elm )}
            }
            else{
                return {...state, cart: [...currentCart, eachItem]}
            }




        // ======================== REMOVE FROM CART =========================//
        case 'REMOVE_FROM_CART':
            return {...state, cart: currentCart.filter((e)=>{
                return e.id !== eachItemId
            })}
        



        // ======================== INCERASE QTY =========================//
        case 'INCREMENT':
            let increasedQty = currentCart.map((e)=>{
                if(e.id === eachItemId ){
                    return {...e, qty: e.qty + 1, price:  priceIncrease(e.price,  (e.qty+1)) }
                }
                return e;
            })
            console.log(increasedQty)
            return {...state, cart: increasedQty }
        



        // ======================== DECREASE QTY =========================//
        case 'DECREMENT':
            let decreasedQty = currentCart.map((e)=>{
                if(e.id === eachItemId && eachItem.qty > 1){
                    return {...e, qty: e.qty - 1, price: priceDecrease(e.price, e.qty)}
                }
                return e;
            })
            return {...state, cart: decreasedQty}
        


        // ======================== DEFAULT STATE =========================//
        default:
            return state;
    }
}
