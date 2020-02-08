##### 通过简单购物车的实例，来学习redux的手动连接使用
**使用步骤：**
- 1.安装redux
   ```npm install redux -S```
- 2.建立目录
    - reducers 
        - car,js
        - index.js
    - actions
        - actionType.js
        - index.js
    - component
        - CarList
            - index.js
    - store.js
    - App.js
    - index.js
- 3.reducers目录细节操作（首先应建立）
    - (1) 在reducers的`index.js`文件中，直接导出`combineReducers`
       ```
       import {combineReducers} from 'redux'
       import car from './car'
       export default combineReducers({
           car
       })
       ```
    - (2) 因为有多个reducer，所以可以先建立一个 `car.js`为购物车的reducer
    - (3) 在`car.js`中，先定义初始状态`initState`,然后导出默认状态
      ```
       const initState = [{
            id:1,
            title:'apple',
            price:434,
            amount:10
       }]
      export default (state=initState,action){
        switch(action.type){
          default:
            return state;
        }
      }
      ```
    - (4)在渲染的地方`根index.js`引入`store.js`或者在需要的地方直接引入store。
       ```
       store.js内容：
       引入的rootReducer相当于 reducer 中导出的combineReducers

       import {combineReducers, createStore} from 'redux'
       import rootReducer from './reducers'
       export default createStore(rootReducer);
       
       index.js内容：
       ReactDom.render(<Fragment>
           <App store={store}/>
       </Fragment>,document.getElementById('app'));
       ```
       
- 4.执行action操作
    - (1)在action文件中创建`actionType.js`
        ```
        //使用 action 要先定义actionType
        export default {
            CAR_AMOUNT_INCREMENT:'CAR_AMOUNT_INCREMENT',
            CAR_AMOUNT_DECREMENT:'CAR_AMOUNT_DECREMENT'
        }
        ```
    - (2)创建action，一般一类action操作放一个文件，避免出错，此处创建`car.js`
        action的使用一般都是方法，视图调用传参
        ```
        import actionType from './actionType' //需要导入 actionType
        export const increment = (id) =>{
            return {
                type:actionType.CAR_AMOUNT_INCREMENT,
                payload:{
                    id
                }
            }
        };
        ```
    - (3) 哪里需要action，在哪里引入action，即`action/car.js`,
        一般视图操作，需要使用action中定义的方法，导入方法，**即将action与reducer关联，进行参数传递接收**
       ```
       import {increment,decrement} from '../../../actions/car'
      ```
    - (4)分发动作，通过`store.dispatch()`的方法，向外传送数据
        ```
        <button onClick={
           ()=>{
                this.props.store.dispatch(decrement(item.id))
            }
        }>-</button>
        <span>{item.amount}</span>
        ```
    - (5)执行完以上步骤，其实操作基本完成，但是数据并不改变
        只剩下这个decrement 方法的实现，action只是分发操作，
        而reducer中，才是逻辑操作，即对应的`reducer/car.js`中进行switch-case的匹配，
        来判断执行的是什么操作
- 5.reducer中，详细逻辑操作(switch-case)
    - (1)若不处理，则始终是default，数据不会改变
        ```
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
     
    - (2)处理之后，在视图组件，进行`store.subscribe(this.getState)`操作，不然视图不会重新渲染
        ```
        getState = ()=>{
                this.setState({
                carList:this.props.store.getState().car
            })
        };
        
        componentDidMount(){
            //取得props中的数据，并赋值给carList (将props赋值给私有的state)
            this.getState();
            //更新页面
            this.props.store.subscribe(this.getState);
        }
        ```
 **总结：**
 - 1.安装并建立目录后，首先创建并初始化reducer，reducer是核心的逻辑处理部分(switch-case)
 - 2.创建action，action是行为的发放，是定义actionType以及action的，与之关联的是 `store.dispatch(id)` 进行参数传递，以及在reducer中进行参数接收
 - 3.完善reducer中的方法，去处理对应的操作，需要在页面响应，需要使用 `store.subscribe(this.getState)`
 - 4.即action中定义方法 --> 组件中调用方法并传值 --> reducer中接收参数并处理，更新state  --> 组件中进行视图更新     
 
