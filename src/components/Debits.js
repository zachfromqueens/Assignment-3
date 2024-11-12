import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Debits extends Component {
    constructor(props) {
        super(props);
        this.submitIt = this.submitIt.bind(this);
    }

    submitIt(event) {
        event.preventDefault();
        console.log("DEBIT SUBMIT VALUE " + event.target.debitAmount.value)
        let temp = [event.target.debitDesc.value,
        event.target.debitAmount.value,
        new Date().toLocaleString()]

        this.props.updateDebit(Number(event.target.debitAmount.value));
        this.props.updateDebitInfo(temp)
    }

    render() {
        return (
            <div >
                <Link to="/" className = 'Link'> Home</Link>

                <div className = 'App'>
                    <div>
                        <h4>
                            <div class="badge badge-pill badge-danger">Debits: </div>
                            ${(Math.round(this.props.debitAmount * 100) / 100).toFixed(2)}
                        </h4>

                        <form onSubmit={this.submitIt}>
                            <input type='text' name="debitDesc" placeholder="Debit Description" />
                            <input type='number' name="debitAmount" placeholder="Debit amount" />
                            <input type='submit' />
                        </form>

                    </div>

                    <div>

                        {this.props.debitInfo.map((x, index) =>
                            <div key={index} style={{ border: "1px black solid" }}>
                                <p class="alert alert-dark"  > Description: {x[0]}</p>
                                <p class="list-group-item"> Amount: ${x[1]} </p>
                                <p class="list-group-item "> Date:  {x[2]} </p>
                            </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Debits;