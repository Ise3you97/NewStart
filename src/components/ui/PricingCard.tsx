import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({ name, price, features, highlighted }: PricingCardProps) {
  return (
    <div className={`rounded-2xl p-8 ${
      highlighted 
        ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-2' 
        : 'bg-white text-gray-900'
    }`}>
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-4 text-4xl font-extrabold">
        ${price}
        <span className={`text-lg font-normal ${highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
          /month
        </span>
      </p>
      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className={`h-5 w-5 ${highlighted ? 'text-blue-200' : 'text-blue-600'} mr-3`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-8 w-full rounded-lg px-4 py-2 font-medium transition-colors ${
          highlighted
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Get started
      </button>
    </div>
  );
}