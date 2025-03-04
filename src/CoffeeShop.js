function CoffeeShop(props) {
    const { name, image, address } = props
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
                width="300"
                height="300"
                alt="603 Saratoga Ave"
            />
            <h1>{name}</h1>
            <div>{address}</div>
        </div>
    )
}

export default CoffeeShop