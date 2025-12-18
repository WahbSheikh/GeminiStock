import { StockCard } from "@/components/StockCard";
import { Filter, Flame, Zap } from "lucide-react";

// Mock Data
const MOCK_STOCKS = [
  { symbol: "NVDA", name: "NVIDIA Corp", price: 880.00, change: 12.50, changePercent: 1.45, marketCap: "2.2T" },
  { symbol: "AAPL", name: "Apple Inc.", price: 170.50, change: -2.10, changePercent: -1.22, marketCap: "2.6T" },
  { symbol: "TSLA", name: "Tesla Inc.", price: 175.30, change: 5.20, changePercent: 3.05, marketCap: "550B" },
  { symbol: "AMD", name: "Advanced Micro Devices", price: 180.25, change: 4.10, changePercent: 2.32, marketCap: "290B" },
  { symbol: "MSFT", name: "Microsoft Corp", price: 420.45, change: 1.15, changePercent: 0.27, marketCap: "3.1T" },
  { symbol: "PLTR", name: "Palantir Tech", price: 24.50, change: 0.80, changePercent: 3.38, marketCap: "50B" },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.15, change: 1.25, changePercent: 0.71, marketCap: "1.8T" },
  { symbol: "COIN", name: "Coinbase Global", price: 250.65, change: -5.40, changePercent: -2.11, marketCap: "48B" },
  { symbol: "META", name: "Meta Platforms", price: 495.20, change: 8.90, changePercent: 1.83, marketCap: "1.2T" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero / Header Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Market Overview</h1>
          <p className="text-muted text-sm">Track the latest trends and top movers today.</p>
        </div>

        <div className="flex items-center gap-2 bg-zinc-900/50 p-1 rounded-lg border border-border">
          {['Trending', 'Top Gainers', 'New Highs'].map((filter, i) => (
            <button key={filter} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${i === 0 ? 'bg-primary text-black shadow-lg shadow-primary/25' : 'text-muted hover:text-foreground hover:bg-white/5'}`}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Flame className="w-5 h-5 text-primary fill-primary/20" />
            Trending Stocks
          </h2>
          <button className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors">View All Market</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_STOCKS.map((stock) => (
            <StockCard key={stock.symbol} {...stock} />
          ))}
        </div>
      </section>
    </div>
  );
}
