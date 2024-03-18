"use client";

import { Inter } from "next/font/google";
import Vapi from "@vapi-ai/web";
import { Spinner, divider } from "@nextui-org/react";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

export default function Home() {
  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "");

  // const inter = Inter({ subsets: ["latin"] });

  vapi.on("call-start", () => {
    console.log("call start");
    setLoading(false);
  });

  vapi.on("call-end", () => {
    console.log("call end");
  });

  vapi.on("speech-start", () => {
    console.log("speech start");
  });

  vapi.on("speech-end", () => {
    console.log("speech end");
  });

  const handleStartClick = async () => {
    setLoading(true);
    await vapi.start(process.env.NEXT_PUBLIC_ASSISTANT_ID || "");
  };
  const handleStopClick = async () => {
    await vapi.stop();
  };

  const [loading, setLoading] = useState(false);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-black">
        {loading && <div>Loading</div>}
        <button id="start-call" onClick={() => handleStartClick()}>
          Start Call
        </button>
        <button id="stop-call" onClick={() => handleStopClick()}>
          Stop Call
        </button>
      </div>
    </main>
  );
}
