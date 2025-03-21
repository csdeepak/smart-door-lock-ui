import React from "react";

const AuthLogs = ({ logs }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
      <h2 className="text-xl font-semibold mb-3">Authentication Logs</h2>
      <div className="overflow-y-auto max-h-64 border-t border-gray-200">
        {logs.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No logs available</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {logs.map((log, index) => (
              <li key={index} className="py-3 text-gray-700">
                📅 {log.timestamp} - <span className="font-semibold">{log.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AuthLogs;
