// src/components/CameraCapture.tsx
import React, { useEffect, useRef } from 'react';
import { CameraIcon } from '@heroicons/react/24/outline';

interface CameraCaptureProps {
  onCapture: (image: string) => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch(console.error);
  }, []);

  const handleShot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx?.drawImage(video, 0, 0);
      const dataUrl = canvas.toDataURL('image/png');
      onCapture(dataUrl);
    }
  };

  return (
    <>
      <video ref={videoRef} autoPlay className="rounded-2xl w-full mb-4" />
      <button
        onClick={handleShot}
        className="mx-auto block p-4 bg-primary rounded-full"
      >
        <CameraIcon className="h-8 w-8 text-white" />
      </button>
      <canvas ref={canvasRef} className="hidden" />
    </>
  );
};

export default CameraCapture;