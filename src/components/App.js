import{ Outlet } from 'react-router-dom';
import './App.css';
import Title from './Title/Title';
import CafeList from './CafeList/CafeList';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <CafeList />
      <Footer />
    </div>
  );
}

export default App;
