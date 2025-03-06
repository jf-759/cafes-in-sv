import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="Footer">
            <p>Jane Fernandez &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;