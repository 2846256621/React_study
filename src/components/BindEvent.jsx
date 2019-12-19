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
            {/*<button onClick={function () {console.log('okkkk');}}>按钮</button>*/}

            {/*写onClick 不是 onclick*/}
            {/*onClick只接收function作为处理函数，箭头函数本身就是一个匿名的箭头函数*/}
            {/*<button onClick={this.myclickHander}>按钮</button> */}

            {/*标准写法*/}
            <button onClick={()=>this.myclickHander('小仙女','真好')}>按钮</button>

            {/*<button onClick={()=>this.show('ddddd')}>按钮</button>*/}
            <h3>{this.state.msg}</h3>
        </div>
    }


    //#region
    //注释代码 折叠 region
    // 这是一个实例方法

    //普通写法
    // myclickHander(){
    //     console.log('okkkkkkk');
    // }
    //#endregion

    //标准写法（推荐）
    myclickHander = (arg1,arg2)=>{
        //在 React中，如果要修改state 的值，直接赋值，不会改变页面上的值，但是可以改变state本身的值
        // this.state.msg = '修改过'

        //应该调用 React 提供的 this.setState({msg:'修改过'})
        this.setState({
            msg:'点击了'+arg1+arg2,  //只修改当前state的值，不会覆盖其他的
        },function () {
            console.log(this.state.msg);
        });

        //若想修改值之后，立马取到这个值，可以使用this.setState({},callback)

        // console.log(this.state.msg);//this.setState 方法是执行是异步的


    };

    show = (args)=>{
        console.log(args)
    }
}