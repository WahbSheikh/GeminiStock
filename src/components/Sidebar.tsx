import Link from 'next/link';
import { LayoutDashboard, LineChart, Newspaper, Settings, Zap } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Watchlist', icon: LineChart, href: '/watchlist' },
  { name: 'News', icon: Newspaper, href: '/news' },
  { name: 'Crypto', icon: Zap, href: '/crypto' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card h-screen fixed left-0 top-0 flex flex-col p-4 z-20">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="bg-primary/20 p-2 rounded-lg">
          <Zap className="text-primary w-6 h-6" />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">
          GeminiStock
        </span>
      </div>

      <div className="space-y-1">
        <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-2 px-2">Menu</div>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
