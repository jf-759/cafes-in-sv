import { Link } from 'react-router-dom';
import './CoffeeShop.css';

function CoffeeShop(props) {
    const { name, image, address, hours, id } = props
    return (
        <div className="CoffeeShop">
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
            width="300" 
            height="300" 
            alt={name} />
            <h1>
                <Link 
                    className="CoffeeShop-title"
                    to={`/details/${id}`}>
                    {name}
                </Link>
            </h1>
            <div className="CoffeeShop-info">
                <div>{address}</div>
                <div>{hours}</div>
            </div>
        </div>
    )
}

export default CoffeeShop;