import React from 'react';
import SectionHeading from './SectionHeading';
import { MapPin, Clock, DollarSign, Smartphone, ShieldCheck, Sparkles } from 'lucide-react';

const reasons = [
  { icon: MapPin, title: "Local to BCS", desc: "We understand the market, businesses, and customers here." },
  { icon: DollarSign, title: "Affordable Packages", desc: "Professional websites without giant agency pricing." },
  { icon: Clock, title: "Fast Turnaround", desc: "We move quickly so you can start using your site sooner." },
  { icon: Smartphone, title: "Clean Mobile Design", desc: "Your site will look good where customers actually browse." },
  { icon: ShieldCheck, title: "Simple Maintenance", desc: "We can manage updates, hosting, and changes for you." },
  { icon: Sparkles, title: "Professional Look", desc: "Modern design that makes your business feel more trusted." },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading label="Why Choose Us" title="Built for Local Growth" description="We keep the process simple and focus on what actually helps your business look better online." />
        <div className="grid three">
          {reasons.map((item, i) => (
            <div className="card" key={i}>
              <div className="icon-box"><item.icon size={21} /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
