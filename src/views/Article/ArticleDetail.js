import React, {Component} from 'react';
import Button from '../../components/Button'
class ArticleDetail extends Component {

    render() {
        console.log(this.props);

        return (
            <div>
                文章详情{this.props.match.params.id}
                <Button/>
            </div>
        );
    }
}

export default ArticleDetail;