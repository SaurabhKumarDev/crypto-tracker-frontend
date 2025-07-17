import { useState, useEffect, useCallback } from "react"
import Dashboard from "@/components/Dashboard"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LoadingSpinner from "@/components/LoadingSpinner"
import ErrorMessage from "@/components/ErrorMessage"
import { fetchCoins } from "@/services/api"

function App() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortConfig, setSortConfig] = useState({ key: "rank", direction: "asc" })

  const loadCoins = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetchCoins()
      setCoins(response.data)
      setLastUpdated(new Date(response.lastUpdated))

      console.log("✅ Coins data loaded successfully")
    } catch (err) {
      console.error("❌ Error loading coins:", err)
      setError(err.message || "Failed to fetch cryptocurrency data")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadCoins()
  }, [loadCoins])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("🔄 Auto-refreshing data...")
      loadCoins()
    }, 30 * 60 * 1000)

    return () => clearInterval(interval)
  }, [loadCoins])

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedCoins = [...filteredCoins].sort((a, b) => {
    if (sortConfig.key === null) return 0

    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1
    return 0
  })

  const handleSort = (key) => {
    let direction = "asc"
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  const handleRefresh = () => {
    loadCoins()
  }

  if (loading && coins.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <Header />
        <main className="flex-1 px-4 py-8 max-w-screen-xl mx-auto w-full">
          <LoadingSpinner message="Loading cryptocurrency data..." />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header onRefresh={handleRefresh} loading={loading} lastUpdated={lastUpdated} />

      <main className="flex-1 px-4 py-8 max-w-screen-xl mx-auto w-full">
        {error ? (
          <ErrorMessage message={error} onRetry={handleRefresh} />
        ) : (
          <Dashboard
            coins={sortedCoins}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortConfig={sortConfig}
            onSort={handleSort}
            loading={loading}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
