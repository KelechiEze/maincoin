import React from "react";
import { ArrowRight } from "lucide-react";
import ServerStatusCard from "./ServerStatusCard";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <section  id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-art">
          <img
            src="/server.jpg"
            alt="Data center server racks"
            loading="eager"
          />
        </div>
      </div>

      <div className="hero-inner">
        <article className="hero-copy">
          <h1 id="hero-heading" className="hero-title">
            <span>Start Bitcoin</span>
            <span className="hero-title-break">mining today!</span>
          </h1>
          <p className="hero-sub">
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
          </p>
          <div className="hero-ctas">
            <a
              href="https://paycoin-dashboard.netlify.app/" // 🔁 Replace with your actual external link
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
