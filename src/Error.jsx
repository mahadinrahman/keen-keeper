import React from "react";

export default function ErrorUI({ message = "Something went wrong" }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        
        {/* Icon substitute */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-500/20 px-5 py-3 rounded-full text-red-400 text-2xl font-bold">
            !
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">Oops!</h1>

        {/* Message */}
        <p className="text-gray-400 mb-6">{message}</p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-xl transition"
          >
            Retry
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl transition"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}