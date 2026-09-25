const features = [
  {
    title: 'Automated trade importing',
    text: 'Sync broker data, CSV uploads, and custom trade history in minutes without manual entry.',
    icon: '⇄',
  },
  {
    title: 'Advanced analytics',
    text: 'Break down performance by symbol, setup, strategy, duration, time of day, and more.',
    icon: '📈',
  },
  {
    title: 'Trade tagging system',
    text: 'Label setup, error patterns, emotions, and execution details in one consistent workflow.',
    icon: '🏷️',
  },
  {
    title: 'Detailed notes & journaling',
    text: 'Capture context before and after each trade to improve discipline and remove bias.',
    icon: '✍️',
  },
  {
    title: 'Performance dashboard',
    text: 'Track weekly growth, P&L, win rate, expectancy, and strategy quality at a glance.',
    icon: '📊',
  },
  {
    title: 'Mentor/community sharing',
    text: 'Share performance dashboards or individual trades with peers, coaches, or review partners.',
    icon: '🤝',
  },
];

const stats = [
  { label: 'Net P&L', value: '+$42,860', trend: '+18.2%' },
  { label: 'Win rate', value: '62.4%', trend: '+4.8%' },
  { label: 'Avg R multiple', value: '1.74R', trend: '+0.42R' },
  { label: 'Trades this month', value: '184', trend: '+31' },
];

const journalRows = [
  { symbol: 'AAPL', side: 'Long', pnl: '+$1,240', setup: 'Breakout', status: 'Closed', tag: 'High conviction' },
  { symbol: 'NVDA', side: 'Short', pnl: '-$420', setup: 'Fade', status: 'Closed', tag: 'Overtraded' },
  { symbol: 'MSFT', side: 'Long', pnl: '+$860', setup: 'Opening range', status: 'Closed', tag: 'Trend follow' },
  { symbol: 'TSLA', side: 'Long', pnl: '+$2,030', setup: 'VWAP reclaim', status: 'Closed', tag: 'Execution clean' },
  { symbol: 'AMD', side: 'Short', pnl: '-$650', setup: 'Trend continuation', status: 'Closed', tag: 'Late entry' },
];

const performance = [
  { label: 'Strategy A', value: 86 },
  { label: 'Strategy B', value: 74 },
  { label: 'Strategy C', value: 92 },
  { label: 'Strategy D', value: 68 },
  { label: 'Strategy E', value: 80 },
];

const plans = [
  { name: 'Free', price: '$0', desc: 'Perfect for getting started with a small journal.', features: ['30 trades/month', 'Basic notes', 'Core dashboard', 'CSV import'], highlight: false },
  { name: 'Silver', price: '$29', desc: 'For active traders who want better analytics.', features: ['Unlimited trades', 'Advanced reports', 'Tag filters', 'Broker sync'], highlight: true },
  { name: 'Gold', price: '$79', desc: 'For serious systematic traders and teams.', features: ['Everything in Silver', 'Mentor sharing', 'Custom dashboards', 'Priority support'], highlight: false },
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">T</div>
          <span>TradeVue</span>
        </div>

        <nav className="main-nav">
          <a href="#features">Features</a>
          <a href="#analytics">Analytics</a>
          <a href="#pricing">Pricing</a>
          <a href="#journal">Journal</a>
        </nav>

        <div className="nav-actions">
          <button className="ghost-btn">Log in</button>
          <button className="primary-btn">Start free</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Trading journal + performance lab</span>
            <h1>Track every trade. Improve every decision.</h1>
            <p>
              Review setups, measure execution quality, and build a smarter process with
              analytics designed for active traders.
            </p>

            <div className="cta-row">
              <button className="primary-btn large">Get started</button>
              <button className="ghost-btn large">Explore platform</button>
            </div>

            <ul className="proof-list">
              <li>80+ broker integrations</li>
              <li>100+ performance reports</li>
              <li>Built for stocks, options, futures & forex</li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-card chart-card">
              <div className="panel-header">
                <span>Portfolio performance</span>
                <span className="green-pill">+18.2%</span>
              </div>

              <div className="chart-grid">
                {[42, 58, 44, 78, 62, 86, 92, 66, 81, 94, 88, 100].map((value, index) => (
                  <div key={index} className="bar-column">
                    <span className="bar" style={{ height: `${value}%` }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="mini-stat">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <em>{stat.trend}</em>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <span>Trusted by traders across</span>
          <div className="logos">
            <span>NASDAQ</span>
            <span>FOREX</span>
            <span>FUTURES</span>
            <span>OPTIONFLOW</span>
            <span>PRO DASH</span>
          </div>
        </section>

        <section id="features" className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Why traders switch</span>
            <h2>Everything you need to review, improve, and repeat.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="analytics" className="section-block split-block">
          <div className="section-heading left-align">
            <span className="eyebrow">Performance analytics</span>
            <h2>See what’s working, what’s leaking, and what to change.</h2>
          </div>

          <div className="analytics-layout">
            <div className="analytics-card">
              <div className="panel-header small-gap">
                <span>Strategy quality</span>
                <span className="neutral-pill">Q3</span>
              </div>

              <div className="metric-list">
                {performance.map((item) => (
                  <div key={item.label} className="metric-row">
                    <span>{item.label}</span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${item.value}%` }} />
                    </div>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="insights-card">
              <h3>Key insights</h3>
              <div className="insight-item">
                <span className="badge success">Best setup</span>
                <p>Breakouts after VWAP reclaim are producing the strongest risk-adjusted returns.</p>
              </div>
              <div className="insight-item">
                <span className="badge warning">Watchlist</span>
                <p>Late entries almost doubled your negative expectancy in the last 30 days.</p>
              </div>
              <div className="insight-item">
                <span className="badge info">Opportunity</span>
                <p>High-conviction setups are giving better win rates when paired with tighter stops.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="journal" className="section-block table-block">
          <div className="section-heading left-align">
            <span className="eyebrow">Trade journal</span>
            <h2>Review every execution with context.</h2>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Side</th>
                  <th>Setup</th>
                  <th>P&amp;L</th>
                  <th>Status</th>
                  <th>Tag</th>
                </tr>
              </thead>
              <tbody>
                {journalRows.map((row) => (
                  <tr key={`${row.symbol}-${row.setup}`}>
                    <td>{row.symbol}</td>
                    <td>{row.side}</td>
                    <td>{row.setup}</td>
                    <td className={row.pnl.startsWith('-') ? 'loss' : 'gain'}>{row.pnl}</td>
                    <td>{row.status}</td>
                    <td>{row.tag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="pricing" className="section-block pricing-block">
          <div className="section-heading center-heading">
            <span className="eyebrow">Simple pricing</span>
            <h2>Choose the plan that fits your process.</h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div key={plan.name} className={`price-card ${plan.highlight ? 'featured' : ''}`}>
                <h3>{plan.name}</h3>
                <div className="price-line">
                  <span className="price">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
                <p>{plan.desc}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <button className={plan.highlight ? 'primary-btn' : 'ghost-btn'}>
                  {plan.name === 'Free' ? 'Try free' : 'Choose plan'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand-wrap">
          <div className="brand-mark">T</div>
          <span>TradeVue</span>
        </div>
        <p>© 2026 TradeVue. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
