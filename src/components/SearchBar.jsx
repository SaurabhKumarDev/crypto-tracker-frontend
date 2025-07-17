import { Search, X } from "lucide-react";

const SearchBar = ({ searchTerm, onSearchChange, placeholder }) => {
  const handleClear = () => {
    onSearchChange("");
  };

  return (
    <div className="w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          type="text"
          className="w-full pl-10 pr-10 py-3 border-2 border-slate-200 rounded-md text-base bg-white transition-all focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button
            className="absolute right-2 p-1 rounded hover:bg-slate-100"
            onClick={handleClear}
            title="Clear search"
          >
            <X className="w-4 h-4 text-slate-500" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
