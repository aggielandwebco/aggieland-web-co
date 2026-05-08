import React from 'react';
import { ArrowRight, MapPin, Smartphone, Zap, Shield, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const badges = [
  { icon: MapPin, label: "Local BCS Web Design" },
  { icon: Smartphone, label: "Mobile-Friendly Sites" },
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Shield, label: "Hosting & Updates Available" },
  { icon: Building2, label: "Built for Small Businesses" },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="eyebrow">Bryan-College Station, Texas</span>
          <h1>Modern Websites for <span>Bryan‑College Station</span> Businesses</h1>
          <p>We build clean, mobile-friendly websites that help local businesses look professional, get found online, and turn visitors into customers.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Get a Free Website Mockup <ArrowRight size={18} /></a>
            <a className="btn outline" href="#pricing">View Pricing</a>
          </div>
          <div className="badges">
            {badges.map((badge, i) => (
              <div className="badge" key={i}>
                <badge.icon size={16} />
                {badge.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
