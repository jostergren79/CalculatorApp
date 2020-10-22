import React, {Component} from 'react';

class Outputlog extends Component {

render() {
        
    let {resultlog} = this.props;
        return (
            <div className="resultlogscreen"className="resultlog">
                <p> Result Log {resultlog} </p>
            </div>
        );
    }
}

export default Outputlog; 