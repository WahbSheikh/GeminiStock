import { Newspaper, TrendingUp, Cpu, Coins } from "lucide-react";

// Extended mock news
const FULL_NEWS = [
  { title: "Fed Signals Potential Rate Cut Later This Year", category: "Market", source: "Wall St. Journal", time: "1h ago", url: "https://wsj.com" },
  { title: "NVIDIA Reveals New AI Chip Infrastructure", category: "Technology", source: "TechCrunch", time: "2h ago", url: "https://techcrunch.com" },
  { title: "Bitcoin Surges Past $70k as Halving Approaches", category: "Crypto", source: "CoinDesk", time: "3h ago", url: "https://coindesk.com" },
  { title: "Tesla Earnings Preview: What to Expect", category: "Market", source: "Bloomberg", time: "5h ago", url: "https://bloomberg.com" },
  { title: "Apple Reportedly working on Home Robots", category: "Technology", source: "The Verge", time: "1d ago", url: "https://theverge.com" },
  { title: "Ethereum ETF Approval Odds Increase", category: "Crypto", source: "Decrypt", time: "1d ago", url: "https://decrypt.co" },
];

export default function NewsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Newspaper className="w-8 h-8 text-primary" />
          Market News
        </h1>
        <p className="text-muted">Curated insights from top financial sources.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-4">
          {FULL_NEWS.map((news, i) => (
            <a href={news.url} target="_blank" rel="noopener noreferrer" key={i} className="block bg-card border border-border p-5 rounded-xl hover:border-primary/40 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded-full 
                              ${news.category === 'Market' ? 'bg-blue-500/10 text-blue-500' :
                    news.category === 'Technology' ? 'bg-purple-500/10 text-purple-500' :
                      'bg-orange-500/10 text-orange-500'}`}>
                  {news.category}
                </span>
                <span className="text-xs text-muted">{news.time}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{news.title}</h3>
              <p className="text-sm text-muted mt-2">Source: <span className="text-foreground">{news.source}</span></p>
            </a>
          ))}

        </div>

        {/* Categories Sidebar */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg">Topics</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:bg-white/5 cursor-pointer">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span>Market Analysis</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:bg-white/5 cursor-pointer">
              <Cpu className="w-5 h-5 text-purple-500" />
              <span>Technology</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:bg-white/5 cursor-pointer">
              <Coins className="w-5 h-5 text-orange-500" />
              <span>Crypto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
