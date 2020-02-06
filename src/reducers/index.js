//数据的初始化，在reducer里面

//合并多个reducer
import {combineReducers} from 'redux'

import car from './car'

export default combineReducers({
    car
})