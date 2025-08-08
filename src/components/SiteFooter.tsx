import React from "react";
import { Bitcoin, Facebook, Twitter, Linkedin, Instagram, Send, CreditCard, CircleDollarSign } from "lucide-react";
import "./SiteFooter.css";

const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer" aria-labelledby="footer-brand">
      <div className="ft-container">
        <div className="ft-columns">
          <div className="ft-col ft-brand">
            <div className="brand-head">
              <div className="brand-logo" aria-hidden="true">
                <Bitcoin className="brand-svg" />
              </div>
              <div className="brand-text">
                <strong id="footer-brand">Pay</strong>
                <span>Coin</span>
              </div>
            </div>
            <p className="brand-desc">
              Crypto loan platform
              
            </p>
            <div className="payment-row" aria-label="Payment methods">
              <div className="pay-badge" style={{ ["--badge-hsl" as any]: "220 90% 60%" } as React.CSSProperties}><CreditCard className="pay-svg" /></div>
              <div className="pay-badge" style={{ ["--badge-hsl" as any]: "24 95% 55%" } as React.CSSProperties}><CreditCard className="pay-svg" /></div>
              <div className="pay-badge" style={{ ["--badge-hsl" as any]: "216 100% 56%" } as React.CSSProperties}><CircleDollarSign className="pay-svg" /></div>
              <div className="pay-badge" style={{ ["--badge-hsl" as any]: "28 100% 50%" } as React.CSSProperties}><Bitcoin className="pay-svg" /></div>
            </div>
          </div>

          <div className="ft-col">
            <h4 className="ft-title">Helpful</h4>
            <ul className="ft-links">
              <li><a href="#services" className="story-link">Services</a></li>
              <li><a href="#forex" className="story-link">Forex</a></li>
              <li><a href="#synthetic" className="story-link">Synthetic indices</a></li>
              <li><a href="#commodities" className="story-link">Commodities</a></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4 className="ft-title">Company</h4>
            <ul className="ft-links">
              <li><a href="#about" className="story-link">About us</a></li>
              <li><a href="#blog" className="story-link">Our blog</a></li>
              <li><a href="#pricing" className="story-link">Pricing plans</a></li>
              <li><a href="#contacts" className="story-link">Contacts</a></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4 className="ft-title">Contact</h4>
            <ul className="ft-links">
              <li><a href="tel:+18002345678" className="story-link">8 800 234 56 78</a></li>
              <li><a href="mailto:support@smartmine.com" className="story-link">support@smartmine.com</a></li>
            </ul>
            <div className="social-row">
              <a href="#" aria-label="Facebook" className="social-badge" style={{ ["--social-hsl" as any]: "221 44% 41%" } as React.CSSProperties}><Facebook className="social-svg" /></a>
              <a href="#" aria-label="Twitter" className="social-badge" style={{ ["--social-hsl" as any]: "203 89% 53%" } as React.CSSProperties}><Twitter className="social-svg" /></a>
              <a href="#" aria-label="LinkedIn" className="social-badge" style={{ ["--social-hsl" as any]: "201 100% 35%" } as React.CSSProperties}><Linkedin className="social-svg" /></a>
              <a href="#" aria-label="Telegram" className="social-badge" style={{ ["--social-hsl" as any]: "199 89% 58%" } as React.CSSProperties}><Send className="social-svg" /></a>
              <a href="#" aria-label="Instagram" className="social-badge" style={{ ["--social-hsl" as any]: "0 0% 20%" } as React.CSSProperties}><Instagram className="social-svg" /></a>
            </div>
          </div>
        </div>

        <hr className="ft-divider" />

        <div className="ft-bottom">
          <p className="copyright">© SmartMine, 2018—2025. Created by Dmitry Volkov.</p>
          <nav className="ft-bottom-links" aria-label="Legal">
            <a href="#" className="story-link">Legal documents</a>
            <a href="#" className="story-link">Knowledge base</a>
            <a href="#" className="story-link">Privacy policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
