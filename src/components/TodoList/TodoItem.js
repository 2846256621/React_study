//相当于是 TodoList的一个私有组件

import React, {Component, Fragment} from 'react';
import cssObj from '@/components/TodoList/todoItem.css'
import {Like} from "@/components/index";
import propTypes from 'prop-types'


const noop = ()=>{}; //空函数
class TodoItem extends Component {
    static propTypes = {
      completedChange:propTypes.func
    };
    handleCheckboxChange = ()=>{
        //此写法太复杂 使用赋值写法 解构赋值
        // this.props.completedChange && this.props.completedChange(this.props.id);
       let {
            completedChange = noop, //设置默认值
            id
        } = this.props;
        completedChange(id);
    };
    render() {
        //先解构赋值 后使用 代码更加简洁
        let {
         title,
         isCompleted
        } = this.props;
        return (

            <Fragment>
                <li className={cssObj.ever}>
                    {/*{this.props.id}<br/>*/}
                    <input type="checkbox"
                           checked={isCompleted}
                           onChange={this.handleCheckboxChange}/>&nbsp;&nbsp;
                    {title}&nbsp;&nbsp;&nbsp;
                    {isCompleted?'已完成':'未完成'}
                </li>
                <Like/><br/>
            </Fragment>

        );
    }
}

export default TodoItem;