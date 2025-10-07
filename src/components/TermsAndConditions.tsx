// src/components/TermsAndConditions.tsx
import React from "react";
import { FileText, Scale, AlertTriangle, BookOpen } from "lucide-react";
import "./LegalPages.css";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <div className="legal-icon">
            <FileText className="icon" />
          </div>
          <h1>Terms & Conditions</h1>
          <p className="legal-subtitle">Last updated: December 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>
              <Scale className="section-icon" />
              Agreement to Terms
            </h2>
            <p>
              By accessing and using PayCoin's crypto loan services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Eligibility</h2>
            <p>To use our services, you must:</p>
            <ul>
              <li>Be at least 18 years old</li>
              <li>Have legal capacity to enter into binding contracts</li>
              <li>Be able to pay at the appropriate time</li>
              <li>Reside in a jurisdiction where our services are available</li>
              <li>Not be on any prohibited persons list</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>
              <AlertTriangle className="section-icon" />
              Crypto Loan Services
            </h2>
            <p><strong>Loan Terms:</strong></p>
            <ul>
              <li>Loan-to-value ratios from 25% to 75%</li>
              <li>Interest rates from 5% to 15% APR</li>
              <li>Loan durations from 30 days to 365 days</li>
              <li>Collateral in supported cryptocurrencies</li>
              <li>Automatic liquidation at specified thresholds</li>
            </ul>
            
            <p><strong>Risks:</strong></p>
            <ul>
              <li>Cryptocurrency price volatility</li>
              <li>Liquidation risk if collateral value decreases</li>
              <li>Regulatory changes affecting services</li>
              <li>Technology and cybersecurity risks</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Fees and Charges</h2>
            <ul>
              <li>Origination fee: 1-2% of loan amount</li>
              <li>Late payment fee: 5% of overdue amount</li>
              <li>Liquidation fee: 2.5% of collateral value</li>
              <li>Network fees for cryptocurrency transactions</li>
              <li>Early repayment fee: 1% (if applicable)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our platform, including but not limited to text, graphics, logos, and software, are the exclusive property of SmartMine and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>
              <BookOpen className="section-icon" />
              User Responsibilities
            </h2>
            <ul>
              <li>Maintain security of your account credentials</li>
              <li>Provide accurate and complete information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Monitor your loan-to-value ratio regularly</li>
              <li>Report unauthorized access immediately</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              SmartMine shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction where SmartMine is registered, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide 30 days' notice of any material changes. Your continued use of our services after any changes constitutes acceptance of the new Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;