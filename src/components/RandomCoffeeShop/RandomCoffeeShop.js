import { useNavigate } from 'react-router-dom';
import data from '../../coffeeshops-data.json';
import './RandomCoffeeShop.css';

function RandomCoffeeShop() {
  const navigate = useNavigate()
  return (
    <button 
      className="RandomCoffeeShop"
      onClick={(e) => {
        const id = Math.floor(Math.random() * data.length)
        navigate(`/details/${id}`)
      }}
    >Random Coffee Shop</button>
  )
}

export default RandomCoffeeShop;