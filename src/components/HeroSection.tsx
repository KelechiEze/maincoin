import React from "react";
import { ArrowRight } from "lucide-react";
import ServerStatusCard from "./ServerStatusCard";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-art">
          <img
            src="/server.jpg"
            alt="Secure crypto server"
            loading="eager"
          />
        </div>
      </div>

      <div className="hero-inner">
        <article className="hero-copy">
          <h1 id="hero-heading" className="hero-title">
            <span>Unlock Instant</span>
            <span className="hero-title-break">Crypto Loans Today!</span>
          </h1>
          <p className="hero-sub">
            Use your crypto as collateral and get cash in minutes — no credit
            checks, no delays. Experience fast, secure, and borderless lending powered
            by blockchain technology.
          </p>
          <div className="hero-ctas">
            <a
              href="https://paycoin-dashboard.netlify.app/" // 🔁 Replace with your actual link
              className="hero-cta"
              aria-label="Get started"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET STARTED <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </article>

        <div className="hero-status">
          <ServerStatusCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
