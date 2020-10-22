import React, * as react from 'react';

class Output extends react.Component {


    render() {
       
        let {result} = this.props;

        return (
          
            <div>
                <p>{result}</p>
            </div>
            
    )
        ;
    }
}

export default Output; 
