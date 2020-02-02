import React, {Component} from 'react';
import TodoItem from './TodoItem'
import propTypes from 'prop-types'
class TodoList extends Component {
    static propTypes = {
        todos:propTypes.arrayOf(propTypes.shape({
            id:propTypes.number.isRequired,
            title:propTypes.string.isRequired,
            completed:propTypes.bool.isRequired,

        })).isRequired,
        completedChange:propTypes.func
    };
    render() {
        console.log(this.props.todos);
        return (
            <ul>
                {
                    this.props.todos.map((item,index)=>{
                        // 这个方式太复杂 展开传递
                        // return <TodoItem
                        //     id={item.id}
                        //     title={item.title}
                        //     completed={item.completed}
                        //     key={item.id}/>

                        //可以选择使用 扩展运算符
                        if(index<15){
                            return <TodoItem {...item}
                                             key={item.id}
                                             completedChange={this.props.completedChange}/>
                        }

                    })
                }
                {/*整个传递props 到 Todoitem 组件*/}
                {/*<TodoItem content={this.props.todos}/>*/}
            </ul>
        );
    }
}

export default TodoList;