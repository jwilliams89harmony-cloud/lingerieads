# Lingerie Ads App

A Next.js application for lingerie advertising with Vercel Speed Insights integration for performance monitoring.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- pnpm, npm, yarn, or bun as your package manager

### Installation

Install dependencies using your preferred package manager:

```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Performance Monitoring

This application includes [Vercel Speed Insights](https://vercel.com/docs/speed-insights) for real-time performance monitoring.

### What is Speed Insights?

Vercel Speed Insights monitors Core Web Vitals and other performance metrics from real user traffic to help you understand how your application performs in production.

### How It Works

The `SpeedInsights` component from `@vercel/speed-insights/next` is integrated in the root layout (`app/layout.tsx`). This component:

- Automatically collects performance metrics
- Sends data to Vercel's infrastructure for analysis
- Works in both development and production environments
- Is optimized for performance with minimal overhead

### Viewing Performance Data

To view detailed performance metrics:

1. Deploy your application to Vercel
2. Go to your [Vercel dashboard](https://vercel.com/dashboard)
3. Select your project
4. Navigate to the **Speed Insights** tab

Performance data will start appearing after users visit your site.

## Deployment

Deploy to Vercel with a single command:

```bash
npx vercel deploy
```

Or connect your Git repository to Vercel for automatic deployments on every push to main.

### Enabling Speed Insights on Vercel

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Speed Insights** tab
4. Click **Enable**

The Speed Insights tracking script will be automatically included in your next deployment.

## Environment Variables

Create a `.env.local` file for local development (if needed):

```env
# Add any environment variables here
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout with SpeedInsights component
│   └── page.tsx         # Home page
├── public/              # Static assets
├── package.json         # Project dependencies
├── next.config.js       # Next.js configuration
└── tsconfig.json        # TypeScript configuration
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Core Web Vitals Explained](https://web.dev/vitals/)
- [Performance Best Practices](https://vercel.com/docs/speed-insights/using-speed-insights)

## License

MIT
