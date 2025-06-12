import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepLayout from '../components/StepLayout';
import CameraCapture from '../components/CameraCapture';
import { motion } from 'framer-motion';

const Camera: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <StepLayout step={4} totalSteps={5}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Шаг 4: Сделайте фото
        </h2>

        {!image ? (
          <CameraCapture onCapture={setImage} />
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image}
              alt="Preview"
              className="rounded-2xl mb-6 shadow-lg"
            />
            <button
              onClick={() => navigate('/result')}
              className="w-full py-3 bg-primary text-white font-semibold rounded-2xl shadow-lg hover:bg-primaryHover transition"
            >
              Отправить
            </button>
          </motion.div>
        )}
      </motion.div>
    </StepLayout>
  );
};

export default Camera;