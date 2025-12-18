import { StockCard } from "@/components/StockCard";
import { Coins } from "lucide-react";

const CRYPTO_COINS = [
  { symbol: "BTC", name: "Bitcoin", price: 68500.00, change: 1200.50, changePercent: 1.85, marketCap: "1.3T" },
  { symbol: "ETH", name: "Ethereum", price: 3850.25, change: -45.10, changePercent: -1.22, marketCap: "450B" },
  { symbol: "SOL", name: "Solana", price: 185.30, change: 12.20, changePercent: 7.05, marketCap: "80B" },
  { symbol: "DOGE", name: "Dogecoin", price: 0.18, change: 0.01, changePercent: 4.32, marketCap: "25B" },
  { symbol: "ADA", name: "Cardano", price: 0.65, change: -0.02, changePercent: -2.30, marketCap: "22B" },
  { symbol: "BNB", name: "Binance Coin", price: 580.45, change: 5.15, changePercent: 0.90, marketCap: "88B" },
];

export default function CryptoPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3 text-foreground">
            <Coins className="w-8 h-8 text-orange-500" />
            Crypto Market
          </h1>
          <p className="text-muted mt-1">Live prices for top cryptocurrencies.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CRYPTO_COINS.map((coin) => (
          <StockCard key={coin.symbol} {...coin} />
        ))}
      </div>
    </div>
  );
}
