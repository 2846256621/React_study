import {Component, createContext} from "react";
import React from "react";

/**createContext 方法的结果是一个对象，里面有两个组件 Provider和Consumer
 * Provider 用于提供状态
 * consumer 用于接收状态
 */


const {
    Provider,
    Consumer:CounterConsumer //解构出来重新赋值给CounterConsumer的组件
} = createContext();

//封装一个基本的 Provider 方便管理状态
class CounterProvider extends Component{
    constructor(){
        super();
        //这里的状态共享，任何CounterProvider的后代组件都可通过 CounterConsumer来接收这个值
        this.state = {
            count:100
        }
    }
    //方法也会通过 Provider 共享
    incrementCount = ()=>{
        this.setState({
            count:this.state.count +1
        })
    };
    decrementCount = ()=>{
        this.setState({
            count:this.state.count -1
        })
    };
    render(){
        return(
            //使用Provider组件 必须要有一个value值，可以传递任何的数据 一般传递对象
            <Provider value={{
                count : this.state.count,
                onIncrementCount:this.incrementCount(),
                onDecrementCount:this.decrementCount()
            }}>

                {/*其后代*/}
                {this.props.children}
            </Provider>
        )
    }
}
export {
    CounterProvider,
    CounterConsumer
}