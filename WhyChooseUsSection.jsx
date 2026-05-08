import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const plans = [
  {
    name: "Starter Website",
    setup: "$399",
    monthly: "$39",
    desc: "Best for simple one-page business websites.",
    features: ["Custom one-page design", "Mobile responsive", "Contact form", "Hosting included", "Domain setup assistance"],
    popular: false,
  },
  {
    name: "Growth Website",
    setup: "$799",
    monthly: "$79",
    desc: "Best for restaurants, shops, service businesses, and businesses that need more sections.",
    features: ["Multi-page website", "Mobile responsive", "Local SEO setup", "Google Maps integration", "Contact & review sections", "Menu or service pages", "Hosting & maintenance"],
    popular: true,
  },
  {
    name: "Premium Website",
    setup: "$1,500+",
    monthly: "$99+",
    desc: "Best for nightlife, events, visual brands, or businesses needing frequent updates.",
    features: ["Everything in Growth", "Advanced custom design", "Photo gallery", "Event listings", "Priority support", "Monthly content updates", "Performance optimization"],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionHeading label="Pricing" title="Clear, Honest Pricing" description="No hidden fees. No surprises. Pick the plan that fits your business." />
        <div className="grid three">
          {plans.map((plan, i) => (
            <motion.div className={`card price-card ${plan.popular ? 'popular' : ''}`} key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>{plan.name}</h3>
              <p className="desc">{plan.desc}</p>
              <div className="price">{plan.monthly}<span style={{fontSize: 15, fontWeight: 600}}>/month</span></div>
              <div className="setup">{plan.setup} setup fee</div>
              <ul className="features">
                {plan.features.map((f, j) => <li key={j}><Check size={17} /> {f}</li>)}
              </ul>
              <a className={`btn ${plan.popular ? 'outline' : 'primary'}`} href="#contact">Get Started <ArrowRight size={17} /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
