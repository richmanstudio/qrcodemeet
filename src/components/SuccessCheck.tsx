// src/components/SuccessCheck.tsx
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const SuccessCheck: React.FC = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1.2 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="text-center"
  >
    <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-4" />
    <p className="text-green-600 font-semibold">Покупка успешна</p>
  </motion.div>
);

export default SuccessCheck;