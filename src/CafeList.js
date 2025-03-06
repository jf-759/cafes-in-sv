import data from './coffeeshops-data.json'
import CoffeeShop from './CoffeeShop';
import './CafeList.css';

function CafeList() {
    const spaces = data.map(({ title, address, images, hours }) => {

        return (
            <CoffeeShop
                key={title}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    })

    return (
        <div className="CafeList">
            { spaces }
        </div>
    )
}

export default CafeList