import React from 'react';
import '../../Style/style.css';

const Footer = () => {
    return (
        <div className="main-footer">

            <div className="container">
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Sweet Breeze | All right reserved | Term of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
