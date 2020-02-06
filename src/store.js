import {combineReducers, createStore} from 'redux'


//引入的rootReducer相当于 reducer 中导出的combineReducers
import rootReducer from './reducers'

export default createStore(rootReducer);