##### 通过简单购物车的实例，来学习react-redux
**使用步骤**
- 1.安装react-redux
    `npm install react-redux -S`
- 2.创建store.js
    - `createStore`是提供的一个创建 store 的方法
    - `rootReducer`是相当于引入合并后的 reducer
    - 引入的`rootReducer`相当于 reducer 中导出的`combineReducers`
    - createStore的第一个参数必须是一个reducer，如果是多个，请在reducers目录下先使用combineReducers方法合并之后在导出
    ```
    import {createStore} from 'redux'
    import rootReducer from './reducers'
    export default createStore(rootReducer);  
- 3.创建reducer (index.js)
    - 在实际的项目中，由于只有单一的store，但是状态会有很多的分类，所以需要划分reducer
    - createStore的参数只接受一个reducer，所以redux提供了用于合并多个reducer的方法
    - 注意：不建议手动合并
    - 多个reducer作为combineReducer对象参数引入，在外部就可以通过`store.getState().car`来获取到carReducer中的`state`
    ```
    import {combineReducers} from 'redux'
   
    /** 引入 car reducer，如果有多个，继续引入*/
    import car from './car'
    
    //导出合并后的reducer
    export default combineReducers({
        car
    })
    ```
- 4.创建购物车的reducer (car.js)        
    - (1) 引入actionType
    - (2) 设置初始化的数据  
    - (3) 创建购物车的reducer，是一个纯函数，reducer的固定写法是两个参数，第一个是state 并有一个初始值，第二个是action
    - (4) 函数作用：根据不同的action.type 做不同的处理，每次返回一个新的state，返回的类型要一样
    - (5) 注意：一定要有default，当actionType不对的时候，就不做任何处理，返回上一次的state
    ```
    import actionType from '../actions/actionType'
    const initState = [{
            id:1,
            title:'apple',
            price:434,
            amount:10
        }];
    export default (state=initState,action)=>{
        switch (action.type) {
            case actionType.CAR_AMOUNT_INCREMENT:
                return state.map(item=>{
                   if(item.id === action.payload.id){
                       item.amount +=1;
                   }
                   return item;
                });
            ......
            default:
                return state
        }
    }
    ```
- 5.创建actionType.js  
    创建 `actionType.js` ,为了避免actionType重复，所以一般会把actionType放到一个文件中管理，也可以避免写错actionType    
    ```
    export default {
        CAR_AMOUNT_INCREMENT:'CAR_AMOUNT_INCREMENT',
        CAR_AMOUNT_DECREMENT:'CAR_AMOUNT_DECREMENT'
    }
    ```
    
- 6.创建购物车的action (car.js)
    - (1) 引入actionType
    - (2) action有两种写法
        - 第一种：写成一个对象，这是标准的action，但是，问题是不方便传递动态参数
           ```
            export const increment = {
                type:actionType.CAR_AMOUNT_INCREMENT
            };
           ```
        - 第二种：在实际工作中，常用的一种方式是使用actionCreator，它是一个方法，返回一个对象，返回的对象才是真正的action 
           ```
           export const increment = (id) =>{
             return {
                type:actionType.CAR_AMOUNT_INCREMENT
                //默认 传入参数的键叫 payload
                payload: {
                    id
                }
             }
           }
           ```  
- 7.使用Provider (根index.js文件)
    - (1) 先引入Provider，它是react-redux提供的一个组件
    - (2) 使用的时候，一般把这个组件放在应用程序的**最外层**,只要在最外层包裹了Provider，那么所有的后代组件都可以使用redux.connect做连接
    - (3) 使用这个组件必须有一个store属性，这个store属性的值，就是创建的那个store         
    ```
    import {Provider} from 'react-redux'
    import store from './store'
    
    ReactDom.render(<Fragment>
        <Provider store={store}>
           <App/>
        </Provider>
    </Fragment>,document.getElementById('app'));
    ```
- 8.component中具体组件的使用connect
    - (1) 引入connect，connect()()方法执行之后是一个高阶组件
    - (2) 导入actionCreators 即 action/car.js
    - (3) connect()方法有四个参数，常用的是前面两个
        - 第一个参数是 `mapStateToProps`
            - mapStateToProps的参数state，实际就是store.getState()的值
            - 作用：是从store里面把state注入到当前组件的props上
            
        - 第二个参数是 `mapDispatchToProps`
            - 作用：把action生成的方法注入到当前组件的props上，一般来说没有必要这样用
            - 一般第二个参数，直接传入一个对象，就是actionCreators，这样就可以通过
            `this.props.actionCreators`来调用，这样的话，在调用之后，那个actionCreators就会
            自动帮它内部的action dispatch 出去  
    - (4) connect双层括号，第二个括号参数是 当前组件          
        ```
        import {connect} from 'react-redux'
        import {increment,decrement} from '../../../actions/car'
        class CarList extends Component {
            render() {
              return (<div>
                <button onClick={this.props.increment.bind(this,id)}></button>
             </div>)
            }   
         }  
        const mapStateToProps = (state)=>{
         console.log(state);
         //这里return了什么，就可以通过this.props来获取
         return{
              carList:state.car
         }
        };
        export default connect(mapStateToProps,{increment,decrement})(CarList);
         ```
    
    ##### 重点步骤总结
    - 1.创建 reducers (纯函数)
    - 2.合并 reducers (combineReducers)
    - 3.createStore() (创建store)
    - 4.Provider store={store} (应用程序最外层使用)
    - 5.connect(mapStateToProps,{...actionCreators})(YourComponent)  (store与组件之间做连接)
    - 6.actionCreators (根据实际操作，定义actions)
    - 7.修改reducers (根据action.Type)