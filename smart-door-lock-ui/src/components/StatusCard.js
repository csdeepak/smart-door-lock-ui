import React from "react";
import { CheckCircleIcon, XCircleIcon, ClockIcon } from "@heroicons/react/solid";

const StatusCard = ({ title, status }) => {
  const getStatusIcon = () => {
    switch (status) {
      case "Granted":
        return <CheckCircleIcon className="w-10 h-10 text-green-500" />;
      case "Denied":
        return <XCircleIcon className="w-10 h-10 text-red-500" />;
      default:
        return <ClockIcon className="w-10 h-10 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-3">
      {getStatusIcon()}
      <h2 className="text-lg font-semibold">{title}</h2>
      <span
        className={`px-4 py-2 rounded-full text-white font-bold ${
          status === "Granted"
            ? "bg-green-500"
            : status === "Denied"
            ? "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default StatusCard;
