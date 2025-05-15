import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/loginFormSlice';

const LoggedInView = () => {
  const { email } = useSelector((state) => state.loginForm);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // Получаем имя пользователя из email
  const username = email.split('@')[0];
  
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 animate-fadeIn">
      <div className="h-2 bg-green-500 rounded-full mb-6 -mt-8 mx-auto w-4/5"></div>
      
      <div className="flex flex-col items-center">
        <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
          {username.charAt(0).toUpperCase()}
        </div>
        
        <h2 className="text-2xl font-bold mb-1">Добро пожаловать!</h2>
        <p className="text-gray-300 mb-6">
          Вы вошли как <span className="font-semibold text-blue-400">{email}</span>
        </p>
        
        <button
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow-sm flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default LoggedInView;