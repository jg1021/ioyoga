// src/components/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../App';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      alert('Signup failed: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Sign Up</h2>
      <input className="w-full p-2 border mb-2" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="w-full p-2 border mb-2" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>
    </form>
  );
};

export default Signup;