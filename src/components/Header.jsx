"use client";
import { RefreshCw, Activity } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const Header = ({ onRefresh, loading, lastUpdated }) => {
  return (
    <header className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4 md:px-8 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-yellow-400" />
            <h1 className="text-2xl font-bold m-0">CryptoTracker</h1>
          </div>
          <div className="text-sm opacity-90 md:ml-11">
            Real-time cryptocurrency market data
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm opacity-90">
          {lastUpdated && (
            <div className="text-right whitespace-nowrap">
              Updated {formatDistanceToNow(lastUpdated, { addSuffix: true })}
            </div>
          )}

          <button
            onClick={onRefresh}
            disabled={loading}
            title="Refresh data"
            className={`flex items-center gap-2 px-5 py-3 rounded-md border border-white/30 backdrop-blur-md transition-all text-white font-medium ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-white/30 hover:-translate-y-[1px]"
            } bg-white/20`}
          >
            <RefreshCw
              className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
            />
            {loading ? "Updating..." : "Refresh"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
