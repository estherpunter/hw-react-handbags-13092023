function Product({redLabel, nameOfBag, priceOfBag, imageSource, imageAlt}) {
    // console.log(props);
    return (
        <article>
            <span>{redLabel}</span>
            <img src={imageSource} alt={imageAlt}/>
            <p>{nameOfBag}</p>
            <h4>{priceOfBag}</h4>
        </article>
    )
}

export default Product;