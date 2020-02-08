
/**
 * 为了避免actionType重复，所以一般会把actionType放到一个文件中管理，也可以避免写错actionType*/
import actionType from '../actions/actionType'

/**对于购物车来说，这里有个初始化的状态*/
const initState = [{
        id:1,
        title:'apple',
        price:434,
        amount:10
    },{
        id:2,
        title:'orange',
        price:333,
        amount:20
    },{
        id:3,
        title:'banana',
        price:32,
        amount:12
    }];

/**创建购物车的reducer，是一个纯函数，reducer的固定写法是两个参数，第一个是state 并有一个初始值，第二个是action*/
//reducer 只是一个函数，与redux没有关系
export default (state=initState,action)=>{
    /**根据不同的action.type 做不同的处理，每次返回一个新的state，返回的类型要一样*/
    switch (action.type) {
        case actionType.CAR_AMOUNT_INCREMENT:
            return state.map(item=>{
               if(item.id === action.payload.id){
                   item.amount +=1;
               }
               return item;
            });
        case actionType.CAR_AMOUNT_DECREMENT:
            return state.map(item=>{
                if(item.id === action.payload.id){
                    item.amount -=1;
                }
                return item;
            });
        /**一定要有default，当actionType不对的时候，就不做任何处理，返回上一次的state*/
        default:
            return state
    }
}