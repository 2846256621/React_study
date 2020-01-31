/***
 * propTypes的检查
 * 此时想要的是数字类型，但是给的是字符串
 * 可以检查必须值
 */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
class TodoHeader extends Component {
    static propTypes = {
        title:PropTypes.string,
        x:PropTypes.number.isRequired,
        y:PropTypes.number
    };
    render() {
        return (
            <Fragment>
                <h2>
                    {this.props.title}
                </h2>
                <hr/>
                <br/>
                {this.props.children}
                {/*{this.props.x + this.props.y}  花括号传入数字 不能用双引号,使用prop-types检查*/}
            </Fragment>
        );
    }
}

export default TodoHeader;



