/**
 * 实现文本框的双向数据绑定
 * 1.给文本框 注册 onChange事件 并绑定函数
 *    onChange={(e)=>{this.textChange (e)}}
 * 2.得到文本框的输入值
 *  - 方法一: 传入当前结点e 使用e.target.value 得到值
 *  - 方法二: 给输入框 写 ref='XXX'属性  用this.refs.XXX得到值
 * 3. 手动更新页面上的数据
 *    this.setState({
 *        msg: e.target.value
 *    })
 * */

import React from 'react'

export default class BindEvent extends React.Component{
    constructor(){
        super();

        this.state = {
            msg:'哈哈哈',
            name:'fairy',
            age:21,
            love:'sleep'
        }
    }
    render(){
        return <div>
            这是BindEvent组件
            <hr/>

            <button onClick={()=>this.myclickHander('小仙女','真好')}>按钮</button>

            <h3>{this.state.msg}</h3>
            {/*如果我们只是把文本框的value属性，绑定到 state 状态上，这个文本框就是一个之都的文本框*/}
            {/*当为文本框绑定value值之后，要么同时提供一个readOnly属性，要么 提供一个 onChange处理函数*/}
            {/*<input type="text" value={this.state.msg} readOnly/>*/}
            <input type="text"  onChange={(e)=>{this.textChange (e)}} ref="myInput"/>
        </div>
    }

    textChange = (e) => {
        //得到页面input数据
        //方法一
        // console.log(e.target.value);
        // 方法二
        // console.log(this.refs.myInput);

        //手动更新页面数据
        this.setState({
            msg:e.target.value //只修改当前state的值，不会覆盖其他的
        },function () {
            console.log(this.state.msg);
        });


    };

}
