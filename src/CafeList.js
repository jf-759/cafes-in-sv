import data from './coffeeshops-data.json'
import CoffeeShop from './CoffeeShop';
import './CafeList.css';

function CafeList() {
    return (
        <div className="CafeList">
            <CoffeeShop
                name="Coffee Water Lab"
                Address="603 Saratoga Ave"
                image="coffee-water-lab.jpg"
            />
            <CoffeeShop
                name="Caffe Bene"
                Address="181 E Tasman Drive"
                image="caffe-bene.jpg"
            />
            <CoffeeShop
                name="Chromatic Coffee Co."
                Address="460 Lincoln Ave #10"
                image="chromatic-coffee-co.jpg"
            />
            <CoffeeShop
                name="Cloud9 Coffee"
                Address="1901 Embarcadero Rd. #103"
                image="cloud9-coffee.jpg"
            />
            <CoffeeShop
                name="Crema Coffee Roasting Company"
                Address="1202 The Alameda"
                image="crema-coffee-roasting-company.jpg"
            />
            <CoffeeShop
                name="Lacàphê"
                Address="740 Story Rd. #5"
                image="lacaphe.jpg"
            />
            <CoffeeShop
                name="Nirvana Soul Coffee"
                Address="315 S 1st St."
                image="nirvana-soul-coffee.jpg"
            />
            <CoffeeShop
                name="Voltaire Coffee Roasters"
                Address="360 S Market St. #80"
                image="voltaire-coffee-roasters.jpg"
            />
            <CoffeeShop
                name="Voyager Craft Coffee"
                Address="2221 The Alameda"
                image="voyager-craft-coffee.jpg"
            />
            <CoffeeShop
                name="Wilderness Cafe"
                Address="3224 Stevens Creek Blvd Suite 1"
                image="wilderness-cafe.jpeg"
            />
            <CoffeeShop
                name="Covour Coffee"
                Address="2706 Middlefield Rd."
                image="covour-coffee.jpg"
            />
            <CoffeeShop
                name="1 Oz Coffee"
                Address="549 Benton St."
                image="one-oz-coffee.jpg"
            />
        </div>
    )
}

export default CafeList