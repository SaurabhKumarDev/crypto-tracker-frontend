"use client"

import { AlertCircle, RefreshCw } from "lucide-react"

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex justify-center items-center p-12">
      <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-md border-l-4 border-red-500">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Something went wrong</h3>
        <p className="text-slate-500 mb-6">{message}</p>
        {onRetry && (
          <button
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            onClick={onRetry}
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}

export default ErrorMessage
