import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import LoggedInView from './components/LoggedInView';

function App() {
  const { isLoggedIn } = useSelector((state) => state.loginForm);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="w-full py-4 px-6 bg-gray-800 text-white shadow-md">
        <div className="container mx-auto">
        </div>
      </header>
      
      <main className="flex-grow w-full flex items-center justify-center py-8 px-4 bg-gray-900 text-white">
        <div className="w-full max-w-md">
          {isLoggedIn ? <LoggedInView /> : <LoginForm />}
        </div>
      </main>
    </div>
  );
}

export default App;
