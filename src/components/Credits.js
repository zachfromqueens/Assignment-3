import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Credits extends Component {
    constructor(props) {
        super(props);
        this.submitIt = this.submitIt.bind(this);
    }

    submitIt(event) {
        event.preventDefault();
        let temp = [event.target.creditDesc.value,
        event.target.creditAmount.value,
        new Date().toLocaleString()]

        this.props.updateCredit(Number(event.target.creditAmount.value));
        this.props.updateCreditInfo(temp);
    }

    render() {
        return (
            <div>
                <Link to="/"  className = 'Link'> Home</Link>

                <div>
                    <div>
                        <h4 >
                            <div>Credits: </div> 
                            ${(Math.round(this.props.creditAmount * 100) / 100).toFixed(2)}
                        </h4>

                        <form onSubmit={this.submitIt}>
                            <input type='text' name="creditDesc" placeholder="Credit Description" />
                            <input type='number' name="creditAmount" placeholder="Credit amount" />
                            <input type='submit'/>
                        </form>
                    </div>

                    <div>
                        {this.props.creditInfo.map((x, index) =>
                            <div key={index} style={{ border: "1px black solid" }}>
                                <p> Description: {x[0]} </p>
                                <p> Amount: ${x[1]} </p>
                                <p> Date:  {x[2]} </p>
                            </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Credits;