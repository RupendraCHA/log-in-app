import {Component} from "react"
import "./index.css"

class LogInApp extends Component{
    state = {isLoggedIn: true}

    clickHereToLogin = () => { 
        this.setState(prevState => (
            this.setState({isLoggedIn: !prevState.isLoggedIn})
        ))
    }

    render(){
        const {isLoggedIn} = this.state

        const headingText = isLoggedIn ? "Please Login" : "Welcome User"
        const buttonText = isLoggedIn ? "Login" : "Logout"
        return (
            <div className="app-container">
                <div className="log-in-card">
                    <h1 className="heading">{headingText}</h1>
                    <div>
                        <button onClick={this.clickHereToLogin}>{buttonText}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogInApp