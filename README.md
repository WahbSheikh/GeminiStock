# 🚀 GeminiStock

A modern, real-time stock tracking dashboard built with Next.js 16, React 19, and Tailwind CSS 4. Track stocks, crypto, market news, and manage your watchlist with a sleek dark-themed interface.

![GeminiStock Dashboard](https://img.shields.io/badge/Next.js-16. 0.10-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 📊 **Real-time Stock Tracking** - Monitor trending stocks with live price updates
- 💰 **Crypto Market** - Track top cryptocurrencies (BTC, ETH, SOL, DOGE, ADA, BNB)
- 📈 **Interactive Charts** - Beautiful area charts powered by Recharts
- 📰 **Market News Feed** - Curated financial news from top sources
- ⭐ **Watchlist Management** - Create and manage your personalized watchlist
- 🔍 **Stock Search** - Quick ticker search functionality
- 🌙 **Dark Mode Design** - Eye-friendly dark theme optimized for trading
- 📱 **Responsive Layout** - Fully responsive design for all devices
- ⚡ **Fast Performance** - Built with Next.js App Router for optimal speed

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Charts:** [Recharts 3.6](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Utilities:** clsx, tailwind-merge

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/WahbSheikh/GeminiStock.git
   cd GeminiStock
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
GeminiStock/
├── src/
│   ├── app/
│   │   ├── crypto/           # Crypto market page
│   │   ├── news/             # Market news page
│   │   ├── settings/         # User settings page
│   │   ├── stock/[ticker]/   # Dynamic stock detail page
│   │   ├── watchlist/        # Watchlist page
│   │   ├── layout.tsx        # Root layout with sidebar
│   │   ├── page.tsx          # Dashboard home page
│   │   └── globals.css       # Global styles & theme
│   ├── components/
│   │   ├── NewsFeed.tsx      # News feed component
│   │   ├── PriceChart.tsx    # Interactive price chart
│   │   ├── Sidebar.tsx       # Navigation sidebar
│   │   ├── StockCard.tsx     # Stock card component
│   │   └── TopBar.tsx        # Top navigation bar
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Key Components

### StockCard
Displays stock information with real-time price, change percentage, and market cap. Links to detailed stock view.

### PriceChart
Interactive area chart using Recharts showing price trends with gradient fills and responsive tooltips.

### NewsFeed
Curated financial news from top sources with external links and category tags.

### Sidebar
Fixed navigation sidebar with routing to Dashboard, Watchlist, News, Crypto, and Settings.

## 📊 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Dashboard** | `/` | Main overview with trending stocks |
| **Watchlist** | `/watchlist` | Personalized stock watchlist |
| **News** | `/news` | Financial news aggregator |
| **Crypto** | `/crypto` | Cryptocurrency market tracker |
| **Stock Detail** | `/stock/[ticker]` | Individual stock analysis |
| **Settings** | `/settings` | User preferences and account |

## 🎨 Design System

### Colors
- **Primary:** `#22c55e` (Green)
- **Background:** `#0a0a0a`
- **Card:** `#171717`
- **Border:** `#262626`
- **Muted:** `#737373`

### Typography
- System font stack with antialiasing
- Monospace for price displays
- Semibold weights for emphasis

## 🔧 Configuration

### Tailwind CSS Theme
Custom theme variables defined in `globals.css`:
```css
@theme {
  --color-background: #0a0a0a;
  --color-foreground: #ededed;
  --color-primary: #22c55e;
  --color-card: #171717;
  --color-border: #262626;
  --color-muted: #737373;
}
```

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚧 Roadmap

- [ ] Integrate real-time stock API (Alpha Vantage, Yahoo Finance)
- [ ] Add user authentication
- [ ] Implement portfolio tracking
- [ ] Add price alerts and notifications
- [ ] Dark/Light theme toggle
- [ ] Export watchlist data
- [ ] Stock comparison tool
- [ ] Advanced charting (candlestick, multiple timeframes)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Wahb Sheikh**
- GitHub: [@WahbSheikh](https://github.com/WahbSheikh)
- Project: [GeminiStock](https://github.com/WahbSheikh/GeminiStock)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Recharts](https://recharts.org/) - Chart library
- [Lucide](https://lucide.dev/) - Beautiful icons
- Financial data APIs for market information

---

⭐ **Star this repo** if you find it helpful! 

Built with ❤️ using Next.js and Tailwind CSS
