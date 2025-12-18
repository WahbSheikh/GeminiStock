import { StockCard } from "@/components/StockCard";
import { ListFilter } from "lucide-react";

const WATCHLIST_STOCKS = [
  { symbol: "AAPL", name: "Apple Inc.", price: 170.50, change: -2.10, changePercent: -1.22, marketCap: "2.6T" },
  { symbol: "MSFT", name: "Microsoft Corp", price: 420.45, change: 1.15, changePercent: 0.27, marketCap: "3.1T" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 150.00, change: 0.50, changePercent: 0.33, marketCap: "1.9T" },
];

export default function WatchlistPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <ListFilter className="w-8 h-8 text-primary" />
          Your Watchlist
        </h1>
        <button className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold hover:bg-primary/20 transition-colors">
          + Add Symbol
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WATCHLIST_STOCKS.map((stock) => (
          <StockCard key={stock.symbol} {...stock} />
        ))}

        {/* Add New Placeholder */}
        <div className="border border-dashed border-border rounded-xl p-5 flex flex-col items-center justify-center text-muted min-h-[160px] hover:border-primary/50 hover:bg-card/50 transition-all cursor-pointer group">
          <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <span className="text-2xl font-light">+</span>
          </div>
          <span className="font-medium text-sm">Add to Watchlist</span>
        </div>
      </div>
    </div>
  );
}
