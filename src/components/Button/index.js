import React, {Component} from 'react';

/**withRouter 是一个高阶组件
 * 只有使用router组件 渲染的组件，才有this.props上的一些属性
 * 如果没有的话，使用withRouter 包裹 然后渲染就有了
 * */

import {withRouter} from 'react-router-dom'

class Button extends Component {
    goHome = ()=>{
        // this.props.history.push('/home');
        // 返回 某一页，并同时传参
        this.props.history.push({
            pathname:'/home',
            state:{
                x:1
            }
        })

    };

    render() {
        return (
            <button onClick={this.goHome}>返回首页</button>
        );
    }
}

export default withRouter(Button);