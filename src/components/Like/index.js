import React, {Component, Fragment} from 'react';
import cssObj from "@/components/TodoList/todoItem.css";

class Lick extends Component {
    constructor(){
        super();
        this.state= {
            isLiked:false
        }
    }
    handleLikedClick = ()=>{

        /***若直接使用 this.state.isLiked='xxxx' 能修改数据值，但是界面不会重新渲染
         *修改 state 的数据 使用 this.setState()方法  此方法是 异步的
         * 这个方法有两个参数，第一个参数又有两种情况
         * 第一种情况，是一个对象
         * this.setState({
         *   isLiked: !this.state.isLiked
         * })
         * 第二种情况，是一个方法  方法的参数可以是 上一次的state值 和上一次的props
         * this.setState((prevState,props)=>{
         *     return{
         *         isLiked:!prevState.isLiked
         *     }
         * })
         *
         *
         * 由于setState是异步的，所以需要在回调函数中，得到最新状态
         *
         *
        */

        //方法一 参数是对象
        // this.setState({
        //  isLiked: !this.state.isLiked
        // });
        // 方法二 参数是方法 返回值是对象 方法的参数可以是 上一次的state值 和上一次的props
        this.setState((prev)=>{
            console.log('内部state值',this.state.isLiked);
            return {
                // isLiked: !this.state.isLiked
                isLiked: !prev.isLiked
            }
        },()=>{
            console.log('回调state值',this.state.isLiked)
        });
        console.log('外部state值',this.state.isLiked)
    };
    render() {
        return (
            <Fragment>
                <span onClick={this.handleLikedClick} className={cssObj.like}>
                      {this.state.isLiked ?'取消❤️':'喜欢🖤'}
                </span>
            </Fragment>
        );
    }

}

export default Lick;