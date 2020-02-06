import React, {Component} from 'react';

import {increment,decrement} from '../../../actions/car'

class CarList extends Component {
    constructor(){
        super();
        this.state = {
            carList : []
        }
    }
    getState = ()=>{
        this.setState({
            carList:this.props.store.getState().car
        })
    };
    // 取得props中的 数据 并赋值给carList
    // 方法一 ：新版的方法 直接return一个对象  更新props值，state就会更新
    // static getDerivedStateFromProps(props){
    //     return {
    //         carList: props.store.getState().car
    //     }
    // }
    // 方法二： 会打印两次，第一次无数据，第二次更新
    componentDidMount(){
        // this.setState({
        //     carList:this.props.store.getState().car
        // })
        this.getState();
        //todo 更新页面
        this.props.store.subscribe(this.getState);
    }

    render() {
        console.log(this.state.carList);
        return (
            <table>
                <thead>
                <tr>
                    <th>商品id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.carList.map(item=>{
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={
                                        ()=>{
                                            this.props.store.dispatch(decrement(item.id))
                                        }
                                    }>-</button>
                                    <span>{item.amount}</span>
                                    <button onClick={
                                        ()=>{
                                            this.props.store.dispatch(increment(item.id))
                                        }
                                    }>+</button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default CarList;