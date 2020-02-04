
//todo  使用React-hooks 为 函数组件(不编写 class)提供自己的state，使用useState useEffect

//todo useState()是一个方法，结果是一个数组，数组第一个是state，第二个相当于setState
import {useEffect, useState} from "react";
import React from "react";

const Counter = function(){
    const [count,setCounter] = useState(0);
    console.log(useState(0));
    //todo useEffect 的参数是一个回调，不管是组件挂载还是更新，都会触发这个回调方法，类似于 componentDidMount与componentDidUpdate的结合
    useEffect(()=>{
        document.title = '当前数量'+{count}
    });
    return(<div>
            <p>当前的数量为 {count}</p>
            <button onClick={()=>{setCounter(count -1)}}>—</button>
            <span>{count}</span>
            <button onClick={()=>{setCounter(count+1)}}>+</button>
        </div>
    )
};
export default Counter;