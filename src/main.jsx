import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import {ReduxProvider} from './redux/ReduxProvider.jsx'
import {store} from './redux/store.js'

const rerenderEntireTree = (state, dispatch) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ReduxProvider state={state} dispatch={dispatch}>
        <App />
      </ReduxProvider>
    </React.StrictMode>
  )
}

rerenderEntireTree(store.getState(), store.dispatch.bind(store))

store.subscribe(rerenderEntireTree)
