import React from 'react';

/***创建组件的方式1:
 *  若组件什么都不想渲染，可以return null
 *  在组件中返回一个合法的JSX的虚拟dom元素
 * */

// 组件的名称 首字母必须大写
function Hello(props){
    console.log(props);
    // props.name = '张三';  props是只读的，不可重写
    return <div><h4>这是Hello组件 </h4><h4>{props.name +'~' +props.age+"~"+props.type}</h4></div>;
}

export default Hello;