import React from "react";
import "./footer.css";
import Credit from "./Credit";

function Footer() {
    return (
        <div className="footer">
            <p className="copyRights">
                © Airbnb Hub, No rights reserved. This is a clone!
            </p>
            <p className="links">
                <a href="#">Privacy</a>
                <a href=""> · </a>
                <a href="#">Terms</a>
                <a href=""> · </a>
                <a href="#">Sitemap</a>
            </p>

            <Credit />
        </div>
    );
}

export default Footer;
