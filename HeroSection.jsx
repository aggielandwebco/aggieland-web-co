import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="section-heading"
    >
      {label && <span className="eyebrow">{label}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
