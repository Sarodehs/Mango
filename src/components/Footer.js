import React from "react";
import './css/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <>
                {/* <!-- footer section start --> */}
                <footer class="footback">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-4 col-md-8">
                                <h3>About Us</h3>
                                <p>
                                    Mad Mangoes offers the juiciest and freshest mangoes of them all, Authentic Devgad
                                    Alphonso
                                    Mangoes Online!

                                    All our mangoes are chemical-free, carbide free and handpicked from Owned farms or
                                    Partner
                                    farmers from the heart of Devgad.
                                </p>
                            </div>
                            <div class="col-xl-4 col-md-7 footpoliy">
                                <h3>Site Links</h3>

                                <p>Return Policy</p>

                                <p>Terms & Conditions</p>

                                <p>Privacy Policy</p>
                            </div>
                            <div class="col-xl-4 col-md-7">
                                <h3>Stay Connected</h3>
                                <h6>Subscribe to join our newsletter.</h6>
                                <div class="input-group">
                                    <input class="footinput" type="text" id="inlineFormInputemail" placeholder="Email Address"></input>
                                    <div class="input-group-text footinput1"><i class="fa-solid fa-arrow-right-long"></i></div>
                                </div><br />
                                <div>
                                    <p class="footicon"><i class="fa-brands fa-youtube"></i></p>
                                    <p class="footicon"><i class="fa-brands fa-twitter"></i></p>
                                    <p class="footicon"><i class="fa-brands fa-facebook-f"></i></p>
                                    <p class="footicon"><i class="fa-brands fa-instagram"></i></p>
                                </div>
                            </div>

                        </div>

                    </div>
                </footer>
                <div class="footcopy">
                    <h6>Copyright © 2021 | mangoehouse.com</h6>
                </div>
                {/* <!-- footer section end --> */}
            </>
                );
        }
}
export default Footer;