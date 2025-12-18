import { Search, Bell, User } from 'lucide-react';

export function TopBar() {
  return (
    <header className="h-16 border-b border-border bg-background/50 backdrop-blur-md fixed top-0 left-64 right-0 z-10 flex items-center justify-between px-6">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
        <input
          type="text"
          placeholder="Search tickers (e.g., AAPL)..."
          className="w-full bg-card border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted/70 text-foreground"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="text-muted hover:text-foreground transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
        </button>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
          + Trade
        </button>
        <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center border border-border overflow-hidden cursor-pointer">
          <User className="w-5 h-5 text-muted" />
        </div>
      </div>
    </header>
  );
}
