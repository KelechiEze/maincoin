import React from "react";
import { Star } from "lucide-react";
import "./PricingSection.css";

interface Plan {
  name: string;
  price: string;
  unit: string;
  features: string[];
  url: string; // 👈 Added URL field for redirection
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    name: "Small",
    price: "$500.50",
    unit: "for 1 MH/s",
    url: "https://paycoin-dashboard.netlify.app/", // 🔁 Replace with actual URL
    features: [
      "Minimal Hashrate: 1 MH/s",
      "Service pay: 0.005$ / 1 MH/s / 24h",
      "Equipment: HashCoins SCRYPT",
      "Automatic charging in BTC",
      "1 year",
    ],
  },
  {
    name: "Medium",
    price: "$1500.20",
    unit: "for 10 GH/s",
    url: "https://paycoin-dashboard.netlify.app/", // 🔁 Replace with actual URL
    features: [
      "Minimal Hashrate: 10 GH/s",
      "Service pay: 0.0035$ / 10 GH/s / 24h",
      "Equipment: HashCoins SHA-256",
      "Automatic charging in BTC",
      "1 year",
    ],
  },
  {
    name: "Large",
    price: "$3000.70",
    unit: "for 100 KH/s",
    url: "https://paycoin-dashboard.netlify.app/", // 🔁 Replace with actual URL
    features: [
      "Minimal Hashrate: 100 KH/s",
      "Service pay: No",
      "Equipment: GPU Rigs",
      "Automatic charging in ETH",
      "1 year",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "$5000.90",
    unit: "for 1 MH/s",
    url: "https://paycoin-dashboard.netlify.app/", // 🔁 Replace with actual URL
    features: [
      "Minimal Hashrate: 1 MH/s",
      "Service pay: No",
      "Equipment: Multi-Factor",
      "Automatic charging in DASH",
      "1 year",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-title">
      <div className="pricing-container">
        <header className="pricing-header">
          <h2 id="pricing-title">Pricing</h2>
          <p className="pricing-sub">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose.
          </p>
        </header>

        <div className="plan-grid" role="list">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plan-card ${plan.highlight ? "is-highlight" : ""}`}
              role="listitem"
            >
              {plan.highlight && (
                <div className="plan-badge" aria-hidden="true">
                  <Star className="badge-star" />
                </div>
              )}

              <h3 className="plan-name">{plan.name}</h3>

              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="plan-price">
                <span className="amount">{plan.price}</span>
              </div>
              <p className="plan-unit">{plan.unit}</p>

              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="plan-cta"
                aria-label={`Buy ${plan.name} plan`}
              >
                BUY NOW
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
