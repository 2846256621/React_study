
//react里面也是使用 ref来获取dom或者组件，要使用ref之前必须使用React.createRef方法 创建一个ref
import React, {Component,createRef} from 'react';
import cssObj from '@/components/TodoList/todoItem.css'
import PropTypes from 'prop-types'
class TodoInput extends Component {
    //props类型检验 看报错
    static propTypes = {
      btnText:PropTypes.string
    };
    //默认值
    static defaultProps = {
      btnText:'ADD'
    };
    constructor(){
        super();
        this.state = {
            inputValue:''
        };
        //todo 在constructor中创建ref
        this.inputDom = createRef();
    }
    handleInputChange = (e)=>{
        this.setState({
            inputValue:e.target.value
        });
    };
    //todo 不使用箭头函数 需要使用bind 绑定this  onClick={this.handleAddClick.bind(this,123)} 可以同时传参
    // handleAddClick(){
    //     console.log(this.state.inputValue)
    // };
    handleAddClick = ()=>{
        console.log(this.inputDom);
        if(this.state.inputValue === ''){
            return;
        }
        this.props.addTodo(this.state.inputValue);
        this.setState({
            inputValue:''
        },()=>{
            this.inputDom.current.focus();
        })
    };
    handleKeyUp = (e)=>{
        if(this.state.inputValue === ''){
            return;
        }
        if(e.keyCode === 13){
            this.props.addTodo(this.state.inputValue);
            this.setState({
                inputValue:''
            },()=>{
                this.inputDom.current.focus();
            })
        }
    };
    render() {
        return (
            <div>
               <input type="text"
                      className={cssObj.inputText}
                      value={this.state.inputValue}
                      onChange={this.handleInputChange}
                      onKeyUp={this.handleKeyUp}
                      ref={this.inputDom}/>
               <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </div>
        );
    }
}

export default TodoInput;