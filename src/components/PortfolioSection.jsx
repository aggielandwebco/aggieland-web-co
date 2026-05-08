import React from 'react';
import SectionHeading from './SectionHeading';

const projects = [
  "Dry Cleaner Website",
  "Restaurant Website",
  "Beauty Supply Website",
  "Tailor Website",
  "Nightclub Website",
  "Donut Shop Website",
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section alt">
      <div className="container">
        <SectionHeading label="Portfolio" title="Example Website Concepts" description="Modern website styles designed for real local business categories." />
        <div className="grid three">
          {projects.map((project, i) => (
            <div className="card portfolio-card" key={i}>
              <div className={`mock-img alt${i}`}></div>
              <div className="body">
                <h3>{project}</h3>
                <p>Clean, mobile-friendly design built to make a local business look more professional.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
