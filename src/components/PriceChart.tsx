"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { cn } from '@/lib/utils';

interface PriceChartProps {
  symbol: string;
  className?: string;
}

// Generate realistic-looking mock data
const generateData = () => {
  const data = [];
  let price = 150;
  for (let i = 0; i < 60; i++) {
    const changes = (Math.random() - 0.45) * 5;
    price += changes;
    data.push({
      date: `Day ${i + 1}`,
      price: Math.abs(price) // create some mock data
    });
  }
  return data;
};

const data = generateData();

export function PriceChart({ symbol, className }: PriceChartProps) {
  return (
    <div className={cn("w-full h-[400px]", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#262626" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            hide
          />
          <YAxis
            domain={['auto', 'auto']}
            orientation="right"
            tick={{ fill: '#737373', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `$${value.toFixed(0)}`}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', borderRadius: '8px' }}
            itemStyle={{ color: '#22c55e' }}
            labelStyle={{ display: 'none' }}
            cursor={{ stroke: '#525252', strokeWidth: 1 }}
            formatter={(value: number | undefined) => [value != null ? `$${value.toFixed(2)}` : '', 'Price']}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#22c55e"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
