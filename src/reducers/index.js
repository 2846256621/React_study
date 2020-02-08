/**
 * 在实际的项目中，由于只有单一的store，但是状态会有很多的分类，所以需要划分reducer
 * createStore的参数只接受一个reducer，所以redux提供了用于合并多个reducer的方法
 * 注意：不建议手动合并
 */
import {combineReducers} from 'redux'

/** 引入 car reducer，如果有多个，继续引入*/
import car from './car'

//导出合并后的reducer
export default combineReducers({
    /**把多个reducer作为combineReducer对象参数引入 在外部就可以通过 store.getState().car 来获取到carReducer中的state */
    car
})