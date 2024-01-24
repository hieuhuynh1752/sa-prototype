"use client";

import React from "react";

const SystemLogs: React.FC = () => {
  const wsRef = React.useRef<WebSocket | null>(null);
  const [systemLogs, setSystemLogs] = React.useState<string[] | undefined>();

  React.useEffect(() => {
    if (!wsRef.current || wsRef.current.readyState === WebSocket.CLOSED) {
      const ws = new WebSocket("ws://localhost:8099");
      ws.onopen = () => {
        console.log("Connected to WebSocket server");
      };
      ws.onmessage = (event) => {
        // Handle incoming messages
        console.log("Received:", event.data);

        setSystemLogs((prevState) => {
          let arr = prevState ? [...prevState] : [];
          arr.push(event.data);
          return arr;
        });
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
        <div className="bg-gray-200 p-2 overflow-auto h-[70vh] font-mono">
          {systemLogs?.map((log, index) => {
            return (
              <p key={index}>
                <b>System:</b> {log}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SystemLogs;
