// Currency formatter
export const formatCurrency = (value, currency = "USD") => {
  if (value === null || value === undefined || isNaN(value)) {
    return "$0.00"
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: value < 1 ? 4 : 2,
    maximumFractionDigits: value < 1 ? 6 : 2,
  }).format(value)
}

// Percentage formatter
export const formatPercentage = (value) => {
  if (value === null || value === undefined || isNaN(value)) {
    return "0.00%"
  }

  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100)
}

// Market cap formatter
export const formatMarketCap = (value) => {
  if (value === null || value === undefined || isNaN(value)) {
    return "$0"
  }

  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(2)}T`
  } else if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(2)}K`
  } else {
    return `$${value.toFixed(2)}`
  }
}

// Number formatter with commas
export const formatNumber = (value) => {
  if (value === null || value === undefined || isNaN(value)) {
    return "0"
  }

  return new Intl.NumberFormat("en-US").format(value)
}

// Date formatter
export const formatDate = (date) => {
  if (!date) return ""

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date))
}
