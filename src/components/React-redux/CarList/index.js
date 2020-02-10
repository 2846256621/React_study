import React, {Component} from 'react';

//todo 哪个组件要用store里面的东西，哪个组件就引入 connect ，使用connect连接 组件和 store
// this.props 就可得到值
import {connect} from 'react-redux'
import {increment,decrement,decrementAsync} from '../../../actions/car'

class CarList extends Component {

    render() {
        console.log(this.props);
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
                    this.props.carList.map(item=>{
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => this.props.decrementAsync(item.id)}>等会减</button>
                                    <button onClick={() => this.props.decrement(item.id)}>-</button>
                                    <span>{item.amount}</span>
                                    <button onClick={this.props.increment.bind(this,item.id)}>+</button>
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

/** todo connect的第一个参数
  * 为什么会得到state 因为在最外层，包裹了Provider 并且传入了 state
 */
 const mapStateToProps = (state)=>{
    console.log(state);
    //注入新的carList 到props中去，这里return了什么，就可以通过this.props来获取
    return{
        carList:state.car
    }
};

/**
 * todo (已过时 ！！！！) connect的第二个参数  让组件更加纯净
 *  目的：把dispatch的动作，添加到组件的props上去，去替代单纯的dispatch，变成add，reduce方法
 */
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         add:(id)=>dispatch(increment(id)),
//         reduce:(id)=>dispatch(decrement(id))
//     }
// };

/***
 * todo connect执行之后是一个高阶组件，所以是两个括号
 *  connect()() 时，props 默认只有 dispatch 方法，但是传入第一个参数后，可以在props中注入新的 数据
 *  connect(mapStateToProps) 第一次执行 会生成state，把新的state 注入到组件的props 中去
 */

// export default connect(mapStateToProps,mapDispatchToProps)(CarList);

/**
 * todo 直接将引入的actionCreator，当做第二个参数 传入，这样直接可以 将方法添加到props中去，然后自动变成dispatch方法
 * 一般第二个参数，直接传入一个对象，就是actionCreators，这样就可以通过this.props.actionCreators来调用，
 * 这样的话，在调用之后，那个actionCreators就会自动帮它内部的action dispatch 出去
 * */
export default connect(mapStateToProps,{increment,decrement,decrementAsync})(CarList);