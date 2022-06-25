import React from "react";
import { Button } from "react-bootstrap";

function Header() {
    return (
        <div className="container header-container">
            <div className="header row">
                <div className="col-lg-9 col-12">
                    <img alt="" src="http://www.studentdesk.in/img/logo.png" />
                </div>
                <div className="col-3">
                    <div className="">
                        <ul className="row">
                            <li className="header-li col-6">
                                <Button variant="success">Post book</Button>
                            </li>
                            <li className="header-li col-6">
                                <Button variant="success">Login / Signup</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;