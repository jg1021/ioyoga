/*
// src/components/Home.jsx
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../App';
import { signOut } from 'firebase/auth';

const Home = ({ user }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const snapshot = await getDocs(collection(db, 'videos'));
      const videosList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVideos(videosList);
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Yoga Video Library</h1>
      {user && (
        <button onClick={() => signOut(auth)} className="mb-4 text-blue-600">
          Logout
        </button>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map(video => (
          <div key={video.id} className="border p-4 rounded shadow">
            <img src={video.thumbnailUrl} alt={video.title} className="mb-2" />
            <h2 className="font-semibold text-lg">{video.title}</h2>
            <p className="text-sm text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
/*
    <div>
      <h1 className="text-3xl font-bold mb-4">Yoga Video Library</h1>
      {user && (
        <button onClick={() => signOut(auth)} className="mb-4 text-blue-600">
          Logout
        </button>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map(video => (
          <div key={video.id} className="border p-4 rounded shadow">
            <img src={video.thumbnailUrl} alt={video.title} className="mb-2" />
            <h2 className="font-semibold text-lg">{video.title}</h2>
            <p className="text-sm text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
*/
// src/components/Home.jsx
// src/components/Home.jsx

import Trailer from "./Trailer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <>
      <section className="text-center py-10 px-6 bg-[url('./assets/main1.jpg')] bg-cover bg-center text-white">
        <div className="p-2 rounded max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Online Yoga for Body, Mind & Heart</h1>
          <p className="text-xl mb-1">Practice yoga with world-class teachers anywhere, anytime. Stream hundreds of yoga and meditation classes designed to strengthen your body and calm your mind.</p>
          <section className="min-h-[40vh] bg-cover bg-center flex items-center justify-center text-center px-4"
            style={{ backgroundImage: "url('/your-background.jpg')" }}
          >
          <div className="bg-white bg-opacity-90 p-2 rounded-xl shadow-xl max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Experience Transformative Yoga</h1>
            <p className="mb-6 text-gray-700 text-lg">Watch our introduction to see what awaits inside.</p>
            <button
              onClick={() => setShowTrailer(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full text-lg shadow-md transition"
            >
              Watch Trailer
            </button>
          </div>
          <Trailer isOpen={showTrailer} onClose={() => setShowTrailer(false)} />
        </section>
          <Link to="/pricing" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded shadow">Try for free</Link>
        </div>
      </section>
    </>
  );
};

export default Home;