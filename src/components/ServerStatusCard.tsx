import React from "react";
import { Card } from "../components/ui/card";

const ServerStatusCard: React.FC = () => {
  return (
    <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl max-w-sm">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="font-semibold text-foreground">Server Status: Online</span>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Active Users:</span>
            <span className="font-semibold text-foreground">1,234</span>
          </div>
          <div className="flex justify-between">
            <span>Loans Processed:</span>
            <span className="font-semibold text-foreground">$2.5M</span>
          </div>
          <div className="flex justify-between">
            <span>Response Time:</span>
            <span className="font-semibold text-foreground">0.2s</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServerStatusCard;
