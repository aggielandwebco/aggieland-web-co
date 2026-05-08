import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Palette, Smartphone, Headphones } from 'lucide-react';

const points = [
  { icon: MapPin, title: "Local Business Focus", desc: "We know Bryan-College Station because we're part of the community." },
  { icon: DollarSign, title: "Affordable Packages", desc: "Transparent pricing designed for small business budgets." },
  { icon: Palette, title: "Modern Design", desc: "Clean, professional websites that stand out from the competition." },
  { icon: Smartphone, title: "Mobile Optimization", desc: "Every site looks great on phones, tablets, and desktops." },
  { icon: Headphones, title: "Ongoing Support", desc: "We're here when you need updates, changes, or help." },
];

export default function AboutSection() {
  return (
    <section id="about" className="section alt">
      <div className="container two-col">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="image-card"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="eyebrow">About Us</span>
          <h2>Your Local Web Design Partner in Aggieland</h2>
          <p className="lead">Aggieland Web Co. helps local businesses in Bryan and College Station get modern, professional websites — without the stress, the confusing tech talk, or the agency-level price tag.</p>
          <div className="about-list">
            {points.map((point, i) => (
              <div className="about-item" key={i}>
                <div className="icon-box"><point.icon size={20} /></div>
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
