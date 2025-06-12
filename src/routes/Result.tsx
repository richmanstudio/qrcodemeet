import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import StepLayout from '../components/StepLayout';
import { motion } from 'framer-motion';

const Result: React.FC = () => (
  <StepLayout step={5} totalSteps={5}>
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <XMarkIcon className="h-20 w-20 text-red-400 mx-auto mb-4 animate-bounce" />
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Увы, отказано
      </h2>
      <p className="text-gray-700 mb-8">
        Попробуйте выбрать другой подарок или зайти позже.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-2xl shadow-lg hover:bg-primaryHover transition"
      >
        Начать заново
      </Link>
    </motion.div>
  </StepLayout>
);

export default Result;