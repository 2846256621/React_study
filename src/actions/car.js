// car相关的 action 定义到一个文件中,避免重名，引起错误
import actionType from './actionType'

export const increment = (id) =>{
    return {
        type:actionType.CAR_AMOUNT_INCREMENT,
        payload:{
            id
        }
    }
};
export const decrement = (id) =>{
    return {
        type:actionType.CAR_AMOUNT_DECREMENT,
        payload:{
            id
        }
    }
};