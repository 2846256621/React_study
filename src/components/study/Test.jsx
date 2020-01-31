import React from 'react'
//
export default class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            text:'默认',
            message: '你好'
        }
    }

    render() {
        return <div>
            <h3>{this.state.text}</h3>
            <button onClick={()=>{this.click('传参1',"传参2")}}>点击</button>
            {/*组件内容*/}
            <p>{this.state.message}</p>
            <input type='text' onChange={(e) => {
                this.textChange(e)
            }}/>
        </div>
    }

    //方法
    click = (arg1,arg2)=>{
        this.setState({
            text:'更改为'+arg1+arg2
        },function () {
            console.log(this.state.text);
        })
    };
    textChange = (e) => {
        this.setState({
            message: e.target.value
        }, function () {
            console.log(this.state.value)
        });
    };

}
