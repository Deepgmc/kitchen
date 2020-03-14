import React from 'react'
import ReactDOM from 'react-dom'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '123'
        }
    }

    handleSubmit = (e) => {
        console.log('Email: ' + this.state.email)
    }

    render(){
        return(
            <div>
                <form method="post" action='/login' onSubmit={this.handleSubmit}>
                    <div className="row">

                        <div className="col-md-12 form-group">
                            <input className="form-control mt-3"
                                    name="email"
                                    value={this.state.email}
                                    type="text" onChange={this.handleEmailChange}
                                    placeholder="email" />
                        </div>

                        <div className="col-md-12 form-group">
                            <input className="form-control mt-3"
                                    name="password"
                                    value={this.state.password}
                                    type="password"
                                    onChange={this.handlePasswordChange}
                                    placeholder="пароль" />
                        </div>

                        <div className="col-md-12">
                            <button type="submit" className="btn btn-success">Войти</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

}

ReactDOM.render(<Login />, document.getElementById('login_content_container'))