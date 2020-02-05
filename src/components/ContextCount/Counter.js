//定义Counter组件
import {Component} from "react";
import React from "react";
import {CounterConsumer} from './/CounterStore'
class Counter extends Component {
    render() {
        return (
            //只有 CounterConsumer 来接收 count
            //todo  注意：CounterConsumer的 内容 必须是一个方法，有一个参数，即Provider的value
            <CounterConsumer>
                {
                    ({count})=>{
                        console.log(count);
                        return <span>{count}</span>
                    }
                }
            </CounterConsumer>
        );
    }
}
export default Counter;