import React from "react";
import './css/Super.css'

class Super extends React.Component {
    render() {
        return (
            <>
        {/* <!--super start --> */}
        <div class="superbody">
        <div class="row supcard"><br/>
            <h4 class="text-muted supercardh"> ORDER your favourite SUPER-FRUIT now !
            </h4>
            <div class=" col-xl-7 col-sm-7 supback"><br/>
                <div class="row g-0">
                    <div class="col-md-5">
                        <div class="supercard"><strong>KING A</strong>
                        </div>
                        <img src="./image/download.jpg" class="img-fluid" alt="mango"/>
                        <div class="supercenter">
                            <h6 class="card-title">Fruit Weight - 225-250gms</h6>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title">Fruit Grade - "King A" Premium<br/> Authentic Mango Keshar</h5>
                            <p class="card-text"><strong><span class="superredcolor">₹1,470.00 </span></strong><span
                                    class="text-decoration-line-through">₹2,100.00</span> </p>
                            <p>Naturally Ripened Fruit<br/>
                                No Chemical<br/>
                                No Carbide<br/>
                                Strict Quality Control & Check<br/>
                                Origin from Devgad</p>
                            <div>
                                <p>Sizes</p>
                                <img  src="./image/images.png"  class="img-fluid supermango1"
                                    alt="mango"/>
                                <img src="./image/images.png" class="img-fluid supermango2"
                                    alt="mango"/>
                                <img src="./image/images.png" class="img-fluid supermango3"
                                    alt="mango"/>
                            </div><br/>
                            <p class="card-text"><small class="text-muted">Quantity (in Dozen)</small>
                            </p>
                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" class="btn btn-outline-secondary btn-sm">-</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm">1</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm">+</button>
                                &nbsp;|&nbsp;
                                <p><span class="supergrncol">in stock</span></p>
                            </div><br/><br/>

                            <div class="d-flex justify-content-start">
                                <button class="btn btn-secondary me-md-2" type="button"> BUY IT NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-sm-5 supback1">
                <div class="card">
                    <div class="card-body">
                        <div class="row supercenter" >
                            <div class="col-4">
                                <p class="supersize"><i class="fa-solid fa-truck"></i></p>
                                <p>Shipping Fee</p>
                                <p>₹50</p>
                            </div>
                            <div class="col-4">
                                <p class="supersize"><i class="fa-solid fa-right-left"></i></p>
                                <p>Return/Replace</p>
                                <p>Not allowed</p>
                            </div>
                            <div class="col-4">
                                <p class="supersize"><i class="fa-solid fa-circle-xmark"></i></p>
                                <p>Cancellation</p>
                                <p> Allowed</p>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title  mb-2 text-muted">Customer Ratings & Reviews</h4>
                        <p> <img src="./image/Group 398.png" class="img-fluid" alt="group"/>&nbsp; 20,000 Rating and 10,000 Reviews</p>
                        <hr/>
                        <div class="row">
                            <div class="col-2">
                                <img src="./image/Group 354.png" class="img-fluid" alt="group"/>
                            </div>
                            <div class="col-10">
                                <h5 class="card-title">Sharada Nehwal</h5>
                                <p class="card-text">Amazing taste.<br/>I ordered 2 dozen and it got delivered on time.
                                </p>
                                <div class="card-text superyelcol">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="row">
                            <div class="col-2">
                                <img src="./image/Group 354.png" class="img-fluid" alt="group"/>
                            </div>
                            <div class="col-10">
                                <h5 class="card-title">Suraj wagh</h5>
                                <p class="card-text">Love it </p>
                                <div class="card-text superyelcol" >
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="row">
                            <div class="col-2">
                                <img src="./image/Group 354.png" class="img-fluid" alt="group"/>
                            </div>
                            <div class="col-10">
                                <h5 class="card-title">Kiran Jadhav</h5>
                                <p class="card-text">appreciate the quality and professional approach.</p>
                                <div class="card-text superyelcol" >
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        {/* <!-- super end --> */}
        {/* <!-- card start --> */}
        <div class="supercardback"><br/><br/>
            <div class="text-muted" >
                <div class="superca">
                    <h4>You may also like</h4>
                    
                </div><br/><br/>
                <div class="row align-items-center justify-content-center">  
                    <div class="col-xl-3 col-md-6 supback1">
                        <div class="card supercardred"><br/>
                            <div class=" text-end me-md-4">
                            <i  class="fa-regular fa-heart "></i>
                            </div>
                            <img src="./image/jar.png" class="card-img-top" alt="img"/>
                            <div class="card-body">
                                <h5 class="card-title">Mango Jam <br/>
                                    (Coming Soon)</h5>
                                <div class="row">
                                    <div class="col-10">
                                        <h6> <span class="superredcolor">₹180.00</span></h6>
                                    <div class="superyelcol">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i> 
                                    </div>
                                    </div>
                                    <div class="col-2">
                                        <div>
                                        <i class="fa-solid fa-share-nodes"></i>
                                        </div>
                                        <div class="superblucol">
                                        <i class="fa-solid fa-circle-plus"></i>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 supback1">
                        <div class="card supercardred"><br/>
                            <div class=" text-end me-md-4">
                            <i  class="fa-regular fa-heart "></i>
                            </div>
                            <img src="./image/jar2.png" class="card-img-top" alt="img"/>
                            <div class="card-body">
                                <h5 class="card-title">Mango Preserve<br/>
                                    (Coming Soon)</h5>
                                <div class="row">
                                    <div class="col-10">
                                        <h6> <span class="superredcolor">₹120.00 </span></h6>
                                    <div class="superyelcol">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i> 
                                    </div>
                                    </div>
                                    <div class="col-2">
                                        <div>
                                        <i class="fa-solid fa-share-nodes"></i>
                                        </div>
                                        <div class="superblucol">
                                        <i class="fa-solid fa-circle-plus"></i>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 supback1">
                        <div class="card supercardred"><br/>
                            <div class=" text-end me-md-4">
                            <i  class="fa-regular fa-heart "></i>
                            </div>
                            <img src="./image/jar3.png" class="card-img-top" alt="img"/>
                            <div class="card-body">
                                <h5 class="card-title">Mango Pulp<br/>
                                    (Coming Soon)</h5>
                                <div class="row">
                                    <div class="col-10">
                                    <h6> <span class="superredcolor">₹130.00 </span></h6>
                                    <div class="superyelcol">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i> 
                                    </div>
                                    </div>
                                    <div class="col-2">
                                        <div>
                                        <i class="fa-solid fa-share-nodes"></i>
                                        </div>
                                        <div class="superblucol">
                                        <i class="fa-solid fa-circle-plus"></i>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/><br/><br/>

        </div>
        {/* <!-- card end --> */}
            </>

        );
    }
}
export default Super;