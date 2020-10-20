import React, { Component } from 'react';
import Button from "./button";
import OutputScreen from './outputScreen';

class Calculator extends Component {
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
            <div>
                <div> className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <OutputScreen result={this.state.result}/>
                    <Button onClick={this.onClick}/>
                </div>
			
			<form>
					className="ui form"
					id={this.props.id}
					name={this.props.name}
					method={this.props.method}
					action={this.props.action}
					/>
		  	<textarea
					id="name"
					name="name"
					onChange={this.handleInputChange.bind(this)}
					placeholder="your name"
					required
					value={this.state.name}
					style={{ width: "100%" }}
					rows={1}
		  			/>
		 	<br />
		  	<textarea
					id="email"
					name="email"
					onChange={this.handleInputChange.bind(this)}
					placeholder="your email address"
					required
					value={this.state.email}
					error={this.state.errors.email}
					style={{ width: "100%" }}
					rows={1}
		 			 />
		  	<br />
		  	<textarea
					id="feedback"
					name="feedback"
					onChange={this.handleInputChange.bind(this)}
					placeholder="what would you like to chat about?"
					required
					value={this.state.feedback}
					style={{ width: "100%", height: "250px" }}
		 			/>
		    <br />
		  	<input
					type="button"
					value="Send"
					className="ui button"
					style={{
					fontFamily: "Amatic SC",
					fontSize: "20px",
					color: "blue"
					}}
					onClick={this.sendMessage.bind(this)}
		  			/>
			</form>
	  </div>
	);
  };
}

export default Calculator;