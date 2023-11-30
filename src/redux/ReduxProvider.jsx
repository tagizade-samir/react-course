/* eslint-disable react/prop-types */
import React, {useContext} from 'react'

export const ReduxContext = React.createContext({
  dispatch: () => {},
  state: {},
})

export const ReduxProvider = ({children, state, dispatch}) => {
  return <ReduxContext.Provider value={{state, dispatch}}>{children}</ReduxContext.Provider>
}

export const useDispatch = () => {
  const {dispatch} = useContext(ReduxContext)

  return dispatch
}

export const useSelector = selectorFn => {
  const {state} = useContext(ReduxContext)
  const value = selectorFn(state)

  return value
}
