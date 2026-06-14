import Logo from './components/Logo'
import './App.css'

const TRIAL_URL = 'https://app.shopguardapp.com'

const problems = [
  {
    title: 'Missing SOPs',
    description:
      'Procedures live in someone\'s head or a dusty binder. New hires guess. Veterans forget. Nobody knows the right way to run the job.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h6M9 16h6M7 4h10l2 4v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: 'Paper Inspection Sheets',
    description:
      'Clipboards get lost, signatures smudge, and last month\'s machine checks are impossible to find when you need them.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
  },
  {
    title: 'OSHA Scrambles',
    description:
      'When an inspector shows up, the whole shop stops. You\'re digging through filing cabinets instead of running production.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 9v4M12 17h.01" />
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  {
    title: 'Lost Training Records',
    description:
      'Who\'s certified on the forklift? Who did lockout training last year? Without records, you\'re exposed and unprepared.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
  },
]

const features = [
  {
    title: 'Machine Inspections',
    description:
      'Digital checklists on any device. Timestamped records you can pull up in seconds — not hours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 20h10M9 18v2M15 18v2" />
        <path d="M8 9l3 3 5-5" />
      </svg>
    ),
  },
  {
    title: 'LOTO Procedures',
    description:
      'Step-by-step lockout/tagout guides tied to each machine. No more guessing which breaker to pull.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 118 0v3" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
  },
  {
    title: 'SOP Builder',
    description:
      'Build and update standard operating procedures your team will actually use on the floor.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Incident Reports',
    description:
      'Document near-misses and injuries immediately. Capture what happened before details fade.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: 'Training Records',
    description:
      'Track who\'s trained on what, when it expires, and who still needs their next session.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'OSHA Panic Mode',
    description:
      'One tap pulls every record an inspector might ask for. Stay calm, stay compliant, keep working.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
]

const pricingIncludes = [
  'Unlimited users for your shop',
  'Machine inspections & LOTO procedures',
  'SOP builder with version history',
  'Incident reporting & training records',
  'OSHA Panic Mode — instant compliance export',
  'Mobile-friendly for the shop floor',
  'Email support from someone who gets it',
]

function App() {
  return (
    <div className="site">
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-brand" aria-label="ShopGuard home">
            <Logo size={36} />
          </a>
          <a href={TRIAL_URL} className="btn btn-primary btn-nav">
            Start Free Trial
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-badge">Shop floor safety, simplified</div>
            <h1>
              Keep your shop safe.
              <span className="hero-accent"> Stay OSHA ready.</span>
            </h1>
            <p className="hero-sub">
              ShopGuard gives small manufacturing and fabrication shops one place
              to manage inspections, lockout procedures, SOPs, training, and
              incident records — without the paperwork chaos.
            </p>
            <div className="hero-actions">
              <a href={TRIAL_URL} className="btn btn-primary btn-lg">
                Start Free Trial
              </a>
              <a href="#features" className="btn btn-secondary btn-lg">
                See How It Works
              </a>
            </div>
            <p className="hero-note">First 30 days free · No credit card required</p>
          </div>
          <div className="hero-glow" aria-hidden="true" />
        </section>

        <section className="problem section" id="problem">
          <div className="container">
            <div className="section-header">
              <span className="section-label">The problem</span>
              <h2>Safety paperwork shouldn&apos;t slow down production</h2>
              <p>
                Small shops run lean. Safety still has to be airtight — but most
                teams are stuck with tools that weren&apos;t built for the floor.
              </p>
            </div>
            <div className="card-grid card-grid-4">
              {problems.map((item) => (
                <article key={item.title} className="card card-problem">
                  <div className="card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="features section" id="features">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Features</span>
              <h2>Everything your shop needs to stay compliant</h2>
              <p>
                Built for real workflows — not corporate safety departments. Every
                feature is designed to work where your team actually works.
              </p>
            </div>
            <div className="card-grid card-grid-3">
              {features.map((item) => (
                <article key={item.title} className="card card-feature">
                  <div className="card-icon card-icon-accent">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing section" id="pricing">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Pricing</span>
              <h2>One plan. No surprises.</h2>
              <p>
                Straightforward pricing for small shops — no per-seat games, no
                enterprise upsells.
              </p>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>ShopGuard Pro</h3>
                <div className="pricing-price">
                  <span className="price-amount">$99</span>
                  <span className="price-period">/ month</span>
                </div>
                <p className="pricing-trial">
                  First 30 days free · No credit card required
                </p>
              </div>
              <ul className="pricing-list">
                {pricingIncludes.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={TRIAL_URL} className="btn btn-primary btn-lg btn-full">
                Start Free Trial
              </a>
            </div>
          </div>
        </section>

        <section className="story section" id="story">
          <div className="container story-inner">
            <div className="story-content">
              <span className="section-label">Our story</span>
              <h2>Built by someone who works on the shop floor</h2>
              <p>
                ShopGuard wasn&apos;t born in a boardroom. It started because I was
                tired of watching good shops get burned by bad paperwork — SOPs that
                nobody could find when they were needed most, scrambling for inspection
                logs when
                OSHA walked in, training records that existed only as a rumor.
              </p>
              <p>
                I built this for the shops I work in: small fabrication and
                manufacturing teams that need real safety tools, not another
                enterprise platform nobody on the floor will touch. Every screen
                in ShopGuard reflects what actually happens when chips are flying
                and the inspector is at the door.
              </p>
              <p className="story-tagline">
                This is safety software made by someone who&apos;s been there.
              </p>
            </div>
            <div className="story-visual" aria-hidden="true">
              <div className="story-icon-wrap">
                <Logo size={80} showText={false} />
              </div>
              <div className="story-stats">
                <div className="story-stat">
                  <span className="stat-number">Real</span>
                  <span className="stat-label">Shop floor experience</span>
                </div>
                <div className="story-stat">
                  <span className="stat-number">Simple</span>
                  <span className="stat-label">No corporate bloat</span>
                </div>
                <div className="story-stat">
                  <span className="stat-number">Ready</span>
                  <span className="stat-label">When OSHA shows up</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Logo size={32} />
          <p>&copy; {new Date().getFullYear()} ShopGuard. All rights reserved.</p>
          <p className="footer-disclaimer">
            ShopGuard is a documentation and compliance tool. It is not a substitute
            for proper safety training, professional safety consulting, or legal
            advice. ShopGuard is not responsible for OSHA citations, fines,
            workplace injuries, or regulatory violations.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
