import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <SectionHeading label="Contact Us" title="Request a Free Website Mockup" description="Tell us about your business and we'll create a custom mockup — no cost, no commitment." />
        <div className="contact-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="success">
                <CheckCircle size={46} />
                <h3>Thank You!</h3>
                <p>We'll be in touch within 24 hours to discuss your free mockup.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form">
                <div className="form-row">
                  <div>
                    <label>Name</label>
                    <input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div>
                  <label>Phone</label>
                  <input type="tel" placeholder="(979) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label>Tell Us About Your Business</label>
                  <textarea placeholder="What kind of business do you run? What do you need from a website?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button className="btn primary" type="submit">Request a Free Website Mockup <ArrowRight size={17} /></button>
              </form>
            )}
          </motion.div>

          <motion.div className="info-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="info-item">
              <div className="icon-box"><Phone size={20} /></div>
              <div><h4>Phone</h4><p>(832) 610-4528</p></div>
            </div>
            <div className="info-item">
              <div className="icon-box"><Mail size={20} /></div>
              <div><h4>Email</h4><p>contact@aggielandwebco.com</p></div>
            </div>
            <div className="info-item">
              <div className="icon-box"><MapPin size={20} /></div>
              <div><h4>Service Area</h4><p>Bryan, College Station, and surrounding areas in the Brazos Valley</p></div>
            </div>
            <div className="note">
              <h4>Free Mockup — No Risk</h4>
              <p>We'll design a preview of your website before you spend a dime. If you love it, we move forward. If not, no hard feelings.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
