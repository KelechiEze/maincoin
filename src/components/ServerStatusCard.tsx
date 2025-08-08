import React from "react";
import { Circle } from "lucide-react";
import "./ServerStatusCard.css";

const statuses = [
  { location: "Europe", city: "Amsterdam", status: "active" as const },
  { location: "India", city: "Chennai", status: "warning" as const },
  { location: "Japan", city: "Tokyo", status: "active" as const },
  { location: "China", city: "Hong Kong", status: "active" as const },
  { location: "USA", city: "San Jose", status: "active" as const },
  { location: "Brazil", city: "Sao Paulo", status: "offline" as const },
];

const ServerStatusCard: React.FC = () => {
  return (
    <aside className="ssc-card" aria-label="Server status">
      <h2 className="ssc-title">Server status</h2>
      <ul className="ssc-list">
        {statuses.map(({ location, city, status }) => (
          <li key={`${location}-${city}`} className="ssc-item">
            <span
              className={`ssc-dot ${
                status === "active"
                  ? "status-green"
                  : status === "warning"
                  ? "status-orange"
                  : "status-red"
              }`}
              aria-hidden="true"
            >
              <Circle size={12} />
            </span>
            <span className="ssc-text">
              <strong>{location}</strong> – {city}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ServerStatusCard;
