import { Inter } from "next/font/google";
import Vapi from "@vapi-ai/web";

const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "");

const inter = Inter({ subsets: ["latin"] });

vapi.on("call-start", () => {
  console.log("call start");
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
  await vapi.start(process.env.NEXT_PUBLIC_ASSISTANT_ID || "");
};
const handleStopClick = async () => {
  await vapi.stop();
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
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
