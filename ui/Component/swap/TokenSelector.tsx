"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TokenSelectorProps {
  selectedToken: string;
  onSelectToken: (token: string) => void;
}

const TOKEN_LIST = [
  { symbol: "ETH", name: "Ethereum", logo: "🔷" },
  { symbol: "USDC", name: "USD Coin", logo: "💲" },
  { symbol: "WBTC", name: "Wrapped Bitcoin", logo: "🔶" },
  { symbol: "STRK", name: "Starknet", logo: "⚡" },

  { symbol: "ARB", name: "Arbitrum", logo: "🔷" },
  { symbol: "LINK", name: "Chainlink", logo: "⛓️" },
];

export default function TokenSelector({
  selectedToken,
  onSelectToken,
}: TokenSelectorProps) {
  const [showTokenList, setShowTokenList] = useState(false);

  const selectedTokenData =
    TOKEN_LIST.find((token) => token.symbol === selectedToken) || TOKEN_LIST[0];

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 bg-blue-100 dark:bg-blue-900 py-1 px-3 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800"
        onClick={() => setShowTokenList(!showTokenList)}
      >
        <span className="mr-1">{selectedTokenData.logo}</span>
        <span>{selectedToken}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {showTokenList && (
        <div className="absolute top-full mt-2 right-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium">Select Token</h3>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {TOKEN_LIST.map((token) => (
              <button
                key={token.symbol}
                className="flex items-center w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
                onClick={() => {
                  onSelectToken(token.symbol);
                  setShowTokenList(false);
                }}
              >
                <span className="mr-2 text-xl">{token.logo}</span>
                <div>
                  <div className="font-medium">{token.symbol}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {token.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
