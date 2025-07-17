import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api"

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Reusable error handler
const handleError = (error) => {
  if (error.response) {
    const message = error.response.data?.error || error.response.data?.message || "Server error"
    console.error("API Error:", message)
    throw new Error(message)
  } else if (error.request) {
    console.error("API Error: No response from server")
    throw new Error("Network error - please check your connection")
  } else {
    console.error("API Error:", error.message)
    throw new Error(error.message || "An unexpected error occurred")
  }
}

// API functions
export const fetchCoins = async () => {
  try {
    const response = await api.get("/coins")
    return response.data
  } catch (error) {
    console.error("Error fetching coins:", error)
    handleError(error);
  }
}

export const createHistorySnapshot = async () => {
  try {
    const response = await api.post("/history")
    return response.data
  } catch (error) {
    console.error("Error creating history snapshot:", error)
    handleError(error);
  }
}

export const fetchCoinHistory = async (coinId, days = 7) => {
  try {
    const response = await api.get(`/history/${coinId}`, {
      params: { days },
    })
    return response.data
  } catch (error) {
    console.error(`Error fetching history for ${coinId}:`, error)
    handleError(error);
  }
}

export const fetchStats = async () => {
  try {
    const response = await api.get("/stats")
    return response.data
  } catch (error) {
    console.error("Error fetching stats:", error)
    handleError(error);
  }
}

export default api
