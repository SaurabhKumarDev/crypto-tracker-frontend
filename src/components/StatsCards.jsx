import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";
import { formatCurrency, formatMarketCap } from "@/util/formatters";

const StatsCards = ({ coins }) => {
  if (!coins || coins.length === 0) return null;

  const totalMarketCap = coins.reduce((sum, coin) => sum + coin.marketCap, 0);
  const gainers = coins.filter((coin) => coin.priceChange24h > 0).length;
  const losers = coins.filter((coin) => coin.priceChange24h < 0).length;
  const avgPrice = coins.reduce((sum, coin) => sum + coin.price, 0) / coins.length;

  const stats = [
    {
      title: "Total Market Cap",
      value: formatMarketCap(totalMarketCap),
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      borderColor: "border-blue-500",
    },
    {
      title: "Average Price",
      value: formatCurrency(avgPrice),
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      borderColor: "border-purple-500",
    },
    {
      title: "Gainers",
      value: `${gainers} coins`,
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      borderColor: "border-green-500",
    },
    {
      title: "Losers",
      value: `${losers} coins`,
      icon: <TrendingDown className="w-6 h-6 text-red-500" />,
      borderColor: "border-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${stat.borderColor} hover:-translate-y-1 transition-transform duration-200`}
        >
          <div className="flex items-center gap-3 mb-4">
            {stat.icon}
            <span className="text-sm font-medium text-slate-500">{stat.title}</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
