import React from 'react';
import SectionHeading from './SectionHeading';

const steps = [
  { title: "We Build a Free Mockup", desc: "You get to see what your new website could look like before committing." },
  { title: "You Approve the Design", desc: "We make edits, polish the layout, and dial in the content." },
  { title: "We Launch Your Website", desc: "We handle the hosting, domain connection, and final launch." },
];

export default function ProcessSection() {
  return (
    <section className="section alt">
      <div className="container">
        <SectionHeading label="Our Process" title="Simple From Start to Launch" description="No confusing tech. No complicated process. Just a clean website built for your business." />
        <div className="grid three">
          {steps.map((step, i) => (
            <div className="card step" key={i}>
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
