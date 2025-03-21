import React from "react";

const StatusCard = ({ title, status }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <span
        className={`px-4 py-2 rounded-full text-white font-bold ${
          status === "Granted" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default StatusCard;
