import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Globe, Smartphone, Search, MapPin, Star, Mail, FileText, Server, RefreshCw, Link2 } from 'lucide-react';

const services = [
  { icon: Globe, title: "Website Design", desc: "Custom-designed websites that reflect your brand and convert visitors." },
  { icon: Smartphone, title: "Mobile Optimization", desc: "Every site is built to look great on phones, tablets, and desktops." },
  { icon: Search, title: "Local SEO Setup", desc: "Get found on Google when locals search for businesses like yours." },
  { icon: MapPin, title: "Google Maps Integration", desc: "Help customers find your location with built-in map and directions." },
  { icon: Star, title: "Review Sections", desc: "Showcase your best reviews and build trust with new customers." },
  { icon: Mail, title: "Contact Forms", desc: "Make it easy for customers to reach you directly from your site." },
  { icon: FileText, title: "Menu or Service Pages", desc: "Display your offerings clearly with organized, easy-to-read pages." },
  { icon: Server, title: "Hosting & Maintenance", desc: "Reliable hosting and proactive maintenance so your site stays online." },
  { icon: RefreshCw, title: "Website Updates", desc: "Need a change? We handle text, image, and content updates for you." },
  { icon: Link2, title: "Domain Setup", desc: "We'll help you claim and configure the perfect domain name." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading label="What We Do" title="Everything You Need to Go Online" description="From design to launch to ongoing support — we handle it all so you don't have to." />
        <div className="grid three">
          {services.map((service, i) => (
            <motion.div className="card" key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.035 }}>
              <div className="icon-box"><service.icon size={21} /></div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
