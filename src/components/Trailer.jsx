// src/components/Trailer.jsx

import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../fbase';
/*
const Trailer = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const videoRef = ref(storage, '3327959-hd_1920_1080_24fps.mp4');
      console.log(videoRef);
      const url = await getDownloadURL(videoRef);
      setVideoUrl(url);
    };
    fetchVideo();
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Watch the Trailer</h2>
      {videoUrl ? (
        <video
          src={videoUrl}
          controls
          className="mx-auto rounded-xl shadow-lg max-w-full w-[90%] md:w-[700px]"
        />
      ) : (
        <p>Loading trailer...</p>
      )}
    </section>
  );
};*/
const Trailer = ({ isOpen, onClose }) => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const fetchVideo = async () => {
      const videoRef = ref(storage, '3327959-hd_1920_1080_24fps.mp4');
      const url = await getDownloadURL(videoRef);
      setVideoUrl(url);
    };
    fetchVideo();
  }, [isOpen]);

  if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={handleBackdropClick}>
      <div className="relative bg-black rounded-lg shadow-lg max-w-3xl w-full z-50">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-gray-300"
        >
          &times;
        </button>
        {videoUrl ? (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-auto rounded-b-lg"
          />
        ) : (
          <div className="text-white p-6">Loading trailer...</div>
        )}
      </div>
    </div>
  );
};

export default Trailer;
