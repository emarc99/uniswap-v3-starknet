// app/swap/page.tsx

import SwapInterface from "@/Component/swap/SwapInterface";

export default function SwapPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Swap Tokens</h1>
      <SwapInterface />
    </main>
  );
}
