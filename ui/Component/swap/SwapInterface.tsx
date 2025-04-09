"use client";

import { useState } from "react";
import TokenSelector from "./TokenSelector";
import { ArrowDown } from "lucide-react";

export default function SwapInterface() {
  const [fromAmount, setFromAmount] = useState<string>("");
  const [toAmount, setToAmount] = useState<string>("");
  const [fromToken, setFromToken] = useState<string>("ETH");
  const [toToken, setToToken] = useState<string>("USDC");

  // Static price impact data
  const priceImpact = "0.05%";
  const minimumReceived = "0.00 USDC";
  const slippageTolerance = "0.5%";

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      {/* From token section */}
      <div className="mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-500 dark:text-gray-400">From</span>
          <span className="text-gray-500 dark:text-gray-400">
            Balance: 1.24 ETH
          </span>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            placeholder="0.0"
            className="w-full bg-transparent text-2xl outline-none"
          />
          <TokenSelector
            selectedToken={fromToken}
            onSelectToken={setFromToken}
          />
        </div>
        <div className="flex justify-end mt-2">
          <button className="text-blue-500 text-sm">MAX</button>
        </div>
      </div>

      {/* Swap direction button */}
      <div className="flex justify-center -my-2 relative z-0">
        <button className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full shadow-md hover:shadow-lg transition-all">
          <ArrowDown className="h-5 w-5 text-blue-500 dark:text-blue-300" />
        </button>
      </div>

      {/* To token section */}
      <div className="mt-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-500 dark:text-gray-400">To</span>
          <span className="text-gray-500 dark:text-gray-400">
            Balance: 426.72 USDC
          </span>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            placeholder="0.0"
            className="w-full bg-transparent text-2xl outline-none"
          />
          <TokenSelector selectedToken={toToken} onSelectToken={setToToken} />
        </div>
      </div>

      {/* Price info */}
      <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-750 rounded-lg text-sm">
        <div className="flex justify-between mb-1">
          <span className="text-gray-500 dark:text-gray-400">Price</span>
          <span>1 ETH = 2,734.21 USDC</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-gray-500 dark:text-gray-400">Price Impact</span>
          <span className="text-green-500">{priceImpact}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-gray-500 dark:text-gray-400">
            Minimum received
          </span>
          <span>{minimumReceived}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-gray-400">
            Slippage Tolerance
          </span>
          <span>{slippageTolerance}</span>
        </div>
      </div>

      {/* Swap button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors">
        Swap
      </button>
    </div>
  );
}
