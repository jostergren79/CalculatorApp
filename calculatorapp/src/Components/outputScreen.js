// Import React (Mandatory Step). 
import React from 'react'; 

class OutputScreen extends React.Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}

// Export Output Screen. 
export default OutputScreen; 
