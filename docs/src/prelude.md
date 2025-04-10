# Prelude

## Why Uniswap V3 on Starknet Matters

Uniswap V3 revolutionized DeFi with concentrated liquidity, enabling capital efficiency that previous AMMs could only dream of. Its impact extends beyond Ethereum, with projects like Ekubo on Starknet directly adapting its concentrated liquidity model while optimizing for Starknet's unique architecture.

This book walks you through building a complete Uniswap V3 implementation on Starknet from scratch, providing deep insights into both the mathematical principles behind concentrated liquidity and their practical implementation in Cairo.

## Who This Book Is For

This book is designed for developers who:

- Have experience coding in Cairo (e.g., completed the [Cairo book](https://book.cairo-lang.org/))
- Want to understand how sophisticated DeFi protocols work under the hood
- Are interested in concentrated liquidity AMMs and their mathematical foundations
- Have prior experience with smart contract development on any blockchain
- Aim to build production-ready DeFi applications on StarkNet
- Want to master advanced topics like tick-based liquidity management, price curves, and efficient swap routing

If you identify with at least two of these criteria, you'll find valuable insights throughout this journey.

## What You'll Learn

By the end of this book, you'll understand:

- The mathematical principles behind concentrated liquidity
- How to implement complex financial logic in Cairo
- Starknet-specific optimizations for DeFi protocols
- Key differences between EVM and Cairo implementations
- How to build, test, and deploy a production-grade AMM
- Advanced techniques for gas optimization on ZK-rollups

## Why This Book Is Different

While there are resources about Uniswap V3 for Ethereum, this book addresses the unique challenges and opportunities of implementing complex DeFi logic on Starknet. You'll learn not just how to port Solidity code to Cairo, but how to leverage Starknet's architecture for improved functionality—like our gas-free quote system that outperforms the Ethereum original.

## Disclaimer

This book is inspired by Jeiwan's excellent educational resource: [Uniswap V3 Development Book](https://uniswapv3book.com). While we cover similar protocol mechanics, our implementation is specifically tailored for Starknet's unique environment and Cairo's programming model.

## Let's Begin

Ready to dive into one of the most sophisticated DeFi protocols ever created? Let's start building Uniswap V3 on Starknet!
