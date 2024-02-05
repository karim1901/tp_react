import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Reducer from './store.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(Reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
