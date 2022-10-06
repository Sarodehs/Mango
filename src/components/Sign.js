import React from "react";
import './css/Sign.css'

class Sign extends React.Component {
    render() {
        return (
            <>
    <div class="signback"><br/><br/><br/>
      {/* <!-- sign start --> */}
      <div class="row align-items-center justify-content-center">
        <div class="col-xl-4 col-md-8">
          <div class="card signcard">
            <div class="card-body" >
              <h5 class="card-title signtitle">Sign Up</h5>
              <hr/>
              <p class="card-text">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">E-mail address or Phone no.</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="d-grid gap-2 col-12 mx-auto">
                  <a  class="signtitle"href="/">Forgot Password?</a><br/>
                  <button class="btn btn-secondary " type="button" >Sign-In</button>
                </div>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-xl-12 col-md-10">
                        <hr class="signhr"/>
                        <p class="signhr1"> or</p>
                        <hr class="signhr2"/>
                    </div>
                  </div>
                  <div class="d-grid gap-2 col-12 mx-auto">
                  <button class="btn btn-secondary disabled" type="button">Get an OTP on your phone</button>
                </div>               
              </form>
              </p>
            </div>
          </div>
        </div>
      </div><br/><br/><br/><br/>
      <div class="signpolicy">
        <p>Refund policy Shipping policy Privacy policy Terms of service</p>
      </div><br/>
      {/* <!-- sign end --> */}
    </div>
            </>

        );
    }
}
export default Sign;