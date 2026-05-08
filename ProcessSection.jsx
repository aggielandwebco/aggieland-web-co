import React from 'react';
import SectionHeading from './SectionHeading';
import { Store, Utensils, Scissors, Shirt, Music, Donut, Sparkles, Wrench, ShoppingBag } from 'lucide-react';

const types = [
  { icon: Utensils, title: "Restaurants" },
  { icon: Scissors, title: "Barbershops & Salons" },
  { icon: Shirt, title: "Dry Cleaners" },
  { icon: Sparkles, title: "Beauty Stores" },
  { icon: Music, title: "Nightclubs & Venues" },
  { icon: Donut, title: "Donut Shops" },
  { icon: ShoppingBag, title: "Local Retail" },
  { icon: Wrench, title: "Service Businesses" },
  { icon: Store, title: "Small Businesses" },
];

export default function WhoWeHelpSection() {
  return (
    <section className="section alt">
      <div className="container">
        <SectionHeading label="Who We Help" title="Built for Local Business Owners" description="We create websites for the businesses that make Bryan-College Station feel like home." />
        <div className="grid three">
          {types.map((item, i) => (
            <div className="card" key={i}>
              <div className="icon-box"><item.icon size={21} /></div>
              <h3>{item.title}</h3>
              <p>Clean, modern website design customized to your business and customers.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
