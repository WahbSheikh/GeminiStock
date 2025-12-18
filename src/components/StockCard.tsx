import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap?: string;
}

export function StockCard({ symbol, name, price, change, changePercent, marketCap }: StockCardProps) {
  const isPositive = change >= 0;

  return (
    <Link href={`/stock/${symbol}`} className="group block h-full">
      <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_-12px_rgba(34,197,94,0.3)] h-full flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center font-bold text-white border border-border group-hover:border-primary/30 transition-colors">
              {symbol[0]}
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{symbol}</h3>
              <p className="text-xs text-muted font-medium truncate max-w-[120px]">{name}</p>
            </div>
          </div>
          <div className={cn("px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1",
            isPositive ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-500")}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {Math.abs(changePercent)}%
          </div>
        </div>

        <div className="flex items-end justify-between mt-auto">
          <div>
            <p className="text-2xl font-bold text-foreground">${price.toLocaleString()}</p>
            <p className={cn("text-xs font-medium mt-1", isPositive ? "text-primary" : "text-red-500")}>
              {isPositive ? '+' : ''}{change} ({changePercent}%)
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted uppercase tracking-wider">Mkt Cap</p>
            <p className="text-xs font-semibold text-foreground">{marketCap || '-'}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
