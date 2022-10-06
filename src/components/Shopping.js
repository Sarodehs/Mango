import React from "react";
import './css/Shopping.css'

class Shopping extends React.Component {
    render() {
        return (
            <>
        {/* <!-- shopping start --> */}
        <div class="row shocard" ><br/>
            <div class=" col-xl-8 col-md-8 shoback" ><br/>
                <div class="row">
                <div class="col-xl-11 col-md-9">
                    <h4 class="text-muted"> Shopping Cart</h4>
                </div>
                <div class="col-xl-1 col-md-2">
                     <p>Price</p>
                </div>
               </div>
                <hr />
                <div>
                    <div class="row g-0">
                        <div class="col-xl-3 col-md-6">
                            <img src="./image/download.jpg" class="img-fluid" alt="mango"/>
                        </div>
                        <div class="col-xl-7 col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Fruit Weight - 300+ gms</h5>
                                <p class="card-text">Fruit Grade - "King A1+" Premium Authentic Devgad
                                    Alphonso Mangoes</p>
                                <p><span class="shotext"> in stock</span></p>
                                <p class="card-text"><small class="text-muted">Quantity (in Dozen)</small>
                                </p>
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" class="btn btn-outline-secondary btn-sm">-</button>
                                    <button type="button" class="btn btn-outline-secondary btn-sm">1</button>
                                    <button type="button" class="btn btn-outline-secondary btn-sm">+</button>
                                </div>
                                <div class="shodelete">
                                    <a href="/">delete</a> |
                                    <a href="/">save for later</a>
                                </div>
                            </div>
                        </div>
                        <div class=" col-xl-2 col-md-4">
                            <div class="card-body">
                                <h5><span class="shoprice">₹1,750.00 </span> </h5>
                                <p>30% OFF</p>
                                <p>Deliver by 10 may 2021 </p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div class="col-xl-3 col-md-6">
                            <img src="./image/download.jpg" class="img-fluid" alt="mango"/>
                        </div>
                        <div class="col-xl-7 col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Fruit Weight - 225-250gms</h5>
                                <p class="card-text">Fruit Grade - "King A" Premium Authentic Mango Keshar
                                </p>
                                <p class="card-text"><span class="shotext"> in stock</span></p>
                                <p class="card-text"><small class="text-muted">Quantity (in Dozen)</small>
                                </p>
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" class="btn btn-outline-secondary btn-sm">-</button>
                                    <button type="button" class="btn btn-outline-secondary btn-sm">1</button>
                                    <button type="button" class="btn btn-outline-secondary btn-sm">+</button>
                                </div>
                                <div class="shodelete">
                                    <a href="/">delete</a> |
                                    <a href="/">save for later</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4">
                            <div class="card-body">
                                <h5><span class="shoprice">₹1,470.00 </span> </h5>
                                <p>30% OFF</p>
                                <p>Deliver by 10 may 2021 </p>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                   <p> Subtotal (2 items):<strong> ₹3,220.00</strong></p>
                </div>
            </div>
            <div class="col-xl-4 col-md-8 shoprice1">
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
                        </div><br/><br/>
                        <div class="d-flex justify-content-start">
                            <button class="btn btn-secondary me-md-2" type="button">PROCEED TO PAY</button>
                        </div><br/><br/><br/><br/>
                    </div>
                   
                </div><br/><br/><br/><br/>

            </div><br/><br/><br/><br/>
        </div>
        {/* <!-- shopping end --> */}

            </>

        );
    }
}
export default Shopping;