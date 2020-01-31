import React, {Component,Fragment} from 'react';
import cssObj from '@/components/TodoList/todoItem.css'
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from '@/components/index'


/***
 * Fragment 是一个空标签
 * 父组件 给子组件传入具体内容  可使用 this.props.children 在子组件中获得内容
 * 相当于 vue 中的slot插槽
  */

class App extends Component {
    constructor(){
        super();
        this.state = {
            title:'代办事项',
            content:'小仙女待办事项',
            article:'<div>hi能发挥护肤和司法his和<i>你好</i></div>',
            todo:[{
                id:1,
                title:'吃饭',
                isCompleted:true
            },{
                id:2,
                title:'睡觉',
                isCompleted:false
            }]
        }
    }
    //todo 一般需要方法传参的话，可以在父组件封装成方法 传入子组件
    addTodo = (todoTitle)=>{
        //不能直接push 这样添加返回的是长度 可以使用concat 或者 map
        // this.setState({
        //     todo:this.state.todo.concat({
        //         id:this.state.todo.length+1,
        //         title:todoTitle,
        //         isCompleted:false
        //     })
        // });
        //也可 copy一份数组，然后push 再赋值
        let newTodo = [...this.state.todo];
        newTodo.push({
            id:this.state.todo.length+1,
            title:todoTitle,
            isCompleted:false
        });
        this.setState({
            todo:newTodo
        })
    };
    completedChange = (id)=>{
      console.log(id);
      this.setState((prevState)=>{
          return{
              todo:prevState.todo.map(item=>{
                  if(item.id === id){
                      item.isCompleted = !item.isCompleted
                  }
                  return item;
              })
          }
      })
    };
    render() {
        return (
            <div className={cssObj.content}>
                {/*{this.state.todo[1].isCompleted ? '完成': '未完成'}*/}
                {/*{*/}
                    {/*带标签的内容 需要展示成html 需要使用dangerouslySetInnerHTML == {{__html:值 }}*/}
                    {/*<div dangerouslySetInnerHTML={{__html: this.state.article}}/>*/}
                {/*}*/}
                <TodoHeader title={this.state.title} x={1} y={2}>
                    <span>{this.state.content}</span>
                </TodoHeader>
                <TodoInput btnText="ADD" addTodo={this.addTodo}/>
                <TodoList todos={this.state.todo}  completedChange={this.completedChange} />

            </div>
        );
    }
}

export default App;