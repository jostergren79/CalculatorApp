import React, {Component} from 'react';

class Output extends Component {


    render() {
        let {result} = this.props;
        console.log(result)
        return (
           <div className="resultscreen">
           <div className="result">
                <p> Result Screen {result} </p>
            </div>
            </div>
    )
        ;
    }
}

export default Output; 
