// src/components/GiftsSlider.tsx
import React from 'react';
import GiftCard from './GiftCard';

interface Gift {
  id: number;
  title: string;
  price: string;
}
const gifts: Gift[] = [
  { id: 1, title: 'Apple iPhone 16 Pro Max', price: '₽149 990' },
  { id: 2, title: 'Christian Louboutin Heels', price: '₽79 500' },
  { id: 3, title: 'Gucci GG Marmont Bag', price: '₽95 000' },
  { id: 4, title: 'Rolex Datejust 36', price: '₽420 000' },
  { id: 5, title: 'Bose QC Wireless Headphones', price: '₽25 000' },
];

interface GiftsSliderProps {
  onSelect: (id: number) => void;
}

const GiftsSlider: React.FC<GiftsSliderProps> = ({ onSelect }) => (
  <div className="overflow-x-auto flex space-x-4 py-4">
    {gifts.map((gift) => (
      <GiftCard
        key={gift.id}
        title={gift.title}
        price={gift.price}
        onSelect={() => onSelect(gift.id)}
      />
    ))}
  </div>
);

export default GiftsSlider;