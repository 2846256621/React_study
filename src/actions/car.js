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
/**
 * 同步action
 * */
export const decrement = (id) =>{
    return {
        type:actionType.CAR_AMOUNT_DECREMENT,
        payload:{
            id
        }
    }
};
/***
 * 异步action  相当于 dispatch一个同步action
 *  使用redux-thunk之后，在createStore中 再传入一个参数，叫 applyMiddleware(thunk)
 *  就可以在actionCreator里面 return一个方法，这个方法的参数是dispatch
 *  不需要写 actionType
 * */
export const decrementAsync = (id) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type:actionType.CAR_AMOUNT_DECREMENT,
                payload:{
                    id
                }
            })
        },2000)
    }

};

/**上面代码 等价于 以下代码
 * id => dispatch =>  相当于两次 return function
 * 一个箭头 就是一个return
 * */
// export default decrementAsync = id => dispatch =>{
//     setTimeout(()=>{
//         dispatch(decrement(id))
//     },2000)
// }

/**
 * 异步action 使用中间件redux-thunk
 *
 * 手动：action => dispatch(action) =>reducer =>store =>view
 *
 * 使用中间件：action => middleware处理生成新的action =>手动dispatch =>reducer =>store =>view
 *
 * */