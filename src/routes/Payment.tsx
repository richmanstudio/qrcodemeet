import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StepLayout from '../components/StepLayout';
import PaymentForm from '../components/PaymentForm';
import SuccessCheck from '../components/SuccessCheck';
import { motion } from 'framer-motion';

const Payment: React.FC = () => {
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (paid) {
      const timer = setTimeout(() => navigate('/camera'), 1500);
      return () => clearTimeout(timer);
    }
  }, [paid, navigate]);

  return (
    <StepLayout step={3} totalSteps={5}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Шаг 3: Оплата подарка
        </h2>
        {paid ? (
          <SuccessCheck />
        ) : (
          <PaymentForm onSuccess={() => setPaid(true)} />
        )}
      </motion.div>
    </StepLayout>
  );
};

export default Payment;