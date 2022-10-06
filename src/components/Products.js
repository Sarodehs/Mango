import React from "react";
import './css/Products.css';
import { NavLink } from 'react-router-dom'
class Products extends React.Component {
    render() {
        return (
            <>
        {/* <!-- card start --> */}
        <div class="procardback"><br/><br/>
            <div class="text-muted">
                <div class="procardh">
                    <h4>ORDER your favourite SUPER-FRUIT now !</h4>
                </div><br/><br/>
                 <div class="row ">
                    <div class=" col-xl-6 col-md-5 propadd1">
                        <p><strong> Home | ORDER YOUR FAVOURITE SUPER-FRUIT NOW !</strong></p>
                    </div>
                    <div class="col-xl-5 col-md-5 d-flex justify-content-end propadd1">
                        <div class="input-group procardinput" >
                            <input type="text" 
                                class="form-control procardinput1" aria-label="Dollar amount (with dot and two decimal places)"
                                placeholder="Sort"></input>
                            <button  type="button"
                                class="btn btn-outline-light procardbut"><i class="fa-solid fa-clock"></i></button>
                            <button type="button" class="btn btn-outline-light procardbut1"><i
                                    class="fa-solid fa-bars"></i></button>
                        </div>
                    </div>
                </div><br/><br/>
            </div>
            <div class="row align-items-center justify-content-center">  
                <div class="col-xl-3 col-md-5 propadd1">
                    <div class="card proradi2 "><br/>
                        <div class="procenter proyellcolor"><strong>KING A1+</strong></div>
                        <div class=" text-end me-md-4 proredcolor" >
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <img src="./image/download.jpg" class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Fruit Weight - 300+ gms</h5>
                            <p>Fruit Grade - "King A1+" Premium<br/> Authentic Devgad Alphonso<br/> Mangoes 1 Dozen</p>
                            
                            <div class="row">
                                <div class="col-10">
                                    <p class="card-text"><strong><span class="proredcolor">₹1,750.00 </span></strong><span
                                        class="text-decoration-line-through">₹2,500.00</span> </p>
                                <div class="proyellcolor">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i> 
                                </div><br/>
                                </div>
                                <div class="col-2">
                                    <div>
                                    <i class="fa-solid fa-share-nodes"></i>
                                    </div><br/>
                                    <div class="proplus">
                                    <i class="fa-solid fa-circle-plus"></i>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-5 propadd1">
                    <div class="card proradi2"><br/>
                        <div class="procenter proyellcolor"><strong>KING</strong></div>
                        <div class=" text-end me-md-4" >
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <img src="./image/download.jpg" class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Fruit Weight - 200-225gms</h5>
                            <p>Fruit Grade - "King" Premium <br/>Authentic Mango Totapuri 1 Dozen </p><br/>
                            
                            <div class="row">
                                <div class="col-10">
                                    <p class="card-text"><strong><span class="proredcolor">₹1,330.00  </span></strong><span
                                        class="text-decoration-line-through">₹1,900.00</span> </p>
                                <div class="proyellcolor">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                   
                                </div><br/>
                                </div>
                                <div class="col-2">
                                    <div>
                                    <i class="fa-solid fa-share-nodes"></i>
                                    </div><br/>
                                    <div class="proplus">
                                    <i class="fa-solid fa-circle-plus"></i>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-5 propadd1">
                    <a href="/#" class="prosuper"><NavLink to="/Super" className={"prosuper"}>
                    <div  class="card proradi2  proyellback"><br/>
                        <div class="procenter"><strong>KING A</strong></div>
                        <div class=" text-end me-md-4 proredcolor">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <img  src="./image/Group 397.png" class="card-img-top " alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Fruit Weight - 225-250gms</h5>
                            <p>Fruit Grade - "King A" Premium<br/> Authentic Mango Keshar 1 Dozen</p>
                            
                            <div class="row">
                                <div class="col-10">
                                    <p class="card-text"><strong><span class="proredcolor">₹1,470.00 </span></strong><span
                                        class="text-decoration-line-through">₹2,100.00</span> </p>
                                <div class="prowhicolor">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                   
                                </div><br/>
                                </div>
                                <div class="col-2">
                                    <div>
                                    <i class="fa-solid fa-share-nodes"></i>
                                    </div><br/>
                                    <div class="proplus">
                                    <i class="fa-solid fa-circle-plus"></i>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </NavLink></a>
                </div>
            </div>            <br/><br/>
            <div class="row align-items-center justify-content-center">
                <div class="col-xl-3 col-md-5 propadd1">
                    <div  class="card proradi1"><br/>
                        <div class=" text-end me-md-4">
                            <i class="fa-regular fa-heart "></i>
                        </div>
                        <img src="./image/jar.png" class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Mango Jam 
                                (Coming Soon)</h5><br/><br/>
                            <div class="row">
                                <div class="col-10">
                                    <h6> <span class="proredcolor">₹180.00</span></h6>
                                    <div class="proyellcolor">
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
                                    <div class="probluecolor">
                                        <i class="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-5 propadd1">
                    <div  class="card proradi1"><br/>
                        <div class=" text-end me-md-4">
                            <i class="fa-regular fa-heart "></i>
                        </div>
                        <img src="./image/jar2.png" class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Mango Preserve (Coming Soon)</h5><br/><br/>
                            <div class="row">
                                <div class="col-10">
                                    <h6> <span class="proredcolor">₹120.00</span></h6>
                                    <div class="proyellcolor">
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
                                    <div class="probluecolor">
                                        <i class="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-5 propadd1">
                    <div  class="card proradi1"><br/>
                        <div class=" text-end me-md-4">
                            <i class="fa-regular fa-heart "></i>
                        </div>
                        <img src="./image/jar3.png" class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Mango Pulp (Coming Soon)</h5><br/><br/>
                            <div class="row">
                                <div class="col-10">
                                    <h6> <span class="proredcolor">₹130.00</span></h6>
                                    <div class="proyellcolor">
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
                                    <div class="probluecolor">
                                        <i class="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div class="row align-items-center justify-content-center">
                <div class="col-xl-3 col-md-5 propadd1">
                    <div  class="card proradi1"><br/>
                        <div class=" text-end me-md-4 proredcolor" >
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <img src="./image/Mask Group 9.png" class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Spicy Pickle<br/>
                                (Coming Soon)</h5><br/><br/>
                            <div class="row">
                                <div class="col-10">
                                    <h6> <span class="proredcolor">₹120.00</span></h6>
                                    <div class="proyellcolor">
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
                                    <div class="probluecolor">
                                        <i class="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-5 propadd1">
                    <div class="card proradi1"><br/>
                        <div class=" text-end me-md-4 proredcolor" >
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <img src="./image/Mask Group 10.png" class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Sweet & Spicy Pickle<br/>
                                (Coming Soon)</h5><br/><br/>
                            <div class="row">
                                <div class="col-10">
                                    <h6> <span class="proredcolor">₹120.00</span></h6>
                                    <div class="proyellcolor">
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
                                    <div class="probluecolor">
                                        <i class="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/><br/><br/>
        </div> 
    {/* <!-- card end --> */}
    {/* <!--solution start--> */}
    <div class="prosoluback">
        <div class="prosol">
            <h4><strong> GIFTING SOLUTIONS</strong></h4>
            <p>GIFT SOME<br/>
                HAPPINESS<br/>
                AND LOVE</p>
        </div>
    </div>
    {/* <!--solution end--> */}
    {/* <!-- gift start --> */}
    <div class="progiftback">
        <div class="row align-items-center justify-content-center propadd1">
            <div class="col-xl-5 col-md-12">
                <div class="card progiftcard1" >
                    <img src="./image/Path 367.png" class="card-img-top" alt="img"/>
                    <div class="card-body row ">
                        <div class="col-xl-6 col-md-6 progiftstart" >
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="col-xl-6 col-md-6">
                            <i  class="fa-solid fa-circle-plus proplus"></i> &nbsp;
                            &nbsp;
                            <i  class="fa-solid fa-heart progifthard"></i> &nbsp; &nbsp;
                            <i  class="fa-solid fa-share-nodes progiftsize"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-md-12">
                <div>
                    <h4 class="progrecolor"> <strong>Personal Gifting Solution</strong></h4>
                    <p class="text-murd">Surprise your loved ones this Summer by gifting<br/> them Authentic Devgad
                        Alphonso Mangoes and<br/> make them Smile.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button class="btn btn-secondary me-md-2" type="button">Make them smile</button>
                    </div><br/><br/><br/>
                    <button  type="button" class="btn btn-light progiftbutt">SEE MORE
                        <i  class="fa-solid fa-circle-chevron-right progiftsize proredcolor"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center proorder">
            <div class="col-xl-6 col-md-12">
                <div class="progiftright" >
                    <h4 class="progrecolor"> <strong>Corporate Gifting</strong></h4>
                    <p class="text-murd">After an uncertain year full of tragedies and compromises, its<br/> time to show
                        appreciation to your Employees or Business <br/>Associates who have stayed with you through thick
                        and thin.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-secondary me-md-2" type="button">Make them smile</button>
                    </div><br/><br/><br/>
                    <button  type="button" class="btn btn-light progiftbutt">SEE MORE
                        <i  class="fa-solid fa-circle-chevron-right progiftsize proredcolor"></i>
                    </button>
                </div>
            </div>
            <div class="col-xl-5 col-md-12">
                <div class="card progiftcard2">
                    <img src="./image/Path 368.png" class="card-img-top" alt="img"/>
                    <div class="card-body row ">
                        <div class="col-xl-6 col-md-6 progiftstart">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="col-xl-6 col-md-6">
                            <i  class="fa-solid fa-circle-plus proplus"></i> &nbsp;
                            &nbsp;
                            <i class="fa-solid fa-heart progiftsize proredcolor"></i> &nbsp; &nbsp;
                            <i class="fa-solid fa-share-nodes progiftsize"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        {/* <!-- gift end --> */}

</>

        );
    }
}
export default Products;