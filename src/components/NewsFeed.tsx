import { ExternalLink, Newspaper } from "lucide-react";

const NEWS = [
  { title: "Quarterly Earnings Beat Expectations", source: "FinanceWeekly", time: "2h ago", url: "https://finance.yahoo.com" },
  { title: "CEO Announces New Product Line", source: "TechCrunch", time: "5h ago", url: "https://techcrunch.com" },
  { title: "Market Rally Continues as Inflation Cools", source: "Bloomberg", time: "1d ago", url: "https://bloomberg.com" },
  { title: "Analyst Upgrades Rating to 'Buy'", source: "Reuters", time: "1d ago", url: "https://reuters.com" },
  { title: "New Strategic Partnership Revealed", source: "WSJ", time: "2d ago", url: "https://wsj.com" },
];

export function NewsFeed() {
  return (
    <div className="space-y-4">
      <h3 className="flex items-center gap-2 font-semibold text-foreground border-b border-border pb-2">
        <Newspaper className="w-4 h-4 text-primary" />
        Latest News
      </h3>
      <div className="space-y-3">
        {NEWS.map((item, i) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer" key={i} className="block group bg-card border border-border p-4 rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors line-clamp-2">{item.title}</h4>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted">
                  <span className="font-semibold text-primary/80">{item.source}</span>
                  <span className="text-zinc-700">•</span>
                  <span>{item.time}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all ml-2 flex-shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
