import { NavLink } from 'react-router-dom';
import './Title.css';
import RandomCoffeeShop from '../RandomCoffeeShop/RandomCoffeeShop';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1 className="CoffeeShop-h1">Coffee Shops</h1>
        <div className="Title-Subtitle">in Silicon Valley</div>

        <div>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/">List</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about">About</NavLink>
        <RandomCoffeeShop />
        </div>

      </header>
    </div>
  )
}

export default Title;