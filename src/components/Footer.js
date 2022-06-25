import React from "react";

function Footer() {
    return (
        <>
        <div className="row footer">
            <div className="col-4">
                <div className="row"><h3 className="footer-h3">Old Books in popular cities</h3>
                {/* <div className="footer-under-line"></div> */}

                    <div className="col-6">
                        <ul>
                            <li>Old Books in Delhi</li>
                            <li>Old Books in Pune</li>
                            <li>Old Books in Bangalore</li>
                            <li>Old Books in Ahmedabad</li>
                            <li>Old Books in Hyderabad</li>
                            <li>Old Books in Chandigarh</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Old Books in Mumbai</li>
                            <li>Old Books in Gurgaon</li>
                            <li>Old Books in Vadodara</li>
                            <li>Old Books in Noida</li>
                            <li>Old Books in Chennai</li>
                            <li>Old Books in Coimbatore</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-4"><h3 className="footer-h3">Old Books in popular cities</h3>
            <div className="footer-under-line"></div>

                <ul>
                    <li>Old books</li>
                    <li>Free/Donate Old Books</li>
                    <li>Entrance Exams books</li>
                    <li>Magazine</li>
                    <li>Exchange Novels</li>
                    <li>Buy used textbooks</li>
                </ul>
            </div>
            <div className="col-4"><h3 className="footer-h3">Old Books in popular cities</h3>
            <div className="footer-under-line"></div>

                <ul>
                    <li>About us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Contact us</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
        <div className="row copyright">
            <div className="col-10 copy" >
            © Copyright 2020. All Rights Reserved. Product of CodeCrunch Techlabs
          Pvt. Ltd.
            </div>
            <div className="col-2 socialmedia">
            <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-google-plus-g"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
        </>
    )
}

export default Footer;