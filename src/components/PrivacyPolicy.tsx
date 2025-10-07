// src/components/PrivacyPolicy.tsx
import React from "react";
import { Shield, Lock, Eye, Database } from "lucide-react";
import "./LegalPages.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <div className="legal-icon">
            <Shield className="icon" />
          </div>
          <h1>Privacy Policy</h1>
          <p className="legal-subtitle">Last updated: December 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>
              <Lock className="section-icon" />
              Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Account information (name, email, phone number)</li>
              <li>Financial information for loan processing</li>
              <li>Transaction history and cryptocurrency addresses</li>
              <li>Communication records and customer support queries</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>
              <Eye className="section-icon" />
              How We Use Your Information
            </h2>
            <p>We use the collected information for:</p>
            <ul>
              <li>Providing and maintaining our crypto loan services</li>
              <li>Processing transactions and managing your account</li>
              <li>Communicating important updates and security alerts</li>
              <li>Improving our services and user experience</li>
              <li>Complying with legal obligations and regulations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>
              <Database className="section-icon" />
              Data Protection & Security
            </h2>
            <p>
              We implement robust security measures to protect your personal information:
            </p>
            <ul>
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Multi-factor authentication for account access</li>
              <li>Secure storage of cryptographic keys</li>
              <li>Regular employee training on data protection</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with:
            </p>
            <ul>
              <li>Regulatory authorities when required by law</li>
              <li>Service providers who assist in our operations</li>
              <li>Financial institutions for transaction processing</li>
              <li>Professional advisors and auditors</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability in a machine-readable format</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: paycoincustomercare@gmail.com</p>
              <p>Phone: 8 800 234 56 78</p>
              <p>Address: 123 Crypto Street, Digital District, 10001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;