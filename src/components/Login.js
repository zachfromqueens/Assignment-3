import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                userName: '',
                password: ''
            },
            redirect: false
        }
    }

    handleChange = (e) => {
        const updatedUser = { ...this.state.user }
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedUser[inputField] = inputValue

        this.setState({ user: updatedUser })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockLogIn(this.state.user)
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/userProfile" />)
        }

        return (
            <div className='App'>
                <Link to='/'  className = 'Link'>Home</Link><br></br>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ margin: "1%" }}>
                        <br></br>
                        <label htmlFor="userName">Username: </label>
                        <input type="text" name="userName" placeholder='Username' onChange={this.handleChange} value={this.state.user.userName} />
                    </div>
                    <div>

                        <label htmlFor="password">Password: </label>
                        <input type="password" placeholder='Password' name="password" />
                    </div>
                    <br></br>
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}
export default LogIn;