import React from 'react';
import HeaderCon from '../header/HeaderCon';
import Footer from '../footer/Footer'
import Navbar from '../header/Navbar';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: 'none',
            passwordError: 'none'
        }
    }


    checkLogin() {

        var passwordcheck = /^(?=.*[0-9])(?=.[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,16}$/;

    }
    render() {
        const { email, password, emailError, passwordError } = this.state;
        return (
            <>
                <HeaderCon />
                <Navbar />


                <div className="login-bg shadow mt-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <h3 className="text-center mdl-frm"><b>Login</b></h3>
                                <form id="login_form" onSubmit={this.checkLogin} value>
                                    <label for="login_email" className="form-label label-text mt-3">Email Address / Phone No.</label>
                                    <input type="email" className="form-control input-holder" placeholder="Email"
                                        value={email}
                                        onChange={(e) => {
                                            this.setState({ email: e.target.value });
                                            let emailcheck = /^[A-Za-z_0-9]{2,}@[A-Za-z]{2,}[.]{1}[A-Za-z.]{1,6}$/gm;
                                            if (!emailcheck.test(email)) {
                                                this.setState({ emailError: 'block' })
                                            }
                                            else {
                                                this.setState({ emailError: 'none' })
                                            }
                                        }}
                                    />
                                    <label className="error" style={{ display: emailError }}>Enter the correct Email-id </label><br />

                                    <label for="login_password" className="form-label label-text">Password</label>
                                    <input type="password" className="form-control input-holder" name="login_password" placeholder="Password"
                                        value={password}
                                        onChange={(e) => {
                                            this.setState({ password: e.target.value });
                                            let passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/gms;
                                            if (!passwordcheck.test(password)) {
                                                this.setState({ passwordError: 'block' })
                                            }
                                            else {
                                                this.setState({ passwordError: 'none' })
                                            }
                                        }}

                                    />
                                    <label className="error" style={{ display: passwordError }}>Enter a Correct Password</label>
                                    <br />
                                    <div className="text-center"><button type="submit" className="px-5 py-2 mt-3 mb-3 signup-btn login-button">Login</button></div>
                                    <p className="text-center mt-3"><b>New to DMJ? <a href="signup_page.html" className="text-decoration-none">Create an account</a></b></p>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

