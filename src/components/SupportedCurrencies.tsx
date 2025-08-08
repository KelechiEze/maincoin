import React from "react";
import {
  Bitcoin,
  Gem,
  DollarSign,
  Coins,
  Shield,
  Check,
  Infinity,
  Leaf,
  CircleDot,
  Gauge,
  EyeOff,
} from "lucide-react";
import "./SupportedCurrencies.css";

interface CurrencyItem {
  name: string;
  rate: string;
  colorHsl: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const currencies: CurrencyItem[] = [
  { name: "Bitcoin", rate: "Available for loans", colorHsl: "28 100% 50%", Icon: Bitcoin },
  { name: "Ethereum Classic", rate: "Available for loans", colorHsl: "210 10% 30%", Icon: Gem },
  { name: "Ethereum", rate: "Available for loans", colorHsl: "0 0% 12%", Icon: Gem },
  { name: "Startcoin", rate: "Available for loans", colorHsl: "205 100% 65%", Icon: DollarSign },
  { name: "Litecoin", rate: "Available for loans", colorHsl: "0 0% 70%", Icon: Coins },
  { name: "Monero", rate: "Available for loans", colorHsl: "22 90% 55%", Icon: Shield },
  { name: "Vertcoin", rate: "Available for loans", colorHsl: "140 60% 45%", Icon: Check },
  { name: "Infinitecoin", rate: "Available for loans", colorHsl: "340 80% 50%", Icon: Infinity },
  { name: "Salus", rate: "Available for loans", colorHsl: "150 60% 40%", Icon: Leaf },
  { name: "PrimeCoin", rate: "Available for loans", colorHsl: "45 95% 55%", Icon: CircleDot },
  { name: "Dash", rate: "Available for loans", colorHsl: "210 100% 45%", Icon: Gauge },
  { name: "Shadow", rate: "Available for loans", colorHsl: "350 60% 40%", Icon: EyeOff },
];

const SupportedCurrencies: React.FC = () => {
  return (
    <section id="supported-currencies" className="supported-currencies" aria-labelledby="supported-currencies-title">
      <div className="sc-container">
        <header className="sc-header">
          <h2 id="supported-currencies-title">Supported Loan Currencies</h2>
          <p className="sc-subtext">
            Choose from a wide range of supported cryptocurrencies you can use as collateral or receive as loan. Secure, flexible, and fast.
          </p>
        </header>

        <ul className="currency-grid" role="list">
          {currencies.map(({ name, rate, Icon, colorHsl }) => (
            <li key={name} className="currency-item">
              <div
                className="coin-icon"
                style={{ ["--coin-hsl" as any]: colorHsl } as React.CSSProperties}
                aria-hidden="true"
              >
                <Icon className="coin-svg" />
              </div>
              <div className="coin-meta">
                <span className="coin-name">{name}</span>
                <span className="coin-rate">{rate}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="sc-cta-wrap">
          <a href="#" className="sc-cta" aria-label="Apply for a crypto loan">APPLY FOR LOAN</a>
        </div>
      </div>
      <link rel="canonical" href="/#supported-currencies" />
    </section>
  );
};

export default SupportedCurrencies;
