import React, {Component} from 'react';

class Output extends Component {


    render() {
        let {result} = this.props;
        console.log(this.props)
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}

export default Output; 
