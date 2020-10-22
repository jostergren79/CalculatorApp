import React, { Component } from 'react';
import Input from "./input";
import Output from './output';
import Outputlog from './outputlog';


class App extends Component {
    
	
	constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
				result: this.state.result + button
            })
        } 
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
				result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    
render() {

	return (
        
		<div class="table-responsive">
  <table class="table">
  <div>
			<div className="calculator-body">
				<h1>Sezzle Calculator</h1>
				<Output result={this.state.result}/>
				<Input onClick={this.onClick}/>
				<Outputlog resultstorage={this.state.resultstorage}/>
			</div>
		</div>
  </table>
</div>
		
	);
}
}

export default App;
