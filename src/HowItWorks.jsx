import { Link } from 'react-router-dom'
import Logo from './components/Logo'
import './App.css'
import './HowItWorks.css'

const TRIAL_URL = 'https://app.shopguardapp.com'

const steps = [
  {
    screenshot: '/screenshots/screen-company-code.jpg',
    title: 'Enter Your Company Code',
    description:
      'Your supervisor provides a unique company code when you sign up. Enter it once and the app remembers your shop forever.',
  },
  {
    screenshot: '/screenshots/screen-employee-select.jpg',
    title: 'Select Your Account',
    description:
      'Every employee has their own account. Just tap your name to get started.',
  },
  {
    screenshot: '/screenshots/screen-pin-login.jpg',
    title: 'Secure PIN Login',
    description:
      'Enter your personal PIN to log in securely. Every action in the app is tied to a verified person — exactly what OSHA wants to see.',
  },
  {
    screenshot: '/screenshots/screen-dashboard.jpg',
    title: 'Your Safety Dashboard',
    description:
      'Everything you need at a glance. Machines, incidents, team management, training records, and OSHA Panic Mode all in one place.',
  },
  {
    screenshot: '/screenshots/screen-machine-detail.jpg',
    title: 'Machine Management',
    description:
      'Every machine has its own inspection status, LOTO procedures, PPE requirements, and SOP. Everything organized by machine.',
  },
  {
    screenshot: '/screenshots/screen-inspection.jpg',
    title: 'Digital Inspections',
    description:
      'Tap through the checklist, check off each item, and sign off with your name. Logged permanently with a timestamp. No more paper sheets.',
  },
  {
    screenshot: '/screenshots/screen-training.jpg',
    title: 'Training Records',
    description:
      'See exactly who has what training and what is missing. Get ahead of expiring certifications before OSHA finds them first.',
  },
  {
    screenshot: '/screenshots/screen-incident.jpg',
    title: 'Incident Reports',
    description:
      'File incident reports instantly from the floor. Add photos, describe what happened, and submit in under a minute.',
  },
  {
    screenshot: '/screenshots/screen-osha-panic.jpg',
    title: 'OSHA Panic Mode',
    description:
      'Inspector on site? One button sends every record — machines, inspections, incidents, training — as an organized PDF to your safety email. Instantly.',
  },
]

function PhoneFrame({ screenshot, title }) {
  return (
    <div className="phone-frame">
      <div className="phone-frame-inner">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          <img src={screenshot} alt={title} loading="lazy" />
        </div>
        <div className="phone-home-bar" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <div className="site how-it-works">
      <header className="nav">
        <div className="container nav-inner how-nav-inner">
          <Link to="/" className="btn-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <Link to="/" className="nav-brand" aria-label="ShopGuard home">
            <Logo size={36} />
          </Link>
          <div className="nav-spacer" aria-hidden="true" />
        </div>
      </header>

      <main>
        <section className="how-hero">
          <div className="container how-hero-inner">
            <span className="section-label">Walkthrough</span>
            <h1>
              See how ShopGuard
              <span className="hero-accent"> works on the floor</span>
            </h1>
            <p>
              From first login to OSHA-ready records — nine steps that show what
              your team gets on day one.
            </p>
          </div>
          <div className="hero-glow" aria-hidden="true" />
        </section>

        <section className="walkthrough">
          <div className="container walkthrough-steps">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={`walkthrough-step ${index % 2 === 1 ? 'walkthrough-step-reverse' : ''}`}
              >
                <div className="step-phone">
                  <span className="step-number">Step {index + 1}</span>
                  <PhoneFrame screenshot={step.screenshot} title={step.title} />
                </div>
                <div className="step-content">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="how-cta">
          <div className="container how-cta-inner">
            <h2>Ready to try it in your shop?</h2>
            <p>Start your free 30-day trial — no credit card required.</p>
            <a href={TRIAL_URL} className="btn btn-primary btn-lg">
              Start Free Trial
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
