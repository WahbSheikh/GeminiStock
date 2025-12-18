import { PriceChart } from "@/components/PriceChart";
import { NewsFeed } from "@/components/NewsFeed";
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default async function StockDetailPage(props: { params: Promise<{ ticker: string }> }) {
  const params = await props.params;
  const { ticker } = params;
  const decodedTicker = decodeURIComponent(ticker).toUpperCase();

  // Mock data tailored for the demo (normally fetched based on ticker)
  const stock = {
    symbol: decodedTicker,
    name: "Mock Company Inc.",
    price: 154.20,
    change: 2.54,
    changePercent: 1.67,
    high: 156.00,
    low: 151.20,
    open: 152.00,
    vol: "52.4M",
    mktCap: "1.2T",
    pe: "24.5",
    div: "0.54%"
  };

  const isPositive = stock.change >= 0;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/" className="p-2 rounded-full bg-card hover:bg-white/10 transition-colors border border-border">
          <ArrowLeft className="w-5 h-5 text-muted hover:text-foreground" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            {stock.symbol}
            <span className="text-sm font-normal text-muted bg-white/5 px-2 py-0.5 rounded-md border border-white/5">{stock.name}</span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-end gap-4 mb-6">
              <div>
                <div className="text-3xl font-bold font-mono tracking-tight">${stock.price.toFixed(2)}</div>
                <div className={cn("flex items-center gap-1 text-sm font-semibold", isPositive ? "text-primary" : "text-red-500")}>
                  {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {isPositive ? '+' : ''}{stock.change} ({stock.changePercent}%) <span className="text-muted font-normal ml-1">Today</span>
                </div>
              </div>
            </div>
            <PriceChart symbol={stock.symbol} />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "High", value: stock.high },
              { label: "Low", value: stock.low },
              { label: "Open", value: stock.open },
              { label: "Vol", value: stock.vol },
              { label: "Mkt Cap", value: stock.mktCap },
              { label: "P/E", value: stock.pe },
              { label: "Div Yield", value: stock.div },
              { label: "52W High", value: 180.00 } // mock
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border p-4 rounded-xl">
                <div className="text-xs text-muted mb-1">{stat.label}</div>
                <div className="font-semibold text-foreground">{typeof stat.value === 'number' ? stat.value.toFixed(2) : stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: News */}
        <div className="lg:col-span-1">
          <NewsFeed />
        </div>
      </div>
    </div>
  );
}
