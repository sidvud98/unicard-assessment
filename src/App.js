import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resActions } from './store/resolution';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      dispatch(resActions.distinguishDevice(width));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <HomePage />
  );
}

export default App;
