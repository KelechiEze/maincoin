// OfferingSection.jsx
import React from 'react';
import { Car, Heart, Home } from 'lucide-react';
import './OfferingSection.css';

const OfferingSection = () => {
  const services = [
    {
      id: 1,
      name: "Car Loan",
      description: "Car Loan provide low interest many variations of passages of lorem ipsum available the majority have some.",
      icon: <Car size={32} />,
      className: "car-loan"
    },
    {
      id: 2,
      name: "Wedding Loan",
      description: "For Couple provide easy and affordable with easy process lorem ipsum minim veniam aute irure lorm.",
      icon: <Heart size={32} />,
      className: "wedding-loan"
    },
    {
      id: 3,
      name: "Property Loan",
      description: "Everyone want to buy property so people want to buy home, land or commercial property low interest.",
      icon: <Home size={32} />,
      className: "property-loan"
    }
  ];

  return (
    <section className="offering-section">
      <div className="offering-container">
        <div className="offering-header">
          <h2>What We're Offering</h2>
          <p className="offering-sub">All Loans Services</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.className}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-cta">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingSection;