import React from 'react';
import data from '../../coffeeshops-data.json';
import CoffeeShop from '../CoffeeShop/CoffeeShop';
import './CafeList.css';
import { useState } from 'react';

function CafeList() {
    const [query, setQuery] = useState('');
    const spaces = data.filter((obj) => {
        const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
        const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
        return inTitle || inAddress
    }).map ((obj) => {
        const { id, title, address, images, hours, features } = obj
        return (
            <CoffeeShop
                id={id}
                key={`${title}-${id}`}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
                features={features}
            />
        )
    });

    return (
        <div className="CafeList-container">
            <div className="CafeList-search">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        value={query}
                        placeholder="search"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="CafeList">
                {spaces}
            </div>
        </div>
    )
}

export default CafeList;