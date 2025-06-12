// src/components/GiftCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface GiftCardProps {
  title: string;
  price: string;
  onSelect: () => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ title, price, onSelect }) => (
  <motion.div
    className="flex-shrink-0 w-48 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 cursor-pointer"
    whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05 }}
    onClick={onSelect}
  >
    <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
    <p className="text-gray-700 mb-4">{price}</p>
    <button className="w-full px-3 py-2 bg-primary text-white rounded-xl">
      Подарить
    </button>
  </motion.div>
);

export default GiftCard;