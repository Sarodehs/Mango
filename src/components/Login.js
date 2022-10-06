import React from "react";
import './css/Login.css'

class Login extends React.Component {
    render() {
        return (
            <>
                  {/* <!-- login start --> */}
        <div class="row logincard" ><br/>
            <div class="accordion col-xl-8 col-sm-6" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button " type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h4 class="text-muted">Login</h4>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <form>
                                <div class="mb-3 col-xl-5 col-sm-6">
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="E-mail address or Phone no."/>
                                </div>
                                <div class="mb-3 col-xl-5 col-sm-6">
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                        placeholder="Password"/>
                                </div>
                                <div class="row loginfor" >
                                    <div class="form-check col-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                    <div class="col-3">
                                        <a href="/">Forgot Password?</a><br/>
                                    </div>
                                </div>
                                <div class="d-grid col-xl-5 col-sm-6 mauto">
                                    <button class="btn btn-secondary " type="button">LOGIN</button>
                                </div>
                                <br/>
                                <p>Login with OTP</p>
                                <p>Don't have an account?<a href="/#"> Click here</a></p>
                            </form>
                        </div>
                    </div>
                </div><br/>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h4 class="text-muted"> Shopping Cart</h4>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                                <div class="row g-0">
                                    <div class="col-md-3">
                                        <img src="./images/download.jpg" class="img-fluid" alt="mango"/>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h5 class="card-title">Fruit Weight - 300+ gms</h5>
                                            <p class="card-text">Fruit Grade - "King A1+" Premium Authentic Devgad
                                                Alphonso Mangoes</p>
                                            <p><span class="logintext"> in stock</span></p>
                                            <p class="card-text"><small class="text-muted">Quantity (in Dozen)</small>
                                            </p>
                                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                <button type="button"
                                                    class="btn btn-outline-secondary btn-sm">-</button>
                                                <button type="button"
                                                    class="btn btn-outline-secondary btn-sm">1</button>
                                                <button type="button"
                                                    class="btn btn-outline-secondary btn-sm">+</button>
                                            </div>
                                            <div class="logindelete">
                                                <a href="/">delete</a> |
                                                <a href="/">save for later</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="card-body">
                                            <h5><span class="loginprice">₹1,750.00 </span> </h5>
                                            <p>30% OFF</p>
                                            <p>Deliver by 10 may 2021 </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="row g-0">
                                    <div class="col-md-3">
                                        <img src="./images/download.jpg" class="img-fluid" alt="mango"/>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h5 class="card-title">Fruit Weight - 225-250gms</h5>
                                            <p class="card-text">Fruit Grade - "King A" Premium Authentic Mango Keshar
                                            </p>
                                            <p class="card-text"><span class="logintext"> in stock</span></p>
                                            <p class="card-text"><small class="text-muted">Quantity (in Dozen)</small>
                                            </p>
                                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                <button type="button"
                                                    class="btn btn-outline-secondary btn-sm">-</button>
                                                <button type="button"
                                                    class="btn btn-outline-secondary btn-sm">1</button>
                                                <button type="button"
                                                    class="btn btn-outline-secondary btn-sm">+</button>
                                            </div>
                                            <div class="logindelete">
                                                <a href="/">delete</a> |
                                                <a href="/">save for later</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="card-body">
                                            <h5><span class="loginprice">₹1,470.00 </span> </h5>
                                            <p>30% OFF</p>
                                            <p>Deliver by 10 may 2021 </p>
                                        </div>
                                    </div>
                                </div>

                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-secondary me-md-2" type="button">CHANGE</button>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h4 class="text-muted"> Delivery Details</h4>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="row g-0">
                                <div class="col-md-10">
                                    <p>Sneha Reddy</p>
                                    <p>East Ave, Land mark Garden, Joggers Park Lane, Kalyani Nagar East <br/>Avenue,
                                        Nilanjali Housing Colony Pune, Maharashtra 411006</p>
                                    <p>+91 9960588842</p>
                                    <p>Address Type: Home</p>
                                </div>
                                <div class="col-md-2">
                                    <a href="/">Edit</a> <br/>
                                    <a href="/">Add Address</a>
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-secondary me-md-2" type="button">CHANGE</button>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <h4 class="text-muted">Payment</h4>
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Credit / Debit / ATM card
                                </label>
                                <div>
                                    <img src="./images/visa_logo.png" class="img-fluid" alt="img"/>
                                    <img src="./images/smart_logo.png" class="img-fluid" alt="img"/>
                                    <img src="./images/Maestro_logo.png" class="img-fluid" alt="img"/>
                                    <img src="./images/RuPay-Logo.png" class="img-fluid" alt="img"/>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Net Banking
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault3" checked/>
                                <label class="form-check-label" for="flexRadioDefault3">
                                    Other UPI Apps
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault4" checked/>
                                <label class="form-check-label" for="flexRadioDefault4">
                                    Cash On Delivery
                                </label>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-secondary me-md-2" type="button">Make Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-6 ">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title  mb-2 text-muted">Price Summery</h4>
                        <hr/>
                        <div class="row">
                            <div class="col-8">
                                <p>(Total items : 02)</p>
                                <p>Sub Total</p>
                                <p>Shipping Fee</p>
                                <p>Coupon</p>
                            </div>
                            <div class="col-4">
                                <p><br/></p>
                                <p>₹3,220.00</p>
                                <p>₹50</p>
                                <p>₹-50</p>
                            </div>
                        </div>
                        <hr/>
                        <div class="row">
                            <div class="col-8">
                                <h5 class="card-subtitle mb-2 text-muted">Total Payment</h5>
                            </div>
                            <div class="col-4">
                                <h5 class="card-subtitle mb-2 text-muted">₹3,220.00</h5>
                            </div>
                        </div>
                    </div>
                </div><br/><br/><br/><br/>

            </div>
        </div>
        {/* <!-- login end --> */}

            </>

        );
    }
}
export default Login;