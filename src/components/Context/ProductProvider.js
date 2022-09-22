import React, { createContext, useReducer } from 'react'
import { product } from './product'
import {reducer} from './reducer'
export const ProductContext = createContext()

export const ProductProvider = (props) => {

  const initialState = {
    product: product,
    cart: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ProductContext.Provider value={{state, dispatch}}>
        {props.children}
    </ProductContext.Provider >
  )
}
