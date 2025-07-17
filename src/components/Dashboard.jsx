import SearchBar from "./SearchBar";
import CoinTable from "./CoinTable";
import StatsCards from "./StatsCards";

const Dashboard = ({ coins, searchTerm, onSearchChange, sortConfig, onSort, loading }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-slate-800 mb-2 md:text-3xl">Cryptocurrency Tracker</h1>
        <p className="text-lg text-slate-500 m-0 md:text-base">Top 10 cryptocurrencies by market cap</p>
      </div>

      <StatsCards coins={coins} />

      <div className="flex justify-center mb-4">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          placeholder="Search by name or symbol..."
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <CoinTable coins={coins} sortConfig={sortConfig} onSort={onSort} loading={loading} />
      </div>

      {coins.length === 0 && !loading && (
        <div className="text-center py-12 bg-white rounded-xl shadow">
          <p className="text-lg text-slate-500">No cryptocurrencies found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
