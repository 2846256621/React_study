import React, {Component} from 'react';

//实际上 这是一个 展示组件
class BlogItem extends Component {
    render() {
        return (
            <li>
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
            </li>
        );
    }
}

export default BlogItem;