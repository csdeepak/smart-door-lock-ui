import React, { useState, useEffect } from "react";
import StatusCard from "./StatusCard";
import AuthLogs from "./AuthLogs";

const MainDashboard = () => {
  const [fingerprintStatus, setFingerprintStatus] = useState("Pending");
  const [rfidStatus, setRfidStatus] = useState("Pending");
  const [cameraStatus, setCameraStatus] = useState("Pending");
  const [authLogs, setAuthLogs] = useState([]);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("http://192.168.1.100/status"); // Replace with Arduino IP
        const data = await response.json();
        setFingerprintStatus(data.fingerprint);
        setRfidStatus(data.rfid);
        setCameraStatus(data.camera);
        setAuthLogs(data.logs);
      } catch (error) {
        console.error("Error fetching status:", error);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatusCard title="Fingerprint Status" status={fingerprintStatus} />
        <StatusCard title="RFID Status" status={rfidStatus} />
        <StatusCard title="Camera Status" status={cameraStatus} />
      </div>
      <AuthLogs logs={authLogs} />
    </div>
  );
};

export default MainDashboard;
