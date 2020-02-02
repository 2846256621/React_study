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
    //constructor 只会初始化执行一次
    constructor(props) {
        super(props);
        //todo  早期版本
        //todo  根据props初始化一个state，当props改变后，这个state不会再次更新
        //todo  例如 completed  ，则需要借助 componentWillReceiveProps(nextProps)
        //todo  使用下次的props 改变本次的 props
        // 直接 不管用 因为 constructor 只会初始化执行一次
        this.state = {
            // completedText: props.completed?'已完成':'未完成'
            completedText: ''
        }
    }

    handleCheckboxChange = ()=>{
        //此写法太复杂 使用赋值写法 解构赋值
        // this.props.completedChange && this.props.completedChange(this.props.id);
       let {
            completedChange = noop, //设置默认值
            id
        } = this.props;
        completedChange(id);
    };

    componentDidMount(){

    }


    // todo 早期版本
    // 若将completed  根据props的改变，更新state
    // 使用下一次的 nextProps来更新本次的
    // componentWillReceiveProps(nextProps,nextState){
    //     this.setState({
    //         completedText: nextProps.completed?'已完成':'未完成'
    //     })
    // }

    //todo 新版的方法 直接return一个对象  更新props值，state就会更新
    static getDerivedStateFromProps(props){
        return {
            completedText: props.completed?'已完成':'未完成'
        }
    }

    //todo 新版 使用getDerivedStateFromProps(props) 除了此生命周期
    // componentWillMount(){
    //     console.log('willMount')
    // }

    //todo 组件是否更新 或者使用 PureComponent()创建组件
    shouldComponentUpdate(nextProps,nextState){
        //todo 优化 这样不会每次添加都重新渲染 只有不一样的会重新渲染 优化性能
        return nextProps.completed !== this.props.completed;
    }
    render() {
        console.log(`${this.props.title}render`);
        //先解构赋值 后使用 代码更加简洁
        let {
         title,
         completed
        } = this.props;
        return (
            <Fragment>
                <li className={cssObj.ever}>
                    {/*{this.props.id}<br/>*/}
                    <input type="checkbox"
                           checked={completed}
                           onChange={this.handleCheckboxChange}/>&nbsp;&nbsp;
                    {title}&nbsp;&nbsp;&nbsp;
                    {this.state.completedText}
                </li>
                <Like/><br/>
            </Fragment>

        );
    }
}

export default TodoItem;