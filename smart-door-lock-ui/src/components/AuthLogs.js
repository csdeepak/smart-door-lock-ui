import React from "react";

const AuthLogs = ({ logs }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-xl font-semibold mb-3">Authentication Logs</h2>
      <div className="overflow-y-auto max-h-60">
        {logs.length === 0 ? (
          <p className="text-gray-500">No logs available</p>
        ) : (
          <ul>
            {logs.map((log, index) => (
              <li key={index} className="border-b py-2">
                {log.timestamp} - {log.status}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AuthLogs;
