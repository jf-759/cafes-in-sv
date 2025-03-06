function CoffeeShop(props) {
    const { name, image, address, hours } = props
    return (
        <div className="CoffeeShop">
            <h1>{name}</h1>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
                width="300"
                height="300"
                alt="603 Saratoga Ave"
            />
            <div>{address}</div>
            <div>{hours}</div>
        </div>
    )
}

export default CoffeeShop