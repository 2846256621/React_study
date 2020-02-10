// createStore是提供的一个创建 store 的方法
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
// rootReducer是相当于引入合并后的 reducer
//引入的rootReducer相当于 reducer 中导出的combineReducers
import rootReducer from './reducers'

// createStore的第一个参数必须是一个reducer，如果是多个，请在reducers目录下先使用combineReducers方法合并之后在导出
export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);