import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepLayout from '../components/StepLayout';
import GiftsSlider from '../components/GiftsSlider';
import { motion } from 'framer-motion';

const Gifts: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    console.log('Выбран подарок:', id);
    navigate('/payment');
  };

  return (
    <StepLayout step={2} totalSteps={5}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Шаг 2: Выберите подарок
        </h2>
        <GiftsSlider onSelect={handleSelect} />
      </motion.div>
    </StepLayout>
  );
};

export default Gifts;