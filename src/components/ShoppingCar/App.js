import React, {Component} from 'react';
import CarList from './CarList'
class App extends Component {

    render() {
        return (
            <div>
                <CarList store={this.props.store}/>
            </div>
        );
    }
}

export default App;