// car相关的 action 定义到一个文件中,避免重名，引起错误
import actionType from './actionType'

//action有两种写法

/**第一种：写成一个对象，这是标准的action，但是，问题是不方便传递动态参数*/

// export const increment = {
//     type:actionType.CAR_AMOUNT_INCREMENT
// };
/**在工作中，常用的一种方式是使用actionCreator，它是一个方法，返回一个对象，返回的对象才是真正的action*/
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