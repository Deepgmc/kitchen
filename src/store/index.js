import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'


const store = createStore(reducers)

window.store = store

export default store