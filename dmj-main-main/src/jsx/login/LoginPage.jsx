 import React from 'react';
import couponimg from '../../assets/images/couponimg.png';
import { NavLink } from 'react-router-dom';
const Loginpage = () => {
    return (
        <>
            <div className="fullpage-bg">
                <div className="container">
                    <div className="login-bg shadow-sm">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={couponimg} className="coupon-img" alt="Coupon" />
                                <div className="user-login">
                                    <h4><b>Login or Signup</b></h4>
                                    <form>
                                        <input type="tel" className="login-input" id="login-number" placeholder="Mobile Number*" />
                                        <p className="tp-text">By Continuing, I agree to the <span className="tp-color"><b>Trems of Use & Privacy Policy</b></span></p>
                                        <button type="submit" className="continue-btn">CONTINUE</button>
                                        <p className="tp-text">Have trouble logging in? <NavLink to="/" className="tp-color"><span className="text-danger"><b>Get help</b></span></NavLink></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Loginpage;