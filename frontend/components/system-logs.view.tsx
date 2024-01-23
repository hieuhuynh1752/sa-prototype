"use client";

import React from "react";

const SystemLogs: React.FC = () => {
  const wsRef = React.useRef<WebSocket | null>(null);

  React.useEffect(() => {
    if (!wsRef.current || wsRef.current.readyState === WebSocket.CLOSED) {
      const ws = new WebSocket("ws://localhost:8081");
      ws.onopen = () => {
        console.log("Connected to WebSocket server");
      };
      ws.onmessage = (event) => {
        // Handle incoming messages
        console.log("Received:", event.data);
      };
      ws.onclose = () => {
        console.log("Disconnected from WebSocket server");
      };
    }

    return () => {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.close();
      }
    };
  }, []);

  return (
    <div className="w-1/3">
      <div className="w-full flex">
        <p className="border-2 bg-white font-semibold border-solid border-b-2 border-b-gray-400 border-black p-2 flex flex-1">
          System logs
        </p>
        <div className="flex flex-1 border-b-2 border-solid border-black"></div>
      </div>
      <div className="border-2 bg-white border-t-0 border-solid w-full border-black p-4">
        <div
          className="bg-gray-200 p-2 overflow-auto h-full font-mono"
          style={{
            height: "calc(100% - 44px)",
            maxHeight: "70vh",
          }}
        >
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
          <p>
            <b>System:</b> something is happening!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemLogs;
