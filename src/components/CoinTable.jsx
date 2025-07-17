import { TrendingUp, TrendingDown, ArrowUpDown } from "lucide-react";
import { formatCurrency, formatPercentage, formatMarketCap } from "@/util/formatters";

const CoinTable = ({ coins, sortConfig, onSort, loading }) => {
  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowUpDown className="w-4 h-4 text-slate-400" />;
    }
    return sortConfig.direction === "asc" ? (
      <TrendingUp className="w-4 h-4 text-blue-500" />
    ) : (
      <TrendingDown className="w-4 h-4 text-blue-500" />
    );
  };

  const getPriceChangeIcon = (change) => {
    return change >= 0 ? (
      <TrendingUp className="w-4 h-4 text-green-500" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-500" />
    );
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200 bg-slate-50">
        <h2 className="text-xl font-semibold text-slate-800">Market Overview</h2>
        {loading && <div className="text-sm text-slate-500">Updating...</div>}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-600">
              <th
                className="px-6 py-4 border-b border-slate-200 cursor-pointer select-none flex items-center gap-2"
                onClick={() => onSort("rank")}
              >
                Rank {getSortIcon("rank")}
              </th>
              <th className="px-6 py-4 border-b border-slate-200 text-left">Coin</th>
              <th
                className="px-6 py-4 border-b border-slate-200 cursor-pointer select-none flex items-center gap-2"
                onClick={() => onSort("price")}
              >
                Price {getSortIcon("price")}
              </th>
              <th
                className="px-6 py-4 border-b border-slate-200 cursor-pointer select-none flex items-center gap-2"
                onClick={() => onSort("priceChange24h")}
              >
                24h Change {getSortIcon("priceChange24h")}
              </th>
              <th
                className="px-6 py-4 border-b border-slate-200 cursor-pointer select-none flex items-center gap-2"
                onClick={() => onSort("marketCap")}
              >
                Market Cap {getSortIcon("marketCap")}
              </th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className="hover:bg-slate-50">
                <td className="text-center px-6 py-4 border-b border-slate-100">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-600 font-semibold text-xs">
                    #{coin.rank}
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-slate-100 min-w-[200px]">
                  <div className="flex items-center gap-3">
                    <img
                      src={coin.image || "/placeholder.svg"}
                      alt={coin.name}
                      className="w-8 h-8 rounded-full object-cover"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-800">{coin.name}</span>
                      <span className="text-xs uppercase text-slate-500">{coin.symbol}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-slate-100 text-slate-800 font-semibold">
                  {formatCurrency(coin.price)}
                </td>
                <td className="px-6 py-4 border-b border-slate-100">
                  <div
                    className={`flex items-center gap-2 font-semibold ${
                      coin.priceChange24h >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {getPriceChangeIcon(coin.priceChange24h)}
                    <span>{formatPercentage(coin.priceChange24h)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-slate-100 text-slate-600 font-medium">
                  {formatMarketCap(coin.marketCap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {coins.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <p>No cryptocurrency data available</p>
        </div>
      )}
    </div>
  );
};

export default CoinTable;
