import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/loginFormSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateEmail(email)) {
      dispatch(login(email));
    } else {
      setError('Пожалуйста, введите корректный email');
    }
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 animate-fadeIn">
      <div className="h-2 bg-blue-500 rounded-full mb-6 -mt-8 mx-auto w-4/5"></div>
      
      <h2 className="text-2xl font-bold mb-2 text-center">Вход в систему</h2>
      <p className="text-gray-300 mb-6 text-center">
        Пожалуйста, введите ваш email
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-gray-500" 
                viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-600 
                       bg-gray-700 text-white placeholder-gray-400
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-400">
              {error}
            </p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={!email}
          className={`w-full py-3 px-4 rounded-md shadow-sm text-white font-medium 
            ${!email 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'}`
          }
        >
          {!email ? 'Введите email' : 'Войти'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;