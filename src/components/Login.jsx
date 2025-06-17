// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../fbase';
//import { auth } from '../App';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await signInWithEmailAndPassword(authService, email, password);
      console.log(data);
      navigate('/');
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h2 className="text-xl font-bold m-8">A P R O  Y O G A</h2>
      <input className="w-full p-2 border mb-2" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="w-full p-2 border mb-2" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
  );
};

export default Login;