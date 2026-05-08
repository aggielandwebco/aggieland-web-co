import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <div className="logo">AW</div>
              <span>Aggieland Web Co.</span>
            </div>
            <p>Modern websites for local businesses in Bryan-College Station, Texas.</p>
            <div className="socials">
              {socials.map((social, i) => (
                <a key={i} href={social.href} aria-label="Social link">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>(832) 610-4528</li>
              <li>contact@aggielandwebco.com</li>
              <li>Bryan, College Station & surrounding areas</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aggieland Web Co. All rights reserved.</span>
          <span>Web Design College Station TX · Web Design Bryan TX</span>
        </div>
      </div>
    </footer>
  );
}
