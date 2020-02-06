import actionType from '../actions/actionType'

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

//reducer 只是一个函数，与redux没有关系
export default (state=initState,action)=>{
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
        default:
            return state
    }
}