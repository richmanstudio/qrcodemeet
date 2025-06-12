import React from 'react';
import { GiftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import StepLayout from '../components/StepLayout';
import { motion } from 'framer-motion';

const Home: React.FC = () => (
  <StepLayout step={1} totalSteps={5}>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <GiftIcon className="h-20 w-20 text-primary mx-auto mb-6 drop-shadow-lg" />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Чтобы познакомиться
      </h1>
      <p className="text-gray-700 mb-8">
        Выберите подарок и нажмите кнопку ниже
      </p>
      <Link
        to="/gifts"
        className="block w-full py-4 bg-primary bg-opacity-90 hover:bg-opacity-100 text-white font-semibold rounded-2xl shadow-lg transition"
      >
        Выбрать подарок
      </Link>
    </motion.div>
  </StepLayout>
);

export default Home;