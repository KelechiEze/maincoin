import React, { useState } from "react";
import { Bitcoin, Menu, X } from "lucide-react";
import "./SmartMineHeader.css";

const SmartMineHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="smh-header" role="banner">
      <div className="smh-inner">
        {/* Branding */}
        <a href="#" className="smh-brand" aria-label="SmartMine home">
          <span className="smh-logo">
            <Bitcoin size={22} aria-hidden="true" />
          </span>
          <span className="smh-brand-text" aria-hidden="true">
            <span className="smh-brand-line smh-bold">Pay</span>
            <span className="smh-brand-line">Coin</span>
          </span>
        </a>

        {/* Center Nav */}
        <nav className="smh-nav" aria-label="Primary">
          <a href="#home" className="smh-link">Home</a>
          <a href="#supported-currencies" className="smh-link">Currencies</a>
          <a href="#pricing" className="smh-link">Loan plans</a>
          <a href="#why" className="smh-link">Why Choose Us</a>
          <a href="#testimonials" className="smh-link">Testimonials</a>
        </nav>

        {/* Actions */}
        <div className="smh-actions">
          <a
            href="https://paycoin-dashboard.netlify.app/"
            className="smh-signin"
            aria-label="Sign in"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIGN IN
          </a>
          <button
            className="smh-burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`smh-mobile ${open ? "open" : ""}`}>
        <a href="#home" className="smh-mobile-link">Home</a>
        <a href="#supported-currencies" className="smh-mobile-link">Currencies</a>
        <a href="#pricing" className="smh-mobile-link">Loan plans</a>
        <a href="#why" className="smh-mobile-link">Why Choose Us</a>
        <a href="#testimonials" className="smh-mobile-link">Testimonials</a>
      </div>
    </header>
  );
};

export default SmartMineHeader;
