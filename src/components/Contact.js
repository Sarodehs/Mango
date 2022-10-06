import React from "react";
import './css/Contact.css'

class Contact extends React.Component {
    render() {
        return (
            <>
        <div class="contback ">
            {/* <!-- contactus start --> */}
            <div class="contcenter ">
                <h3>Contact Us</h3>
                <div class=" row align-items-center justify-content-center">
                    <div class="col-xl-3 col-md-6 ">
                        <hr/>
                    </div>
                </div>
                <div class="contbackimg">
                    <p>
                        Unit No. 465, MH Housing, <br/>
                        Ali Yavar Jung Marg, Malad (East),<br/>
                        Mumbai - 400097<br/>
                        Email : wecare@madmangoes.in<br/>
                        Phone: +91 8268555558.<br/>
                    </p>

                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-2 col-md-4">
                            <hr/>
                        </div>
                        <div class="col-xl-1 col-md-2">
                            or
                        </div>
                        <div class="col-xl-2 col-md-4">
                            <hr/>
                        </div>

                    </div>

                    <input class="contactinput " type="text" placeholder="First Name"/><br/><br/>
                    <input class="contactinput" type="text" placeholder="Last Name"/><br/><br/>
                    <input class="contactinput" type="text" placeholder="Subject"/><br/><br/>
                    <input class="contactinput" type="text" placeholder="Address"/><br/><br/>
                    <input class="contactinput" type="email" placeholder="E-mail"/><br/><br/>
                    <input class="contactinput" type="tel" placeholder="Phone Number"/><br/><br/>
                    <textarea class="contactinput" placeholder="Message" rows="5"></textarea><br/><br/>
                    <button type="button" class="btn btn-outline-secondary contactinput">Submit</button>
                </div>
            </div>
            <br/><br/>
            <div class="contpolicy">
                <p>Refund policy Shipping policy Privacy policy Terms of service</p>
            </div>
            {/* <!-- contactus end --> */}
        </div>
    </>

        );
    }
}
export default Contact;