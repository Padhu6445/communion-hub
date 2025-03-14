import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CommunionHub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;